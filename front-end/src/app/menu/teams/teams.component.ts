import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, takeUntil , map} from 'rxjs/operators';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { DialogTableCardComponent } from 'src/app/shared/components/dialog-table-card/dialog-table-card.component';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { UnsubscribeComponent } from 'src/app/shared/unsubscribe/unsubscribe.component';
import { IFSPACE } from '../arenas/arenas.component';
import { arenasGetAll } from '../arenas/store/actions/arenas.action';
import { setTypeViewResp } from '../arenas/store/reducers/type-view.reducer';
import { Team } from '../models/team';
import { CLEANDATAARRAY } from '../utils/functions';
import { teamsGetAll } from './store/actions/teams.action';
import { sendTypeTeamView } from './store/actions/type-view-team.action';
import { selectedTeamsWithArenas } from './store/reducers/teams.reducer';
import { setTypeViewTeamResp } from './store/reducers/type-view-team.reducer';
import { teamDeleteRow } from './teams-view/store/actions/teams-delete.action';

export const FILTER_TEAM = (search:string) =>  map((team:Team[]) => {
  return team.filter((teamrow:Team)=> teamrow.name.toLocaleLowerCase().includes(search.toLowerCase()) || 
                                    teamrow.Founded.toLocaleLowerCase().includes(search.toLowerCase()) ||     
                                    teamrow.About.toLocaleLowerCase().includes(search.toLowerCase())   ||
                                    teamrow.divison.toLocaleLowerCase().includes(search.toLowerCase()) ||
                                    String(teamrow.arena).toLocaleLowerCase().includes(search.toLowerCase()))
})

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent extends UnsubscribeComponent  implements OnInit {

  teamsList$ : Observable<Team[]> = new Observable<Team[]>();
  searchTerm: string = '';
  typeViewshow$:Observable<string>  = this.store.select(setTypeViewTeamResp).pipe(IFSPACE);

  constructor(private store :Store<State>,private dialog: MatDialog) {
    super();
   }

  ngOnInit(): void {
    this.store.dispatch(arenasGetAll());
    this.store.dispatch(teamsGetAll());
    this.teamsList$ = this.store.select(selectedTeamsWithArenas).pipe(CLEANDATAARRAY);
   }

   searchTeam(data:string|any):void{    
    this.teamsList$= this.store.select(selectedTeamsWithArenas).pipe(CLEANDATAARRAY,FILTER_TEAM(data.value));
  }

  resetSearch():void{
    this.searchTerm = '';
    this.teamsList$ = this.store.select(selectedTeamsWithArenas).pipe(CLEANDATAARRAY);
  }


   delete(id:number|string|undefined):void{
    this.delete
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
        this.store.dispatch(teamDeleteRow({teamid:+id}));  
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
          this.store.dispatch(sendTypeTeamView({ sendviewteam: confirmed.value }));  
      }
    });

  }

}
