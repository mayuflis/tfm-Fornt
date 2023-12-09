import { Component, inject } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

export type infoClass = {
  idusers: number;
  teachers_id_teachers: number;
  subject_name: string;
  level: string;
  teacher_name: string;
  last_name: string;
  email: string;
};

@Component({
  selector: 'app-student-classes-page',
  templateUrl: './student-classes-page.component.html',
  styleUrls: ['./student-classes-page.component.css'],
})
export class StudentClassesPageComponent {}
