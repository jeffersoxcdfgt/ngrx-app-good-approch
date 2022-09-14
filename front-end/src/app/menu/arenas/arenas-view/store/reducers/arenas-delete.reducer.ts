import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { Arena } from '../../../../models/arena';
import { selectAllArenas } from '../../../store/reducers/arenas.reducer';
import * as ArenaDeletepiActions from '../actions/arenas-delete.action';

interface State {
  arenadelete: Arena|null;
  loading: boolean;
}

const initialState: State = {
  arenadelete: null,
  loading: false,
};

export const arenadeleteFeature = createFeature({
  name: 'arenadelete',
  reducer: createReducer(
    initialState,
    on(ArenaDeletepiActions.arenaDeleteRow, (state) => ({
       ...state,
        loading: true,
    })),
    on(ArenaDeletepiActions.arenaDeleteRowSuccess, (state, { arenadelete }) => ({
        ...state,
        arenadelete,
        loading: false,    
      }
     )
    )),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectArenadeleteState, // feature selector
  selectArenadelete, // selector for `arena` property
  selectLoading, // selector for `loading` property
} = arenadeleteFeature;


// select response delete operation

export const selectGetArenaDelete = createSelector(
  selectAllArenas,
  selectArenadelete,
  (arenas:Arena[],id:number|any) =>{
    if(!!id && arenas.length>0){
      const res = arenas.filter((arena:Arena) => arena.id !== +id )
      return res
    }
    return  null
  });