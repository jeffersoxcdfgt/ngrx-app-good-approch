import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, switchMap, filter, first } from 'rxjs/operators';
import { TeamsAddEditService } from '../services/teams-add-edit.service';
import { TeamAddEditActionTypes } from '../actions/teams-add-edit.action';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Store  } from '@ngrx/store';
import * as getRouteInfo from 'src/app/shared/routing/getRouteInfo';
import { Team } from 'src/app/menu/models/team';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)

@Injectable()
export class TeamsAddEditEffects {

  public addTeam$ = createEffect(() => this.actions$.pipe(
        ofType(TeamAddEditActionTypes.GET_TEAM_ADD),
        map((dataparse:any) => dataparse.teamrow),
        mergeMap((datarow:Team) => this.teamsAddEditService.insert(datarow)
          .pipe(
            map((id:number) => ({ 
                type: TeamAddEditActionTypes.GET_TEAM_ADD_SUCCESS, 
                resultteam: id  
            })),
            catchError((error) => of({ type: TeamAddEditActionTypes.GET_TEAM_ADD_EDIT_ERROR, err:error}))
          ))
        )
  );

 public updateTeam$ = createEffect(() => this.actions$.pipe(
    ofType(TeamAddEditActionTypes.GET_TEAM_UPDATE),
    map((dataparse:any) => dataparse.teamrow),
      mergeMap((team:Team) => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(first(),CLEAN_NULL,map((idvalue:any)=>(
        { 
          id:+idvalue, 
          ...team  
        })      
      ),
      switchMap((datarow:Team)=>this.teamsAddEditService.update(datarow)
      .pipe(
        map((res:any) => ({ 
            type: TeamAddEditActionTypes.GET_TEAM_ADD_SUCCESS, 
            resultteam: res  
         })),
        catchError((error) => of({ type: TeamAddEditActionTypes.GET_TEAM_ADD_EDIT_ERROR, err:error}))
      )))),
    )
  );


  public addTeamSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(TeamAddEditActionTypes.GET_TEAM_ADD_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/teams'])
    })),
    { dispatch: false }
  );

 public updateTeamSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(TeamAddEditActionTypes.GET_TEAM_UPDATE_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/teams'])
    })),
    { dispatch: false }
  );

  
  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private teamsAddEditService: TeamsAddEditService
  ) {}
}