import { createFeature, createReducer , createSelector, on } from '@ngrx/store';
import * as TypeViewpiActions from '../actions/type-view.action';

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

export const typeViewFeature = createFeature({
  name: 'typeview',
  reducer: createReducer(
    initialState,
    on(TypeViewpiActions.sendTypeView, (state, { sendview  }) => ({
       ...state,
        sendview,
        loading: true,
    })),
    on(TypeViewpiActions.sendTypeViewSuccess, (state, { typeview }) => ({
        ...state,
        typeview,
        loading: false,    
      }
    )))
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTypeviewState, // feature selector
  selectTypeview, // selector for `type view` property
  selectLoading, // selector for `loading` property
} = typeViewFeature;


// select the type view
export const setTypeViewResp = selectTypeview;

export const errorTypeView = createSelector( selectTypeviewState , ( state: State ) => {
  return !!state && !!state.err ? state.err : null;
});