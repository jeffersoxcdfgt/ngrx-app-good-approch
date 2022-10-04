import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable , filter, takeUntil} from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { UnsubscribeComponent } from 'src/app/shared/unsubscribe/unsubscribe.component';
import { arenasGetAll } from '../arenas/store/actions/arenas.action';
import { Team } from '../models/team';
import { teamsGetAll } from './store/actions/teams.action';
import { selectedTecnologisWithJobs } from './store/reducers/teams.reducer';
import { teamDeleteRow } from './teams-view/store/actions/teams-delete.action';

export const CLEANTEAMSARENAS =  filter((val:Team[]) => val.length >0 )

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent extends UnsubscribeComponent  implements OnInit {

  teamsList$ : Observable<Team[]> = new Observable<Team[]>();
  constructor(private store :Store<State>,private dialog: MatDialog) {
    super();
   }

  ngOnInit(): void {

    this.store.dispatch(arenasGetAll());
    this.store.dispatch(teamsGetAll());
    this.teamsList$ = this.store.select(selectedTecnologisWithJobs).pipe(CLEANTEAMSARENAS);

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

}
