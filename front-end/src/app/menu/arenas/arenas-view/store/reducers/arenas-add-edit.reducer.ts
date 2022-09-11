import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { Arena } from '../../../../models/arena';
import * as ArenaAddEditApiActions from '../actions/arenas-add-edit.action';

interface State {
  resultarena: number|null;
  loading: boolean;
  err: any | null;
}

const initialState: State = {
  resultarena: null,
  loading: false,
  err:null,

};

export const arenaAddEditFeature = createFeature({
  name: 'resultarena',
  reducer: createReducer(
    initialState,
    on(ArenaAddEditApiActions.arenaAddRow, (state, { arenarow  }) => ({
       ...state,
        arenarow,
        loading: true,
    })),
    on(ArenaAddEditApiActions.arenaAddRowSuccess, (state, { resultarena }) => ({
        ...state,
        resultarena,
        loading: false,    
      }
    )),
    on(ArenaAddEditApiActions.arenaAddRowError, (state , { err }) => ({ 
        ...state,
        err,
        loading:false,  
    })))
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectResultarenaState, // feature selector
  selectResultarena, // selector for `arena` property
  selectLoading, // selector for `loading` property
} = arenaAddEditFeature;


// select the result arena
export const addResultArena = selectResultarena;

export const errorAddEditArena = createSelector( selectResultarenaState , ( state: State ) => {
  return !!state && !!state.err ? state.err : null;
});