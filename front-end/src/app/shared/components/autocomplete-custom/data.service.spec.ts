import { HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { DataService } from "./data.service";
import { DataList, DATALIST } from './data-mock';

describe('DataService',()=>{
    let service:DataService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[],
            providers:[ DataService],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(DataService)
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('getByFilter return list of products',()=>{
        const query = '+83e9f5c7e5ac26fb401c+'
        const element = [{id: 1, name: '+83e9f5c7e5ac26fb401c+'}]
        service.getByFilter(query).subscribe((data:any)=>{
           expect(data).toEqual(element)
        })
    })
})