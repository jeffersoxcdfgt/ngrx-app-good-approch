import {Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { Player } from '../../models/player';
import { teamsGetAll } from '../../teams/store/actions/teams.action';
import { playerGetById } from './store/actions/players-id.action';
import { selectedOnePlayerByListTeams } from './store/reducers/players-id.reducer';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.scss']
})
export class PlayersViewComponent implements OnInit {

  player$ : Observable<Player> = new Observable<Player>();
  typeView :string = '';
  formPlayer: FormGroup;

  constructor(private store :Store<State>,private formBuilder: FormBuilder,
    location: Location) {
    this.typeView = location.path();
    this.formPlayer = this.formBuilder.group({
      firstname:[''],
      lastname:['']
    })
   }

  ngOnInit(): void {

    this.store.dispatch(teamsGetAll());
    this.store.dispatch(playerGetById());
    this.player$ = this.store.select(selectedOnePlayerByListTeams).pipe(CLEAN_NULL);
  }

}
