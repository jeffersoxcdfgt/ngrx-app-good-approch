import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {errorTokenResponse, State } from './store/reducers/login.reducers';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getTokenData } from './store/actions/login.actions';
import { GET_SHOW_ERROR } from './mapping/login.maping';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorShow$ : Observable<boolean> = new Observable<boolean>();
  formLogin: FormGroup;

  constructor(private store :Store<State>,
    private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      username:[''],
      password:['']
    })
  }

  ngOnInit(): void {
    this.errorShow$ = this.store.select(errorTokenResponse).pipe(GET_SHOW_ERROR);
  }

  login(){
    const payload = {
      email: this.formLogin.get('username')?.value,
      password:this.formLogin.get('password')?.value  
    }
    this.store.dispatch(getTokenData({request:payload}));
  }

}
