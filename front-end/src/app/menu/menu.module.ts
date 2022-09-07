import { NgModule} from '@angular/core';
import { menuRoutedComponents , MenuRoutingModule} from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TraceService } from '../shared/utils/traceService';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as getTokenReducers from'../login/store/reducers/login.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../login/store/effects/login.effects';
import { LoginService } from '../login/store/services/login-profile.service';
import { AuthGuardService } from '../shared/guards/auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    FormsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('tokendata',getTokenReducers.reducer),
    EffectsModule.forFeature([LoginEffects]),
    SharedModule
  ],
  declarations: [
    menuRoutedComponents,
  ],
  providers: [
    TraceService,
    LoginService,
    AuthGuardService
  ]
})
export class MenuModule {}