import { Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MATERIAL_MODULES } from '../shared/shared.module';
import { MenuComponent } from './menu.component';

@Pipe({
  name: 'nullObjectToConvert'
})
class NullObjectToConvertMockPipe {
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
        RouterTestingModule,
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
});
