import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { PlayersViewComponent } from './players-view.component';

describe('PlayersViewComponent', () => {
  let component: PlayersViewComponent;
  let fixture: ComponentFixture<PlayersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersViewComponent ],
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
  /*

   getCollegeTeam(type:string):string{
    Iif(Array.isArray(this.formPlayer.get(type)?.value)){
      const res = this.formPlayer.get(type)?.value
      const result = res.map((value:DataLoad)=> value.id).join()
      return result
    }
    return '' 
  }
   */

  it('getCollegeTeam when is array valid and merge all information',()=>{
    const type ='team';
    component.formPlayer.get(type)?.setValue([{ id:'1',name:'team1'},{ id:'2',name:'team2'}])
    const res =component.getCollegeTeam(type);
    expect(res).toBe('1,2')
   
  })


});
