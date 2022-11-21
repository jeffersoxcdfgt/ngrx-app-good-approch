import * as fromReducer from './login.reducers';
import { getTokenData, getTokenDataError, getTokenDataSuccess, logOutuser  } from '../actions/login.actions';
import { Login, ResponseLogin } from '../../model/login';

import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

const initialState: fromReducer.State  = {
    requestdata: null,
    responsedata:fromReducer.getTokenUser(),
    error: null,
};


const localStorageMock = {
    getItem(param:string){
        return '{"name":"John", "age":30, "city":"New York"}';
    }
};

const jsonMock = {
    parse(){
        return 'valueq'
    }
}
  

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


describe('Selectors', () => {
    let store: MockStore;
  
    afterEach(() => {
      store?.resetSelectors();
    });
  
    it('should return the mocked value', (done: any) => {
      TestBed.configureTestingModule({
        providers: [
          provideMockStore({
            selectors: [
              {
                selector: fromReducer.getTokenResponse,
                value: [
                  {
                    status: 'success',
                    token: '741258963',
                    email:'admin@admin.com',
                    password:'admin'
                  },
                ],
              },
            ],
          }),
        ],
      });
  
      store = TestBed.inject(MockStore);
  
      store.select(fromReducer.getTokenResponse).subscribe((mockResponse) => {
        expect(mockResponse).toEqual([
          {
            status: 'success',
            token: '741258963',
            email:'admin@admin.com',
            password:'admin'
          },
        ]);
        done();
      });
    });
  });

  describe('getTokenUser',()=>{
    it('should getTokenUser response requestdata and format well',()=>{
        const jsonstr = `{
            "requestdata":{
                "status": "success",
                "token": "741258963",
                "email":"admin@admin.com",
                "password":"admin"
            }         
        }`
         spyOn(localStorage,'getItem').and.returnValue(jsonstr)       
        const result = fromReducer.getTokenUser()
        expect(result).toEqual(JSON.parse(jsonstr).requestdata)
    })
  })

});