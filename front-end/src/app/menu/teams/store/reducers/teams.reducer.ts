import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { selectAllArenas } from 'src/app/menu/arenas/store/reducers/arenas.reducer';
import { joinTeamsAndArenas } from 'src/app/menu/arenas/utils/functions';
import { Arena } from 'src/app/menu/models/arena';
import { Team } from '../../../models/team';
import * as TeamsApiActions from '../actions/teams.action';

interface State {
  teams: Team[];
  loading: boolean;
}

const initialState: State = {
    teams: [],
  loading: false,
};

export const teamsFeature = createFeature({
  name: 'teams',
  reducer: createReducer(
    initialState,
    on(TeamsApiActions.teamsGetAll, (state) => ({
        ...state,
        loading: true,
    })),
    on(TeamsApiActions.teamsGetAllSuccess, (state, { teams }) => ({
        ...state,
        teams,
        loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTeamsState, // feature selector
  selectTeams, // selector for `teams` property
  selectLoading, // selector for `loading` property
} = teamsFeature;


// select the array of Teams
export const selectAllTeams = selectTeams;

//get Arenas match Teams

export const selectedTeamsWithArenas = createSelector(
  selectAllTeams,
  selectAllArenas,
  (teams: Team[],arenas: Arena[]) =>joinTeamsAndArenas(teams,arenas));