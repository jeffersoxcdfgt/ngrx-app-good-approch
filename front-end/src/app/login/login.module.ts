import { NgModule } from '@angular/core';
import { loginRoutedComponents , LoginRoutingModule} from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as getTokenReducers from'./store/reducers/login.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/effects/login.effects';
import { LoginService } from './store/services/login-profile.service';
import { TraceService } from '../shared/utils/traceService';

@NgModule({
  imports:[
    LoginRoutingModule,
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('tokendata',getTokenReducers.reducer),
    EffectsModule.forFeature([LoginEffects]),
    SharedModule

  ],
  declarations:[loginRoutedComponents],
  providers: [
    LoginService,
    TraceService,
  ]
})
export class LoginModule {
}
