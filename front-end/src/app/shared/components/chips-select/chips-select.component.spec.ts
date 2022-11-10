import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MATERIAL_MODULES } from '../../shared.module';

import { ChipsSelectComponent } from './chips-select.component';

describe('ChipsSelectComponent', () => {
  let component: ChipsSelectComponent;
  let fixture: ComponentFixture<ChipsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsSelectComponent ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MATERIAL_MODULES,
      ],
      providers: [   
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.optionControl.setValue('1')

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call remove() method and just left one element', async () => {
    component.dataset = [{id:'1',name:'element1'},{id:'2',name:'element2'}]
    component.remove({id:'1'})
    expect(component.dataset.length ===1).toBeTrue()   
  });

});
