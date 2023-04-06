import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private authService : AuthService) {}

  public getAllQuizes(): Observable<any> {
    // let token = localStorage.getItem('token');

    let token = null;

   token =  this.authService.getJwtToken();
   console.log(token  , ':::', 'Token quiz service ');
   

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseUrl + '/quizes', { headers: headers });
  }
}
