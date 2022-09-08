import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ArenasService } from '../services/arenas.service';
import { ArenasActionTypes } from '../actions/arenas.action';
import { Arena } from '../../../models/arena';

@Injectable()
export class ArenasEffects {

  public selectArenas$ = createEffect(() => this.actions$.pipe(
    ofType(ArenasActionTypes.GET_ARENAS),
    mergeMap(() => this.arenasService.findAll()
      .pipe(
        map((data:Arena[]) => ({ 
            type: ArenasActionTypes.GET_ARENAS_SUCCESS, 
            arenas: data 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private arenasService: ArenasService
  ) {}
}