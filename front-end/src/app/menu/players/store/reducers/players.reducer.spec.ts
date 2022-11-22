import * as fromReducer from './players.reducer';
import { playersGetAll, playersGetAllSuccess } from '../actions/players.action';
import { Player } from '../../../models/player';

interface State {
    players: Player[];
    loading: boolean;
  }
  
  const initialState: State = {
    players: [],
    loading: false,
  };

describe('PlayersReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('playersGetAll action', () => {
    it('should retrieve all players and update the state in an immutable way', () => {
      const newState: Array<Player>= [];
      const action = playersGetAll();
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual({players:newState,loading:true});
      expect(state).not.toBe(initialState);
    });
  });

  describe('playersGetAllSuccess action', () => {
    it('should retrieve all players and update the state in an immutable way', () => {
      const newState: Array<Player>= [
        {
            id:1,
            photo:'',
            firstname:'Andre',
            lastname:'Drummond',
            birthday:'10.08.1993',
            country:'USA',
            height:'211',
            weight:'126',
            college:'Connecticut',
            nbadebut:'2012',
            position:'Center',
            team:1,
            number:'0',
            iconflag:'flag-icon flag-icon-us'
          },
      ];
      const action = playersGetAllSuccess({players:newState});
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual({players:newState,loading:false});
      expect(state).not.toBe(initialState);
    });
  });



});