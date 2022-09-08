import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, ActionReducerMap, MetaReducer, META_REDUCERS, StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { reducer } from './shared/routing/id-reducer.reducer';
import { RouterEffectsService } from './shared/routing/router-effects.service';
import { HttpClientModule } from '@angular/common/http';
import { usersHook } from './login/store/webhooks/webhooks';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({
      router: routerReducer,
      featureName: reducer,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: 1,
    }),
    EffectsModule.forRoot([RouterEffectsService]),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: META_REDUCERS,
      deps: [],
      useFactory: usersHook,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
