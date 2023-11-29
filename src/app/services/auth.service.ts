import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Auth, Provinces } from '../interfaces/auth';

type formRegister = {
  nombre: string;
  apellidos: string;
  fechaNacimiento: Date;
  ciudad: string;
  telefono: string;
  email: string;
  password: string;
  rol: string;
};
type loginForm = {
  email: string;
  password: string;
};
export type LoginFormResponse = {
  succes: boolean;
  token: string;
  fatal: string;
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3100/api/users/';
  private httpClient = inject(HttpClient);

  constructor() {}

  registerUser(formRegisterValue: formRegister) {
    return lastValueFrom(
      this.httpClient.post(`${this.baseUrl}register`, formRegisterValue)
    );
  }

  getAllProvinces(): Promise<Provinces[]> {
    return lastValueFrom(
      this.httpClient.get<Provinces[]>(`${this.baseUrl}province`)
    );
  }
  loginUser(formLoginValue: loginForm): Promise<LoginFormResponse> {
    return lastValueFrom(
      this.httpClient.post<LoginFormResponse>(
        `${this.baseUrl}login`,
        formLoginValue
      )
    );
  }
}
