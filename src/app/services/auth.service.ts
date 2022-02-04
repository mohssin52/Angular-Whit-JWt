import { Users } from './../model/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  apiUrl = "http://localhost:8080/users";
  constructor( private http:HttpClient) {


   }



  login(auth: {email: string, password: string}) {
    return this.http.post(`${this.apiUrl}/login`, auth);
  }

  registre(data:Users){
    return this.http.post(`${this.apiUrl}`, data);
  }
 }
