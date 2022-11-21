import * as fromReducer from './arenas-add-edit.reducer';
import { arenaAddRow, arenaAddRowError, arenaAddRowSuccess, arenaUpdateRow, arenaUpdateRowSuccess } from '../actions/arenas-add-edit.action';
import { Arena } from '../../../../models/arena';

const initialState: fromReducer.State = {
    resultarena: null,
    loading: false,
    err:null,
};  

describe('ArenasReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {      
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState,action)
      expect(state).toBe(initialState);
    });
  });

  describe('arenaAddRow action', () => {
    it('should add elements to the state in an immutable way', () => {
      const newState: Arena = {
            arenaTitle: 'title1',
            Capacity: '16.6',
            About: 'About',
            Logo: 'logo',
            Photo: 'photo'
      }
        
      const action = arenaAddRow({ arenarow: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state.loading).toEqual(true);
      expect(state).not.toBe(initialState);
    });
  });

  describe('arenaAddRowSuccess action', () => {
    it('should add elements successfully to the state in an immutable way', () => {
      const action = arenaAddRowSuccess({ resultarena: 1 });
      const state = fromReducer.arenaAddEditFeature.reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state).not.toBe(initialState);
    });
  });

  describe('arenaUpdateRow action', () => {
    it('should update elements to the state in an immutable way', () => {
        const newState: Arena = {
            arenaTitle: 'title1',
            Capacity: '16.6',
            About: 'About',
            Logo: 'logo',
            Photo: 'photo'
      }
      const action = arenaUpdateRow({ arenarow: newState });
      const state = fromReducer.arenaAddEditFeature.reducer(initialState, action);
      expect(state).toEqual(fromReducer.reducer(initialState,action));
      expect(state).not.toBe(initialState);
    });
  });



  describe('arenaUpdateRowSuccess action', () => {
    it('should update elements to the state in an immutable way', () => {
      const newState: Arena = {
            arenaTitle: 'title1',
            Capacity: '16.6',
            About: 'About',
            Logo: 'logo',
            Photo: 'photo'
      }
        
      const action = arenaUpdateRowSuccess({ resultarena: newState });
      const state = fromReducer.arenaAddEditFeature.reducer(initialState, action);
      expect(state).toEqual(fromReducer.reducer(initialState,action));
      expect(state).not.toBe(initialState);
    });
  });

  describe('arenaAddRowError action', () => {
    it('should return errorresponse in immutable way', () => {
      const newState: Error= {
        name: 'testerror',
        message: 'message error'
    };
      const action = arenaAddRowError({ err: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state).not.toBe(initialState);
    });
  });


});