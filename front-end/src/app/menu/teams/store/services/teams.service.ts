

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Team } from '../../../models/team';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class TeamsService {
  protected URL =environment.teamUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<Team[]>{
    return this.http.get<Team[]>(`${this.URL}/api/teams`).pipe(
        catchError(this.traceService.handleError<Team[]>('findAll'))
    );
  }
}