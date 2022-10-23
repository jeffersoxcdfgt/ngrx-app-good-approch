import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { Player } from '../models/player';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { playersGetAll } from './store/actions/players.action';
import { selectAllPlayers, selectedPlayersWithTeams } from './store/reducers/players.reducer';
import { filter } from 'rxjs';
import { teamsGetAll } from '../teams/store/actions/teams.action';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { takeUntil } from 'rxjs/operators'
import { UnsubscribeComponent } from 'src/app/shared/unsubscribe/unsubscribe.component';
import { playerDeleteRow } from './players-view/store/actions/players-delete.action';
import { DialogTableCardComponent } from 'src/app/shared/components/dialog-table-card/dialog-table-card.component';
import { setTypeViewPlayerResp } from './store/reducers/type-view-player.reducer';
import { IFSPACE } from '../arenas/arenas.component';
import { sendTypePlayerView } from './store/actions/type-view-player.action';

export const CLEANARRAY =  filter((val:Player[]) => val.length >0)

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent extends UnsubscribeComponent implements OnInit {

  playersList$ : Observable<Player[]> = new Observable<Player[]>();
  typeViewshow$:Observable<string>  = this.store.select(setTypeViewPlayerResp).pipe(IFSPACE);

  constructor(private store :Store<State>,private dialog: MatDialog) { 
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(playersGetAll());
    this.store.dispatch(teamsGetAll());
    this.playersList$ = this.store.select(selectedPlayersWithTeams).pipe(CLEANARRAY);
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
      if (confirmed.opt) {
          this.store.dispatch(sendTypePlayerView({ sendviewplayer: confirmed.value }));  
      }
    });
  }

}
