import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { TeacherCard } from '../interfaces/teacher-card.interface';
import { Subjects } from '../interfaces/WebPublic';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3100/api/teachers';

  constructor() { }

  //Gets the necessary info for Teachers Card and Map Component  
  getTeachersInfo(): Promise<TeacherCard[]> {
    return lastValueFrom(
      this.httpClient.get<TeacherCard[]>(`${this.baseUrl}/teacherinfo`)
    )
  }

  //Gets the necessary info by teacherId for DetailsPage
  getTeacherInfoById(id: number): Promise<TeacherCard> {
    return lastValueFrom(
      this.httpClient.get<TeacherCard>(`${this.baseUrl}/teacherinfo/${id}`)
    )
  }
  //Obtiene la cantidad de alumnos por asignatura
  getAmountStudents(idSubject: number): Promise<Subjects> {
    return lastValueFrom(
      this.httpClient.get<Subjects>(`${this.baseUrl}/menu/countStudents/${idSubject}`)
    );
  }
  //Obtiene las asignatura que imparte
  getSubjects(): Promise<Subjects[]> {
    return lastValueFrom(
      this.httpClient.get<Subjects[]>(`${this.baseUrl}/subjects`)
    );
  }
}