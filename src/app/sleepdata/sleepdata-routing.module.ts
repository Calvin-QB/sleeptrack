import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepdataPage } from './sleepdata.page';

const routes: Routes = [
  {
    path: '',
    component: SleepdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepdataPageRoutingModule {}
