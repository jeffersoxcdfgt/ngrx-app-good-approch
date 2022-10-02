import {Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable} from 'rxjs';;
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { CLEAN_NULL } from '../../arenas/arenas-view/arenas-view.component';
import { arenasGetAll } from '../../arenas/store/actions/arenas.action';
import { Team } from '../../models/team';
import { teamGetById } from './store/actions/teams-id.action';
import { selectedOneTeamsByListArenas} from './store/reducers/teams-id.reducer';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.scss']
})
export class TeamsViewComponent implements OnInit {

  team$ : Observable<Team> = new Observable<Team>();
  typeView :string = '';

  constructor(private store :Store<State>,location: Location) {
    this.typeView = location.path();
  }

  ngOnInit(): void {
    this.store.dispatch(teamGetById());
    this.store.dispatch(arenasGetAll());    
    this.team$ = this.store.select(selectedOneTeamsByListArenas).pipe(CLEAN_NULL);
  }

}
