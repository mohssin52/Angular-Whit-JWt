import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadRequest } from './../common/bad-request';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/NOT-Found-Error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( @Inject(String) private URL: string,private http: HttpClient) { }


  getALL() {

    return this.http.get(this.URL).pipe(
    
      catchError(this.handlError))
  }
  getOne(resource:any) {

    return this.http.get(this.URL + '/' + resource.id).pipe(
  
      catchError(this.handlError))
  }
  
  create(resource:any) {
    return this.http.post(this.URL, resource).pipe(

      catchError(this.handlError))


  }


  Update(resource: any) {
    return this.http.put(this.URL + '/' + resource.id, resource).pipe(
      catchError(this.handlError))
  }


  delete(resource: any) {
    return this.http.delete(this.URL + '/' + resource.id).pipe(

      catchError(this.handlError))

  }


handlError( error:Response){
  if (error.status === 404) {
    return throwError(new NotFoundError)
  }
  if (error.status === 400) {

    return throwError(new BadRequest)
  }
  return throwError(new AppError)

}

}
