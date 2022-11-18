import { B } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { interval, of } from 'rxjs';
import { map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-app-good-approch';
  example:any;

  constructor(){
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap(x => of(1,2,3).pipe(map(i => x + i)))
    );

    result.subscribe((data)=>{
      console.log(data,"--")
    })


  }
}
