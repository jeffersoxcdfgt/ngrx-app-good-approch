import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Player } from "src/app/menu/models/player";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { PlayersService } from "./players.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

  const list =[
    {
        id:1,
        photo:'',
        firstname:'Andre',
        lastname:'Drummond',
        birthday:'10.08.1993',
        country:'USA',
        height:'211',
        weight:'126',
        college:'Connecticut',
        nbadebut:'2012',
        position:'Center',
        team:1,
        number:'0',
        iconflag:'flag-icon flag-icon-us'
      },
      {
        id:2,
        photo:'',
        firstname:'Enes',
        lastname:'Kanter',
        birthday:'20.05.1992',
        country:'Turkey',
        height:'211',
        weight:'111',
        college:'(n/a)',
        nbadebut:'2011',
        position:'Center',
        team:2,
        number:'0',
        iconflag:'flag-icon flag-icon-tr'
      },
]

describe('PlayersService',()=>{
    let service:PlayersService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                PlayersService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(PlayersService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('findAll return list of players',()=>{
        service.findAll().subscribe((players:Player[])=>{
            expect(players).toEqual(list)
        })
        const req = httpMock.expectOne(`${environment.playerUrl}/api/players`)
        expect(req.request.method).toBe('GET')
        req.flush(list)
    })
})