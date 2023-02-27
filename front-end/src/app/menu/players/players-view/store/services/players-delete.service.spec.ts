import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { PlayersDeleteService } from "./players-delete.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

const playerId:number = 1;

describe('PlayersDeleteService',()=>{
    let service:PlayersDeleteService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                PlayersDeleteService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(PlayersDeleteService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('Delete player row',()=>{ 
        service.delete(playerId).subscribe((res:any)=>{
            expect(res).toEqual(1)
        })
       const req = httpMock.expectOne(`${environment.playerUrl}/api/players/${playerId}`)
        expect(req.request.method).toBe('DELETE')
        req.flush(playerId)
    })
})