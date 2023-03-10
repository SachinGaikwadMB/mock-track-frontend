import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  

  constructor(private http : HttpClient) { }

  public registerUser(userModel:any) {
    return this.http.post(this.baseUrl + 'users', userModel);
  }

}
