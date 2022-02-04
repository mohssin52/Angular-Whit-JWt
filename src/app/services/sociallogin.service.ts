import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  loginWithGoogle(token:any): Observable<any>{
    // @ts-ignore
    return this.http.post<any>(`${this.baseUrl}/users`, {token})
    ;
  }
}
