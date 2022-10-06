

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Player } from '../../../models/player';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class PlayersService {
  protected URL =environment.playerUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<Player[]>{
    return this.http.get<Player[]>(`${this.URL}/api/players`).pipe(
        catchError(this.traceService.handleError<Player[]>('findAll'))
    );
  }
}