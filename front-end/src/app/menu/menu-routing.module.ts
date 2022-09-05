import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// components
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './arenas/arenas.component';

const menuRoutes: Routes  =  [{
  path: '',
  component : MenuComponent,
  children: [
    { path: 'home' , component:  HomeComponent },
    { path: 'arenas' , component:  ArenasComponent },
  ]
}] as Routes;

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [RouterModule],
  providers: [],
})
export class MenuRoutingModule {
}

export const menuRoutedComponents = [
    MenuComponent,
    HomeComponent
];