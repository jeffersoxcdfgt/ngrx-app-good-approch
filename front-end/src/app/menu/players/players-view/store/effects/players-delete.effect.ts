import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { PlayersDeleteService } from '../services/players-delete.service';
import { PlayerDeleteActionTypes } from '../actions/players-delete.action';
import { Router } from '@angular/router';
import { Store  } from '@ngrx/store';

@Injectable()
export class PlayersDeleteEffects {

    public deletePlayer$ = createEffect(() => this.actions$.pipe(
        ofType(PlayerDeleteActionTypes.DELETE_PLAYER),
        map((dataparse:any) => dataparse.playerid ),
        mergeMap((id:number) => this.playersDeleteService.delete(id)
          .pipe(
            map((data:any) => ({ 
                type: PlayerDeleteActionTypes.DELETE_PLAYER_SUCCESS, 
                playerdelete: data 
            }))
          ))
        )
    );

  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private playersDeleteService: PlayersDeleteService
  ) {}
}