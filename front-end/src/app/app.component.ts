import { B } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { throttleTime , concatMap , delay, take , concatAll, filter, tap, reduce, toArray, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-app-good-approch';
  example:any;

  constructor(){



    const result = of(1,2).pipe(
      toArray(),
      map((x) => x.reduce((a:any,b:any) => Number(a)+Number(b),0))
      
      )

      result.subscribe((data)=>{
        console.log(data)
      })

  }
}
