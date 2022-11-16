import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LogoCustomComponent } from './logo-custom.component';

describe('LogoCustomComponent', () => {
  let component: LogoCustomComponent;
  let fixture: ComponentFixture<LogoCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[],
      declarations: [ LogoCustomComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dataaux === data',()=>{
      component.dataaux ='data'
      component.keep()
      expect(component.data).toBe( component.dataaux )
  });

});
