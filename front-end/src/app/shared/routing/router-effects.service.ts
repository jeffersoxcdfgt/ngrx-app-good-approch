import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store, createFeatureSelector } from '@ngrx/store';
import { ROUTER_NAVIGATED, RouterReducerState } from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import { setIds } from './id.actions';

export const getRouterState = createFeatureSelector<RouterReducerState>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(getRouterState);

@Injectable()
export class RouterEffectsService {

  setCurrentCourse = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    switchMap(() => this.store.select(selectRouteParam('id') as any)),
    map((id: any) => setIds({ id })),
  ), { dispatch: true });

  constructor(
    private actions$: Actions,
    private store: Store,
  ) { }
}
