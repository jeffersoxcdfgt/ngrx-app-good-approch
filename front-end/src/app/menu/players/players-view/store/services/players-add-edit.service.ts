

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Player } from '../../../../models/player';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class PlayersAddEditService {
  protected URL =environment.playerUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
   public insert(data: Player): Observable<number>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8');
    return this.http.post<number>(`${this.URL}/api/players`,data,{headers: headers })
    .pipe(
       map((newPlayer:any) => newPlayer.id ),
          catchError((err: Error) => throwError(err)),
    )
  }
   /**
    * Update specific object into DB
    * @param player the object to be updated
    * @returns gets the response
    */
    public update(player: Player): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put<any>(`${this.URL}/api/players/${player.id}`, player, {headers: headers}).pipe(
          tap(_ => this.traceService.log(`updated player id=${player.id}`)),
           catchError((err: Error) => throwError(err)),
      )
    }

}