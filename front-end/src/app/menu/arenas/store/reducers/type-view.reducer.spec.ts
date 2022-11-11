import * as fromReducer from '../reducers/type-view.reducer';
import { sendTypeView,sendTypeViewSuccess } from '../actions/type-view.action';

interface State {
    sendview:string
    typeview: string;
    loading: boolean;
    err: any | null;
}
  
const initialState: State = {
    sendview:'',
    typeview: '',
    loading: false,
    err:null,
 };
  

describe('TypeViewReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('sendTypeView action', () => {
    it('should change the view and update the state in an immutable way', () => {
      const action = sendTypeView({sendview:'Grid'});
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual({
        err: null,
        loading:true,
        sendview:"Grid",
        typeview: ""
    });
      expect(state).not.toBe(initialState);
    });
  });


});