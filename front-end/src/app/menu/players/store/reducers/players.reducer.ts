import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import { joinPlayersAndTeams } from 'src/app/menu/arenas/utils/functions';
import { Team } from 'src/app/menu/models/team';
import { selectAllTeams } from 'src/app/menu/teams/store/reducers/teams.reducer';
import { Player } from '../../../models/player';
import * as PlayersApiActions from '../actions/players.action';

interface State {
  players: Player[];
  loading: boolean;
}

const initialState: State = {
  players: [],
  loading: false,
};

export const playersFeature = createFeature({
  name: 'players',
  reducer: createReducer(
    initialState,
    on(PlayersApiActions.playersGetAll, (state) => ({
        ...state,
        loading: true,
    })),
    on(PlayersApiActions.playersGetAllSuccess, (state, { players }) => ({
        ...state,
        players,
        loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectPlayersState, // feature selector
  selectPlayers, // selector for `players` property
  selectLoading, // selector for `loading` property
} = playersFeature;


// select the array of Players
export const selectAllPlayers = selectPlayers;


//get Players match Teams

export const selectedPlayersWithTeams = createSelector(
  selectAllPlayers,
  selectAllTeams,
  (players: Player[],teams: Team[]) =>{
    if(players.length > 0 && teams.length > 0){
      return joinPlayersAndTeams(players,teams)
    }
    return []
  });