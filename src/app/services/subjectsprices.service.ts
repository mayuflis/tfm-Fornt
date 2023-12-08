import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
export type itemToken = {
  user_id: number;
  user_role: string;
  exp: number;
  iat: number;
};
type subject = {
  name: string;
  hourly_rate: number;
  level: string;
};
type MyTutors = {
  user_name: string;
  last_name: string;
  email: string;
  mobile: string;
  subject_name: string;
};
@Injectable({
  providedIn: 'root',
})
export class SubjectspricesService {
  private baseUrl: string = 'http://localhost:3000/api/subjects/';
  private baseUrlMyTutor: string = 'http://localhost:3000/api/users/';

  private httpClient = inject(HttpClient)
    private token = localStorage.getItem('token');
  private decode: itemToken = jwtDecode(this.token!);
  constructor() { }

  getPricesSubjects(tutorId: number): Promise<subject[]> {
    return lastValueFrom(
      this.httpClient.get<subject[]>(
        `${this.baseUrl}/${tutorId}/subjects`
      )
    );
  }
  
  getMyTutorsInfo(): Promise<MyTutors[]> {
    return lastValueFrom(
      this.httpClient.get<MyTutors[]>(
        `${this.baseUrlMyTutor}${this.decode.user_id}/teacher-info`
      )
    );
  }
}
