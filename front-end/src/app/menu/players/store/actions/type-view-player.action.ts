import { createAction, props } from '@ngrx/store';

export enum TypeViewPlayerActionTypes {
  TYPE_VIEW_PLAYER = '[TYPE_VIEW_PLAYER] type view of player',
  TYPE_VIEW_PLAYER_SUCCESS = '[TYPE_VIEW_PLAYER_SUCCESS] type view player successfuly',
}

// Type view

export const sendTypePlayerView = createAction(TypeViewPlayerActionTypes.TYPE_VIEW_PLAYER, props<{sendviewplayer: string}>());
export const sendTypePlayerViewSuccess = createAction(TypeViewPlayerActionTypes.TYPE_VIEW_PLAYER_SUCCESS, props<{typeviewplayer: string}>());

