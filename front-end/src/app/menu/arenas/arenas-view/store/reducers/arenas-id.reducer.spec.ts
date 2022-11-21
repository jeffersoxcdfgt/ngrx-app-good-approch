import * as fromReducer from './arenas-id.reducer';
import { arenaGetById , arenaGetByIdSuccess } from '../actions/arenas-id.action';
import { Arena } from '../../../../models/arena';

const initialState: fromReducer.State = {
    arenabyid: null,
    loading: false,
  };  

describe('arenasByIdReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState,action)
      expect(state).toBe(initialState);
    });
  });

  describe('arenaGetById action', () => {
    it('should retrieve all data by id the state in an immutable way', () => {
      const action = arenaGetById();
      const state =  fromReducer.reducer(initialState,action)
      expect(state.loading).toEqual(true);
      expect(state).not.toBe(initialState);
    });
  });

  describe('arenaGetByIdSuccess action', () => {
    it('should retrieve all data successfully by id the state in an immutable way', () => {
        const newState: Arena = {
            arenaTitle: 'title1',
            Capacity: '16.6',
            About: 'About',
            Logo: 'logo',
            Photo: 'photo'      }
        
      const action = arenaGetByIdSuccess({arenabyid:newState});
      const state =  fromReducer.reducer(initialState,action);
      expect(state.arenabyid).toBe(newState);
      expect(state).not.toBe(initialState);
    });
  });


});