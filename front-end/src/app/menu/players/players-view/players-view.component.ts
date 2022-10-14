import {Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { Player } from '../../models/player';
import { Team } from '../../models/team';
import { teamsGetAll } from '../../teams/store/actions/teams.action';
import { selectAllTeams } from '../../teams/store/reducers/teams.reducer';
import { CLEANTEAMSARENAS } from '../../teams/teams.component';
import { playerGetById } from './store/actions/players-id.action';
import { selectedOnePlayerByListTeams } from './store/reducers/players-id.reducer';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)

const MAP_SET_TEAM = map((teams:Team[]) => teams.map((row:Team)=>({id:row.id , name:row.name})));

const MAP_ONE_ROW = map((player:any|Player) =>([{ id:player.teamid, name:player?.team }]));
const FILTER_ROW = filter((playerrow:any|Player) => {
    return playerrow !== undefined && playerrow[0].id !== undefined
});

interface DataLoad {
  id: string;
  name: string;
}

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.scss']
})
export class PlayersViewComponent implements OnInit {

  player$ : Observable<Player> = new Observable<Player>();
  teamSet$: Observable<any|DataLoad[]> = of([]);
  teamsList$: Observable<any|DataLoad[]> = of([]);

  typeView :string = '';
  formPlayer: FormGroup;

  constructor(private store :Store<State>,private formBuilder: FormBuilder,
    location: Location) {
    this.typeView = location.path();
    this.formPlayer = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      birthday:[''],
      height:[''],
      weight:[''],
      photo:[''],
      team:[''],
      number:['']
    })
   }

  ngOnInit(): void {

    this.store.dispatch(teamsGetAll());
    this.store.dispatch(playerGetById());
    this.player$ = this.store.select(selectedOnePlayerByListTeams).pipe(CLEAN_NULL);

    this.teamsList$ = this.store.select(selectAllTeams).pipe(CLEANTEAMSARENAS,MAP_SET_TEAM);
    this.teamSet$ = this.store.select(selectedOnePlayerByListTeams).pipe(CLEAN_NULL,MAP_ONE_ROW,FILTER_ROW);


  }

  save(){
  }

}
