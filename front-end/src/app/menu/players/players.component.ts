import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { playersGetAll } from './store/actions/players.action';
import { selectAllPlayers, selectedPlayersWithTeams } from './store/reducers/players.reducer';
import { filter } from 'rxjs';
import { teamsGetAll } from '../teams/store/actions/teams.action';

export const CLEANARRAY =  filter((val:Player[]) => val.length >0)

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  playersList$ : Observable<Player[]> = new Observable<Player[]>();

  constructor(private store :Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(playersGetAll());
    this.store.dispatch(teamsGetAll());
    this.playersList$ = this.store.select(selectedPlayersWithTeams).pipe(CLEANARRAY);

    /*this.store.select(selectAllPlayers).pipe(CLEANARRAY).subscribe((x)=>{
      console.log(x,111)
    })*/

  }

}
