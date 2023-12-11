import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { MyTutors } from '../interfaces/teacher-card.interface';
export type itemToken = {
  user_id: number;
  user_role: string;
  exp: number;
  iat: number;
};
export type subject = {
  name: string;
  level: string;
  hourly_rate: number;
  free_class: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class SubjectspricesService {
  private baseUrl: string = 'http://localhost:3000/api/subjects/';
  private baseUrlMyTutor: string = 'http://localhost:3000/api/users/';

  private httpClient = inject(HttpClient);
  private token = localStorage.getItem('token');
  private decode: itemToken = jwtDecode(this.token!);
  constructor() {}

  getPricesSubjects(tutorId: number): Promise<subject[]> {
    return lastValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${tutorId}/subjects`)
    );
  }

  getMyTutorsInfo(): Promise<MyTutors[]> {
    return lastValueFrom(
      this.httpClient.get<MyTutors[]>(
        `${this.baseUrlMyTutor}${this.decode.user_id}/teacher-info`
      )
    );
  }

  getAllSubjects(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}`))
  }
}
