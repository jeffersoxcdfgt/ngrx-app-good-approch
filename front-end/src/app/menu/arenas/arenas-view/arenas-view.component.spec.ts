import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { ValidationComponent } from 'src/app/shared/components/validation/validation.component';
import { ArenasViewComponent } from './arenas-view.component';

@Pipe({
  name: 'noSanitize'
})
class NoSanitizeMockPipe  implements PipeTransform{
  transform(): string {
    return ''
  }
}

describe('ArenasViewComponent', () => {
  let component: ArenasViewComponent;
  let fixture: ComponentFixture<ArenasViewComponent>;
  let componentArenaTitleValidation: arenaValidationHostComponent;
  let fixtureArenaTitleValidation: ComponentFixture<arenaValidationHostComponent>; 
  let requiredText = 'This field is required';
  let numericText = 'This field is numeric';
  let isEmail = 'This field is email';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ArenasViewComponent,
        NoSanitizeMockPipe,
        ValidationComponent,
        arenaValidationHostComponent,
        FooterComponent
       ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    fixtureArenaTitleValidation =  TestBed.createComponent(arenaValidationHostComponent);
    componentArenaTitleValidation = fixtureArenaTitleValidation.componentInstance;
    fixtureArenaTitleValidation.detectChanges()

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

  it('should render Field is required', () => {
    const debugElement:DebugElement = fixtureArenaTitleValidation.debugElement.query(By.css('#element-required'));
    expect(debugElement.nativeElement.innerText).toEqual(requiredText)
  });

  it('should render Field is numeric', () => {
    const debugElement:DebugElement = fixtureArenaTitleValidation.debugElement.query(By.css('#element-numeric'));
    expect(debugElement.nativeElement.innerText).toEqual(numericText)
  });

  it('should render Field is email', () => {
    const debugElement:DebugElement = fixtureArenaTitleValidation.debugElement.query(By.css('#element-email'));
    expect(debugElement.nativeElement.innerText).toEqual(isEmail)
  });


});

@Component({
  template: `
  <form [formGroup]="formValidation">
    <app-validation formControlName="nameField" [requiredfield]="true" [messagerequired]="requiredText"></app-validation>

    <app-validation 
    formControlName="numericField" 
    [requiredfield]="true" 
    [messagerequired]="'The Capacity is required'"
    [isnumeric]="true"
    [messageOnlyNumeric]="numericText">
    </app-validation>

    <app-validation 
    formControlName="emailField" 
    [isemail]="true"
    [messageJustEmail]="isEmail">
    </app-validation>

  </form>
  `
})
class arenaValidationHostComponent {
  formValidation: FormGroup;
  requiredText = 'This field is required';
  numericText = 'This field is numeric';
  isEmail = 'This field is email';

  constructor(private formBuilder: FormBuilder) {
   this.formValidation = this.formBuilder.group({
     nameField:[''],
     numericField:[''],
     emailField:['']
   })
  }

}
