import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppInMemoryApi  implements InMemoryDbService{
      createDb(){
        return {
          'arenas':[
            {
              'id':1,
              'arenaTitle':'Air Canada Centre',
              'Capacity':'19,800',
              'About':`	<div style="text-align: left;">
                <strong>Air Canada Centre (ACC)</strong>&nbsp;is a multi-purpose indoor sporting arena located on Bay Street in the South Core district of Downtown Toronto, Ontario, Canada. It is the home of the Toronto Maple Leafs of the National Hockey League (NHL), the Toronto Raptors of the National Basketball ... <a class="js-more-hint">more</a>
                <div class="js-more-box hide">
                  <strong>Air Canada Centre (ACC)</strong>&nbsp;is a multi-purpose indoor sporting arena located on Bay Street in the South Core district of Downtown Toronto, Ontario, Canada. It is the home of the Toronto Maple Leafs of the National Hockey League (NHL), the Toronto Raptors of the National Basketball Association (NBA) and the Toronto Rock of the National Lacrosse League (NLL). In addition, the Toronto Marlies of the American Hockey League play occasional games at the arena, and the Raptors 905 of the NBA Development League plan to play occasional games at the venue as well. The area was previously home to the Toronto Phantoms of the Arena Football League (AFL) during their brief existence. The arena is popularly known as the ACC or the Hangar (the latter nickname came from its sponsorship by Air Canada).
                  <p></p>
                  <p>The arena is owned and operated by Maple Leaf Sports &amp; Entertainment Ltd. (MLSE), the same group that owns both the Leafs and Raptors, as well as their respective development teams, and is 665,000 square feet (61,800 square metres) in size. In 2008, the ACC was the fifth busiest arena in the world and the busiest in Canada. Air Canada Centre is connected to Union Station and the underground pedestrian PATH system, providing access to public transportation (TTC&#39;s Union subway station and GO Transit). There are also 13,000 parking spaces. The Air Canada Centre has, from its initial design to completion, revolutionized many concepts included in new arenas and stadiums built since then. These features include luxury suites accessible on the ground floor, splitting the main scoreboard into several sections, rotating all sponsor signage in the bowl at once (to allow dominant messaging), and multiple restaurants in and out of the main arena bowl view.</p>
                </div>
                </div>`,
              'Logo':'../../../assets/css/nba_images/arenas/air_canada_centre_logo.png',
              'Photo':'../../../assets/css/nba_images/arenas/acc_photo.jpg'
            },
            {
              'id':2,
              'arenaTitle':'American Airlines Arena',
              'Capacity':'19,600',
              'About':`<div style="text-align: left;">
                <strong>American Airlines Arena</strong>&nbsp;is a sports and entertainment arena located in Downtown Miami, Florida along Biscayne Bay. It was constructed beginning in 1998 as a replacement for the Miami Arena and was designed by the architecture firms Arquitectonica and 360 Architecture. The Arena... <a class="js-more-hint" href="#">more</a>
                <div class="js-more-box hide">
                  <strong>American Airlines Arena</strong>&nbsp;is a sports and entertainment arena located in Downtown Miami, Florida along Biscayne Bay. It was constructed beginning in 1998 as a replacement for the Miami Arena and was designed by the architecture firms Arquitectonica and 360 Architecture. The Arena is home to the Miami Heat of the National Basketball Association. The AmericanAirlines Arena is directly served by the Miami Metrorail at Government Center station via free transfers to Metromover Omni Loop, providing direct service toFreedom Tower and Park West stations. The Arena is also within walking distance from the Historic Overtown/Lyric Theatre Metrorail station.
                  <p></p>
                  <p>The AmericanAirlines Arena has 2,105 club seats, 80 luxury suites, and 76 private boxes. The Waterfront Theater is Florida&#39;s largest theater which is housed within the arena, that can seat between 3,000 and 5,800. The theater can be configured for concerts, family events, musical theatre and other stage shows. American Airlines which has a hub at Miami International Airport maintains the AmericanAirlines Arena Travel Center at the venue. The airline also holds the naming rights for another NBA venue, the American Airlines Center for the Dallas Mavericks, which opened in 2001. AmericanAirlines Center should not be confused with AmericanAirlines Arena.</p>
                </div>
              </div>`,
              'Logo':'../../../assets/css/nba_images/arenas/aaa_logo.jpg',
              'Photo':'../../../assets/css/nba_images/arenas/aaa_photo.jpg'
            },
            {
              'id':3,
              'arenaTitle':'American Airlines Center',
              'Capacity':'18,500',
              'About':`<div style="text-align: left;">
                <strong>American Airlines Center</strong>&nbsp;(<strong>AAC</strong>) is a multi-purpose arena, located in the Victory Park neighborhood, near downtown Dallas, Texas. The venue serves as the home to the Dallas Mavericks of the National Basketball Association, and the Dallas Stars of the National ... <a class="js-more-hint" href="#">more</a>
                <div class="js-more-box hide">
                  <strong>American Airlines Center</strong>&nbsp;(<strong>AAC</strong>) is a multi-purpose arena, located in the Victory Park neighborhood, near downtown Dallas, Texas. The venue serves as the home to the Dallas Mavericks of the National Basketball Association, and the Dallas Stars of the National Hockey League. The arena is also used for concerts and other live entertainment. It opened in 2001 at a cost of $420 million.
                </div>
              </div>`,
              'Logo':'../../../assets/css/nba_images/arenas/american_airlines_center_logo.png',
              'Photo':'../../../assets/css/nba_images/arenas/american_airlines_center_photo.jpg'
            },
            {
              'id':4,
              'arenaTitle':'Amway Center',
              'Capacity':'20,000',
              'About':`<div style="text-align: left;"><strong>Amway Center</strong>&nbsp;is a sports and entertainment venue in Orlando, Florida, located in the Downtown area. It is part of Downtown Orlando Master Plan 3: a plan that also involves improvements to the Citrus Bowl and a new performing arts center. The arena is home to the Orlando Magic o... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide"><strong>Amway Center</strong>&nbsp;is a sports and entertainment venue in Orlando, Florida, located in the Downtown area. It is part of Downtown Orlando Master Plan 3: a plan that also involves improvements to the Citrus Bowl and a new performing arts center. The arena is home to the Orlando Magic of the NBA, the Orlando Predators of the Arena Football League, theOrlando Solar Bears of the ECHL, and hosted the 2012 NBA All-Star Game, plus the 2015 ECHL All-Star Game.
              Amway Center hosted the second and third round games of the NCAA Division I Men’s Basketball Tournament in 2014. On January 14, 2013, the Arena Football League's Board of Directors voted to award ArenaBowl XXVI to Orlando in the summer of 2013. It hosted UFC on Fox: dos Anjos vs. Cerrone 2 on December 19, 2015, and will hold the 2016 Royal Rumble on January 24.</div></div>`,
              'Logo':'../../../assets/css/nba_images/arenas/amway_center_logo.png',
              'Photo':'../../../assets/css/nba_images/arenas/amway_center_photo.jpg'
            },
            {
              'id':5,
              'arenaTitle':'AT&T Center',
              'Capacity':'18,581',
              'About':`<div style="text-align: left;"><strong>AT&amp;T Center</strong>&nbsp;is a multi-purpose indoor arena on the east side of San Antonio, Texas, USA. It seats 18,418 for basketball, 16,151 for ice hockey, and 19,000 for concerts or gatherings, and contains 2,018 club seats, 50 luxury suites and 32 bathrooms.

              The arena was complete... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide"><strong>AT&amp;T Center</strong>&nbsp;is a multi-purpose indoor arena on the east side of San Antonio, Texas, USA. It seats 18,418 for basketball, 16,151 for ice hockey, and 19,000 for concerts or gatherings, and contains 2,018 club seats, 50 luxury suites and 32 bathrooms.
              
              The arena was completed in 2002, as the SBC Center, at a cost of $175 million, financed by county-issued bonds, which were supported by a hotel-occupancy and car-rental tax increase and an additional contribution of $28.5 million from the Spurs. SBC Communications, Inc., purchased the naming rights to the facility under a 20-year, $41 million naming rights agreement with Bexar County, the San Antonio Spurs, and the San Antonio Stock Show &amp; Rodeo in July 2000. SBC Communications changed its name to AT&amp;T Inc. in November 2005. The arena officially changed its name to AT&amp;T Center in January 2006.<p></p>
              
              <p>The Professional Rodeo Cowboys Association holds the San Antonio Stock Show &amp; Rodeo and an Xtreme Bulls tour event annually there. The Rodeo is held in February, necessitating the Spurs to make a long road trip during this time (commonly referred to as the "Rodeo Road Trip").
              
              On the weekend of August 1–2, 2009, the Professional Bull Riders hosted a Built Ford Tough Series event there (an event previously held at the Alamodome in 2007 and 2008).
              
              In addition to many local community and sporting events, the center hosts San Antonio Sports Car Association autocross competitions in the parking lot each month.
              </p></div></div>`,
              'Logo':'../../../assets/css/nba_images/arenas/att_center_logo.jpg',
              'Photo':'../../../assets/css/nba_images/arenas/att_center_photo.jpg'
            },
            {
              'id':6,
              'arenaTitle':'Bankers Life Fieldhouse',
              'Capacity':'18,165',
              'About':`<div style="text-align: left;"><strong>Bankers Life Fieldhouse</strong>&nbsp;is an indoor arena located in downtown Indianapolis, Indiana, USA. It is the home of the Indiana Pacers of the National Basketball Association and theIndiana Fever of the Women's National Basketball Association. The Fieldhouse also hosts college bask... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide"><strong>Bankers Life Fieldhouse</strong>&nbsp;is an indoor arena located in downtown Indianapolis, Indiana, USA. It is the home of the Indiana Pacers of the National Basketball Association and theIndiana Fever of the Women's National Basketball Association. The Fieldhouse also hosts college basketball games (including the annual Big Ten Conference tournaments), indoor concerts, and ice hockey.

              The arena opened in November 1999 as Conseco Fieldhouse to replace Market Square Arena. The naming rights to the venue were sold to Conseco, a financial services organization based in nearby Carmel, Indiana. In May 2010, the company renamed itself as CNO Financial Group, but the Conseco name was retained by the Fieldhouse. In December 2011, CNO Financial Group changed the name of the Fieldhouse to Bankers Life Fieldhouse, after one of its subsidiaries, Bankers Life and Casualty.
              
              Unlike other multipurpose arenas, the arena was designed primarily for basketball. Nevertheless, the arena can accommodate an NHL-sized rink, but the seating capacity would be reduced to 12,300 for ice hockey, as the seating arrangement is asymmetrical. Many of the seats on one end of the arena have obstructed views, which results in poor sightlines for ice hockey
              </div></div>`,
              'Logo':'../../../assets/css/nba_images/arenas/bankers_life_fieldhouse_logo.jpg',
              'Photo':'../../../assets/css/nba_images/arenas/bankers_life_fieldhouse_photo.jpg'
            },
            {
              'id':7,
              'arenaTitle':'Barclays Center',
              'Capacity':'18,103',
              'About':`<div style="text-align: left;"><strong>Barclays Center</strong> is a multi-purpose indoor arena in Brooklyn, New York City. It sits partially on a platform over the Metropolitan Transportation Authority (MTA)-owned Vanderbilt Yards rail yard at Atlantic Avenue for the Long Island Rail Road (LIRR). It is part of a $4.9 billion fut... <a class="js-more-hint" href="#" data-original-title="" title="">more</a><div class="js-more-box hide"><strong>Barclays Center</strong> is a multi-purpose indoor arena in Brooklyn, New York City. It sits partially on a platform over the Metropolitan Transportation Authority (MTA)-owned Vanderbilt Yards rail yard at Atlantic Avenue for the Long Island Rail Road (LIRR). It is part of a $4.9 billion future business and residential complex now known as Pacific Park.</div></div>`,
              'Logo':'../../../assets/css/nba_images/arenas/barclays_center_logo.png',
              'Photo':'../../../assets/css/nba_images/arenas/barclays_center_photo.jpg'
            },
          ]
        }
    }
}
