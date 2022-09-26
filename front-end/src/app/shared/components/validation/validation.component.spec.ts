import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationComponent } from './validation.component';


describe('ValidationComponent', () => {
  let component: ValidationComponent;
  let fixture: ComponentFixture<ValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
         // AsyncMockPipe
      ],
      declarations: [ 
        ValidationComponent ,
        //AsyncMockPipe
      ]
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
