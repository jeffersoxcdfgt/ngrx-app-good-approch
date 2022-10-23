import { NgModule} from '@angular/core';
import { menuRoutedComponents , MenuRoutingModule} from './menu-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TraceService } from '../shared/utils/traceService';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as getTokenReducers from'../login/store/reducers/login.reducers';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../login/store/effects/login.effects';
import { LoginService } from '../login/store/services/login-profile.service';
import { AuthGuardService } from '../shared/guards/auth-guard.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../app.in-memory.api';
import { arenasFeature} from './arenas/store/reducers/arenas.reducer';
import { ArenasEffects} from './arenas/store/effects/arenas.effect';
import { ArenasService } from './arenas/store/services/arenas.service';
import { arenabyidFeature } from './arenas/arenas-view/store/reducers/arenas-id.reducer';
import { ArenasByIdEffects } from './arenas/arenas-view/store/effects/arenas-id.effect';
import { ArenasByIdService } from './arenas/arenas-view/store/services/arenas-id.service';
import { arenaAddEditFeature } from './arenas/arenas-view/store/reducers/arenas-add-edit.reducer';
import { ArenasAddEditEffects } from './arenas/arenas-view/store/effects/arenas-add-edit.effect';
import { ArenasAddEditService } from './arenas/arenas-view/store/services/arenas-add-edit.service';
import { arenadeleteFeature } from './arenas/arenas-view/store/reducers/arenas-delete.reducer';
import { ArenasDeleteEffects } from './arenas/arenas-view/store/effects/arenas-delete.effect';
import { ArenasDeleteService } from './arenas/arenas-view/store/services/arenas-delete.service';

//Type view
import { typeViewFeature} from './arenas/store/reducers/type-view.reducer';
import { TypeViewEffects} from './arenas/store/effects/type-view.effect';
import { TypeViewService } from './arenas/store/services/type-view.service';

//Teams
import { teamsFeature} from './teams/store/reducers/teams.reducer';
import { TeamsEffects} from './teams/store/effects/teams.effect';
import { TeamsService } from './teams/store/services/teams.service';

//Teams view
import { teambyidFeature} from './teams/teams-view/store/reducers/teams-id.reducer';
import { TeamsByIdEffects} from './teams/teams-view/store/effects/teams-id.effect';
import { TeamsByIdService } from './teams/teams-view/store/services/teams-id.service';

//Teams add and update operations

import { teamAddEditFeature } from './teams/teams-view/store/reducers/teams-add-edit.reducer';
import { TeamsAddEditEffects } from './teams/teams-view/store/effects/teams-add-edit.effect';
import { TeamsAddEditService } from './teams/teams-view/store/services/teams-add-edit.service';

import { teamdeleteFeature } from './teams/teams-view/store/reducers/teams-delete.reducer';
import { TeamsDeleteEffects } from './teams/teams-view/store/effects/teams-delete.effect';
import { TeamsDeleteService } from './teams/teams-view/store/services/teams-delete.service';

//Type view of view
import { typeViewTeamFeature } from './teams/store/reducers/type-view-team.reducer';
import { TypeTeamViewEffects } from './teams/store/effects/type-view-team.effect';
import { TypeViewTeamService } from './teams/store/services/type-view-team.service';

// Players

import { playersFeature } from './players/store/reducers/players.reducer';
import { PlayerEffects } from './players/store/effects/players.effect';
import { PlayersService } from './players/store/services/players.service';

import { playerbyidFeature } from './players/players-view/store/reducers/players-id.reducer';
import { PlayersByIdEffects } from './players/players-view/store/effects/players-id.effect';
import { PlayersByIdService } from './players/players-view/store/services/players-id.service';

//Players add and update operations

import { playerAddEditFeature } from './players/players-view/store/reducers/players-add-edit.reducer';
import { PlayerAddEditEffects } from './players/players-view/store/effects/players-add-edit.effect';
import { PlayersAddEditService } from './players/players-view/store/services/players-add-edit.service';

import { playerdeleteFeature } from './players/players-view/store/reducers/players-delete.reducer';
import { PlayersDeleteEffects } from './players/players-view/store/effects/players-delete.effect';
import { PlayersDeleteService } from './players/players-view/store/services/players-delete.service';

//Type view of view
import { typeViewPlayerFeature } from './players/store/reducers/type-view-player.reducer';
import { TypePlayerViewEffects } from './players/store/effects/type-view-player.effect';
import { TypeViewPlayerService } from './players/store/services/type-view-player.service';


@NgModule({
  imports: [
    SharedModule,
    MenuRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AppInMemoryApi),
    StoreModule.forFeature('tokendata',getTokenReducers.reducer),
    StoreModule.forFeature(arenasFeature),
    StoreModule.forFeature(arenabyidFeature),
    StoreModule.forFeature(arenaAddEditFeature),
    StoreModule.forFeature(arenadeleteFeature),
    StoreModule.forFeature(teamsFeature),
    StoreModule.forFeature(typeViewFeature),
    StoreModule.forFeature(teambyidFeature),
    StoreModule.forFeature(teamAddEditFeature),
    StoreModule.forFeature(teamdeleteFeature),
    StoreModule.forFeature(typeViewTeamFeature),
    StoreModule.forFeature(playersFeature),
    StoreModule.forFeature(playerbyidFeature),
    StoreModule.forFeature(playerAddEditFeature),
    StoreModule.forFeature(playerdeleteFeature),
    StoreModule.forFeature(typeViewPlayerFeature),
    EffectsModule.forFeature(
      [
        LoginEffects,
        ArenasEffects,
        ArenasByIdEffects,
        ArenasAddEditEffects,
        ArenasDeleteEffects,
        TeamsEffects,
        TypeViewEffects,
        TeamsByIdEffects,
        TeamsAddEditEffects,
        TeamsDeleteEffects,
        TypeTeamViewEffects,
        PlayerEffects,
        PlayersByIdEffects,
        PlayerAddEditEffects,
        PlayersDeleteEffects,
        TypePlayerViewEffects   
      ]),
  ],
  declarations: [
    menuRoutedComponents
  ],
  providers: [
    TraceService,
    LoginService,
    AuthGuardService,
    ArenasService,
    ArenasByIdService,
    ArenasAddEditService,
    ArenasDeleteService,
    TeamsService,
    TypeViewService,
    TeamsByIdService,
    TeamsAddEditService,
    TeamsDeleteService,
    TypeViewTeamService,
    PlayersService,
    PlayersByIdService,
    PlayersAddEditService,
    PlayersDeleteService,
    TypeViewPlayerService
  ]
})
export class MenuModule {}