import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'tinycontrol',
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TestAreaTinymceComponent,
      multi: true,
    },
  ],
})
class TestAreaTinymceComponent implements ControlValueAccessor {
  writeValue(obj: any) {}
  registerOnChange(fn: any) {}
  registerOnTouched(fn: any) {}
  setDisabledState(isDisabled: boolean) {}
}

describe('TestAreaTinymceComponent', () => {
  let component: TestAreaTinymceComponent;
  let fixture: ComponentFixture<TestAreaTinymceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TestAreaTinymceComponent
      
      ],
      imports:[ 
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
  
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAreaTinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
