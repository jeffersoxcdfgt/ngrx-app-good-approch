import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCustomComponent } from './logo-custom.component';

describe('LogoCustomComponent', () => {
  let component: LogoCustomComponent;
  let fixture: ComponentFixture<LogoCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
