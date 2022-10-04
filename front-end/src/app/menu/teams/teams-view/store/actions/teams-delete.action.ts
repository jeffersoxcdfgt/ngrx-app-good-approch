import { createAction, props } from '@ngrx/store';

export enum TeamDeleteActionTypes {
  DELETE_TEAM = '[DELETE_TEAM] delete team row',
  DELETE_TEAM_SUCCESS = '[DELETE_TEAM_SUCCESS] delete team row successfully',
  DELETE_TEAM_ERROR = '[DELETE_TEAM_ERROR] delete team row error',
}

// delete team row

export const teamDeleteRow = createAction(TeamDeleteActionTypes.DELETE_TEAM, props<{teamid: number}>());
export const teamDeleteRowSuccess = createAction(TeamDeleteActionTypes.DELETE_TEAM_SUCCESS, props<{teamdelete: any}>());
export const teamDeleteRowError = createAction(TeamDeleteActionTypes.DELETE_TEAM_ERROR, props<{err: Error}>());