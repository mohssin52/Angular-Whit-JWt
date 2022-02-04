import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { TokenService } from './token.service';
import {Observable} from 'rxjs';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private token: TokenService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//permet d'envoyeer le token au niveau du header
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token.getToken()}`
      }
    });

    return next.handle(request);
  }
}
