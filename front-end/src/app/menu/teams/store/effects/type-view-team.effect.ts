import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TypeViewTeamService } from '../services/type-view-team.service';
import { TypeViewTeamActionTypes } from '../actions/type-view-team.action';


@Injectable()
export class TypeTeamViewEffects {

  public typeViewTeam$ = createEffect(() => this.actions$.pipe(
    ofType(TypeViewTeamActionTypes.TYPE_VIEW_TEAM),
    map((dataparse:any) => dataparse.sendviewteam),
    mergeMap((data:string) => this.typeViewTeamService.setTypeViewTeam(data)
      .pipe(
        map((resp:string) => ({ 
            type: TypeViewTeamActionTypes.TYPE_VIEW_TEAM_SUCCESS, 
            typeviewteam: resp 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private typeViewTeamService: TypeViewTeamService
  ) {}
}