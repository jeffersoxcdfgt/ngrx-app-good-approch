import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { ReagularSeasonGame } from '../../../models/regular-season-game';
import * as RegularSeasonGamesApiActions from '../actions/regular-season-games.action';

interface State {
  regularseasongames: ReagularSeasonGame[];
  loading: boolean;
}

const initialState: State = {
  regularseasongames: [],
  loading: false,
};

export const regularseasongamesFeature = createFeature({
  name: 'regularseasongames',
  reducer: createReducer(
    initialState,
    on(RegularSeasonGamesApiActions.regularseasongamesGetAll, (state) => ({
        ...state,
        loading: true,
    })),
    on(RegularSeasonGamesApiActions.regularseasongamesGetAllSuccess, (state, { regularseasongames }) => ({
        ...state,
        regularseasongames,
        loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectRegularseasongamesState, // feature selector
  selectRegularseasongames, // selector for `Regular season games` property
  selectLoading, // selector for `loading` property
} = regularseasongamesFeature;


// select the array of regular season games
export const selectAllRegularSeasonGames = selectRegularseasongames;
