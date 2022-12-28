import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ArenasPrintComponent } from './arenas-print.component';

describe('ArenasPrintComponent', () => {
  let component: ArenasPrintComponent;
  let fixture: ComponentFixture<ArenasPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenasPrintComponent ],
      imports:[
        StoreModule.forRoot({}),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenasPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
