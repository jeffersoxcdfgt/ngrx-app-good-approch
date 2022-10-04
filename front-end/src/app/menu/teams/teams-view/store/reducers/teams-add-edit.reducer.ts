import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import * as TeamAddEditApiActions from '../actions/teams-add-edit.action';

interface State {
  resultteam: number|null;
  loading: boolean;
  err: any | null;
}

const initialState: State = {
  resultteam: null,
  loading: false,
  err:null,

};

export const teamAddEditFeature = createFeature({
  name: 'resultteam',
  reducer: createReducer(
    initialState,
    on(TeamAddEditApiActions.teamAddRow, (state, { teamrow  }) => ({
       ...state,
        teamrow,
        loading: true,
    })),
    on(TeamAddEditApiActions.teamAddRowSuccess, (state, { resultteam }) => ({
        ...state,
        resultteam,
        loading: false,    
      }
    )),
    on(TeamAddEditApiActions.teamUpdateRow, (state, { teamrow  }) => ({
      ...state,
      teamrow,
       loading: true,
    })),
     on(TeamAddEditApiActions.teamUpdateRowSuccess, (state, { resultteam }) => ({
    ...state,
    resultteam,
    loading: false,    
    }
   )),
    on(TeamAddEditApiActions.teamAddRowError, (state , { err }) => ({ 
        ...state,
        err,
        loading:false,  
    })))
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectResultteamState, // feature selector
  selectResultteam, // selector for `team` property
  selectLoading, // selector for `loading` property
} = teamAddEditFeature;


// select the result team
export const addEditResultTeam = selectResultteam;

export const errorAddEditTeam = createSelector( selectResultteamState , ( state: State ) => {
  return !!state && !!state.err ? state.err : null;
});