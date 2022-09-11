

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Arena } from '../../../../models/arena';
import { TraceService } from 'src/app/shared/utils/traceService';


@Injectable()
export class ArenasAddEditService {
  protected URL =environment.arenaUrl

  constructor(private http: HttpClient,private traceService: TraceService ){ }
   /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
   public insert(data: Arena): Observable<number>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json; charset=utf-8');
    return this.http.post<number>(`${this.URL}/api/arenas`,data,{headers: headers })
    .pipe(
       map((newArena:any) => newArena.id ),
          catchError((err: Error) => throwError(err) ),
    )
  }

}