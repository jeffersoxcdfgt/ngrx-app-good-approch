import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MATERIAL_MODULES } from 'src/app/shared/shared.module';
import { RegularSeasonGamesComponent } from './regular-season-games.component';

describe('RegularSeasonGamesComponent', () => {
  let component: RegularSeasonGamesComponent;
  let fixture: ComponentFixture<RegularSeasonGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularSeasonGamesComponent ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
        MATERIAL_MODULES
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
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

});
