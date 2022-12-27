import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Arena } from "src/app/menu/models/arena";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { ArenasAddEditService } from "./arenas-add-edit.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    },
    log(value:string) {
        return '';
    }
  };

  const idArena:number = 1;
  const arenaRow:Arena ={
        id:1,
        arenaTitle:'Air Canada Centre',
        Capacity:'19.800',
        About:`	<div style="text-align: left;">
          <strong>Air Canada Centre (ACC)</strong>&nbsp;is a multi-purpose indoor sporting arena located on Bay Street in the South Core district of Downtown Toronto, Ontario, Canada. It is the home of the Toronto Maple Leafs of the National Hockey League (NHL), the Toronto Raptors of the National Basketball ... <a class="js-more-hint">more</a>
          <div class="js-more-box hide">
            <strong>Air Canada Centre (ACC)</strong>&nbsp;is a multi-purpose indoor sporting arena located on Bay Street in the South Core district of Downtown Toronto, Ontario, Canada. It is the home of the Toronto Maple Leafs of the National Hockey League (NHL), the Toronto Raptors of the National Basketball Association (NBA) and the Toronto Rock of the National Lacrosse League (NLL). In addition, the Toronto Marlies of the American Hockey League play occasional games at the arena, and the Raptors 905 of the NBA Development League plan to play occasional games at the venue as well. The area was previously home to the Toronto Phantoms of the Arena Football League (AFL) during their brief existence. The arena is popularly known as the ACC or the Hangar (the latter nickname came from its sponsorship by Air Canada).
            <p></p>
            <p>The arena is owned and operated by Maple Leaf Sports &amp; Entertainment Ltd. (MLSE), the same group that owns both the Leafs and Raptors, as well as their respective development teams, and is 665,000 square feet (61,800 square metres) in size. In 2008, the ACC was the fifth busiest arena in the world and the busiest in Canada. Air Canada Centre is connected to Union Station and the underground pedestrian PATH system, providing access to public transportation (TTC&#39;s Union subway station and GO Transit). There are also 13,000 parking spaces. The Air Canada Centre has, from its initial design to completion, revolutionized many concepts included in new arenas and stadiums built since then. These features include luxury suites accessible on the ground floor, splitting the main scoreboard into several sections, rotating all sponsor signage in the bowl at once (to allow dominant messaging), and multiple restaurants in and out of the main arena bowl view.</p>
          </div>
          </div>`,
        Logo:'',
        Photo:''
}

describe('ArenasAddEditService',()=>{
    let service:ArenasAddEditService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                ArenasAddEditService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(ArenasAddEditService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('Add arena row',()=>{ 
        service.insert(arenaRow).subscribe((res:any)=>{
            expect(res).toEqual(1)
        })
       const req = httpMock.expectOne(`${environment.arenaUrl}/api/arenas`)
        expect(req.request.method).toBe('POST')
        req.flush(arenaRow)
    })

    it('Update arena row',()=>{ 
        service.update(arenaRow).subscribe((res:any)=>{
            expect(res).toEqual(arenaRow)
        })
       const req = httpMock.expectOne(`${environment.arenaUrl}/api/arenas/${idArena}`)
        expect(req.request.method).toBe('PUT')
        req.flush(arenaRow)
    })
})