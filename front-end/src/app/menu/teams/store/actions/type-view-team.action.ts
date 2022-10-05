import { createAction, props } from '@ngrx/store';

export enum TypeViewTeamActionTypes {
  TYPE_VIEW_TEAM = '[TYPE_VIEW_TEAM] type view of team',
  TYPE_VIEW_TEAM_SUCCESS = '[TYPE_VIEW_TEAM_SUCCESS] type view team successfuly',
}

// Type view

export const sendTypeTeamView = createAction(TypeViewTeamActionTypes.TYPE_VIEW_TEAM, props<{sendviewteam: string}>());
export const sendTypeTeamViewSuccess = createAction(TypeViewTeamActionTypes.TYPE_VIEW_TEAM_SUCCESS, props<{typeviewteam: string}>());

