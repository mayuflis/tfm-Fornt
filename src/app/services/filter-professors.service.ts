import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { Provinces } from '../interfaces/auth';
import { Subjects } from '../interfaces/WebPublic';
//TODO:pasarlo a interfaz Subjects

type FormValueFilter = {
  selectedSubject: number;
  selectedProvince: number;
  selectedPrice: number;
  selectedExperience: number;
  minRating: number;
};
@Injectable({
  providedIn: 'root',
})
export class FilterProfessorsService {
  private httpClient = inject(HttpClient);
  private baseUrl: string = 'http://localhost:3000/api/webPublic/';
  private baseUrlProvince: string = 'http://localhost:3000/api/users/province';
  constructor() {}

  getAllSubjects(): Promise<Subjects[]> {
    return lastValueFrom(
      this.httpClient.get<Subjects[]>(`${this.baseUrl}subjects`)
    );
  }
  getFilterTeachers(FormValue: FormValueFilter): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}filter`, FormValue)
    );
  }

  getAllProvinces(): Promise<Provinces[]> {
    return lastValueFrom(
      this.httpClient.get<Provinces[]>(this.baseUrlProvince)
    );
  }
}
