import { createFeature, createReducer , on } from '@ngrx/store';
import { Team } from 'src/app/menu/models/team';
import * as TeamDeletepiActions from '../actions/teams-delete.action';

interface State {
  teamdelete: Team|null;
  loading: boolean;
}

const initialState: State = {
    teamdelete: null,
  loading: false,
};

export const teamdeleteFeature = createFeature({
  name: 'teamdelete',
  reducer: createReducer(
    initialState,
    on(TeamDeletepiActions.teamDeleteRow, (state) => ({
       ...state,
        loading: true,
    })),
    on(TeamDeletepiActions.teamDeleteRowSuccess, (state, { teamdelete }) => ({
        ...state,
        teamdelete,
        loading: false,    
      }
     )
    )),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTeamdeleteState, // feature selector
  selectTeamdelete, // selector for `team` property
  selectLoading, // selector for `loading` property
} = teamdeleteFeature;

