import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ArenasAddEditService } from '../services/arenas-add-edit.service';
import { ArenaAddEditActionTypes } from '../actions/arenas-add-edit.action';
import { Arena } from '../../../../models/arena';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ArenasAddEditEffects {

  public addArena$ = createEffect(() => this.actions$.pipe(
        ofType(ArenaAddEditActionTypes.GET_ARENA_ADD),
        map((dataparse:any) => dataparse.arenarow),
        mergeMap((datarow:Arena) => this.arenasAddEditService.insert(datarow)
          .pipe(
            map((id:number) => ({ 
                type: ArenaAddEditActionTypes.GET_ARENA_ADD_SUCCESS, 
                resultarena: id  
            })),
            catchError((error) => of({ type: ArenaAddEditActionTypes.GET_ARENA_ADD_ERROR, err:error}))
          ))
        )
  );



  public addArenaSuccess$ = createEffect(() =>  this.actions$.pipe(
    ofType(ArenaAddEditActionTypes.GET_ARENA_ADD_SUCCESS),
     tap((_) => {
        this.router.navigate(['/menu/arenas'])
    })),
    { dispatch: false }
  );

  
  constructor(
    private router: Router,
    private actions$: Actions,
    private arenasAddEditService: ArenasAddEditService
  ) {}
}