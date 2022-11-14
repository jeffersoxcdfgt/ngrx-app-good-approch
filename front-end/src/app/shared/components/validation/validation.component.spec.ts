import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ValidationComponent } from './validation.component';


describe('ValidationComponent', () => {
  let component: ValidationComponent;
  let fixture: ComponentFixture<ValidationComponent>;
  let el:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[],
      declarations: [ValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationComponent);   
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


