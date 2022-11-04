import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { TeamsService } from './store/services/teams.service';
import { TypeViewTeamService } from './store/services/type-view-team.service';
import { TeamsComponent } from './teams.component';

const MatDialogMock = {
  open() {
      return {
          afterClosed: () => of(true)
      };
  }
};


describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsComponent ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      providers: [
        { provide: MatDialog, useValue: MatDialogMock },
        TeamsService,
        TypeViewTeamService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Call switchTableCard() with Mat Dialog', ()=>{
    component.switchTableCard()
    expect(true).toBe(true);   
  })

  it('Mock Dialog Material in Delete action',()=>{
    const iddelete = 1
    component.delete(iddelete)
    expect(true).toBe(true);   
  })

  it('Call resetSearch and searchTerm=""', ()=>{
    component.resetSearch()
    expect(component.searchTerm).toBe('');
  })

  it('Call searchTeam', ()=>{
    const filter = 'filter'
    component.searchTeam(filter)
    expect(true).toBe(true);   
  })

});
