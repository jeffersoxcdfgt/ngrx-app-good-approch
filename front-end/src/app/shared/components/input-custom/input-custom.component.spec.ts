import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MATERIAL_MODULES } from '../../shared.module';
import { InputCustomComponent } from './input-custom.component';

describe('InputCustomComponent', () => {
  let component: InputCustomComponent;
  let fixture: ComponentFixture<InputCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCustomComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      imports:[MATERIAL_MODULES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onBlur', () => {
    const spy1 = spyOn(component,'onTouchedFn').and.callFake(()=> null)
    component.onBlur()
    expect(spy1).toHaveBeenCalled();
  });

  it('should call getOnclick',()=>{
    const spy1 = spyOn(component,"getClick").and.callThrough()
    component.getClick()
    expect(spy1).toHaveBeenCalled()
  })

  it('should call onChange',()=>{
    const spy1 = spyOn(component,"onChangeFn").and.callThrough()
    const data = {
      value:''
    }
    component.onChange(data)
    expect(spy1).toHaveBeenCalled()
  })

});
