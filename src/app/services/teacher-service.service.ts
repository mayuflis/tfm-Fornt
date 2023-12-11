import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:4200/admin';

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  updateTeacherStatus(teacherId: number, validate: boolean): Observable<any> {
    const url = `${this.apiUrl}/profesores/${teacherId}`;
    return this.http.patch(url, { validate });
  }

}
