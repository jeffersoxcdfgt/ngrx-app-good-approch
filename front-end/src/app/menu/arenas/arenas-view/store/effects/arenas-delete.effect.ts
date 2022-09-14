import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ArenasDeleteService } from '../services/arenas-delete.service';
import { ArenaDeleteActionTypes } from '../actions/arenas-delete.action';
import { Router } from '@angular/router';
import { Store  } from '@ngrx/store';

@Injectable()
export class ArenasDeleteEffects {

    public deleteArena$ = createEffect(() => this.actions$.pipe(
        ofType(ArenaDeleteActionTypes.DELETE_ARENA),
        map((dataparse:any) => dataparse.arenaid ),
        mergeMap((id:number) => this.arenasDeleteService.delete(id)
          .pipe(
            map((data:any) => ({ 
                type: ArenaDeleteActionTypes.DELETE_ARENA_SUCCESS, 
                arenadelete: data 
            }))
          ))
        )
    );

  constructor(
    private router: Router,
    private actions$: Actions,
    private store: Store,
    private arenasDeleteService: ArenasDeleteService
  ) {}
}