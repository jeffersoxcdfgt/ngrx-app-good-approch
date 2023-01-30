import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { ReagularSeasonGame } from '../models/regular-season-game';
import { regularseasongamesGetAll } from './store/actions/regular-season-games.action';
import { selectAllRegularSeasonGames } from './store/reducers/regular-season-games.reducer';
import { map } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';
import { UnsubscribeComponent } from 'src/app/shared/unsubscribe/unsubscribe.component';
import { InfoDialogComponent } from 'src/app/shared/components/info-dialog/info-dialog.component';
import { CLEANDATAARRAY } from '../utils/functions';

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
export class RegularSeasonGamesComponent extends UnsubscribeComponent implements OnInit {

  regularseasongamesList$ : Observable<ReagularSeasonGame[]> = new Observable<ReagularSeasonGame[]>();
  selectedData:string[] = [];
  selectedDataDetail:string[] = [];
  allElementsString = 'expand-all-details js-expand-all-details collapsed link-icon';
  searchTerm: string = '';

  constructor(private store :Store<State>,private dialog: MatDialog) {
    super();
   }

  ngOnInit(): void {
    this.store.dispatch(regularseasongamesGetAll());
    this.regularseasongamesList$ = this.store.select(selectAllRegularSeasonGames).pipe(CLEANDATAARRAY);
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
    this.regularseasongamesList$= this.store.select(selectAllRegularSeasonGames).pipe(CLEANDATAARRAY,FILTER_REGULAR_SEASON_GAMES(data.value));
  }

  resetSearch():void{
    this.searchTerm = '';
    this.regularseasongamesList$ = this.store.select(selectAllRegularSeasonGames).pipe(CLEANDATAARRAY);
  }

  infoDialog():void{
    this.dialog.open(InfoDialogComponent,{
      data:{
        message: `
        Hi, I am a detailed description of the page. My big advantage is that I can contain as many
         lines as you need without taking up space on the page.
      `,
      }
    });
  }

}
