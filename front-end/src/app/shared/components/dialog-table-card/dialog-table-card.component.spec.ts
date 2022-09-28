import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../shared.module';

import { DialogTableCardComponent } from './dialog-table-card.component';

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
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
