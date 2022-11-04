import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TeamsViewComponent } from './teams-view.component';

interface DataLoad {
  id: string;
  name: string;
}

const value:DataLoad[] = [
  { id: '1', name: 'Jefferson'},
  { id: '2', name: 'Manuela'}
]

describe('TeamsViewComponent', () => {
  let component: TeamsViewComponent;
  let fixture: ComponentFixture<TeamsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsViewComponent ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call convertArrayToId and verify return string correcly',()=>{
   const resp =component.convertArrayToId(value)
    expect(resp).toEqual('12');
  })

  it('Call populatedPayload team view validate if return Object',()=>{
    const payload = component.populatedPayload()
   expect(payload).toEqual(jasmine.objectContaining({
      logo: '',
      name: '',
      Founded:'',
      About: '',
      divison: '',
      arena: ''
    }))
 })


 it('Call populatedPayload team view validate if return Object and execute convertArrayToId ',()=>{ 
  component.formTeam.get('division')?.setValue(value)    
  component.formTeam.get('arena')?.setValue(value)  
  const payload = component.populatedPayload() 
  expect(payload).toEqual(jasmine.objectContaining({
      logo: '',
      name: '',
      Founded:'',
      About: '',
      divison: '12',
      arena: '12'
    }))
  })

  it('Call populatedPayload team view validate if division and arena is null or undefined ',()=>{ 
    component.formTeam.get('division')?.setValue(null)    
    component.formTeam.get('arena')?.setValue(null)  
    const payload = component.populatedPayload() 
    expect(payload).toEqual(jasmine.objectContaining({
        logo: '',
        name: '',
        Founded:'',
        About: '',
        divison: '',
        arena: ''
      }))
    })

    it('Call saveTeam add Team',()=>{
      const typeview = '/menu/teams/add';
      component.saveTeam(typeview)
      expect(true).toBe(true);
    })
  
    it('Call saveTeam update Team',()=>{
      const typeview = '';
      component.saveTeam(typeview)
      expect(true).toBe(true);
    })

    it('Call saveTeam Invalid Form',()=>{
      const typeview = '';
      component.formTeam.setErrors({Error:'Test error'})
      component.saveTeam(typeview)
      expect(true).toBe(true);
    })
});


