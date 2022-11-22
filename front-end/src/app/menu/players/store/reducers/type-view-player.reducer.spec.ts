import * as fromReducer from '../reducers/type-view-player.reducer';
import { sendTypePlayerView,sendTypePlayerViewSuccess } from '../actions/type-view-player.action';

const initialState: fromReducer.State = {
    typeviewplayer: '',
    loading: false,
    err:null,
    sendviewplayer:''
};  

describe('TypeViewReducerPlayer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('sendTypePlayerView action', () => {
    it('should change the view and update the state in an immutable way', () => {
      const action = sendTypePlayerView({sendviewplayer:'Grid'});
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual({
        err: null,
        loading:true,
        sendviewplayer:"Grid",
        typeviewplayer: ""
    });
      expect(state).not.toBe(initialState);
    });
  });


  describe('sendTypePlayerViewSuccess action', () => {
    it('should change the view successfully and update the state in an immutable way', () => {
      const action = sendTypePlayerViewSuccess({typeviewplayer:'Grid'});
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual({
        err: null,
        loading:false,
        sendviewplayer:"",
        typeviewplayer: "Grid"
    });
      expect(state).not.toBe(initialState);
    });
  });


});