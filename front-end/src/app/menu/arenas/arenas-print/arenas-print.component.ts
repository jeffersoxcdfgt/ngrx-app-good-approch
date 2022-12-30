import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/routing/id-reducer.reducer';
import { Arena } from '../../models/arena';
import { CLEANARRAY } from '../arenas.component';
import { arenasGetAll } from '../store/actions/arenas.action';
import { selectAllArenas } from '../store/reducers/arenas.reducer';

@Component({
  selector: 'app-arenas-print',
  templateUrl: './arenas-print.component.html',
  styleUrls: ['./arenas-print.component.scss']
})
export class ArenasPrintComponent implements OnInit {

  arenasList$ : Observable<Arena[]> = new Observable<Arena[]>();

  constructor(private store :Store<State>){}

  ngOnInit(): void {
    this.removejscssfile("./assets/css/main_cerulean.css", "css");
    this.store.dispatch(arenasGetAll());
    this.arenasList$ = this.store.select(selectAllArenas).pipe(CLEANARRAY);
  }


  removejscssfile(filename:any, filetype:any){
    const targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    const allsuspects:any=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
 }
  

}
