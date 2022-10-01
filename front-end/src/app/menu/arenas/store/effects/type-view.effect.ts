import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TypeViewService } from '../services/type-view.service';
import { TypeViewActionTypes } from '../actions/type-view.action';


@Injectable()
export class TypeViewEffects {

  public typeView$ = createEffect(() => this.actions$.pipe(
    ofType(TypeViewActionTypes.TYPE_VIEW),
    map((dataparse:any) => dataparse.sendview),
    mergeMap((data:string) => this.typeViewService.setTypeView(data)
      .pipe(
        map((resp:string) => ({ 
            type: TypeViewActionTypes.TYPE_VIEW_SUCCESS, 
            typeview: resp 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private typeViewService: TypeViewService
  ) {}
}