import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TypeViewPlayerService } from '../services/type-view-player.service';
import { TypeViewPlayerActionTypes } from '../actions/type-view-player.action';


@Injectable()
export class TypePlayerViewEffects {

  public typeViewPlayer$ = createEffect(() => this.actions$.pipe(
    ofType(TypeViewPlayerActionTypes.TYPE_VIEW_PLAYER),
    map((dataparse:any) => dataparse.sendviewplayer),
    mergeMap((data:string) => this.typeViewPlayerService.setTypeViewPlayer(data)
      .pipe(
        map((resp:string) => ({ 
            type: TypeViewPlayerActionTypes.TYPE_VIEW_PLAYER_SUCCESS, 
            typeviewplayer: resp 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private typeViewPlayerService: TypeViewPlayerService
  ) {}
}