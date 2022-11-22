import * as fromReducer from './players-delete.reducer';
import { playerDeleteRow ,playerDeleteRowSuccess } from '../actions/players-delete.action';
import { Player } from '../../../../models/player';

const initialState: fromReducer.State = {
    playerdelete: null,
    loading: false,
  };

describe('playerDeleteReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('playerDeleteRow action', () => {
    it('should removew player the state in an immutable way', () => {
      const action = playerDeleteRow({ playerid: 1 });
      const state = fromReducer.reducer(initialState, action);
      expect(state.loading).toEqual(true);
      expect(state).not.toBe(initialState);
    });
  });

  describe('playerDeleteRowSuccess action', () => {
    it('should delete player successfully the state in an immutable way', () => {
      const newState: Player = {
        id: '1',
        photo: '3320808',
        firstname: '',
        lastname: '',
        birthday: '',
        country: '',
        height: '',
        weight: '',
        college: '',
        nbadebut: '',
        position: '',
        team: '',
        number: '',
        iconflag: '',
      }

      const action = playerDeleteRowSuccess({ playerdelete: newState });
      const state = fromReducer.reducer(initialState,action)
      expect(state.loading).toEqual(false);
      expect(state).not.toBe(initialState);
    });
  });


});