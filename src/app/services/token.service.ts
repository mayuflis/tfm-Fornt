import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Token } from '../interfaces/token';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token = localStorage.getItem('token');
  private decode!: Token;
  constructor() {}

  getToken(): any {
    if (this.token !== null) {
      this.decode = jwtDecode(this.token);
      return this.decode;
    }
  }
}
