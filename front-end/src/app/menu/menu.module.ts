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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../app.in-memory.api';
import { arenasFeature} from './arenas/store/reducers/arenas.reducer';
import { ArenasEffects} from './arenas/store/effects/arenas.effect';
import { ArenasService } from './arenas/store/services/arenas.service';
import { arenabyidFeature } from './arenas/arenas-view/store/reducers/arenas-id.reducer';
import { ArenasByIdEffects } from './arenas/arenas-view/store/effects/arenas-id.effect';
import { ArenasByIdService } from './arenas/arenas-view/store/services/arenas-id.service';
import { arenaAddEditFeature } from './arenas/arenas-view/store/reducers/arenas-add-edit.reducer';
import { ArenasAddEditEffects } from './arenas/arenas-view/store/effects/arenas-add-edit.effect';
import { ArenasAddEditService } from './arenas/arenas-view/store/services/arenas-add-edit.service';

@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AppInMemoryApi),
    StoreModule.forFeature('tokendata',getTokenReducers.reducer),
    StoreModule.forFeature(arenasFeature),
    StoreModule.forFeature(arenabyidFeature),
    StoreModule.forFeature(arenaAddEditFeature),
    EffectsModule.forFeature(
      [
        LoginEffects,
        ArenasEffects,
        ArenasByIdEffects,
        ArenasAddEditEffects
      ]),
  ],
  declarations: [
    menuRoutedComponents,
  ],
  providers: [
    TraceService,
    LoginService,
    AuthGuardService,
    ArenasService,
    ArenasByIdService,
    ArenasAddEditService
  ]
})
export class MenuModule {}