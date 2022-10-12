import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomDatetimeComponent } from './input-custom-datetime.component';

describe('InputCustomDatetimeComponent', () => {
  let component: InputCustomDatetimeComponent;
  let fixture: ComponentFixture<InputCustomDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCustomDatetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
