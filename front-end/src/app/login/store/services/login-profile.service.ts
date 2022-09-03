import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError , map } from 'rxjs/operators';
import { Login, ResponseLogin } from '../../model/login';
import { TraceService } from '../../../shared/utils/traceService';
import { environment } from '../../../../environments/environment';

@Injectable()
export class LoginService {
  protected URL = environment.loginUrl;
  constructor(private http: HttpClient , private traceService: TraceService){ }
  /**
   * Login user to app
   * @param data the object containing user information
   * @returns gets the response
   */
   public logIn(data: Login): Observable<any|ResponseLogin>{
     let headers = new HttpHeaders();
     headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     return this.http.post<Login>(`${this.URL}` , data  , {headers })
     .pipe(
          map((responselogin) => ({...responselogin, })),
            catchError((err: Error) => throwError(err) ),
      );
   }
}