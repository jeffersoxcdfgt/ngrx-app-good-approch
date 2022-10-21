import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import * as PlayerAddEditApiActions from '../actions/players-add-edit.action';

interface State {
  resultplayer: number|null;
  loading: boolean;
  err: any | null;
}

const initialState: State = {
  resultplayer: null,
  loading: false,
  err:null,

};

export const playerAddEditFeature = createFeature({
  name: 'resultplayer',
  reducer: createReducer(
    initialState,
    on(PlayerAddEditApiActions.playerAddRow, (state, { playerrow  }) => ({
       ...state,
       playerrow,
        loading: true,
    })),
    on(PlayerAddEditApiActions.playerAddRowSuccess, (state, { resultplayer }) => ({
        ...state,
        resultplayer,
        loading: false,    
      }
    )),
    on(PlayerAddEditApiActions.playerUpdateRow, (state, { playerrow  }) => ({
      ...state,
       playerrow,
       loading: true,
    })),
     on(PlayerAddEditApiActions.playerUpdateRowSuccess, (state, { resultplayer }) => ({
    ...state,
    resultplayer,
    loading: false,    
    }
   )),
    on(PlayerAddEditApiActions.playerAddRowError, (state , { err }) => ({ 
        ...state,
        err,
        loading:false,  
    })))
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectResultplayerState, // feature selector
  selectResultplayer, // selector for `player` property
  selectLoading, // selector for `loading` property
} = playerAddEditFeature;


// select the result player
export const addEditResultPlayer = selectResultplayer;

export const errorAddEditPlayer = createSelector( selectResultplayerState , ( state: State ) => {
  return !!state && !!state.err ? state.err : null;
});