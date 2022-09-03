import { NgModule } from '@angular/core';
import { loginRoutedComponents , LoginRoutingModule} from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

import { StoreModule , ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    SharedModule,
    LoginRoutingModule,
    FormsModule,
   /* StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })*/
  ],
  declarations:[loginRoutedComponents],
  providers:[]
})
export class LoginModule {
}
