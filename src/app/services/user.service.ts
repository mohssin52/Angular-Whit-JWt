import { Users } from './../model/users';
import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';
import { Observable, throwError } from 'rxjs';
import { changepass } from '../model/changepass';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpC: HttpClient;
  userId = "";

  constructor(private http: HttpClient,private httpBackend: HttpBackend ,private tokenService: TokenService) {
    //bach yjib liya lmanagers fach nbghi ncreer compte w ana deconnecté
    this.httpC = new HttpClient(httpBackend);
  }

  getAllusers(): Observable<any>{
    this.userId= this.tokenService.getId()!;
   return this.http.get(`${environment.apiUrl}/user/collabs/`+this.userId)
  }

  //httpC = httpBackend
  // getManagers(): Observable<any>{
  //   return this.httpC.get(`${environment.apiUrl}/user/managers`);
  //  }

  saveUser(data: Users): Observable<any>{
    return this.http.post(`${environment.apiUrl}/users`, data);
  }
  updateUserPass(data: changepass): Observable<any>{
    this.userId= this.tokenService.getId()!;
    return  this.http.put(`${environment.apiUrl}/users/changePassWord`+'/'+this.userId, data);
  }

  updateUser(data: Users): Observable<any>{
    return  this.http.put(`${environment.apiUrl}/users`+'/'+data.userId, data);
  }

  // updateUserPass(data: changepass): Observable<any>{
  //   this.userId= this.tokenService.getId()!;
  //   return  this.http.put(`${environment.apiUrl}/users/changePassWord`+'/'+this.userId, data);
  // }
  getUser(): Observable<any>{
    this.userId= this.tokenService.getId()!;
    return  this.http.get(`${environment.apiUrl}/users`+'/'+this.userId);
  }

  // deleteUser(data: Users): Observable<any>{
  //   return  this.http.delete(`${environment.apiUrl}/user`+'/'+data.userId);
  // }



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    }
     else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
