import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockData } from '../mock-testing/mock';
import { MATERIAL_MODULES } from '../shared/shared.module';
import { MenuComponent } from './menu.component';

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
  let store:MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MenuComponent,
        NullObjectToConvertMockPipe,     
      ],
      imports:[
        RouterTestingModule.withRoutes([
          { path:'menu/home' , component:ComponentTestRouting}
        ]),
        MATERIAL_MODULES
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[
        provideMockStore({
          initialState:MockData
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    store = TestBed.inject(MockStore)
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

  it('should call logout', () => {
    const spy1 = spyOn(store,'dispatch').and.callThrough();
    component.logout();
    expect(spy1).toHaveBeenCalled();        
  });

});
