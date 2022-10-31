import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { RegularSeasonGamesComponent } from './regular-season-games.component';

describe('RegularSeasonGamesComponent', () => {
  let component: RegularSeasonGamesComponent;
  let fixture: ComponentFixture<RegularSeasonGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularSeasonGamesComponent ],
      imports:[
        StoreModule.forRoot({}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularSeasonGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
