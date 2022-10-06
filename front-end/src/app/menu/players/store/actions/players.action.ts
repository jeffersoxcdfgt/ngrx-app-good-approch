import { createAction, props } from '@ngrx/store';
import { Player } from '../../../models/player';

export enum PlayersActionTypes {
  GET_PLAYERS = '[All] Players',
  GET_PLAYERS_SUCCESS = '[ALL] Players Success',
  GET_PLAYERS_ERROR = '[All] Players Error'
}

// list players

export const playersGetAll = createAction(PlayersActionTypes.GET_PLAYERS);
export const playersGetAllSuccess = createAction(PlayersActionTypes.GET_PLAYERS_SUCCESS, props<{players: Player[]}>());
export const playersGetAllError = createAction(PlayersActionTypes.GET_PLAYERS_ERROR, props<{err: Error}>());