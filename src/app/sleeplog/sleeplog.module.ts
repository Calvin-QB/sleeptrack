import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleeplogPageRoutingModule } from './sleeplog-routing.module';

import { SleeplogPage } from './sleeplog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleeplogPageRoutingModule
  ],
  declarations: [SleeplogPage]
})
export class SleeplogPageModule {}
