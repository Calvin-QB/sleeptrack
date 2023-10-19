import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabBarPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'sleeplog',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sleeplog/sleeplog.module').then(m => m.SleeplogPageModule)
          }
        ]
      },
      {
        path: 'sleepdata',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sleepdata/sleepdata.module').then(m => m.SleepdataPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
