import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ReagularSeasonService } from '../services/regular-seasion-games.service';
import { RegularSeasonGamesActionTypes } from '../actions/regular-season-games.action';
import { ReagularSeasonGame } from '../../../models/regular-season-game';

@Injectable()
export class RegularSeasonGamesEffects {

  public selectRegularSeasonGames$ = createEffect(() => this.actions$.pipe(
    ofType(RegularSeasonGamesActionTypes.GET_REGULAR_SEASON_GAMES),
    mergeMap(() => this.reagularSeasonService.findAll()
      .pipe(
        map((data:ReagularSeasonGame[]) => ({ 
            type: RegularSeasonGamesActionTypes.GET_REGULAR_SEASON_GAMES_SUCCESS, 
            regularseasongames: data 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private reagularSeasonService: ReagularSeasonService
  ) {}
}