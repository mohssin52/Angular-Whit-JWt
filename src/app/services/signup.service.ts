import { environment } from './../../environments/environment';

import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private http: HttpClient;

  //khdemt bl HttpBackend bach maychdnich l interceptor ygoliya 3tini token...
  constructor(private httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
  }



  newAccount(data: Users): Observable<any>{
    return this.http.post(`${environment.apiUrl}/users`, data);
  }
}
