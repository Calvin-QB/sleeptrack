import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import {Storage} from '@capacitor/storage';

@Component({
  selector: 'app-sleeplog',
  templateUrl: './sleeplog.page.html',
  styleUrls: ['./sleeplog.page.scss'],
})
export class SleeplogPage implements OnInit {

  constructor(public sleepService:SleepService, public alertController: AlertController) { }

  startDate: Date;
  endDate: Date;
  lastSlept: OvernightSleepData;
  showSummary: boolean;


  ngOnInit() {
    // if (SleepService.AllOvernightData.length != 0){
    //   this.lastSlept = SleepService.AllOvernightData[SleepService.AllOvernightData.length-1];
    // }
    Storage.get({key : 'showSummary'}).then((user) => { if (JSON.parse(user.value)){
			this.lastSlept = SleepService.AllOvernightData[SleepService.AllOvernightData.length-1];
		}})
    


    
  }
  hideCard(){
		this.lastSlept = null;
		Storage.set({key: 'showSummary', value: JSON.stringify(false)}).then(() =>
			{console.log("Save preference, false");}
			);

	}

  buttonClicked(){
    if (!this.startDate){
      var date = new Date();
      this.startDate = date;
      this.lastSlept = null;
    }
    else{
      var date = new Date();
      this.endDate = date;
      var overnightSleep = new OvernightSleepData(this.startDate, this.endDate);
      this.sleepService.logOvernightData(overnightSleep);
      Storage.set({key: 'overnightData', value: JSON.stringify(SleepService.AllOvernightData)}).then(() =>
			{console.log("set overnight data");}
			);

			Storage.set({key: 'allData', value: JSON.stringify(SleepService.AllSleepData)}).then(() =>
			{console.log("set all data");}
			);

      Storage.set({key: 'showSummary', value: JSON.stringify(true)}).then(() =>
			{console.log("Save preference.true ");}
			);
      this.lastSlept = overnightSleep;
      this.startDate = null;
      this.endDate = null;

    }
  }

}
