import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomDatetimeComponent } from './input-custom-datetime.component';

describe('InputCustomDatetimeComponent', () => {
  let component: InputCustomDatetimeComponent;
  let fixture: ComponentFixture<InputCustomDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCustomDatetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onChange',()=>{
    const data = {  value:''}
    const spy = spyOn(component,'onChangeFn').and.callThrough();
    component.onChange(data)
    expect(spy).toHaveBeenCalled()
  })
  /*
    public onBlur(): void {
    this.onTouchedFn();
  }
   */
  it('should call onBlur',()=>{
    const spy = spyOn(component,'onBlur').and.callThrough();
    component.onBlur();
    expect(spy).toHaveBeenCalled()
  })
});
