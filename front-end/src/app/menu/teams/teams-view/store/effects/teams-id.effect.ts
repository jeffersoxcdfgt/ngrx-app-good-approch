import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  map, mergeMap, switchMap } from 'rxjs/operators';
import { TeamsByIdService } from '../services/teams-id.service';
import { TeamByIdActionTypes } from '../actions/teams-id.action';
import { Team } from '../../../../models/team';
import { Store  } from '@ngrx/store';
import * as getRouteInfo from 'src/app/shared/routing/getRouteInfo';
import {  of } from 'rxjs';

const rowEmptyTeam = { id: '', logo: '', name: '',  Founded:'',  About: '',  divison:'',arena:''}

const MAPVALUE = map((data:Team|string) => ({
  type: TeamByIdActionTypes.GET_TEAM_BY_ID_SUCCESS, 
  teambyid: data === 'add'?rowEmptyTeam:data
}))

@Injectable()
export class TeamsByIdEffects {

  getIdValue = () => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(map((idvalue:any) =>idvalue ))

  public getTeamById$ = createEffect(() => this.actions$.pipe(
        ofType(TeamByIdActionTypes.GET_TEAM_BY_ID),
        map((dataid: any) => dataid.id),
        mergeMap(() => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(map((idvalue:any) =>idvalue ))),
             switchMap((idval:any) =>  ((idval !=='add' && idval !== undefined) ? 
                this.teamsByIdService.findById(idval).pipe( MAPVALUE):
                of(idval).pipe(MAPVALUE))))
  );

  
  constructor(
    private actions$: Actions,
    private store: Store,
    private teamsByIdService: TeamsByIdService
  ) {}
}