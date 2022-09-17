import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TeamsService } from '../services/teams.service';
import { TeamsActionTypes } from '../actions/teams.action';
import { Team } from '../../../models/team';

@Injectable()
export class TeamsEffects {

  public selectTeams$ = createEffect(() => this.actions$.pipe(
    ofType(TeamsActionTypes.GET_TEAMS),
    mergeMap(() => this.teamsService.findAll()
      .pipe(
        map((data:Team[]) => ({ 
            type: TeamsActionTypes.GET_TEAMS_SUCCESS, 
            teams: data 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private teamsService: TeamsService
  ) {}
}