import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { differenceInYears, parseISO } from 'date-fns';
import { TeacherCard } from 'src/app/interfaces/teacher-card.interface';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-tutor-info-page',
  templateUrl: './tutor-info-page.component.html',
  styleUrls: ['./tutor-info-page.component.css']
})
export class TutorInfoPageComponent {

  router = inject(Router);
  activateRoute = inject(ActivatedRoute);
  teachersService = inject(TeachersService);
  detailedTeacher: TeacherCard | any;
  age: number | null = null;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async (params: any) => {
      let id = params.idTutor
      try {
        const response = await this.teachersService.getTeacherInfoById(id)
        if (response === undefined) {
          alert('Este profesor no existe')
          this.router.navigate(['/home'])
        }
        else {
          this.detailedTeacher = response
        }
      } catch (error) {
        console.log(error)
      }
    })
  }
}

