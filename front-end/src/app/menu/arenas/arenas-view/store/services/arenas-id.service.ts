

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Arena } from '../../../../models/arena';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class ArenasByIdService {
  protected URL =environment.arenaUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
    * Find an object by its identifier
    * @param id the object identifier
    * @returns gets the object found
    */
    public findById(id: any): Observable<Arena> {
        return this.http.get<Arena>(`${this.URL}/api/arenas/${id}`).pipe(
          tap(_ => this.traceService.log(`fetched arenas by id=${id}`)),
          catchError(this.traceService.handleError<Arena>(`findById id=${id}`))
        )
    }
}