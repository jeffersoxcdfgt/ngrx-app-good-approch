import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { TeamsDeleteService } from "./teams-delete.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

const teamId:number = 1;

describe('TeamsDeleteService',()=>{
    let service:TeamsDeleteService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                TeamsDeleteService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(TeamsDeleteService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('Delete team row',()=>{ 
        service.delete(teamId).subscribe((res:any)=>{
            expect(res).toEqual(1)
        })
       const req = httpMock.expectOne(`${environment.teamUrl}/api/teams/${teamId}`)
        expect(req.request.method).toBe('DELETE')
        req.flush(teamId)
    })
})