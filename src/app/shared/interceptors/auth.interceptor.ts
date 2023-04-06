import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
  
    const token = this.authService.getJwtToken();

    if (!token) {
      return next.handle(request);
    }
    const req1 = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }
} 
