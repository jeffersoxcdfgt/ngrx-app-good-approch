import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { ReagularSeasonGame } from "src/app/menu/models/regular-season-game";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { ReagularSeasonService } from "./regular-seasion-games.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

  const list =[
    {
        id:1,
        gamedate:'30 Oct 2013',
        teamhome:'Indiana Pacers',
        scorehome:'97',
        scoreaway:'87',
        teamaway:'Orlando Magic',
        overtimes:'-',
        recap:`data:image/jpeg;base64,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`,
        detail:[
          {
            id:1,
            Quarter:'1st quarter',
            homescore:'23',
            awayscore:'18'
          },
          {
            id:2,
            Quarter:'2nd quarter',
            homescore:'17',
            awayscore:'26'
          },
          {
            id:3,
            Quarter:'3rd quarter',
            homescore:'29',
            awayscore:'20'
          },
          {
            id:4,
            Quarter:'4th quarter',
            homescore:'28',
            awayscore:'23'
          }
        ]
    },
    {
      id:2,
      gamedate:'29 Oct 2013',
      teamhome:'Los Angeles Lakers',
      scorehome:'116',
      scoreaway:'103',
      teamaway:'Los Angeles Clippers',
      overtimes:'-',
      recap:`data:image/jpeg;base64,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`,
      detail:[
        {
          id:1,
          Quarter:'1st quarter',
          homescore:'28',
          awayscore:'30'
        },
        {
          id:2,
          Quarter:'2nd quarter',
          homescore:'27',
          awayscore:'27'
        },
        {
          id:3,
          Quarter:'3rd quarter',
          homescore:'20',
          awayscore:'22'
        },
        {
          id:4,
          Quarter:'4th quarter',
          homescore:'41',
          awayscore:'24'
        }
      ]
    }
 ]

describe('ReagularSeasonService',()=>{
    let service:ReagularSeasonService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                ReagularSeasonService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(ReagularSeasonService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('findAll return list of regular seasons games',()=>{
        service.findAll().subscribe((regular_season_games:ReagularSeasonGame[])=>{
            expect(regular_season_games).toEqual(list)
        })
        const req = httpMock.expectOne(`${environment.regularseasonUrl}/api/regular_season_games`)
        expect(req.request.method).toBe('GET')
        req.flush(list)
    })
})