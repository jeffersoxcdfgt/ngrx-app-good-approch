

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Player } from '../../../../models/player';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class PlayersByIdService {
  protected URL =environment.playerUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
    * Find an object by its identifier
    * @param id the object identifier
    * @returns gets the object found
    */
    public findById(id: any): Observable<Player> {
        return this.http.get<Player>(`${this.URL}/api/players/${id}`).pipe(
          tap(_ => this.traceService.log(`fetched players by id=${id}`)),
          catchError(this.traceService.handleError<Player>(`findById id=${id}`))
        )
    }
}