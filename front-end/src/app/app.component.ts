import { B } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { throttleTime , concatMap , delay, take , concatAll, filter, tap, reduce} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-app-good-approch';
  example:any;

  constructor(){

    const array = [
      {
        name:'jefferson'
      },
      {
        lastname:'medina'
      }
    ]

    const result = from(array).pipe(reduce((a:any,b:any)=>  a.name+' '+b.lastname))

    result.subscribe((data)=>{
      console.log(data,"111")
    })

  }
}
