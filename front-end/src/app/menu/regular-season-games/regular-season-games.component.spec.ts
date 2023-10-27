import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { MockData } from 'src/app/mock-testing/mock';
import { DetailReagularSeasonGame, ReagularSeasonGame } from '../models/regular-season-game';
import { FILTER_REGULAR_SEASON_GAMES, RegularSeasonGamesComponent } from './regular-season-games.component';

const MatDialogMock = {
  open() {
      return {
       
      };
  }
};

describe('RegularSeasonGamesComponent', () => {
  let component: RegularSeasonGamesComponent;
  let fixture: ComponentFixture<RegularSeasonGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularSeasonGamesComponent ],
      imports:[
        RouterTestingModule,
      ],
      providers: [
        { provide: MatDialog, useValue: MatDialogMock },
        provideMockStore({
          initialState:MockData
        })
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularSeasonGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setClass return name Class when Not setting elements',() => {
    const arrayData : string[]= [];
    const id =1;
    const resclass = component.setClass(arrayData,id);
    expect(resclass).toEqual('expand-details collapsed js-expand-details link-icon')
  })

  it('setClassDetail return none and open details',() => {
    const arrayNone : string[]= [];
    const idNone =1;
    const resnone = component.setClassDetail(arrayNone,idNone);
    expect(resnone).toEqual('none');
  })


 it('modelChangeFn works fine',()=>{
    component.selectedData[1]= 'expand-details collapsed js-expand-details link-icon'
    component.modelChangeFn(1)
    expect(component.selectedData[1]).toBe('expand-details expanded js-expand-details link-icon')
 })

 it('modelChangeFn works fine else condition',()=>{
  component.selectedData[1]= 'expand-details expanded js-expand-details link-icon'
  component.modelChangeFn(1)
  expect(component.selectedData[1]).toBe('expand-details collapsed js-expand-details link-icon')
 })

 it('selectedDataDetail works fine',()=>{
  component.selectedDataDetail[0]= 'none'
  component.modelChangeFn(0)
  expect( component.selectedDataDetail[0]).toBe('table-row')
 })

 it('allElements',()=>{
    component.allElementsString = 'expand-all-details js-expand-all-details collapsed link-icon'
    component.selectedData = ['element1','element2'];
    component.selectedDataDetail = ['map1','map2'];
    component.allElements();
    expect(component.selectedDataDetail.length ===0).toBe(false)
 })

 it('allElements else condition',()=>{
  component.allElementsString = 'other value'
  component.selectedData = ['element1','element2'];
  component.selectedDataDetail = ['map1','map2'];
  component.allElements();
  expect(component.selectedDataDetail.length ===0).toBe(false)
})

it('resetSearch',()=>{
  component.resetSearch();
  expect(component.searchTerm).toBe('')
})

it('infoDialog',()=>{
  const spy1 = spyOn(component,"infoDialog").and.callThrough()
  component.infoDialog()
  expect(spy1).toHaveBeenCalled()
})

it('searchRegularSeasonGames',()=>{
  const spy1 = spyOn(component,"searchRegularSeasonGames").and.callThrough()
  component.searchRegularSeasonGames('games')
  expect(spy1).toHaveBeenCalled()
})

it('FILTER_REGULAR_SEASON_GAMES works fine',()=>{

  const detail:DetailReagularSeasonGame[] = [{
    id:1,
    Quarter: '',
    homescore:  '',
    awayscore:  '',
  }]

  const arrayData:ReagularSeasonGame[] = [
    {
      id:1,
      gamedate:'gamedate',
      teamhome:'teamhome',
      scorehome:'scorehome',
      scoreaway:'scoreaway',
      teamaway:'teamaway',
      overtimes:'overtimes',
      recap: '',
      detail: detail
    }
  ]

  const gamedate = of(arrayData).pipe(FILTER_REGULAR_SEASON_GAMES('gamedate'))
  gamedate.subscribe((data:ReagularSeasonGame[])=>{
      expect(data.length > 0).toEqual(true)
  })

  const teamhome = of(arrayData).pipe(FILTER_REGULAR_SEASON_GAMES('teamhome'))
  teamhome.subscribe((data:ReagularSeasonGame[])=>{
      expect(data.length > 0).toEqual(true)
  })

  const scorehome = of(arrayData).pipe(FILTER_REGULAR_SEASON_GAMES('scorehome'))
  scorehome.subscribe((data:ReagularSeasonGame[])=>{
      expect(data.length > 0).toEqual(true)
  })

  const teamaway = of(arrayData).pipe(FILTER_REGULAR_SEASON_GAMES('teamaway'))
  teamaway.subscribe((data:ReagularSeasonGame[])=>{
      expect(data.length > 0).toEqual(true)
  })

  const overtimes = of(arrayData).pipe(FILTER_REGULAR_SEASON_GAMES('overtimes'))
  overtimes.subscribe((data:ReagularSeasonGame[])=>{
      expect(data.length > 0).toEqual(true)
  })



 })

});
