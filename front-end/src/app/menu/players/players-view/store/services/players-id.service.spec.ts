import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Player } from "src/app/menu/models/player";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { PlayersByIdService } from "./players-id.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    },
    log(value:string) {
        return '';
    }
  };

const playerId:number = 1;
const playerRow:Player ={
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
  }

describe('PlayersByIdService',()=>{
    let service:PlayersByIdService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                PlayersByIdService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(PlayersByIdService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

   it('Get player row by id',()=>{ 
        service.findById(playerId).subscribe((res:any)=>{
            expect(res).toEqual(playerRow)
        })
       const req = httpMock.expectOne(`${environment.playerUrl}/api/players/${playerId}`)
        expect(req.request.method).toBe('GET')
        req.flush(playerRow)
    })
})