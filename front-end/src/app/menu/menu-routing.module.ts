import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// components
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './arenas/arenas.component';
import { TeamsComponent } from './teams/teams.component';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { ArenasViewComponent } from './arenas/arenas-view/arenas-view.component';
import { TeamsViewComponent } from './teams/teams-view/teams-view.component';
import { PlayoffComponent } from './playoff/playoff.component';
import { PlayersComponent } from './players/players.component';
import { PlayersViewComponent } from './players/players-view/players-view.component';
import { RegularSeasonGamesComponent } from './regular-season-games/regular-season-games.component';
import { ArenasPrintComponent } from './arenas/arenas-print/arenas-print.component';

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
    { path: 'teams/:id' , component:  TeamsViewComponent, canActivate: [AuthGuardService] },
    { path: 'teams/add' , component:  TeamsViewComponent, canActivate: [AuthGuardService] },
    { path: 'teams/edit/:id' , component:  TeamsViewComponent, canActivate: [AuthGuardService] },
    { path: 'playoff' , component:  PlayoffComponent, canActivate: [AuthGuardService]},
    { path: 'players' , component:  PlayersComponent, canActivate: [AuthGuardService]},
    { path: 'players/:id' , component:  PlayersViewComponent, canActivate: [AuthGuardService] },
    { path: 'players/add' , component:  PlayersViewComponent, canActivate: [AuthGuardService] },
    { path: 'players/edit/:id' , component:  PlayersViewComponent, canActivate: [AuthGuardService] },
    { path: 'regular-season-games' , component:  RegularSeasonGamesComponent, canActivate: [AuthGuardService]},
  ]
},
{
  path: 'arenasprint' , 
  component:  ArenasPrintComponent, 
  canActivate: [AuthGuardService]
}
] as Routes;

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes),
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
    TeamsComponent,
    TeamsViewComponent,
    PlayoffComponent,
    PlayersComponent,
    PlayersViewComponent,
    RegularSeasonGamesComponent
];