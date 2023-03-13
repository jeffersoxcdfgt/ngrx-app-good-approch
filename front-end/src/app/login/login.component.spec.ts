import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { InputCustomComponent } from '../shared/components/input-custom/input-custom.component';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockData } from '../mock-testing/mock';
import { MATERIAL_MODULES } from '../shared/shared.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        InputCustomComponent,
        FooterComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MATERIAL_MODULES
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          initialState: MockData
        })
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    store = TestBed.inject(MockStore)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login and dispatch', () => {
    const spy1 = spyOn(store, 'dispatch').and.callThrough();
    component.login();
    expect(spy1).toHaveBeenCalled();
  });

  it('should call changeTpl', () => {
    component.changeTpl();
    expect(component.selectclass).not.toBeNull();
  });

  it('should call changeTpl set selectclass= close', () => {
    component.selectclass = 'open'
    component.changeTpl();
    expect(component.selectclass).not.toBeNull();
  });

  it('should call tplCurrent', () => {
    const elem = document.createElement('link');
    elem.href = 'value'
    spyOn(document,'getElementById').and.returnValue(elem);
    component.tplCurrent('main_cerulean');
    
  });

});
