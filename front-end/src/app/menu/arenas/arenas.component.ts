import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { selectId } from 'src/app/shared/routing/id.selectors';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {

  selectedId$ = this.store.pipe(select(selectId));

  constructor(private store :Store<State>) { }

  ngOnInit(): void { }

}
