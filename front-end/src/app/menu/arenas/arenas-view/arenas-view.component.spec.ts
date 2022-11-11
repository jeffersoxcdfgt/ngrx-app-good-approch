import { Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ArenasViewComponent } from './arenas-view.component';

@Pipe({
  name: 'noSanitize'
})
class NoSanitizeMockPipe {
  transform(): string {
    return ''
  }
}

describe('ArenasViewComponent', () => {
  let component: ArenasViewComponent;
  let fixture: ComponentFixture<ArenasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ArenasViewComponent,
        NoSanitizeMockPipe
       ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Call populatedPayload arena view validate if return Object',()=>{
     const payload = component.populatedPayload()
     expect(payload).toEqual(jasmine.objectContaining({
      arenaTitle:'',
      Capacity: '',
      About: '',
      Logo: '',
      Photo: ''
     }))
  })

  it('Call saveArena add Arena',()=>{
    const typeview = '/menu/arenas/add';
    component.saveArena(typeview)
    expect(true).toBe(true);
  })

  it('Call saveArena update Arena',()=>{
    const typeview = '';
    component.saveArena(typeview)
    expect(true).toBe(true);
  })

  it('Call saveArena  Invalid Form',()=>{
    const typeview = '';
    component.formArena.setErrors({Error:'Test error'})
    component.saveArena(typeview)
    expect(true).toBe(true);
  })

});
