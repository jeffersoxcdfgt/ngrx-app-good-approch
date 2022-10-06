import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { PlayersService } from '../services/players.service';
import { PlayersActionTypes } from '../actions/players.action';
import { Player } from '../../../models/player';

@Injectable()
export class PlayerEffects {

  public selectPlayers$ = createEffect(() => this.actions$.pipe(
    ofType(PlayersActionTypes.GET_PLAYERS),
    mergeMap(() => this.playersService.findAll()
      .pipe(
        map((data:Player[]) => ({ 
            type: PlayersActionTypes.GET_PLAYERS_SUCCESS, 
            players: data 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private playersService: PlayersService
  ) {}
}