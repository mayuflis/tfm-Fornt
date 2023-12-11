import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export type UserProfile = {
  id?: number;
  name?: string;
  last_name?: "Smith";
  birthday?: Date;
  image?: string;
  name_province?: string;
  mobile?: number;
  gender?: string;
}

export type AboutMe = {
  idusers: number,
  name?: string,
  description_prof: string,
  title_prof: string,
  description_class: string
}

export type AboutMeStudent = {
  idusers: number, 
  aboutMe: string,
  myInterests: string
}

@Injectable({
  providedIn: 'root'
})
  
export class UsersService {
  private httpClient = inject(HttpClient)
  private baseUrl: string = 'http://localhost:3000/api/users'
  constructor() {
  }

  getProfileInfo(id: number): Promise<UserProfile> {
    return lastValueFrom(this.httpClient.get<UserProfile>(`${this.baseUrl}/profile/${id}`))
  }

  updateInfo(formValue: UserProfile, id: number): Promise<UserProfile> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/profile/${id}`, formValue))
  }

  getAboutMeInfo(id: number): Promise<AboutMe> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/profile/tutor/aboutme/${id}`))
  }

  updateAboutMe(formValue: AboutMe, id: number): Promise<AboutMe> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/profile/tutor/aboutme/${id}`, formValue))
  }

  getAboutMeInfoStudent(id: number): Promise<AboutMeStudent> {
    return lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/profile/student/aboutme/${id}`))
  }

  updateAboutMeStudent(formValue: AboutMeStudent, id: number): Promise<AboutMeStudent> {
    return lastValueFrom(this.httpClient.put<any>(`${this.baseUrl}/profile/student/aboutme/${id}`, formValue))
  }
}
