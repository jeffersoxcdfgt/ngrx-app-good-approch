import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { PlayersByIdService } from '../services/players-id.service';
import { PlayerByIdActionTypes } from '../actions/players-id.action';
import { Player } from '../../../../models/player';
import { Store  } from '@ngrx/store';
import * as getRouteInfo from 'src/app/shared/routing/getRouteInfo';
import {  of } from 'rxjs';

const rowEmptyPlayer = { 
    id:'',
    photo:'',
    firstname:'',
    lastname:'',
    birthday:'',
    country:'',
    height:'',
    weight:'',
    college:'',
    nbadebut:'',
    position:'',
    team:'',
    number: '',
    iconflag:''
}

const MAPVALUE = map((data:Player|string) => ({
  type: PlayerByIdActionTypes.GET_PLAYER_BY_ID_SUCCESS, 
  playerbyid: data === 'add'? rowEmptyPlayer:data
}))

@Injectable()
export class PlayersByIdEffects {

  getIdValue = () => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(map((idvalue:any) =>idvalue ))

  public getPlayerById$ = createEffect(() => this.actions$.pipe(
        ofType(PlayerByIdActionTypes.GET_PLAYER_BY_ID),
        map((dataid: any) => dataid.id),
        mergeMap(() => this.store.select(getRouteInfo.getInfoRouting('id') as any).pipe(map((idvalue:any) =>idvalue ))),
             switchMap((idval:any) =>  ((idval !=='add' && idval !== undefined) ? 
                this.playersByIdService.findById(idval).pipe( MAPVALUE):
                of(idval).pipe(MAPVALUE))))
  );

  
  constructor(
    private actions$: Actions,
    private store: Store,
    private playersByIdService: PlayersByIdService
  ) {}
}