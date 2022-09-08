import { createFeature, createReducer , on } from '@ngrx/store';
import { Arena } from '../../../models/arena';
import * as ArenasApiActions from '../actions/arenas.action';

interface State {
  arenas: Arena[];
  loading: boolean;
}

const initialState: State = {
  arenas: [],
  loading: false,
};

export const arenasFeature = createFeature({
  name: 'arenas',
  reducer: createReducer(
    initialState,
    on(ArenasApiActions.arenasGetAll, (state) => ({
        ...state,
        loading: true,
    })),
    on(ArenasApiActions.arenasGetAllSuccess, (state, { arenas }) => ({
        ...state,
        arenas,
        loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectArenasState, // feature selector
  selectArenas, // selector for `arenas` property
  selectLoading, // selector for `loading` property
} = arenasFeature;


// select the array of Arenas
export const selectAllArenas = selectArenas;