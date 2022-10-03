import {Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store'
import { Observable, of} from 'rxjs';
import {  map } from 'rxjs/operators';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { CLEAN_NULL } from '../../arenas/arenas-view/arenas-view.component';
import { CLEANARRAY } from '../../arenas/arenas.component';
import { arenasGetAll } from '../../arenas/store/actions/arenas.action';
import { selectAllArenas } from '../../arenas/store/reducers/arenas.reducer';
import { Arena } from '../../models/arena';
import { Team } from '../../models/team';
import { teamGetById } from './store/actions/teams-id.action';
import { selectedOneTeamsByListArenas} from './store/reducers/teams-id.reducer';

const MAP_SET_ARENA = map((arenas:Arena[]) => arenas.map((row:Arena)=>({id:row.id , name:row.arenaTitle})));
const MAP_ONE_ROW = map((team:any|Team) =>([{ id:team.arenaid, name:team?.arena }]));
const MAP_DIVISON = map((team:Team)=>[{id:team.divison, name:team.divison}]);

interface DataLoad {
  id: string;
  name: string;
}

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.scss']
})
export class TeamsViewComponent implements OnInit {

  team$ : Observable<Team> = new Observable<Team>();
  typeView :string = '';
  formTeam: FormGroup;
  arenaSet$: Observable<any|DataLoad[]> = of([]);
  arenasList$: Observable<any|DataLoad[]> = of([]);

  divisionSet$: Observable<any|DataLoad[]> = of([]);
  divisionList: DataLoad[] = [
    {id:'Atlantic',name:'Atlantic'},
    {id:'Central',name:'Central'},
    {id:'United Center',name:'United Center'},
    {id:'BMO Harris Bradley Center',name:'BMO Harris Bradley Center'},
    {id:'Staples Center',name:'Staples Center'},
  ];

  constructor(private store :Store<State>,
    location: Location,
    private formBuilder: FormBuilder) {
    this.typeView = location.path();

    this.formTeam = this.formBuilder.group({
      teamName:[''],
      founded:[''],
      about:[''],
      logo:[''],
      arena:[''],
      division:['']
    })
  }

  ngOnInit(): void {
    this.store.dispatch(teamGetById());
    this.store.dispatch(arenasGetAll());    
    this.team$ = this.store.select(selectedOneTeamsByListArenas).pipe(CLEAN_NULL);    

    //list of arenas
    this.arenaSet$ = this.store.select(selectedOneTeamsByListArenas).pipe(CLEAN_NULL,MAP_ONE_ROW);
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANARRAY,MAP_SET_ARENA);
    //list of arenas

    //Division
    this.divisionSet$ = this.store.select(selectedOneTeamsByListArenas).pipe(CLEAN_NULL,MAP_DIVISON);
    //Division
  }

}
