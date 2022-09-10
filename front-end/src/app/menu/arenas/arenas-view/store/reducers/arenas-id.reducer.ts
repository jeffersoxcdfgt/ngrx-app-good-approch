import { createFeature, createReducer , on } from '@ngrx/store';
import { Arena } from '../../../../models/arena';
import * as ArenaByIdApiActions from '../actions/arenas-id.action';

interface State {
  arenabyid: Arena|null;
  loading: boolean;
}

const initialState: State = {
  arenabyid: null,
  loading: false,
};

export const arenabyidFeature = createFeature({
  name: 'arenabyid',
  reducer: createReducer(
    initialState,
    on(ArenaByIdApiActions.arenaGetById, (state) => ({
       ...state,
        loading: true,
    })),
    on(ArenaByIdApiActions.arenaGetByIdSuccess, (state, { arenabyid }) => ({
        ...state,
        arenabyid,
        loading: false,    
      }
    ))),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectArenabyidState, // feature selector
  selectArenabyid, // selector for `arena` property
  selectLoading, // selector for `loading` property
} = arenabyidFeature;


// select the array of Arena
export const  selectGetArenaById = selectArenabyid;