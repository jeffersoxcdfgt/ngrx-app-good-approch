import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// components
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './arenas/arenas.component';
import { TeamsComponent } from './teams/teams.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { ArenasViewComponent } from './arenas/arenas-view/arenas-view.component';

const menuRoutes: Routes  =  [{
  path: '',
  component : MenuComponent,
  canActivate: [AuthGuardService],
  children: [
    { path: 'home' , component:  HomeComponent, canActivate: [AuthGuardService]},
    { path: 'arenas' , component:  ArenasComponent, canActivate: [AuthGuardService]},
    { path: 'arenas/:id' , component:  ArenasViewComponent, canActivate: [AuthGuardService] },
    { path: 'arenas/add' , component:  ArenasViewComponent, canActivate: [AuthGuardService] },
    { path: 'arenas/edit/:id' , component:  ArenasViewComponent, canActivate: [AuthGuardService] },
    { path: 'teams' , component:  TeamsComponent, canActivate: [AuthGuardService] },
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
    ArenasViewComponent,
    TeamsComponent
];