

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Team } from '../../../../models/team';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class TeamsByIdService {
  protected URL =environment.teamUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
    * Find an object by its identifier
    * @param id the object identifier
    * @returns gets the object found
    */
    public findById(id: any): Observable<Team> {
        return this.http.get<Team>(`${this.URL}/api/teams/${id}`).pipe(
          tap(_ => this.traceService.log(`fetched teams by id=${id}`)),
          catchError(this.traceService.handleError<Team>(`findById id=${id}`))
        )
    }
}