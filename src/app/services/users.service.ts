import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export type UserProfile ={
  name: string;
  last_name: "Smith";
  birthday: Date;
  image: string;
  name_province: string;
  mobile: number;
  gender: string;
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
    return lastValueFrom(this.httpClient.get<UserProfile>(`${this.baseUrl}/myprofile/${id}`))
  }
}
