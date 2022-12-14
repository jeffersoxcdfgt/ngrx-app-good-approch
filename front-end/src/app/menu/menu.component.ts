import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../login/model/login';
import { logOutuser } from '../login/store/actions/login.actions';
import {getTokenResponse, State } from '../login/store/reducers/login.reducers';
import { UnsubscribeComponent } from '../shared/unsubscribe/unsubscribe.component';
import { GET_USER } from './mapping/menu.mapping';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends UnsubscribeComponent implements OnInit {

  userData$ : Observable<ResponseLogin> = new Observable<ResponseLogin>();
  
  constructor(private store :Store<State>,
    private router:Router){ 
    super();
  }

  ngOnInit(): void {
     this.userData$ = this.store.select(getTokenResponse).pipe(GET_USER);
  }

  logout():void{
    this.store.dispatch(logOutuser());
  }

  navTo(path: string):void{
    this.router.navigate([`/${path}`])
  }
}
