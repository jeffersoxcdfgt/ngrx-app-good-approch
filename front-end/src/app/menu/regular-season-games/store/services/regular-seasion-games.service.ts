

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ReagularSeasonGame } from '../../../models/regular-season-game';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class ReagularSeasonService {
  protected URL =environment.regularseasonUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<ReagularSeasonGame[]>{
    return this.http.get<ReagularSeasonGame[]>(`${this.URL}/api/regular_season_games`).pipe(
        catchError(this.traceService.handleError<ReagularSeasonGame[]>('findAll'))
    );
  }
}