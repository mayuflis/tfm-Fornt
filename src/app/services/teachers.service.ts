import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Subjects } from '../interfaces/WebPublic';

@Injectable({
  providedIn: 'root',
})
export class TeachersTsService {
  private httClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3100/api/teachers/menu/';
  constructor() {}

  //Obtiene la cantidad de alumnos por asignatura
  getAmountStudents(idSubject: number): Promise<Subjects> {
    return lastValueFrom(
      this.httClient.get<Subjects>(`${this.baseUrl}countStudents/${idSubject}`)
    );
  }
  //Obtiene las asignatura que imparte
  getSubjects(): Promise<Subjects[]> {
    return lastValueFrom(
      this.httClient.get<Subjects[]>(`${this.baseUrl}subjects`)
    );
  }
}
