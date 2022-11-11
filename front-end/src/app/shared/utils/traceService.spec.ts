import { HttpClientTestingModule} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { MessageService } from "./message.service";
import { TraceService } from "./traceService";

const MessageServiceMock = {
    add() {
        return [];
    },
    clear(){
        return [];
    }
  };

describe('TraceService',()=>{
    let service:TraceService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                TraceService,
                { 
                    provide: MessageService, 
                    useValue: MessageServiceMock 
                },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(TraceService)
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('handleError is working fine',()=>{
        const res =service.handleError<any[]>('findAll')
        expect(res).toBeDefined();
        (res as any)()
    })
    

})