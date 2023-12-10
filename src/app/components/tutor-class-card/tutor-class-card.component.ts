import { Component, inject } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';
import { jwtDecode } from 'jwt-decode';
import { Token } from 'src/app/interfaces/token';
import { ListOfTeachers } from 'src/app/interfaces/teacher-card.interface';
import { Router } from '@angular/router';

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

  async ngOnInit() {
    if (this.token) {
      this.decode = jwtDecode(this.token);
      this.students = await this.teacherServices.getListOfTeachers(
        this.decode.user_id
      );
    } else {
      this.message = 'No tienes alumnos';
    }
  }

  getStudents() {
    return this.students;
  }
}
