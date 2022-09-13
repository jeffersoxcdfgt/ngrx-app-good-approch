import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, switchMap, filter, first } from 'rxjs/operators';
import { ArenasAddEditService } from '../services/arenas-add-edit.service';
import { ArenaAddEditActionTypes } from '../actions/arenas-add-edit.action';
import { Arena } from '../../../../models/arena';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store  } from '@ngrx/store';
import * as getRouteInfo from 'src/app/shared/routing/getRouteInfo';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)

@Injectable()
export class ArenasAddEditEffects {

  public addArena$ = createEffect(() => this.actions$.pipe(
        ofType(ArenaAddEditActionTypes.GET_ARENA_ADD),
        map((dataparse:any) => dataparse.arenarow),
        mergeMap((datarow:Arena) => this.arenasAddEditService.insert(datarow)
          .pipe(
            map((id:number) => ({ 
                type: ArenaAddEditActionTypes.GET_ARENA_ADD_SUCCESS, 
                resultarena: id  
            })),
            catchError((error) => of({ type: ArenaAddEditActionTypes.GET_ARENA_ADD_EDIT_ERROR, err:error}))
          ))
        )
  );

 public updateArena$ = createEffect(() => this.actions$.pipe(
    ofType(ArenaAddEditActionTypes.GET_ARENA_UPDATE),
    map((dataparse:any) => dataparse.arenarow),
      mergeMap((arena:Arena) => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(first(),CLEAN_NULL,map((idvalue:any)=>(
        { 
          id:+idvalue, 
          ...arena  
        })      
      ),
      switchMap((datarow:Arena)=>this.arenasAddEditService.update(datarow)
      .pipe(
        map((res:any) => ({ 
            type: ArenaAddEditActionTypes.GET_ARENA_UPDATE_SUCCESS, 
            resultarena: res  
         })),
        catchError((error) => of({ type: ArenaAddEditActionTypes.GET_ARENA_ADD_EDIT_ERROR, err:error}))
      )))),
    )
  );


  public addArenaSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(ArenaAddEditActionTypes.GET_ARENA_ADD_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/arenas'])
    })),
    { dispatch: false }
  );

  public updateArenaSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(ArenaAddEditActionTypes.GET_ARENA_UPDATE_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/arenas'])
    })),
    { dispatch: false }
  );

  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private arenasAddEditService: ArenasAddEditService
  ) {}
}