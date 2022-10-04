import { createAction, props } from '@ngrx/store';
import { Team } from '../../../../models/team';

export enum TeamAddEditActionTypes {
  GET_TEAM_ADD = '[GET_TEAM_ADD] add team row',
  GET_TEAM_ADD_SUCCESS = '[GET_TEAM_ADD_SUCCESS] add team row successfuly',
  GET_TEAM_UPDATE = '[GET_TEAM_UPDATE] update team row',
  GET_TEAM_UPDATE_SUCCESS = '[GET_TEAM_UPDATE_SUCCESS] update team row successfuly',
  GET_TEAM_ADD_EDIT_ERROR = '[GET_TEAM_ADD_EDIT_ERROR] add team row error',
}

// add row team

export const teamAddRow = createAction(TeamAddEditActionTypes.GET_TEAM_ADD, props<{teamrow: Team}>());
export const teamAddRowSuccess = createAction(TeamAddEditActionTypes.GET_TEAM_ADD_SUCCESS, props<{resultteam: number}>());
export const teamUpdateRow = createAction(TeamAddEditActionTypes.GET_TEAM_UPDATE, props<{teamrow: Team}>());
export const teamUpdateRowSuccess = createAction(TeamAddEditActionTypes.GET_TEAM_UPDATE_SUCCESS, props<{resultteam: any}>());
export const teamAddRowError = createAction(TeamAddEditActionTypes.GET_TEAM_ADD_EDIT_ERROR, props<{err: Error}>());