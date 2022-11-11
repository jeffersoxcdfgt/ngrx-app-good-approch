import * as fromReducer from './arenas.reducer';
import { arenasGetAll, arenasGetAllSuccess } from '../actions/arenas.action';
import { Arena } from '../../../models/arena';

interface State {
    arenas: Arena[];
    loading: boolean;
  }
  
  const initialState: State = {
    arenas: [],
    loading: false,
  };

describe('ArenasReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialState, action);
      expect(state).toBe(initialState);
    });
  });

  describe('arenasGetAll action', () => {
    it('should retrieve all arenas and update the state in an immutable way', () => {
      const newState: Array<Arena>= [];
      const action = arenasGetAll();
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual({arenas:newState,loading:true});
      expect(state).not.toBe(initialState);
    });
  });

  describe('arenasGetAllSuccess action', () => {
    it('should retrieve all arenas and update the state in an immutable way', () => {
      const newState: Array<Arena>= [
        {
            'id':1,
            'arenaTitle':'Air Canada Centre',
            'Capacity':'19.800',
            'About':`	<div style="text-align: left;">
              <strong>Air Canada Centre (ACC)</strong>&nbsp;is a multi-purpose indoor sporting arena located on Bay Street in the South Core district of Downtown Toronto, Ontario, Canada. It is the home of the Toronto Maple Leafs of the National Hockey League (NHL), the Toronto Raptors of the National Basketball ... <a class="js-more-hint">more</a>
              <div class="js-more-box hide">
                <strong>Air Canada Centre (ACC)</strong>&nbsp;is a multi-purpose indoor sporting arena located on Bay Street in the South Core district of Downtown Toronto, Ontario, Canada. It is the home of the Toronto Maple Leafs of the National Hockey League (NHL), the Toronto Raptors of the National Basketball Association (NBA) and the Toronto Rock of the National Lacrosse League (NLL). In addition, the Toronto Marlies of the American Hockey League play occasional games at the arena, and the Raptors 905 of the NBA Development League plan to play occasional games at the venue as well. The area was previously home to the Toronto Phantoms of the Arena Football League (AFL) during their brief existence. The arena is popularly known as the ACC or the Hangar (the latter nickname came from its sponsorship by Air Canada).
                <p></p>
                <p>The arena is owned and operated by Maple Leaf Sports &amp; Entertainment Ltd. (MLSE), the same group that owns both the Leafs and Raptors, as well as their respective development teams, and is 665,000 square feet (61,800 square metres) in size. In 2008, the ACC was the fifth busiest arena in the world and the busiest in Canada. Air Canada Centre is connected to Union Station and the underground pedestrian PATH system, providing access to public transportation (TTC&#39;s Union subway station and GO Transit). There are also 13,000 parking spaces. The Air Canada Centre has, from its initial design to completion, revolutionized many concepts included in new arenas and stadiums built since then. These features include luxury suites accessible on the ground floor, splitting the main scoreboard into several sections, rotating all sponsor signage in the bowl at once (to allow dominant messaging), and multiple restaurants in and out of the main arena bowl view.</p>
              </div>
              </div>`,
            'Logo':'',
            'Photo':''
          },
      ];
      const action = arenasGetAllSuccess({arenas:newState});
      const state = fromReducer.reducer(initialState, action);

      expect(state).toEqual({arenas:newState,loading:false});
      expect(state).not.toBe(initialState);
    });
  });



});