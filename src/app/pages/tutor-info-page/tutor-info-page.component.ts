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
    const token = localStorage.getItem('token');
    const decode: itemToken = jwtDecode(token!);
    let id: number = decode.user_id;
    try {
      const response = await this.teachersService.getTeacherInfoById(id);
      if (response === undefined) {
        alert('Este profesor no existe');
        this.router.navigate(['/home']);
      } else {
        this.detailedTeacher = response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
