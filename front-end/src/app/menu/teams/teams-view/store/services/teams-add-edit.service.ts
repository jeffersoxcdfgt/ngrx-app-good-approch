

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Team } from '../../../../models/team';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class TeamsAddEditService {
  protected URL =environment.teamUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
   public insert(data: Team): Observable<number>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8');
    return this.http.post<number>(`${this.URL}/api/teams`,data,{headers: headers })
    .pipe(
       map((newTeam:any) => newTeam.id ),
          catchError((err: Error) => throwError(err)),
    )
  }
   /**
    * Update specific object into DB
    * @param team the object to be updated
    * @returns gets the response
    */
    public update(team: Team): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put<any>(`${this.URL}/api/teams/${team.id}`, team, {headers: headers}).pipe(
          tap(_ => this.traceService.log(`updated team id=${team.id}`)),
           catchError((err: Error) => throwError(err)),
      )
    }

}