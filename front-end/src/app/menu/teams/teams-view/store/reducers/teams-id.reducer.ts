import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { Team } from '../../../../models/team';
import * as TeamByIdApiActions from '../actions/teams-id.action';
import { selectAllArenas } from 'src/app/menu/arenas/store/reducers/arenas.reducer';
import { Arena } from 'src/app/menu/models/arena';
import { getOneTeamByArenas } from 'src/app/menu/arenas/utils/functions';

interface State {
  teambyid: Team|null;
  loading: boolean;
}

const initialState: State = {
  teambyid: null,
  loading: false,
};

export const teambyidFeature = createFeature({
  name: 'teambyid',
  reducer: createReducer(
    initialState,
    on(TeamByIdApiActions.teamGetById, (state) => ({
       ...state,
        loading: true,
    })),
    on(TeamByIdApiActions.teamGetByIdSuccess, (state, { teambyid }) => ({
        ...state,
        teambyid,
        loading: false,    
      }
    ))),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTeambyidState, // feature selector
  selectTeambyid, // selector for `team` property
  selectLoading, // selector for `loading` property
} = teambyidFeature;


// select the array of Team
export const selectGetTeamById = selectTeambyid;

export const selectedOneTeamsByListArenas = createSelector(
  selectGetTeamById,
  selectAllArenas,
  (team: Team|null,arenas: Arena[]):Team|null =>{
    if(!!team && !!arenas && arenas.length >0){
       return getOneTeamByArenas(team, arenas);
    }
    return null; 
  });