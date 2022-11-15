import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PageNotFoundComponent } from './not-found.component';

describe('PageNotFoundComponent', () => {

 let component: PageNotFoundComponent;
 let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the not-found', () => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'was created'`, () => { 
    const debugElement:DebugElement = fixture.debugElement.query(By.css('h2'))
    expect(debugElement).toBeTruthy()
  });

  it(`should have as title 'Page not found'`, () => { 
    const debugElement:DebugElement = fixture.debugElement.query(By.css('h2'))
    expect(debugElement.nativeElement.innerText).toEqual('Page not found')
  });

  it(`should have as message 'was created'`, () => { 
    const debugElement:DebugElement = fixture.debugElement.query(By.css('h4'))
    expect(debugElement).toBeTruthy()
  });

  it(`should have as message 'Sorry, This page is not available'`, () => { 
    const debugElement:DebugElement = fixture.debugElement.query(By.css('h4'))
    expect(debugElement.nativeElement.innerText).toEqual('Sorry, This page is not available')
  });


});