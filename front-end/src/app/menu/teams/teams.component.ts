import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable , filter} from 'rxjs';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { arenasGetAll } from '../arenas/store/actions/arenas.action';
import { Team } from '../models/team';
import { teamsGetAll } from './store/actions/teams.action';
import { selectedTecnologisWithJobs } from './store/reducers/teams.reducer';

export const CLEANTEAMSARENAS =  filter((val:Team[]) => val.length >0 )

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teamsList$ : Observable<Team[]> = new Observable<Team[]>();
  constructor(private store :Store<State>) { }

  ngOnInit(): void {

    this.store.dispatch(arenasGetAll());
    this.store.dispatch(teamsGetAll());
    this.teamsList$ = this.store.select(selectedTecnologisWithJobs).pipe(CLEANTEAMSARENAS);

   }

}
