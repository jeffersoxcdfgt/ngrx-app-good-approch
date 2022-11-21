import * as fromReducer from '../reducers/arenas-delete.reducer';
import { arenaDeleteRow, arenaDeleteRowSuccess } from '../actions/arenas-delete.action';
import { Arena } from '../../../../models/arena';

export const initialState: fromReducer.State = {
    arenadelete: null,
    loading: false,
  };
describe('ArenasDeleteReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState,action)
      expect(state).toBe(initialState);
    });
  });

  describe('arenaDeleteRow action', () => {
    it('should delete arena the state in an immutable way', () => {
      const action = arenaDeleteRow({ arenaid: 1 });
      const state = fromReducer.reducer(initialState,action)
      expect(state.loading).toEqual(true);
      expect(state).not.toBe(initialState);
    });
  });

  describe('arenaDeleteRowSuccess action', () => {
    it('should delete arena successfully the state in an immutable way', () => {
      const newState: Arena = {
            arenaTitle: 'title1',
            Capacity: '16.6',
            About: 'About',
            Logo: 'logo',
            Photo: 'photo'
      }

      const action = arenaDeleteRowSuccess({ arenadelete: newState });
      const state = fromReducer.reducer(initialState,action)
      expect(state.loading).toEqual(false);
      expect(state).not.toBe(initialState);
    });
  });


});