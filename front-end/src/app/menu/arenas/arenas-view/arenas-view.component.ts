import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { filter, first, map, Observable} from 'rxjs';;
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { selectId } from 'src/app/shared/routing/id.selectors';
import { Arena } from '../../models/arena';
import { arenaGetById } from './store/actions/arenas-id.action';
import { selectGetArenaById } from './store/reducers/arenas-id.reducer';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)
export const TYPE_VIEW = map((type:any) => type as string)

@Component({
  selector: 'app-arenas-view',
  templateUrl: './arenas-view.component.html',
  styleUrls: ['./arenas-view.component.scss']
})
export class ArenasViewComponent implements OnInit {

  selectedId$ = this.store.pipe(select(selectId));
  arena$ : Observable<Arena> = new Observable<Arena>();
  typeView$ : Observable<string> = new Observable<string>();

  constructor(private store :Store<State>) { }

  ngOnInit(): void { 
     this.store.dispatch(arenaGetById());
     this.arena$ = this.store.select(selectGetArenaById).pipe(CLEAN_NULL)
     this.typeView$ = this.arena$.pipe(TYPE_VIEW);
  }

}
