import { Match } from 'src/app/model/match';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListMatchService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/match`);

}
deleteMatch(id:String){

  return this.http.delete(`${environment.Url}/match` +'/'+id);

}
addMatch( match:Match){

  return this.http.post(`${environment.Url}/match`, match);

}

getOneMatch(id:String){


  return this.http.get(`${environment.Url}/match//${id}`);

}

updateMatch(match:Match): Observable<any>{
  return  this.http.put(`${environment.Url}/match`+'/'+match.matchId, match);
  // return this.http.put(`${environment.Url}/arbitre/${arbitre.arbitreId}`, arbitre);

}
// addMatch(match:Match){

//   return this.http.post(`${environment.Url}/match`, match);

// }




}
