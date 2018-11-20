import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { LeaderboardsPage } from '../leaderboards/leaderboards.page';
import { LeaguePage } from '../league/league.page';
import { CreatePage } from '../create/create.page';
import { ProfilePage } from '../profile/profile';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'create',
        outlet: 'create',
        component: CreatePage
      },
      {
        path: 'leaderboards',
        outlet: 'leaderboards',
        component: LeaderboardsPage
      },
      {
        path: 'league',
        outlet: 'league',
        component: LeaguePage
      },
      {
        path: 'profile',
        outlet: 'profile',
        component: ProfilePage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
