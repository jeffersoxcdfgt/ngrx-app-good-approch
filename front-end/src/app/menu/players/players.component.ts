import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { playersGetAll } from './store/actions/players.action';
import {  selectedPlayersWithTeams } from './store/reducers/players.reducer';
import { teamsGetAll } from '../teams/store/actions/teams.action';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { map, takeUntil } from 'rxjs/operators'
import { UnsubscribeComponent } from 'src/app/shared/unsubscribe/unsubscribe.component';
import { playerDeleteRow } from './players-view/store/actions/players-delete.action';
import { DialogTableCardComponent } from 'src/app/shared/components/dialog-table-card/dialog-table-card.component';
import { setTypeViewPlayerResp } from './store/reducers/type-view-player.reducer';
import { IFSPACE } from '../arenas/arenas.component';
import { sendTypePlayerView } from './store/actions/type-view-player.action';
import { CLEANDATAARRAY } from '../utils/functions';


export const FILTER_PLAYER = (search:string) =>  map((player:Player[]) => {
  return player.filter((playerrow:Player)=> playerrow.firstname.toLocaleLowerCase().includes(search.toLowerCase()) || 
                                    playerrow.lastname.toLocaleLowerCase().includes(search.toLowerCase()) ||     
                                    playerrow.birthday.toLocaleLowerCase().includes(search.toLowerCase())   ||
                                    playerrow.country.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    playerrow.height.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    playerrow.weight.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    playerrow.college.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    playerrow.nbadebut.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    playerrow.position.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    String(playerrow.team).toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    playerrow.number.toLocaleLowerCase().includes(search.toLowerCase()))

})

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent extends UnsubscribeComponent implements OnInit {

  playersList$ : Observable<Player[]> = new Observable<Player[]>();
  typeViewshow$:Observable<string>  = this.store.select(setTypeViewPlayerResp).pipe(IFSPACE);
  searchTerm: string = '';

  constructor(private store :Store<State>,private dialog: MatDialog) { 
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(playersGetAll());
    this.store.dispatch(teamsGetAll());
    this.playersList$ = this.store.select(selectedPlayersWithTeams).pipe(CLEANDATAARRAY);
  }

  delete(id:number|string|undefined):void{
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Delete record?',
        buttonText: {
          ok: 'Ok',
          cancel: 'Cancel'
        }
      }
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe((confirmed: boolean) => {
      if (confirmed && !!id) {
        this.store.dispatch(playerDeleteRow({playerid:+id}));  
        this.store.dispatch(playersGetAll());
        this.store.dispatch(teamsGetAll());        
      }
    });
  }

  switchTableCard():void{
    const dialogRef = this.dialog.open(DialogTableCardComponent,{
      data:{
        message: 'Switch Tyepe of View ?',
        buttonText: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        opt:this.typeViewshow$
      }
    });

    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe((confirmed: any) => {
      if (confirmed.opt || confirmed) {
          this.store.dispatch(sendTypePlayerView({ sendviewplayer: confirmed.value }));  
      }
    });
  }

  searchPlayer(data:string|any):void{    
    this.playersList$= this.store.select(selectedPlayersWithTeams).pipe(CLEANDATAARRAY,FILTER_PLAYER(data.value));
  }

  resetSearch():void{
    this.searchTerm = '';
    this.playersList$ = this.store.select(selectedPlayersWithTeams).pipe(CLEANDATAARRAY);
  }

}
