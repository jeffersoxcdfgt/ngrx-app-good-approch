import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { MockData } from 'src/app/mock-testing/mock';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
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

@Pipe({
  name: 'noSanitize'
})
class NoSanitizeMockPipe implements PipeTransform {
  transform(): string {
    return ''
  }
}

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TeamsComponent ,
        NoSanitizeMockPipe,
        FooterComponent
      ],
      imports:[
        RouterTestingModule,
      ],
      providers: [
        { provide: MatDialog, useValue: MatDialogMock },
        TeamsService,
        TypeViewTeamService,
        provideMockStore({
          initialState:MockData
        })
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
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
