import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { filter, map, Observable} from 'rxjs';;
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { selectId } from 'src/app/shared/routing/id.selectors';
import { Arena } from '../models/arena';
import { arenasGetAll } from './store/actions/arenas.action';
import { selectAllArenas } from './store/reducers/arenas.reducer';

export const CLEANARRAY =  filter((val:Arena[]) => val.length >0 )

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {

  selectedId$ = this.store.pipe(select(selectId));
  arenasList$ : Observable<Arena[]> = new Observable<Arena[]>();

  constructor(private store :Store<State>) { }

  ngOnInit(): void { 
    this.store.dispatch(arenasGetAll());
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANARRAY);
  }

}
