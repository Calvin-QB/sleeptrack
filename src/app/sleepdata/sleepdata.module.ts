import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepdataPageRoutingModule } from './sleepdata-routing.module';

import { SleepdataPage } from './sleepdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepdataPageRoutingModule
  ],
  declarations: [SleepdataPage]
})
export class SleepdataPageModule {}
