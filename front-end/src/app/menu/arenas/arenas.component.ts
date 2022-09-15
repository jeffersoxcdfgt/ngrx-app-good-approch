import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store'
import { filter, Observable} from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';;
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { selectId } from 'src/app/shared/routing/id.selectors';
import { Arena } from '../models/arena';
import { arenaDeleteRow } from './arenas-view/store/actions/arenas-delete.action';
import { arenasGetAll } from './store/actions/arenas.action';
import { selectAllArenas } from './store/reducers/arenas.reducer';

export const CLEANARRAY =  filter((val:Arena[]) => val.length >0 )


@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {

  selectedId$ = this.store.pipe(select(selectId));
  arenasList$ : Observable<Arena[]> = new Observable<Arena[]>();

  constructor(private store :Store<State>,private dialog: MatDialog,) { }

  ngOnInit(): void { 
    this.store.dispatch(arenasGetAll());
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANARRAY);
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

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed && !!id) {
        this.store.dispatch(arenaDeleteRow({arenaid:+id}));  
        this.store.dispatch(arenasGetAll());         
      }
    });
  }

}
