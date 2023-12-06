import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../interfaces/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:4200/admin/asignaturas';

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl);
  }

  deleteSubject(subjectId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${subjectId}`);
  }

  addSubject(newSubject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.apiUrl, newSubject);
  }

  
}
