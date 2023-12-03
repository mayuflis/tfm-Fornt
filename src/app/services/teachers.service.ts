import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TeacherCard } from '../interfaces/teacher-card.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private baseUrl: string = 'http://localhost:3000/api/teachers'
  private httpClient = inject(HttpClient)

  constructor() { }

  //Gets the necessary info for Teachers Card and Detail Page  
  getTeachersInfo(): Promise<TeacherCard[]> {
    return lastValueFrom(
      this.httpClient.get<TeacherCard[]>(`${this.baseUrl}/teacherInfo`)
    )
  }
}
