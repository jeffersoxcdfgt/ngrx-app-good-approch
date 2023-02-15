
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { TestAreaTinymceComponent } from './test-area-tinymce.component';

describe('TestAreaTinymceComponent', () => {
  let component: TestAreaTinymceComponent;
  let fixture: ComponentFixture<TestAreaTinymceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestAreaTinymceComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        EditorModule
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

  it('should call ngOnChanges()', () => {
    const changes: any = {
      data: {
        currentValue: 'value'
      }
    }
    const spy = spyOn(component.formTiny, 'get').and.callThrough();
    component.ngOnChanges(changes);
    expect(spy).toHaveBeenCalled();

  });

  it('should call onBlur', () => {
    const spy1 = spyOn(component, 'onTouchedFn').and.callThrough();
    component.onBlur();
    expect(spy1).toHaveBeenCalled();
  });

  it('should call onChange', () => {
    const $event = {
      value: {
        trim() { }
      }
    }
    const spy1 = spyOn(component, 'onChangeFn').and.callThrough();
    component.onChange($event);
    expect(spy1).toHaveBeenCalled();
  })

  it('should call writeValue', () => {
    const spy1 = spyOn(component, 'onChangeFn').and.callThrough();
    component.writeValue({});
    expect(spy1).toHaveBeenCalled();
  });

  it('should call registerOnTouched not to be null', () => {
    component.registerOnTouched({});
    expect(component.onTouchedFn).not.toBeNull();
  });

  it('should call registerOnChange not to be null', () => {
    component.registerOnChange({});
    expect(component.onChangeFn).not.toBeNull();
  });

});
