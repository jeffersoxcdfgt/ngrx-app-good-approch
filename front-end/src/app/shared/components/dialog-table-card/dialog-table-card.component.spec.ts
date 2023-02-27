import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../shared.module';
import { DialogTableCardComponent } from './dialog-table-card.component';

const MatDialogMock = {
  close(){}
};

describe('DialogTableCardComponent', () => {
  let component: DialogTableCardComponent;
  let fixture: ComponentFixture<DialogTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTableCardComponent ],
      imports:[
        MATERIAL_MODULES,
      ],
      providers: [   
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: MatDialogMock },
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('call changesOpt', ()=>{
    const value ='valueopt'
    component.changesOpt(value)
    expect(component.setType).toBe(value)
  })

  it('onConfirmClick',()=>{
    const spy1 = spyOn(component,"onConfirmClick").and.callFake(()=> null)
    component.onConfirmClick()
    expect(spy1).toHaveBeenCalled()
  })

});
