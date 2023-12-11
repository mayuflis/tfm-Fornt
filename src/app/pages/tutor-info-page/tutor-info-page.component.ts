import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { differenceInYears, parseISO } from 'date-fns';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';
import { TeachersService } from 'src/app/services/teachers.service';
import { jwtDecode } from 'jwt-decode';

type itemToken = {
  user_id: number;
  user_role: string;
  exp: number;
  iat: number;
};

@Component({
  selector: 'app-tutor-info-page',
  templateUrl: './tutor-info-page.component.html',
  styleUrls: ['./tutor-info-page.component.css'],
})
export class TutorInfoPageComponent {
  router = inject(Router);
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  detailedTeacher: TeacherCard | any;
  age: number | null = null;

  async ngOnInit() {
    this.activateRoute.params.subscribe(async (params: any) => {
      const token = localStorage.getItem('token');
      const decode: itemToken = jwtDecode(token!);
      const idSesion: number = decode.user_id;

      if (params.idTutor) {
        //Vista detalle de cada tutor desde la lista, apretando el boton contactar
        const idTutor = params.idTutor;

        try {
          const response: TeacherCard[] =
            await this.teachersService.getTeacherInfoById(idTutor);
          if (response === undefined || response.length === 0) {
            this.router.navigate(['/error']);
          }
          this.detailedTeacher = response;
          const birthday = parseISO(this.detailedTeacher[0].birthday);
          this.age = differenceInYears(new Date(), birthday);
          this.detailedTeacher[0].age = this.age;
        } catch (error) {
          console.log(error);
        }
      } else {
        // Estás en la vista de información del tutor desde el panel
        try {
          const response = await this.teachersService.getTeacherInfoById(
            idSesion
          );
          if (response === undefined) {
            alert('Este profesor no existe');
            this.router.navigate(['/home']);
          } else {
            this.detailedTeacher = response;
            console.log(this.detailedTeacher);
            const birthday = parseISO(this.detailedTeacher[0].birthday);
            this.age = differenceInYears(new Date(), birthday);
            this.detailedTeacher[0].age = this.age;
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
}
