
   
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { LoginService } from '../services/login-profile.service';
import { LoginActionTypes } from '../actions/login.actions';
import { Login, ResponseLogin } from '../../model/login';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import * as storage from '../../utils/storage';

@Injectable()
export class LoginEffects {

  public getToken$ = createEffect(() =>  this.actions$.pipe(
    ofType(LoginActionTypes.GET_LOGIN),
    map((dataparse:any) => dataparse.request),
     mergeMap((userdata:Login) => this.loginService.logIn(userdata)
        .pipe(
            map((dataresponse:ResponseLogin) => ({type: LoginActionTypes.GET_LOGIN_SUCCESS, response: {...dataresponse, ...userdata }})),
             catchError((error) => of({ type: LoginActionTypes.GET_LOGIN_ERROR, err:error}))
          )
      )
    )
  );

  public loginSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(LoginActionTypes.GET_LOGIN_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/home'])
    })),
    { dispatch: false }
  );

  public logOut$ = createEffect(() =>   this.actions$.pipe(
    ofType(LoginActionTypes.LOGOUT),
       map((_) => {
          storage.clearStorage();
          this.router.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });
          return  ({ type: LoginActionTypes.LOGOUT,response:null});
       })
  ),
  { dispatch: false }
  );


  public removeTokenError$ = createEffect(() =>   this.actions$.pipe(
    ofType(LoginActionTypes.GET_LOGIN_ERROR),
       map((_) => {
          storage.clearStorage();
          return  ({ type: LoginActionTypes.GET_LOGIN_ERROR});
       })
  ),
  { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router,
  ) {}
}