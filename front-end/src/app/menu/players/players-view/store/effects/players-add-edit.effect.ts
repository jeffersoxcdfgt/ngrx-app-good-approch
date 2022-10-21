import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, switchMap, filter, first } from 'rxjs/operators';
import { PlayersAddEditService } from '../services/players-add-edit.service';
import { PlayerAddEditActionTypes } from '../actions/players-add-edit.action';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store  } from '@ngrx/store';
import * as getRouteInfo from 'src/app/shared/routing/getRouteInfo';
import { Player } from 'src/app/menu/models/player';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)

@Injectable()
export class PlayerAddEditEffects {

  public addPlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayerAddEditActionTypes.GET_PLAYER_ADD),
        map((dataparse:any) => dataparse.playerrow),
        mergeMap((datarow:Player) => this.playersAddEditService.insert(datarow)
          .pipe(
            map((id:number) => ({ 
                type: PlayerAddEditActionTypes.GET_PLAYER_ADD_SUCCESS, 
                resultplayer: id  
            })),
            catchError((error) => of({ type: PlayerAddEditActionTypes.GET_PLAYER_ADD_EDIT_ERROR, err:error}))
          ))
        )
  );

 public updatePlayer$ = createEffect(() => this.actions$.pipe(
    ofType(PlayerAddEditActionTypes.GET_PLAYER_UPDATE),
    map((dataparse:any) => dataparse.playerrow),
      mergeMap((player:Player) => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(first(),CLEAN_NULL,map((idvalue:any)=>(
        { 
          id:+idvalue, 
          ...player  
        })      
      ),
      switchMap((datarow:Player)=>this.playersAddEditService.update(datarow)
      .pipe(
        map((res:any) => ({ 
            type: PlayerAddEditActionTypes.GET_PLAYER_ADD_SUCCESS, 
            resultplayer: res  
         })),
        catchError((error) => of({ type: PlayerAddEditActionTypes.GET_PLAYER_ADD_EDIT_ERROR, err:error}))
      )))),
    )
  );


  public addPlayerSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(PlayerAddEditActionTypes.GET_PLAYER_ADD_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/players'])
    })),
    { dispatch: false }
  );

 public updatePlayerSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(PlayerAddEditActionTypes.GET_PLAYER_UPDATE_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/players'])
    })),
    { dispatch: false }
  );

  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private playersAddEditService: PlayersAddEditService
  ) {}
}