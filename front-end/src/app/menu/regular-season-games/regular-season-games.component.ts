import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { filter } from 'rxjs';
import { ReagularSeasonGame } from '../models/regular-season-game';
import { regularseasongamesGetAll } from './store/actions/regular-season-games.action';
import { selectAllRegularSeasonGames } from './store/reducers/regular-season-games.reducer';
import { map, takeUntil } from 'rxjs/operators'

export const CLEANARRAY =  filter((val:ReagularSeasonGame[]) => val.length >0)
export const FILTER_REGULAR_SEASON_GAMES = (search:string) =>  map((regulargames:ReagularSeasonGame[]) => {
  return regulargames.filter((regularseason:ReagularSeasonGame)=> regularseason.gamedate.toLocaleLowerCase().includes(search.toLowerCase()) || 
                                    regularseason.teamhome.toLocaleLowerCase().includes(search.toLowerCase()) ||     
                                    regularseason.scorehome.toLocaleLowerCase().includes(search.toLowerCase())   ||
                                    regularseason.scoreaway.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    regularseason.teamaway.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    regularseason.overtimes.toLocaleLowerCase().includes(search.toLowerCase()))

})

@Component({
  selector: 'app-regular-season-games',
  templateUrl: './regular-season-games.component.html',
  styleUrls: ['./regular-season-games.component.scss']
})
export class RegularSeasonGamesComponent implements OnInit {

  regularseasongamesList$ : Observable<ReagularSeasonGame[]> = new Observable<ReagularSeasonGame[]>();
  selectedData:string[] = [];
  selectedDataDetail:string[] = [];
  allElementsString = 'expand-all-details js-expand-all-details collapsed link-icon';
  searchTerm: string = '';

  constructor(private store :Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(regularseasongamesGetAll());
    this.regularseasongamesList$ = this.store.select(selectAllRegularSeasonGames).pipe(CLEANARRAY);
  }

  modelChangeFn(id:number|any):void{    
    this.selectedData[id] =  this.selectedData[id] === 'expand-details collapsed js-expand-details link-icon' ? 
    'expand-details expanded js-expand-details link-icon':'expand-details collapsed js-expand-details link-icon'

    this.selectedDataDetail[id] =  this.selectedDataDetail[id] === 'none' ? 'table-row': 'none'
  }

  setClass(arrayData:string[],id:number):string{
    if(arrayData[id] === undefined){
      arrayData[id]='expand-details collapsed js-expand-details link-icon'
    }
    return arrayData[id];
  }

  setClassDetail(arrayData:string[],id:number):string{
    if(arrayData[id] === undefined){
      arrayData[id]='none'
    }
    return arrayData[id];
  }

  allElements():void{
    if(this.allElementsString === 'expand-all-details js-expand-all-details collapsed link-icon'){
        this.allElementsString = 'expand-all-details js-expand-all-details expanded link-icon'
        this.selectedData = this.selectedData.map((_) => 'expand-details expanded js-expand-details link-icon')
        this.selectedDataDetail = this.selectedDataDetail.map((_)=> 'table-row' )
    }
    else{
        this.allElementsString = 'expand-all-details js-expand-all-details collapsed link-icon'
        this.selectedData = this.selectedData.map((_) => 'expand-details collapsed js-expand-details link-icon')
        this.selectedDataDetail = this.selectedDataDetail.map((_)=> 'none' )
    } 
  }


  searchRegularSeasonGames(data:string|any):void{    
    this.regularseasongamesList$= this.store.select(selectAllRegularSeasonGames).pipe(CLEANARRAY,FILTER_REGULAR_SEASON_GAMES(data.value));
  }

  resetSearch():void{
    this.searchTerm = '';
    this.regularseasongamesList$ = this.store.select(selectAllRegularSeasonGames).pipe(CLEANARRAY);
  }

}
