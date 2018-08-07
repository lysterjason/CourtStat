import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { LeaguePageModule } from '../league/league.module';
import { LeaderboardsPageModule } from '../leaderboards/leaderboards.module';
import { CreatePageModule } from '../create/create.module';
import { ProfilePageModule } from '../profile/profile.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    LeaderboardsPageModule,
    LeaguePageModule,
    ProfilePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
