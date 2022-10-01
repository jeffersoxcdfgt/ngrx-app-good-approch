import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store'
import { filter, map, Observable} from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';import { DialogTableCardComponent } from 'src/app/shared/components/dialog-table-card/dialog-table-card.component';
;
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { selectId } from 'src/app/shared/routing/id.selectors';
import { Arena } from '../models/arena';
import { arenaDeleteRow } from './arenas-view/store/actions/arenas-delete.action';
import { arenasGetAll } from './store/actions/arenas.action';
import { sendTypeView } from './store/actions/type-view.action';
import { selectAllArenas } from './store/reducers/arenas.reducer';
import { setTypeViewResp } from './store/reducers/type-view.reducer';

export const CLEANARRAY =  filter((val:Arena[]) => val.length >0)
export const IFSPACE =  map((val:string) => val === '' ? 'Grid': val)

export const FILTER_ARENA = (search:string) =>  map((arena:Arena[]) => {
  return arena.filter((are:Arena)=> are.arenaTitle.toLocaleLowerCase().includes(search.toLowerCase()) || 
                                    are.Capacity.toLocaleLowerCase().includes(search.toLowerCase()) ||     
                                    are.About.toLocaleLowerCase().includes(search.toLowerCase()))
})


@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.scss']
})
export class ArenasComponent implements OnInit {

  selectedId$ = this.store.pipe(select(selectId));
  arenasList$ : Observable<Arena[]> = new Observable<Arena[]>();
  searchTerm: string = '';
  showTableCard: boolean = true;
  typeViewshow$:Observable<string>  = this.store.select(setTypeViewResp).pipe(IFSPACE);

  constructor(private store :Store<State>,private dialog: MatDialog,) { }

  ngOnInit(): void { 
    this.store.dispatch(arenasGetAll());
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANARRAY);
  }

  searchArena(data:string|any):void{    
    this.arenasList$= this.store.select(selectAllArenas).pipe(CLEANARRAY,FILTER_ARENA(data.value));
  }

  resetSearch():void{
    this.searchTerm = '';
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANARRAY);
  }

  switchTableCard():void{
    const dialogRef = this.dialog.open(DialogTableCardComponent,{
      data:{
        message: 'Delete record?',
        buttonText: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        opt:this.typeViewshow$
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      if (confirmed.opt) {
          this.store.dispatch(sendTypeView({ sendview: confirmed.value }));  
           //this.showTableCard = confirmed.value === 'Cards' ? false : true
      }
    });

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
