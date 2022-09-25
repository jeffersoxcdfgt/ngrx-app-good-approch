import { forwardRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TestAreaTinymceComponent } from './test-area-tinymce.component';

describe('TestAreaTinymceComponent', () => {
  let component: TestAreaTinymceComponent;
  let fixture: ComponentFixture<TestAreaTinymceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAreaTinymceComponent
      
      ],
      imports:[
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: []
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
