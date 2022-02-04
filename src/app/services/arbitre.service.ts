import { Arbitre } from 'src/app/model/Arbitre';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbitreService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.apiUrl}/users/arbitre`);

}


deleteArbitre(id:String){

  return this.http.delete(`${environment.Url}/arbitre` +'/'+id);

}

addArbitre(arbitre:Arbitre){

  return this.http.post(`${environment.Url}/arbitre`, arbitre);

}
updateArbitre(arbitre:Arbitre): Observable<any>{
  return  this.http.put(`${environment.Url}/arbitre`+'/'+arbitre.arbitreId, arbitre);
  // return this.http.put(`${environment.Url}/arbitre/${arbitre.arbitreId}`, arbitre);

}
getOneArbitre(id: string){
  return this.http.get(`${environment.Url}/arbitre/${id}`);

}
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
