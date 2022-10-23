import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import * as TypeViewApiPlayerActions from '../actions/type-view-player.action';

interface State {
  typeviewplayer: string;
  loading: boolean;
  err: any | null;
}

const initialState: State = {
  typeviewplayer: '',
  loading: false,
  err:null,

};

export const typeViewPlayerFeature = createFeature({
  name: 'typeviewplayer',
  reducer: createReducer(
    initialState,
    on(TypeViewApiPlayerActions.sendTypePlayerView, (state, { sendviewplayer  }) => ({
       ...state,
       sendviewplayer,
       loading: true,
    })),
    on(TypeViewApiPlayerActions.sendTypePlayerViewSuccess, (state, { typeviewplayer }) => ({
        ...state,
        typeviewplayer,
        loading: false,    
      }
    )))
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTypeviewplayerState, // feature selector
  selectTypeviewplayer, // selector for `type view` property
  selectLoading, // selector for `loading` property
} = typeViewPlayerFeature;


// select the type view of player
export const setTypeViewPlayerResp = selectTypeviewplayer;

export const errorTypeViewPlayer = createSelector( selectTypeviewplayerState , ( state: State ) => {
  return !!state && !!state.err ? state.err : null;
});