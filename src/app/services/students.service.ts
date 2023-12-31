import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { infoClass } from '../pages/student-classes-page/student-classes-page.component';
import { Student } from '../interfaces/student';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private http = inject(HttpClient);

  private baseUrl: string = 'http://localhost:3000/api/students/';
  private baseUrlDataStudents: string = 'http://localhost:3000/api/users/';
  constructor() {}

  //Obtiene información del las clases que recibe el alumno
  getInfoClass(): Promise<infoClass[]> {
    return lastValueFrom(
      this.http.get<infoClass[]>(`${this.baseUrl}subjectStudents`)
    );
  }
  getDataStudentsCards(idStudents: number) {
    //TODO:implementar la interfaz
    return lastValueFrom(
      this.http.get<any[]>(`${this.baseUrlDataStudents}${idStudents}`)
    );
  }

  getStudetnsDescriptions(idUsers: number): Promise<Student[]> {
    return lastValueFrom(
      this.http.get<Student[]>(`${this.baseUrl}studentDescription/${idUsers}`)
    );
  }
}
