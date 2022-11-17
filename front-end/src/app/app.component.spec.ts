import { flush, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestScheduler } from 'rxjs/testing';
import { throttleTime , of, interval, from } from 'rxjs';
import { concatMap , delay , concatAll , take, map, filter, tap,reduce, toArray ,scan} from 'rxjs/operators'
import { Arena } from './menu/models/arena';

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


const arrayarena: Arena[] = [
  {
    id: 1,
    arenaTitle: 'jefferson',
    Capacity:'12',
    About: '',
    Logo: '',
    Photo: ''
  },
  {
    id: 2,
    arenaTitle: 'medina',
    Capacity:'13',
    About: '',
    Logo: '',
    Photo: ''
  }
]


export const CLEANARRAY =  filter((val:Arena[]) => val.length >0 )

fdescribe('test observable',()=>{
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected)
  });

  // This test runs synchronously.
  it('test of function marbles', () => {
   testScheduler.run((helpers) => {
      const { cold, time, expectObservable, expectSubscriptions , hot, animate } = helpers;

      const values = { a:'jefferson', b:' medina', x:'jefferson', y:'jefferson medina'}
      const source = cold('-a-b|',values);
      const expected ='    -x-y|'
      const result = source.pipe(scan((a:string,b:string)=>  a+b,''))
      expectObservable(result).toBe(expected,values)  
      
      const values1 = { a:'jefferson', b:' medina',c:'jefferson medina'}
      const source1 = cold('-(ab|)',values);
      const expected1 ='    -(c|)'
      const result1 = source1.pipe(reduce((a:string,b:string)=>  a+b,''))
      expectObservable(result1).toBe(expected1,values1) 
      
      const values2 = { a:arrayarena, b:arrayarena }
      const soource2 = cold('-(a|)',values2);
      const expected2 ='     -(b|)'
      const result2 = soource2.pipe(CLEANARRAY)
      expectObservable(result2).toBe(expected2,values2) 


    })
  });
  

})