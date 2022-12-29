import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Team } from "src/app/menu/models/team";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { TeamsByIdService } from "./teams-id.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    },
    log(value:string) {
        return '';
    }
  };

const teamId:number = 1;
const teamRow:Team ={
    id:1,
    logo:'',
    name:"Boston Celtics",
    Founded:"1947",
    About:`
    The <strong>Boston Celtics</strong>&nbsp;was founded in 1946 and is currently owned by Boston Basketball Partners LLC. Their 17 NBA Championships are the most for any NBA franchise. The Celtics' greatest domination came from 1957 to 1969, with 11... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide">The <strong>Boston Celtics</strong>&nbsp;was founded in 1946 and is currently owned by Boston Basketball Partners LLC. Their 17 NBA Championships are the most for any NBA franchise. The Celtics' greatest domination came from 1957 to 1969, with 11 championships in 13 years, and eight in a row, the longest consecutive championship winning streak of any North American professional sports team. They currently play their home games at <a href="http://en.wikipedia.org/wiki/TD_Garden">TD Garden</a>.</div>`,
    divison:"Atlantic",
    arena:1	
}

describe('TeamsByIdService',()=>{
    let service:TeamsByIdService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                TeamsByIdService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(TeamsByIdService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

   it('Get team row by id',()=>{ 
        service.findById(teamId).subscribe((res:any)=>{
            expect(res).toEqual(teamRow)
        })
       const req = httpMock.expectOne(`${environment.teamUrl}/api/teams/${teamId}`)
        expect(req.request.method).toBe('GET')
        req.flush(teamRow)
    })
})