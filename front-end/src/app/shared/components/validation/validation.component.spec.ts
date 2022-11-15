import { NgControl } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ValidationComponent } from './validation.component';


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
      ]
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


