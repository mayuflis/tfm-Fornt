import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { infoClass } from '../pages/student-classes-page/student-classes-page.component';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private http = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/api/students/';
  constructor() {}

  //Obtiene información del las clases que recibe el alumno
  getInfoClass(): Promise<infoClass[]> {
    return lastValueFrom(
      this.http.get<infoClass[]>(`${this.baseUrl}subjectStudents`)
    );
  }
}
