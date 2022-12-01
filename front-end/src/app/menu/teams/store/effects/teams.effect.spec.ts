

import { TestBed } from "@angular/core/testing";
import { TestScheduler } from "rxjs/testing"
import { TeamsService } from "../services/teams.service";
import { TeamsEffects } from "./teams.effect"
import { Observable, of } from 'rxjs'
import { Action } from "@ngrx/store";
import { TeamsActionTypes } from "../actions/teams.action";

const list =[{
    id:1,
    logo:``,
    name:"Boston Celtics",
    Founded:"1947",
    About:``,            
    divison:"Atlantic",
    arena:1	
  }
]

const TeamsServiceMock = {
    findAll(){
        return of(list)
    }
}

describe('TeamsEffects',()=>{
    let actions$: Observable<Action>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [],
          imports:[],
          providers: [
            { provide: TeamsService, useValue: TeamsServiceMock },
          ],
        })
        .compileComponents();
    });

    it('should correctly call TeamEffects', () => {
        const scheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected)
        })
      
        scheduler.run((helpers) => {
        const { cold, hot, expectObservable, expectSubscriptions, flush, time, animate } = helpers;
            actions$ = of({ type: TeamsActionTypes.GET_TEAMS_SUCCESS });
            // mock the service to prevent an HTTP request
            const teamServiceSpy = TestBed.inject(TeamsService);
            teamServiceSpy.findAll();
            const effects = new TeamsEffects(actions$, teamServiceSpy);            

            // subscribe to the Effect stream and verify it dispatches a SUCCESS action
            effects.selectTeams$.subscribe(action => {
            expect(action).toEqual({
                type: TeamsActionTypes.GET_TEAMS_SUCCESS,
                teams: list,
            });
        });
    })
  })
})
