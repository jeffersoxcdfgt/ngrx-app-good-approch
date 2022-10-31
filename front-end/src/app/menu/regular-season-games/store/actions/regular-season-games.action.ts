import { createAction, props } from '@ngrx/store';
import { ReagularSeasonGame } from '../../../models/regular-season-game';

export enum RegularSeasonGamesActionTypes {
  GET_REGULAR_SEASON_GAMES = '[All] Regular season games',
  GET_REGULAR_SEASON_GAMES_SUCCESS = '[GET_REGULAR_SEASON_GAMES] Regular season games Success',
  GET_REGULAR_SEASON_GAMES_ERROR = '[All] Regular season games Error'
}

// list regular season games

export const regularseasongamesGetAll = createAction(RegularSeasonGamesActionTypes.GET_REGULAR_SEASON_GAMES);
export const regularseasongamesGetAllSuccess = createAction(RegularSeasonGamesActionTypes.GET_REGULAR_SEASON_GAMES_SUCCESS, props<{regularseasongames: ReagularSeasonGame[]}>());
export const regularseasongamesGetAllError = createAction(RegularSeasonGamesActionTypes.GET_REGULAR_SEASON_GAMES_ERROR, props<{err: Error}>());