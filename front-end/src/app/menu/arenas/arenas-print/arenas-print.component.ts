import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { Arena } from '../../models/arena';
import { removejscssfile , CLEANDATAARRAY , RemoveEnd } from '../../utils/functions';
import { arenasGetAll } from '../store/actions/arenas.action';
import { selectAllArenas } from '../store/reducers/arenas.reducer';

@Component({
  selector: 'app-arenas-print',
  templateUrl: './arenas-print.component.html',
  styleUrls: ['./arenas-print.component.scss']
})
export class ArenasPrintComponent implements OnInit {
  arenasList$ : Observable<Arena[]> = new Observable<Arena[]>();

  constructor(private store :Store<State>){}

  ngOnInit(): void {
    removejscssfile(`main_cerulean.css`, "css");
    RemoveEnd('style,link[rel="stylesheet"]');    
    this.store.dispatch(arenasGetAll());
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANDATAARRAY);
  }
}
