import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppInMemoryApi  implements InMemoryDbService{
      createDb(){
        return {
          'arenas':[
            {
              'id':1,
              'arenaTitle':'Sleep Train Arena',
              'Capacity':'17,317',
              'About':'Sleep Train Arena, originally ARCO Arena and later Power Balance Pavilion, is an indoor arena located in Sacramento, California, United States. Opened in 1988, it is the home of the Sacramento Kings of the National Basketball Association (NBA). The arena is named for',
              'Logo':'path:logo',
              'Photo':'path:photo'
            },
            {
              'id':1,
              'arenaTitle':'TD Garden',
              'Capacity':'17,565',
              'About':'TD Garden is the home arena for the Boston Bruins of the National Hockey League and Boston Celtics of the National Basketball Association. It is owned by Delaware North, whose CEO, Jeremy Jacobs, also owns the Bruins. It is the site of the annual Beanpot college hockey tournament',
              'Logo':'path:logo',
              'Photo':'path:photo'
            }
          ]
        }
    }
}
