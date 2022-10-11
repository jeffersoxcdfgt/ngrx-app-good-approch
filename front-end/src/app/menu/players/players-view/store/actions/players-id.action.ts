import { createAction, props } from '@ngrx/store';
import {Player } from '../../../../models/player';

export enum PlayerByIdActionTypes {
  GET_PLAYER_BY_ID = '[GET_PLAYER_BY_ID] Get player by id',
  GET_PLAYER_BY_ID_SUCCESS = '[GET_PLAYER_BY_ID_SUCCESS] Get player by id successfuly',
  GET_PLAYER_BY_ID_ERROR = '[GET_PLAYER_BY_ID_ERROR] Get player by id error',
}

// get player by id

export const playerGetById = createAction(PlayerByIdActionTypes.GET_PLAYER_BY_ID);
export const playerGetByIdSuccess = createAction(PlayerByIdActionTypes.GET_PLAYER_BY_ID_SUCCESS, props<{playerbyid: Player}>());
export const playerGetByIdError = createAction(PlayerByIdActionTypes.GET_PLAYER_BY_ID_ERROR, props<{err: Error}>());