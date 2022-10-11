import { createFeature, createReducer , on } from '@ngrx/store';
import { Player } from '../../../../models/player';
import * as PlayerByIdApiActions from '../actions/players-id.action';

interface State {
  playerbyid: Player|null;
  loading: boolean;
}

const initialState: State = {
   playerbyid: null,
  loading: false,
};

export const playerbyidFeature = createFeature({
  name: 'playerbyid',
  reducer: createReducer(
    initialState,
    on(PlayerByIdApiActions.playerGetById, (state) => ({
       ...state,
        loading: true,
    })),
    on(PlayerByIdApiActions.playerGetByIdSuccess, (state, { playerbyid }) => ({
        ...state,
        playerbyid,
        loading: false,    
      }
    ))),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectPlayerbyidState, // feature selector
  selectPlayerbyid, // selector for `player` property
  selectLoading, // selector for `loading` property
} = playerbyidFeature;


// select the array of Player
export const  selectGetPlayerById = selectPlayerbyid;