import * as fromReducer from './players-add-edit.reducer';
import { playerAddRow, playerAddRowSuccess, playerUpdateRow , playerUpdateRowSuccess , playerAddRowError } from '../actions/players-add-edit.action';
import { Player } from '../../../../models/player';

const initialState: fromReducer.State = {
    resultplayer: null,
    loading: false,
    err:null,
  
  };

describe('PlayerAddEditReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('playerAddRow action', () => {
    it('should retrieve add Players the state in an immutable way', () => {
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
      };
      const action = playerAddRow({ playerrow: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state.loading).toEqual(true);
      expect(state).not.toBe(initialState);
    });
  });

  describe('playerAddRowSuccess action', () => {
    it('should add elements successfully to the state in an immutable way', () => {
      const action = playerAddRowSuccess({ resultplayer: 1 });
      const state = fromReducer.playerAddEditFeature.reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state).not.toBe(initialState);
    });
  });

  describe('playerUpdateRow action', () => {
    it('should update elements to the state in an immutable way', () => {
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
        };
      const action = playerUpdateRow({ playerrow:newState  });
      const state = fromReducer.playerAddEditFeature.reducer(initialState, action);
      expect(state).toEqual(fromReducer.reducer(initialState,action));
      expect(state).not.toBe(initialState);
    });
  });

  describe('playerUpdateRowSuccess action', () => {
    it('should update elements to the state in an immutable way', () => {
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
        };        
      const action = playerUpdateRowSuccess({ resultplayer: newState });
      const state = fromReducer.playerAddEditFeature.reducer(initialState, action);
      expect(state).toEqual(fromReducer.reducer(initialState,action));
      expect(state).not.toBe(initialState);
    });
  });

  describe('playerAddRowError action', () => {
    it('should return errorresponse in immutable way', () => {
      const newState: Error= {
        name: 'testerror',
        message: 'message error'
    };
      const action = playerAddRowError({ err: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state).not.toBe(initialState);
    });
  });


});