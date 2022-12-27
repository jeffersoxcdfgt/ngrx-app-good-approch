import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Arena } from "src/app/menu/models/arena";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { ArenasDeleteService } from "./arenas-delete.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

const arenaId:number = 1;

describe('ArenasDeleteService',()=>{
    let service:ArenasDeleteService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                ArenasDeleteService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(ArenasDeleteService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('Delete arena row',()=>{ 
        service.delete(arenaId).subscribe((res:any)=>{
            expect(res).toEqual(1)
        })
       const req = httpMock.expectOne(`${environment.arenaUrl}/api/arenas/${arenaId}`)
        expect(req.request.method).toBe('DELETE')
        req.flush(arenaId)
    })
})