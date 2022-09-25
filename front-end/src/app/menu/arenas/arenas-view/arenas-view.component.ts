import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store'
import { filter, first, map, Observable, takeUntil} from 'rxjs';;
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { selectId } from 'src/app/shared/routing/id.selectors';
import { UnsubscribeComponent } from 'src/app/shared/unsubscribe/unsubscribe.component';
import { Arena } from '../../models/arena';
import { arenaAddRow, arenaUpdateRow } from './store/actions/arenas-add-edit.action';
import { arenaGetById } from './store/actions/arenas-id.action';
import { addEditResultArena, errorAddEditArena } from './store/reducers/arenas-add-edit.reducer';
import { selectGetArenaById } from './store/reducers/arenas-id.reducer';

export const CLEAN_NULL = filter((valnull:any) => !!valnull)
export const TYPE_VIEW = map((type:any) => type as string)

@Component({
  selector: 'app-arenas-view',
  templateUrl: './arenas-view.component.html',
  styleUrls: ['./arenas-view.component.scss']
})
export class ArenasViewComponent extends UnsubscribeComponent implements OnInit {

  selectedId$ = this.store.pipe(select(selectId));
  arena$ : Observable<Arena> = new Observable<Arena>();
  typeView :string = '';
  formArena: FormGroup;

  constructor(private store :Store<State>,
    location: Location,private router: Router,
    private formBuilder: FormBuilder) {
    super();
    this.typeView = location.path()

    this.formArena = this.formBuilder.group({
      arenatitle:[''],
      capacity:[''],
      about:['']
    })
   }

  ngOnInit(): void { 
     this.store.dispatch(arenaGetById());
     this.arena$ = this.store.select(selectGetArenaById).pipe(CLEAN_NULL);

     this.store.select(addEditResultArena).pipe(CLEAN_NULL,takeUntil(this.destroyed$)).subscribe((id)=>{
      });
     this.store.select(errorAddEditArena).pipe(CLEAN_NULL,takeUntil(this.destroyed$)).subscribe((error:Error)=>{
     });
  }

  addRowArena():void{
    const payload:Arena  = {
      arenaTitle: 'new Arena',
      Capacity: '1800',
      About: 'jeffers',
      Logo:'../../../assets/css/nba_images/arenas/barclays_center_logo.png',
      Photo:'../../../assets/css/nba_images/arenas/barclays_center_photo.jpg'
    }
    this.store.dispatch(arenaAddRow({arenarow:payload}));
  }


  updateRowArena():void{
    const payload:Arena  = {
      arenaTitle: 'new Arena',
      Capacity: '1800',
      About: 'jeffers',
      Logo:'../../../assets/css/nba_images/arenas/barclays_center_logo.png',
      Photo:'../../../assets/css/nba_images/arenas/barclays_center_photo.jpg'
    }
    this.store.dispatch(arenaUpdateRow({arenarow:payload}));
  }

  saveArena(){
    console.log(this.formArena.get('arenatitle')?.value,"arena title");
    console.log(this.formArena.get('capacity')?.value,"Capacity");
    console.log(this.formArena.get('about')?.value,"About");
  }

}
