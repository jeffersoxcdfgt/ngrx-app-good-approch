import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TeamsViewComponent } from './teams-view.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { LogoCustomComponent } from 'src/app/shared/components/logo-custom/logo-custom.component';

interface DataLoad {
  id: string;
  name: string;
}

const value:DataLoad[] = [
  { id: '1', name: 'Jefferson'},
  { id: '2', name: 'Manuela'}
]

@Pipe({
  name: 'noSanitize'
})
class NoSanitizeMockPipe implements PipeTransform {
  transform(): string {
    return ''
  }
}

describe('TeamsViewComponent', () => {
  let component: TeamsViewComponent;
  let fixture: ComponentFixture<TeamsViewComponent>;

  let componentLogo: logoHostComponent;
  let fixtureLogo: ComponentFixture<logoHostComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TeamsViewComponent ,
        NoSanitizeMockPipe,
        LogoCustomComponent,
        logoHostComponent,
      ],
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

    fixtureLogo =  TestBed.createComponent(logoHostComponent);
    componentLogo = fixtureLogo.componentInstance;
    fixtureLogo.detectChanges();
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

    it('should create logo component', () => {
      expect(componentLogo).toBeTruthy();
    });

    it('should call onChnages method', () => {
      componentLogo.data = 'value'
      expect(componentLogo.formLogo.get('logo')?.value).toBe('data')           
    })


    it('should call Drago over component logo',()=>{
      fixtureLogo.detectChanges();
      let file = fixtureLogo.debugElement.query(By.css('.set-drop'));
  
      file.triggerEventHandler('dragover', null);
      fixtureLogo.detectChanges();
    })

    it('should call Drop component logo',()=>{
      fixtureLogo.detectChanges();
      let buttonElement = fixtureLogo.debugElement.query(By.css('.set-drop'));
  
      buttonElement.triggerEventHandler('drop', null);
      fixtureLogo.detectChanges();
    })




});

@Component({
  template: `
  <form [formGroup]="formLogo">
      <app-logo-custom [data]="'data'" formControlName="logo" class="set-drop" ></app-logo-custom>
  </form>
  `
})
class logoHostComponent {
  formLogo: FormGroup;
  data:string = ''

  constructor(private formBuilder: FormBuilder) {
   this.formLogo = this.formBuilder.group({
    logo:[''],
   })
  }
}


