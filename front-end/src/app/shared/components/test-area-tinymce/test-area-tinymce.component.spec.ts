import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAreaTinymceComponent } from './test-area-tinymce.component';

describe('TestAreaTinymceComponent', () => {
  let component: TestAreaTinymceComponent;
  let fixture: ComponentFixture<TestAreaTinymceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAreaTinymceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAreaTinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
