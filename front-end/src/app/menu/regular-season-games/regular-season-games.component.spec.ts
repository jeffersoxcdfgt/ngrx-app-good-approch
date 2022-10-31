import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MATERIAL_MODULES } from 'src/app/shared/shared.module';

import { RegularSeasonGamesComponent } from './regular-season-games.component';

describe('RegularSeasonGamesComponent', () => {
  let component: RegularSeasonGamesComponent;
  let fixture: ComponentFixture<RegularSeasonGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularSeasonGamesComponent ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
        MATERIAL_MODULES
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
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
