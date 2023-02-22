import { NgControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ValidationComponent } from './validation.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('ValidationComponent', () => {
  let component: ValidationComponent;
  let fixture: ComponentFixture<ValidationComponent>;
  let el:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[],
      declarations: [ValidationComponent],
      providers:[
        { provide:NgControl, useValue:[]}
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationComponent);   
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onChange when call change local function', () => {
    const valuestr = {value:'jefferson'}
    const spy = spyOn(component,'onChangeFn').and.callThrough()
    component.onChange(valuestr);
    expect(spy).toHaveBeenCalled()
  });

});


