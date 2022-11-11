import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Team } from "src/app/menu/models/team";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { TeamsService } from "./teams.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

  const list =[
    {
        id:1,
        logo:'',
        name:"Boston Celtics",
        Founded:"1947",
        About:`
        The <strong>Boston Celtics</strong>&nbsp;was founded in 1946 and is currently owned by Boston Basketball Partners LLC. Their 17 NBA Championships are the most for any NBA franchise. The Celtics' greatest domination came from 1957 to 1969, with 11... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide">The <strong>Boston Celtics</strong>&nbsp;was founded in 1946 and is currently owned by Boston Basketball Partners LLC. Their 17 NBA Championships are the most for any NBA franchise. The Celtics' greatest domination came from 1957 to 1969, with 11 championships in 13 years, and eight in a row, the longest consecutive championship winning streak of any North American professional sports team. They currently play their home games at <a href="http://en.wikipedia.org/wiki/TD_Garden">TD Garden</a>.</div>`,
        divison:"Atlantic",
        arena:1	
      },
      {
        id:2,
        logo:'',
        name:"Cleveland Cavaliers",
        Founded:"1970",
        About:`
        The <strong>Cleveland Cavaliers</strong> (also known as the Cavs) are a professional basketball team based in Cleveland, Ohio. They began playing in the National Basketball Association (NBA) in 1970 as an expansion team and won their first Eastern Co... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide">The <strong>Cleveland Cavaliers</strong> (also known as the Cavs) are a professional basketball team based in Cleveland, Ohio. They began playing in the National Basketball Association (NBA) in 1970 as an expansion team and won their first Eastern Conference Championship in 2007.</div>`,
        divison:"Central",
        arena:2
      },
]

describe('TeamsService',()=>{
    let service:TeamsService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                TeamsService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(TeamsService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('findAll return list of teams',()=>{
        service.findAll().subscribe((teams:Team[])=>{
            expect(teams).toEqual(list)
        })
        const req = httpMock.expectOne(`${environment.teamUrl}/api/teams`)
        expect(req.request.method).toBe('GET')
        req.flush(list)
    })
})