import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { MockData } from 'src/app/mock-testing/mock';

import { ArenasPrintComponent } from './arenas-print.component';

describe('ArenasPrintComponent', () => {
  let component: ArenasPrintComponent;
  let fixture: ComponentFixture<ArenasPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenasPrintComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[
        provideMockStore({
          initialState:MockData
        })
      ]
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
