import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public registerUser(userModel: any) {
    return this.http.post(this.baseUrl + '/auth/register', userModel);
  }

  public login(loginModel: any) {
    return this.http.post(this.baseUrl + '/auth/login', loginModel);
  }

  public logout() {
    localStorage.clear();
  }

  public getJwtToken() {
    const token = localStorage.getItem('token');
    if (token !== undefined && token !== null) {
      return token;
    }
    return null;
  }
}
