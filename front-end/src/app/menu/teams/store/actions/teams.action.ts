import { createAction, props } from '@ngrx/store';
import { Team } from '../../../models/team';

export enum TeamsActionTypes {
  GET_TEAMS = '[All] Teams',
  GET_TEAMS_SUCCESS = '[ALL] Teams Success',
  GET_TEAMS_ERROR = '[All] Teams Error'
}

// list teams

export const teamsGetAll = createAction(TeamsActionTypes.GET_TEAMS);
export const teamsGetAllSuccess = createAction(TeamsActionTypes.GET_TEAMS_SUCCESS, props<{teams: Team[]}>());
export const teamsGetAllError = createAction(TeamsActionTypes.GET_TEAMS_ERROR, props<{err: Error}>());