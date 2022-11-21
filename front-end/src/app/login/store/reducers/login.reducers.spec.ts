import * as fromReducer from './login.reducers';
import { getTokenData, getTokenDataError, getTokenDataSuccess, logOutuser } from '../actions/login.actions';
import { Login, ResponseLogin } from '../../model/login';

const initialState: fromReducer.State  = {
    requestdata: null,
    responsedata:fromReducer.getTokenUser(),
    error: null,
  };
  

describe('LoginReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type:'Unknown'
      };
      const state = fromReducer.tokenReducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('getTokenData action', () => {
    it('should retrieve login data and update the state in an immutable way', () => {
      const newState: Login= {
        email:'admin@admin.com',
        password:'admin'
    };
      const action = getTokenData({ request: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state.requestdata).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });

  describe('getTokenDataSuccess action', () => {
    it('should return successfully response in immutable way', () => {
      const newState: ResponseLogin= {
        status: 'success',
        token: '741258963',
        email:'admin@admin.com',
        password:'admin'
    };
      const action = getTokenDataSuccess({ response: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state.responsedata).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });


  describe('getTokenDataError action', () => {
    it('should return errorresponse in immutable way', () => {
      const newState: Error= {
        name: 'testerror',
        message: 'message error'
    };
      const action = getTokenDataError({ err: newState });
      const state = fromReducer.reducer(initialState, action);
      expect(state).not.toBe(initialState);
    });
  });

  describe('logOutuser action', () => {
    it('should return logout in immutable way', () => {
      const action = logOutuser();
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });


});