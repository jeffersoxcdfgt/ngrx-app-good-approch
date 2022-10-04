import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TeamsDeleteService } from '../services/teams-delete.service';
import { TeamDeleteActionTypes } from '../actions/teams-delete.action';
import { Router } from '@angular/router';
import { Store  } from '@ngrx/store';

@Injectable()
export class TeamsDeleteEffects {

    public deleteTeam$ = createEffect(() => this.actions$.pipe(
        ofType(TeamDeleteActionTypes.DELETE_TEAM),
        map((dataparse:any) => dataparse.teamid ),
        mergeMap((id:number) => this.teamsDeleteService.delete(id)
          .pipe(
            map((data:any) => ({ 
                type: TeamDeleteActionTypes.DELETE_TEAM_SUCCESS, 
                teamdelete: data 
            }))
          ))
        )
    );

  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private teamsDeleteService: TeamsDeleteService
  ) {}
}