import { flush, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestScheduler } from 'rxjs/testing';
import { throttleTime , of, interval, from } from 'rxjs';
import { concatMap , delay , concatAll , take, map, filter, tap,reduce, toArray ,scan, mapTo , mergeMap ,switchMap} from 'rxjs/operators'
import { Arena } from './menu/models/arena';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';

describe('AppComponent', () => {
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

  it('MergeMap', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    });  

   testScheduler.run((helpers) => {
      const { cold, expectObservable} = helpers;
      const values = { a: 'a', b: '1', x: 'a1' , y:'a2' ,c:'2' , d:'3',s:'a3' ,k:'b',m:'b1',p:'b2',z:'b3', v:'c',g:'c1', j:'c2', n:'c3', w:'d', u:'d1' , l:'d2', t:'d3' };
      const obs1 = cold(    '-a-------k-------v-------w-----|', values);
      const obs2 = cold(    '-b-c-d-|', values);
      const expected =      '--x-y-s---m-p-z---g-j-n---u-l-t-|'

      const result = obs1.pipe(mergeMap(x => obs2.pipe(map(i => x + i))));

      result.subscribe((data)=>{
        console.log(data)
      })

      expectObservable(result).toBe(expected,values) 
    })
  })
})
