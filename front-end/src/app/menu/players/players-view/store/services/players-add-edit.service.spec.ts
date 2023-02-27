import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Player } from "src/app/menu/models/player";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { PlayersAddEditService } from "./players-add-edit.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    },
    log(value:string) {
        return '';
    }
  };

  const idPlayer:number = 1;
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

describe('PlayersAddEditService',()=>{
    let service:PlayersAddEditService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                PlayersAddEditService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(PlayersAddEditService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('Add player row',()=>{ 
        service.insert(playerRow).subscribe((res:any)=>{
            expect(res).toEqual(1)
        })
       const req = httpMock.expectOne(`${environment.playerUrl}/api/players`)
        expect(req.request.method).toBe('POST')
        req.flush(playerRow)
    })

    it('Update player row',()=>{ 
        service.update(playerRow).subscribe((res:any)=>{
            expect(res).toEqual(playerRow)
        })
       const req = httpMock.expectOne(`${environment.playerUrl}/api/players/${idPlayer}`)
        expect(req.request.method).toBe('PUT')
        req.flush(playerRow)
    })
})