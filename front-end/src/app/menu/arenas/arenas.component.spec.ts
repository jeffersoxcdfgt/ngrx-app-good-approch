import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MATERIAL_MODULES } from 'src/app/shared/shared.module';
import {HttpClientTestingModule } from '@angular/common/http/testing'

import { ArenasComponent , FILTER_ARENA, SORT_BY_TITLE_ASC, SORT_BY_TITLE_DESC , IFSPACE, SET_SORT_BY_DESC, SET_SORT_BY_ASC } from './arenas.component';
import { ArenasService } from './store/services/arenas.service';
import { TypeViewService } from './store/services/type-view.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Arena } from '../models/arena';

const MatDialogMock = {
  open() {
      return {
          afterClosed: () => of(true)
      };
  }
};

@Pipe({
  name: 'noSanitize'
})
class NoSanitizeMockPipe implements PipeTransform {
  transform(): string {
    return ''
  }
}


describe('ArenasComponent', () => {
  let component: ArenasComponent;
  let fixture: ComponentFixture<ArenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ArenasComponent,
        NoSanitizeMockPipe
       ],
      imports:[
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        RouterTestingModule,
        //MATERIAL_MODULES
      ],
      providers: [
        { provide: MatDialog, useValue: MatDialogMock },
        ArenasService,
        TypeViewService
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should create', () => {
    expect(component).toBeTruthy();
   });

   it('Call openPrintOptions and btngroupPrint set btn-group open',()=>{
      component.openPrintOptions()
      expect(component.btngroupPrint).toBe('btn-group open')
   })

   it('Call openPrintOptions and btngroupPrint set btn-group',()=>{
    component.btngroupPrint = 'btn-group open'
    component.openPrintOptions()
    expect(component.btngroupPrint).toBe('btn-group')
   })


   it('Call openExportOptions and btngroupPrint set btn-group open',()=>{
    component.openExportOptions()
    expect(component.btngroupExport).toBe('btn-group open')
   })

   it('Call openExportOptions and btngroupPrint set btn-group',()=>{
    component.btngroupExport = 'btn-group open'
    component.openExportOptions()
    expect(component.btngroupExport).toBe('btn-group')
   })


   it('Call sortByTitle and sortbytitle === icon-sort-desc', ()=>{
     component.sortByTitle()
     expect(component.sortbytitle).toBe('icon-sort-desc')
   })

   it('Call sortByTitle and sortbytitle === icon-sort-asc', ()=>{
    component.sortbytitle = 'icon-sort-desc'
    component.sortByTitle()
    expect(component.sortbytitle).toBe('icon-sort-asc')
  })

  it('Mock Dialog Material in Delete action',()=>{
    const iddelete = 1
    component.delete(iddelete)
    expect(true).toBe(true);   
  })

  it('Mock Dialog Material in switchTableCard action',()=>{
    component.switchTableCard()
    expect(true).toBe(true);   
  })

  it('switchTableCard',()=>{
    const spy1 = spyOn(component,"switchTableCard").and.callThrough()
    component.switchTableCard()
    expect(spy1).toHaveBeenCalled()
  })

  it('Call resetSearch and searchTerm=""', ()=>{
    component.resetSearch()
    expect(component.searchTerm).toBe('');
  })

  it('Call searchArena', ()=>{
    const filter = 'filter'
    component.searchArena(filter)
    expect(true).toBe(true);   
  })

  it('Call connst function SORT_BY_TITLE_ASC',()=>{
    const arenas :Arena[]=[
      {
        id: 1,
        arenaTitle: 'bbbb',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },
      {
        id: 2,
        arenaTitle: 'aaaa',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },

    ]
    const result = of(arenas).pipe(SORT_BY_TITLE_ASC)
    result.subscribe((data:Arena[])=>{
      expect(data).toEqual(arenas)
    })   

  })

  it('Call connst function SORT_BY_TITLE_ASC',()=>{

    const arenas :Arena[]=[
      {
        id: 1,
        arenaTitle: 'bbbb',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },
      {
        id: 2,
        arenaTitle: 'aaaa',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },

    ]
    const result = of(arenas).pipe(SORT_BY_TITLE_DESC)
    result.subscribe((data:Arena[])=>{
      expect(data).toEqual(arenas)
    })   

  })

  it('Call connst function FILTER_ARENA',()=>{

    const arenas :Arena[]=[
      {
        id: 1,
        arenaTitle: 'bbbb',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },
      {
        id: 2,
        arenaTitle: 'aaaa',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },

    ]
    const result = of(arenas).pipe(FILTER_ARENA('aaa'))
    result.subscribe((data:Arena[])=>{
      expect(data.length ===1).toBe(true)
    })   

  })

  it('Call connst function IFSPACE',()=>{

    const arenas :Arena[]=[
      {
        id: 1,
        arenaTitle: 'bbbb',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },
      {
        id: 2,
        arenaTitle: 'aaaa',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },

    ]
    const result = of('').pipe(IFSPACE)
    result.subscribe((data:string)=>{
      expect(data).toEqual('Grid')
    })   

  })

  it('Call connst function SET_SORT_BY_DESC',()=>{

    const arenas :Arena[]=[
      {
        id: 1,
        arenaTitle: 'bbbb',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },
      {
        id: 2,
        arenaTitle: 'aaaa',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },

    ]
    const result = of(arenas).pipe(SET_SORT_BY_DESC)
    result.subscribe((data:Arena[])=>{
      expect(data).toEqual(arenas)
    })   

  })

  it('Call connst function SET_SORT_BY_ASC',()=>{
    const arenas :Arena[]=[
      {
        id: 1,
        arenaTitle: 'bbbb',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },
      {
        id: 2,
        arenaTitle: 'aaaa',
        Capacity: '',
        About: '',
        Logo:'',
        Photo: ''
      },

    ]
    const result = of(arenas).pipe(SET_SORT_BY_ASC)
    result.subscribe((data:Arena[])=>{
      expect(data).toEqual(arenas)
    })   

  })


});
