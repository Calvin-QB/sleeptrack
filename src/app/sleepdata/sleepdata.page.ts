import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-sleepdata',
  templateUrl: './sleepdata.page.html',
  styleUrls: ['./sleepdata.page.scss'],
})
export class SleepdataPage implements OnInit {

  constructor(public sleepService:SleepService) { }
  totalList: SleepData[];


  ngOnInit() {
    this.totalList = SleepService.AllSleepData;
    console.log("On init of sleepdata.ts", this.totalList)
  }



}
