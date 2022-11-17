

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Arena } from '../../../models/arena';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class ArenasService {
  protected URL =environment.arenaUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<Arena[]>{
    return this.http.get<Arena[]>(`${this.URL}/api/arenas`).pipe(
        catchError(this.traceService.handleError<Arena[]>('findAll'))
    );
  }
}