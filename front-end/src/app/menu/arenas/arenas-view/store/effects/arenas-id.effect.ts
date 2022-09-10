import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { ArenasByIdService } from '../services/arenas-id.service';
import { ArenaByIdActionTypes } from '../actions/arenas-id.action';
import { Arena } from '../../../../models/arena';
import { Store  } from '@ngrx/store';
import * as getRouteInfo from 'src/app/shared/routing/getRouteInfo';
import { Observable, of , empty } from 'rxjs';



@Injectable()
export class ArenasByIdEffects {

  getIdValue = () => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(map((idvalue:any) =>idvalue ))
  castToObject = () =>new Observable<Arena>()

  /*public getArenaById$ = createEffect(() => this.actions$.pipe(
        ofType(ArenaByIdActionTypes.GET_ARENA_BY_ID),
        map((dataid: any) => dataid.id),
        switchMap(() => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(map((idvalue:any) =>idvalue ))),
           concatMap((idval:number) => this.arenasByIdService.findById(idval)
            .pipe(
              map((data:Arena) => ({ 
                  type: ArenaByIdActionTypes.GET_ARENA_BY_ID_SUCCESS,
                  arenabyid: data 
              })),
          )))
   );*/


  public getArenaById$ = createEffect(() => this.actions$.pipe(
    ofType(ArenaByIdActionTypes.GET_ARENA_BY_ID),
    map((dataid: any) => dataid.id),
    concatMap(() => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(
      switchMap(val => ((val !=='add' && val !== undefined) ? this.getIdValue() : this.castToObject())),
      )),
       concatMap((idval:number) => this.arenasByIdService.findById(idval)
        .pipe(
          map((data:Arena) => ({ 
              type: ArenaByIdActionTypes.GET_ARENA_BY_ID_SUCCESS,
              arenabyid: data 
          })),
      )))
);





  constructor(
    private actions$: Actions,
    private store: Store,
    private arenasByIdService: ArenasByIdService
  ) {}
}