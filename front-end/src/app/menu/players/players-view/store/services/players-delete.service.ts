

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class PlayersDeleteService {
  protected URL =environment.playerUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
    * Delete an object by its identifier field
    * @param id the object identifier
    * @returns gets the response
    */
    public delete(id:any): Observable<number> {
        return this.http.delete<number>(`${this.URL}/api/players/${id}`).pipe(
          map((_) => id ),
          catchError(this.traceService.handleError<number>(`delete id=${id}`))
        )
    }
}