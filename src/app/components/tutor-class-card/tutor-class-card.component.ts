import { Component, inject } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';
import { jwtDecode } from 'jwt-decode';
import { Token } from 'src/app/interfaces/token';
import { ListOfTeachers } from 'src/app/interfaces/teacher-card.interface';
import * as dayjs from 'dayjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutor-class-card',
  templateUrl: './tutor-class-card.component.html',
  styleUrls: ['./tutor-class-card.component.css'],
})
export class TutorClassCardComponent {
  private teacherServices = inject(TeachersService);
  private token: string = localStorage.getItem('token')!;
  private decode!: Token;
  private students!: ListOfTeachers[];
  private message!: string;
  private activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id: number = params.idStudent;
      if (id) {
        this.students = await this.teacherServices.getListOfTeachers(id);
      } else {
        this.decode = jwtDecode(this.token);
        this.students = await this.teacherServices.getListOfTeachers(
          this.decode.user_id
        );
      }
    });
  }

  getStudents() {
    return this.students;
  }
}
