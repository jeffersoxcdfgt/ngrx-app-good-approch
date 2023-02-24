import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { LoginService } from "./login-profile.service";

const TraceServiceMock = {
    handleError(value:string) {
        return value;
    },
    log(value:string) {
        return value;
    }
  };

const loginData = {
    email: 'admin@admin.com',
    password: 'admin'
}

describe('LoginService',()=>{
    let service:LoginService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                LoginService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(LoginService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('should call logIn()',()=>{ 
        service.logIn(loginData).subscribe((res:any)=>{
            console.log('jefferson',res)
            expect(res).toEqual(loginData)
        })
       const req = httpMock.expectOne(`${environment.loginUrl}`)
        expect(req.request.method).toBe('POST')
        req.flush(loginData)
    })
})