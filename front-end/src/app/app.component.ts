import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-app-good-approch';
  example: any;


  ngOnInit(): void {
    localStorage.getItem('currenttpl') !== null ? this.tplCurrent(localStorage.getItem('currenttpl')) : this.tplCurrent('main_cerulean')
  }

  tplCurrent(namecss: string | any): void {
    (document.getElementById('idAsset') as any).href = `./assets/css/${namecss}.css`
    localStorage.setItem('currenttpl', namecss)
  }
}
