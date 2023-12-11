import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { infoClass } from '../pages/student-classes-page/student-classes-page.component';
import { Student } from '../interfaces/student';
import { name } from '../components/student-personal-info/student-personal-info.component';
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
    return lastValueFrom(
      this.http.get<any[]>(`${this.baseUrlDataStudents}${idStudents}`)
    );
  }

  getNameStudents(idUsers: number): Promise<name[]> {
    return lastValueFrom(
      this.http.get<name[]>(`${this.baseUrl}getName/${idUsers}`)
    );
  }
  getStudetnsDescriptions(idUsers: number): Promise<Student[]> {
    return lastValueFrom(
      this.http.get<Student[]>(`${this.baseUrl}studentDescription/${idUsers}`)
    );
  }
}
