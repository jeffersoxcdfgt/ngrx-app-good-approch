import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import * as TypeViewApiTeamActions from '../actions/type-view-team.action';

interface State {
  typeviewteam: string;
  loading: boolean;
  err: any | null;
}

const initialState: State = {
  typeviewteam: '',
  loading: false,
  err:null,

};

export const typeViewTeamFeature = createFeature({
  name: 'typeviewteam',
  reducer: createReducer(
    initialState,
    on(TypeViewApiTeamActions.sendTypeTeamView, (state, { sendviewteam  }) => ({
       ...state,
       sendviewteam,
        loading: true,
    })),
    on(TypeViewApiTeamActions.sendTypeTeamViewSuccess, (state, { typeviewteam }) => ({
        ...state,
        typeviewteam,
        loading: false,    
      }
    )))
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTypeviewteamState, // feature selector
  selectTypeviewteam, // selector for `type view` property
  selectLoading, // selector for `loading` property
} = typeViewTeamFeature;


// select the type view of team
export const setTypeViewTeamResp = selectTypeviewteam;

export const errorTypeViewTeam = createSelector( selectTypeviewteamState , ( state: State ) => {
  return !!state && !!state.err ? state.err : null;
});