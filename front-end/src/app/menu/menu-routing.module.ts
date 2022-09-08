import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// components
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './arenas/arenas.component';
import { TeamsComponent } from './teams/teams.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';

const menuRoutes: Routes  =  [{
  path: '',
  component : MenuComponent,
  canActivate: [AuthGuardService],
  children: [
    { path: 'home' , component:  HomeComponent, canActivate: [AuthGuardService]},
    { path: 'arenas/:id' , component:  ArenasComponent, canActivate: [AuthGuardService] },
    { path: 'teams/:id' , component:  TeamsComponent, canActivate: [AuthGuardService] },
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
    HomeComponent,
    ArenasComponent,
    TeamsComponent
];