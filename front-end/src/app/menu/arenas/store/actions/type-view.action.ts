import { createAction, props } from '@ngrx/store';

export enum TypeViewActionTypes {
  TYPE_VIEW = '[TYPE_VIEW] type view',
  TYPE_VIEW_SUCCESS = '[TYPE_VIEW] type view successfuly',
}

// Type view

export const sendTypeView = createAction(TypeViewActionTypes.TYPE_VIEW, props<{sendview: string}>());
export const sendTypeViewSuccess = createAction(TypeViewActionTypes.TYPE_VIEW_SUCCESS, props<{typeview: string}>());

