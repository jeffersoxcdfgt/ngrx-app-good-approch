import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { MessageService } from "./message.service";

describe('MessageService',()=>{
    let service:MessageService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                MessageService,
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(MessageService)
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })
    
    it('add method verify if message increase in one element',()=>{
        const message ='message1'
        service.add(message)
        expect(service.messages.length > 0).toBe(true)
    })

    it('clear removes all elements of array',()=>{
        service.clear();
        expect(service.messages.length).toBe(0)
    })
})