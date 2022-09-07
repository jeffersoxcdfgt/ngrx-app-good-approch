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
import { localStorageSync } from 'ngrx-store-localstorage';
import * as getTokenReducers from'../app/login/store/reducers/login.reducers';
import { usersHook } from './login/store/webhooks/webhooks';

export const reducers: ActionReducerMap<any> = {
  tokendata: getTokenReducers.reducer,
  router: routerReducer,
  featureName: reducer,
};

const reducerKeys = ['tokendata'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}
export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers,{metaReducers}),
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
