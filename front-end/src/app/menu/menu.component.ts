import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {getTokenResponse, State } from '../login/store/reducers/login.reducers';
import { UnsubscribeComponent } from '../shared/unsubscribe/unsubscribe.component';
import { GET_USER } from './mapping/menu.mapping';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends UnsubscribeComponent implements OnInit {

  userData$ : Observable<string> = new Observable<string>();
  
  constructor(private store :Store<State>){ 
    super();
  }

  ngOnInit(): void {
   this.userData$ = this.store.select(getTokenResponse).pipe(GET_USER);
  }

}
