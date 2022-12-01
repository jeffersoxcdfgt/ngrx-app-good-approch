import * as fromReducer from './teams.reducer';
import { teamsGetAll, teamsGetAllSuccess } from '../actions/teams.action';
import { Team } from '../../../models/team';

interface State {
    teams: Team[];
    loading: boolean;
  }
  
  const initialState: State = {
    teams: [],
    loading: false,
  };

describe('TeamsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('teamsGetAll action', () => {
    it('should retrieve all teams and update the state in an immutable way', () => {
      const newState: Array<Team>= [];
      const action = teamsGetAll();
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual({teams:newState,loading:true});
      expect(state).not.toBe(initialState);
    });
  });

  describe('teamsGetAllSuccess action', () => {
    it('should retrieve all teams and update the state in an immutable way', () => {
      const newState: Array<Team>= [
        {
            id:1,
            logo:``,
            name:"Boston Celtics",
            Founded:"1947",
            About:``,            
            divison:"Atlantic",
            arena:1	
          },
      ];
      const action = teamsGetAllSuccess({teams:newState});
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual({teams:newState,loading:false});
      expect(state).not.toBe(initialState);
    });
  });



});