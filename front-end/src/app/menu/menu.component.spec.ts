import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        MenuComponent,
        NullObjectToConvertMockPipe,     
      ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([
          { path:'menu/home' , component:ComponentTestRouting}
        ]),
        MATERIAL_MODULES
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
