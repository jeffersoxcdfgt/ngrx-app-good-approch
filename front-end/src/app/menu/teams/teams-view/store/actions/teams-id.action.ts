import { createAction, props } from '@ngrx/store';
import { Team } from '../../../../models/team';

export enum TeamByIdActionTypes {
  GET_TEAM_BY_ID = '[GET_TEAM_BY_ID] Get team by id',
  GET_TEAM_BY_ID_SUCCESS = '[GET_TEAM_BY_ID_SUCCESS] Get team by id successfuly',
  GET_TEAM_BY_ID_ERROR = '[GET_TEAM_BY_ID_ERROR] Get team by id error',
}

// get team by id

export const teamGetById = createAction(TeamByIdActionTypes.GET_TEAM_BY_ID);
export const teamGetByIdSuccess = createAction(TeamByIdActionTypes.GET_TEAM_BY_ID_SUCCESS, props<{teambyid: Team}>());
export const teamGetByIdError = createAction(TeamByIdActionTypes.GET_TEAM_BY_ID_SUCCESS, props<{err: Error}>());