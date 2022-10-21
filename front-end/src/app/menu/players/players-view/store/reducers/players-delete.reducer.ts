import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { Player } from '../../../../models/player';
import * as PlayerDeletepiActions from '../actions/players-delete.action';

interface State {
  playerdelete: Player|null;
  loading: boolean;
}

const initialState: State = {
  playerdelete: null,
  loading: false,
};

export const playerdeleteFeature = createFeature({
  name: 'playerdelete',
  reducer: createReducer(
    initialState,
    on(PlayerDeletepiActions.playerDeleteRow, (state) => ({
       ...state,
        loading: true,
    })),
    on(PlayerDeletepiActions.playerDeleteRowSuccess, (state, { playerdelete }) => ({
        ...state,
        playerdelete,
        loading: false,    
      }
     )
    )),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectPlayerdeleteState, // feature selector
  selectPlayerdelete, // selector for `player` property
  selectLoading, // selector for `loading` property
} = playerdeleteFeature;

