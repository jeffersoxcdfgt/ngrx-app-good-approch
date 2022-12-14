import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  it('Call selected to get what element was selected increase number elements',()=>{
  const event:any|MatAutocompleteSelectedEvent ={
    option:{
      value:{
        id:1
      }
    }
  };
    component.dataset = [{id:'1',name:'element1'},{id:'2',name:'element2'}]
    component.selected(event);
    expect(component.dataset.length).toBe(3);
  })


  it('Call displayFn get the same name', ()=>{    
    const data = {id:'1',name:'element1'}
    const res = component.displayFn(data)
    expect(res).toBe('element1')
  })

  it('Call displayFn get the "" when is null', ()=>{    
    const data:any|string = undefined
    const res =component.displayFn(data)
    expect(res).toEqual('')
  })

  it("Call optionSelected and verify array at least one element", ()=>{
    const event:any|MatAutocompleteSelectedEvent ={
      option:{
        value:{
          id:1
        }
      }
    };
    component.optionSelected(event)
    expect(component.dataset.length > 0).toBe(true)
  })

  it('Call inputSelect verify space blank an call onChangeFn()',()=>{
    const event:any = {value:''};
    const spy = spyOn(component,'onChangeFn').and.callThrough()
    component.inputSelect(event);    
    expect(spy).toHaveBeenCalled()

  })

});
