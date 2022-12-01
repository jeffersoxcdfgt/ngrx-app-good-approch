import * as fromReducer from '../reducers/type-view-team.reducer';
import { sendTypeTeamView,sendTypeTeamViewSuccess } from '../actions/type-view-team.action';

interface State {
    sendviewteam:string
    typeviewteam: string;
    loading: boolean;
    err: any | null;
}
  
const initialState: State = {
    sendviewteam:'',
    typeviewteam: '',
    loading: false,
    err:null,
 };
  

describe('TypeViewTeamReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('sendTypeTeamView action', () => {
    it('should change the view and update the state in an immutable way', () => {
      const action = sendTypeTeamView({sendviewteam:'Grid'});
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual({
        err: null,
        loading:true,
        sendviewteam:"Grid",
        typeviewteam: ""
    });
      expect(state).not.toBe(initialState);
    });
  });


  describe('sendTypeViewSuccess action', () => {
    it('should change the view successfully and update the state in an immutable way', () => {
      const action = sendTypeTeamViewSuccess({typeviewteam:'Grid'});
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual({
        err: null,
        loading:false,
        sendviewteam:"",
        typeviewteam: "Grid"
    });
      expect(state).not.toBe(initialState);
    });
  });


});