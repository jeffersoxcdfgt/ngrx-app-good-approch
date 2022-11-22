import { createFeature, createReducer , on , createSelector} from '@ngrx/store';
import { getOnePlayerByTeams } from 'src/app/menu/arenas/utils/functions';
import { Team } from 'src/app/menu/models/team';
import { selectAllTeams } from 'src/app/menu/teams/store/reducers/teams.reducer';
import { Player } from '../../../../models/player';
import * as PlayerByIdApiActions from '../actions/players-id.action';

export interface State {
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


export const selectedOnePlayerByListTeams = createSelector(
  selectGetPlayerById,
  selectAllTeams,
  (player: Player|null,teams: Team[]):Player|null =>{
    if(!!player && player.id !=='' && !!teams && teams.length >0){
       return getOnePlayerByTeams(player, teams);
    }
    return  player; 
  });