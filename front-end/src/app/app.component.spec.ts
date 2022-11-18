import { flush, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestScheduler } from 'rxjs/testing';
import { throttleTime , of, interval, from } from 'rxjs';
import { concatMap , delay , concatAll , take, map, filter, tap,reduce, toArray ,scan, mapTo , mergeMap ,switchMap} from 'rxjs/operators'
import { Arena } from './menu/models/arena';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        StoreModule.forRoot({}),
        RouterTestingModule   ,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx-app-good-approch'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngrx-app-good-approch');
  });
});



fdescribe('test observable',()=>{

  // This test runs synchronously.
  it('scan', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;

      const values = { a:'jefferson', b:' medina', x:'jefferson', y:'jefferson medina'}
      const source = cold('-a-b|',values);
      const expected ='    -x-y|'
      const result = source.pipe(scan((a:string,b:string)=>  a+b,''))
      expectObservable(result).toBe(expected,values)  
    })
  });

  it('reduce', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;

      const values = { a:'jefferson', b:' medina',c:'jefferson medina'}
      const source = cold('-(ab|)',values);
      const expected ='    -(c|)'
      const result = source.pipe(reduce((a:string,b:string)=>  a+b,''))
      expectObservable(result).toBe(expected,values) 
    })
  })


  it('toArray', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 1, b: 2,m:[1,2]};
      const source = cold('  -(a-b|)', values);
      const expected = '     -(m|)'
      const result = source.pipe(toArray());
      expectObservable(result).toBe(expected,values) 
    })
  })


  it('map', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 1, b: 2, c: 3, x: 2, y: 3, z: 4 };
      const source = cold('-a-b-c-|', values);
      const expected = '-x-y-z-|'
      const result =  source.pipe(map(x => x+1));
      expectObservable(result).toBe(expected,values) 
    })
  })

  it('mapTo', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 1, b: 2, c: 3, x: 'surprise!' };
      const source = cold('-a-b-c-|', values);
      const expected = '-x-x-x-|';
      const result = source.pipe(mapTo('surprise!'));
      expectObservable(result).toBe(expected,values) 
    })
  })

  it('MergeMap', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 'hello', b: 'world', x: 'hello world' };
      const obs1 = cold(    '-a-------a--|', values);
      const obs2 = cold(    '-b-b-b-|', values);
      const expected = '--x-x-x---x-x-x-|'

      const result = obs1.pipe(mergeMap(x => obs2.pipe(map(y => x + ' ' + y))));
      expectObservable(result).toBe(expected,values) 
    })
  })

  it('SwitchMap', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 10, b: 30, x: 20, y: 40 };
      const obs1 = cold(    '-a-----a--b-|', values);
      const obs2 = cold(    'a-a-a|', values);
      const expected = '-x-x-x-x-xy-y-y|';

      const result = obs1.pipe(switchMap(x => obs2.pipe(map(y => x + y))));
      expectObservable(result).toBe(expected,values) 
    })
  })

  it('ConcatMap', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 10, b: 30, x: 20, y: 40 };
      const obs1 = cold(    '-a--------b------ab|', values);
      const obs2 = cold(    'a-a-a|', values);
      const expected = '     -x-x-x----y-y-y--x-x-xy-y-y|';

      const result = obs1.pipe(concatMap(x => obs2.pipe(map(y => x + y))));
      expectObservable(result).toBe(expected,values) 
    })
  })
})


describe('Marbe testing with time', () => {
  describe('Interval', () => {
    it('should keeps only even numbers', () => {
      const source = interval(10, getTestScheduler()).pipe(
        take(10),
        filter(x => x % 2 === 0),
      );
      const expected = cold('-a-b-c-d-e|', { a: 0, b: 2, c: 4, d: 6, e: 8 });

      expect(source).toBeObservable(expected);
    });
  });

  describe('Delay', () => {
    it('should waits 20 frames before receive the value', () => {
      const scheduler = getTestScheduler();
      const source = of('a').pipe(
        delay(20, scheduler),
      );
      const expected = cold('--(a|)');

      expect(source).toBeObservable(expected);
    });
  });
});





describe('jefferson', () => {


  describe('Test marble', () => {
    it('test marble', () => {
      const scheduler = getTestScheduler();
      const source = of('jefferson','medina').pipe(
        reduce((a,b)=> a+ ' ' +b)
      );
      const expected = cold('uidhsfiudhs');

      expect(source).toBeObservable(expected);
    });
  });
});


