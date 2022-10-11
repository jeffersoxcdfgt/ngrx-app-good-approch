import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { Player } from '../../models/player';
import { playerGetById } from './store/actions/players-id.action';
import { selectGetPlayerById } from './store/reducers/players-id.reducer';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.scss']
})
export class PlayersViewComponent implements OnInit {

  player$ : Observable<Player> = new Observable<Player>();

  constructor(private store :Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(playerGetById());
    this.player$ = this.store.select(selectGetPlayerById).pipe(CLEAN_NULL);
  }

}
