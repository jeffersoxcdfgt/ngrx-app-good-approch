import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MATERIAL_MODULES } from '../shared/shared.module';
import { MenuComponent } from './menu.component';

const MockLoginData = {
  "requestdata": {
      "email": "admin@admin.com",
      "password": "admin"
  },
  "responsedata": {
      "status": "success",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjc3MDI5Mzg0LCJleHAiOjE2NzcwMzA4MjR9.dM64-7ERXgEzGtdLX3lb7rp9QbYPtN1O0gQ33JoqcxM",
      "email": "admin@admin.com",
      "password": "admin"
  },
  "error": null
}

class ComponentTestRouting{}

@Pipe({
  name: 'nullObjectToConvert'
})
class NullObjectToConvertMockPipe implements PipeTransform  {
  transform(): string {
    return ''
  }
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MenuComponent,
        NullObjectToConvertMockPipe,     
      ],
      imports:[
        //StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path:'menu/home' , component:ComponentTestRouting}
        ]),
        MATERIAL_MODULES
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[
        provideMockStore({
          initialState:MockLoginData
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate home', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router,'navigate');
    component.navTo('menu/home')
    expect(spy).toHaveBeenCalledWith(['/menu/home'])
  });

});
