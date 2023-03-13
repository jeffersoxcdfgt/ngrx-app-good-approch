import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockData } from './mock-testing/mock';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        RouterTestingModule   ,
      ],
      providers:[
        provideMockStore({
          initialState:MockData
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);

    const jsonstr = `{
      "currenttpl":"value"         
    }`

    const elem = document.createElement('link');
    elem.href = 'value'
    spyOn(localStorage,'getItem').and.returnValue(jsonstr) 
    spyOn(document,'getElementById').and.returnValue(elem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx-app-good-approch'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngrx-app-good-approch');
  });

});

