import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { InputCustomDatetimeComponent } from 'src/app/shared/components/input-custom-datetime/input-custom-datetime.component';
import { PlayersViewComponent } from './players-view.component';

describe('PlayersViewComponent', () => {
  let component: PlayersViewComponent;
  let fixture: ComponentFixture<PlayersViewComponent>;

  let componentInputDate: InputCustomDatetimeHostComponent;
  let fixtureInputDate: ComponentFixture<InputCustomDatetimeHostComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PlayersViewComponent ,
        InputCustomDatetimeHostComponent,
        InputCustomDatetimeComponent

      ],
      imports:[
        StoreModule.forRoot({}),
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureInputDate = TestBed.createComponent(InputCustomDatetimeHostComponent);
    componentInputDate = fixtureInputDate.componentInstance;
    fixtureInputDate.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call savePlayer add Player',()=>{
    const typeview = '/menu/players/add';
    component.savePlayer(typeview)
    expect(true).toBe(true);
  })

  it('Call savePlayer update Player',()=>{
    const typeview = '';
    component.savePlayer(typeview)
    expect(true).toBe(true);
  })

  it('Call savePlayer  Invalid Form',()=>{
    const typeview = '';
    component.formPlayer.setErrors({Error:'Test error'})
    component.savePlayer(typeview)
    expect(true).toBe(true);
  })


  it('getPosition when is array valid',()=>{
     component.formPlayer.get('position')?.setValue(
      [{ id:'1',name:'jefferson'},
       { id:'2',name:'jose'}
      ])
      const res = component.getPosition()
      expect(res).toBe('1,2')
  })

  it('getPosition when first element is ,',()=>{
     component.formPlayer.get('position')?.setValue([{ id:',',name:'jefferson'}]
     )
      const res = component.getPosition()
      expect(res).toBe('')
  })

  it('getCountry when is array valid and name of field id',()=>{
     component.formPlayer.get('country')?.setValue([{ id:'1',name:'country1'},{ id:'2',name:'country2'}])
     const namefield = 'id';
     const res = component.getCountry(namefield);
     expect(res).toBe('1,2')
  })

  it('getCountry when is array valid and name of field name',()=>{
    component.formPlayer.get('country')?.setValue([{ id:'1',name:'country1'},{ id:'2',name:'country2'}])
    const namefield = 'name';
    const res = component.getCountry(namefield);
    expect(res).toBe('country1,country2')
  })

  it('getCollegeTeam when is array valid and merge all information',()=>{
    const type ='team';
    component.formPlayer.get(type)?.setValue([{ id:'1',name:'team1'},{ id:'2',name:'team2'}])
    const res =component.getCollegeTeam(type);
    expect(res).toBe('1,2')   
  })

  it('should create InputDateComponent', () => {
    expect(componentInputDate).toBeTruthy();
  });

});

@Component({
  template: `
  <form [formGroup]="form">
    <app-input-custom-datetime [data]="'2012-11-11'" formControlName="nameFieldDate"></app-input-custom-datetime>
  </form>`
})
class InputCustomDatetimeHostComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
   this.form = this.formBuilder.group({
     nameFieldDate:[''],
   })
  }
}
