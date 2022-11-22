import * as fromReducer from './players-id.reducer';
import { playerGetById,playerGetByIdSuccess} from '../actions/players-id.action';
import { Player } from '../../../../models/player';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';

const initialState: fromReducer.State = {
    playerbyid: null,
    loading: false,
 };
 

describe('PlayerIdReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState,action);
      expect(state).toBe(initialState);
    });
  });

  describe('playerGetById action', () => {
    it('should retrieve all players by id, the state in an immutable way', () => {
      const action = playerGetById();
      const state =  fromReducer.reducer(initialState,action)
      expect(state.loading).toEqual(true);
      expect(state).not.toBe(initialState);;
    });
  });

  describe('playerGetByIdSuccess action', () => {
    it('should retrieve all players by id successfully, the state in an immutable way', () => {
        const newState: Player= {
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

      const action = playerGetByIdSuccess({playerbyid:newState});
      const state =  fromReducer.reducer(initialState,action)
      expect(state.loading).toEqual(false);
      expect(state).not.toBe(initialState);;
    });
  });

  describe('selectors', () => {
    let store: MockStore;
  
    afterEach(() => {
      store?.resetSelectors();
    });
  
    it('selectedOnePlayerByListTeams', (done: any) => {
      TestBed.configureTestingModule({
        providers: [
          provideMockStore({
            selectors: [
              {
                selector: fromReducer.selectedOnePlayerByListTeams,
                value: [
                  {
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
                  },
                ],
              },
            ],
          }),
        ],
      });
  
      store = TestBed.inject(MockStore);
  
      store.select(fromReducer.selectedOnePlayerByListTeams).subscribe((mockPlayers) => {
        expect(mockPlayers).toEqual([
          {
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
          },
        ]);
        done();
      });
    });

  });

});