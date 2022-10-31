import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { filter } from 'rxjs';
import { ReagularSeasonGame } from '../models/regular-season-game';
import { regularseasongamesGetAll } from './store/actions/regular-season-games.action';
import { selectAllRegularSeasonGames } from './store/reducers/regular-season-games.reducer';

export const CLEANARRAY =  filter((val:ReagularSeasonGame[]) => val.length >0)

@Component({
  selector: 'app-regular-season-games',
  templateUrl: './regular-season-games.component.html',
  styleUrls: ['./regular-season-games.component.scss']
})
export class RegularSeasonGamesComponent implements OnInit {

  regularseasongamesList$ : Observable<ReagularSeasonGame[]> = new Observable<ReagularSeasonGame[]>();

  constructor(private store :Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(regularseasongamesGetAll());
    this.regularseasongamesList$ = this.store.select(selectAllRegularSeasonGames).pipe(CLEANARRAY);
  }

}
