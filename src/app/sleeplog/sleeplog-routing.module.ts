import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleeplogPage } from './sleeplog.page';

const routes: Routes = [
  {
    path: '',
    component: SleeplogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleeplogPageRoutingModule {}
