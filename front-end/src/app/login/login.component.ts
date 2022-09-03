import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {State } from './store/reducers/login.reducers';
import { FormBuilder } from '@angular/forms';
import { getTokenData } from './store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store :Store<State>,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  login(){
    const payload = {
      email: 'admin@admin.com',
      password: 'admin'  
    }
    this.store.dispatch(getTokenData({request:payload}));
  }

}
