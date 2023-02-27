import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

import { PlayoffComponent } from './playoff.component';

describe('PlayoffComponent', () => {
  let component: PlayoffComponent;
  let fixture: ComponentFixture<PlayoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayoffComponent, FooterComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
