import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenasViewComponent } from './arenas-view.component';

describe('ArenasViewComponent', () => {
  let component: ArenasViewComponent;
  let fixture: ComponentFixture<ArenasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenasViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
