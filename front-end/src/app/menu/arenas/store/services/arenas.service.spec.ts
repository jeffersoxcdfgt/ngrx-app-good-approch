import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Arena } from "src/app/menu/models/arena";
import { TraceService } from "src/app/shared/utils/traceService";
import { environment } from "src/environments/environment";
import { ArenasService } from "./arenas.service";

const TraceServiceMock = {
    handleError(value:string) {
        return '';
    }
  };

  const list =[{
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
      },
      {
        id:2,
        arenaTitle:'American Airlines Arena',
        Capacity:'19.600',
        About:`<div style="text-align: left;">
          <strong>American Airlines Arena</strong>&nbsp;is a sports and entertainment arena located in Downtown Miami, Florida along Biscayne Bay. It was constructed beginning in 1998 as a replacement for the Miami Arena and was designed by the architecture firms Arquitectonica and 360 Architecture. The Arena... <a class="js-more-hint" href="#">more</a>
          <div class="js-more-box hide">
            <strong>American Airlines Arena</strong>&nbsp;is a sports and entertainment arena located in Downtown Miami, Florida along Biscayne Bay. It was constructed beginning in 1998 as a replacement for the Miami Arena and was designed by the architecture firms Arquitectonica and 360 Architecture. The Arena is home to the Miami Heat of the National Basketball Association. The AmericanAirlines Arena is directly served by the Miami Metrorail at Government Center station via free transfers to Metromover Omni Loop, providing direct service toFreedom Tower and Park West stations. The Arena is also within walking distance from the Historic Overtown/Lyric Theatre Metrorail station.
            <p></p>
            <p>The AmericanAirlines Arena has 2,105 club seats, 80 luxury suites, and 76 private boxes. The Waterfront Theater is Florida&#39;s largest theater which is housed within the arena, that can seat between 3,000 and 5,800. The theater can be configured for concerts, family events, musical theatre and other stage shows. American Airlines which has a hub at Miami International Airport maintains the AmericanAirlines Arena Travel Center at the venue. The airline also holds the naming rights for another NBA venue, the American Airlines Center for the Dallas Mavericks, which opened in 2001. AmericanAirlines Center should not be confused with AmericanAirlines Arena.</p>
          </div>
        </div>`,
        Logo:'',
        Photo:''
      },
]

describe('ArenasService',()=>{
    let service:ArenasService;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[
                HttpClientTestingModule,
            ],
            providers:[
                ArenasService,
                { provide: TraceService, useValue: TraceServiceMock },
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
        })
    })

    beforeEach(()=>{
        service = TestBed.inject(ArenasService)
        httpMock= TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpMock.verify()
    })

    it('should create',()=>{
        expect(service).toBeTruthy()
    })

    it('findAll return list of arenas',()=>{
        service.findAll().subscribe((arenas:Arena[])=>{
            expect(arenas).toEqual(list)
        })
        const req = httpMock.expectOne(`${environment.arenaUrl}/api/arenas`)
        expect(req.request.method).toBe('GET')
        req.flush(list)
    })
})