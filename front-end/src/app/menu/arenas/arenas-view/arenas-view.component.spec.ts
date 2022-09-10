import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { ArenasViewComponent } from './arenas-view.component';

describe('ArenasViewComponent', () => {
  let component: ArenasViewComponent;
  let fixture: ComponentFixture<ArenasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenasViewComponent ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
      ]
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
