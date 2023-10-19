import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { Storage } from '@capacitor/storage';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(public sleepService:SleepService, public alertController: AlertController) {

	}

	sleepVal: number;
	lastSelection: StanfordSleepinessData;
	showCard:boolean;

	ngOnInit() {

		Storage.get({key : 'allData'}).then((user) => {
			if (JSON.parse(user.value)){
				var sleepArray = JSON.parse(user.value);
				console.log("Entire database prior to starting app:", sleepArray);
				
				for (let i =0; i < JSON.parse(user.value).length; i++){
				if (sleepArray[i].sleepStart){
					var overnight = new OvernightSleepData(new Date(sleepArray[i].sleepStart), new Date(sleepArray[i].sleepEnd));
					overnight.id = sleepArray[i].id;
					overnight.loggedAt = new Date(sleepArray[i].loggedAt);
					this.sleepService.logOvernightData(overnight);
					
				}
				else{
					var sleepiness = new StanfordSleepinessData(sleepArray[i].loggedValue, new Date(sleepArray[i].loggedAt));
					sleepiness.id = sleepArray[i].id;
		
					this.sleepService.logSleepinessData(sleepiness);
					
					}
		
				}
				// if (SleepService.AllSleepinessData.length != 0){
				// 		this.lastSelection = SleepService.AllSleepinessData[SleepService.AllSleepinessData.length-1];
				// 	}
			}
		})

		Storage.get({key : 'showCard'}).then((user) => { if (JSON.parse(user.value)){
			this.lastSelection = SleepService.AllSleepinessData[SleepService.AllSleepinessData.length-1];
		}})
		// if (SleepService.AllSleepinessData.length != 0){
		// 	console.log('adding last seleceted');
		// 	this.lastSelection = SleepService.AllSleepinessData[SleepService.AllSleepinessData.length-1];
		// }


	}

	selectedSleep(){
		if (this.sleepVal != null){
			var date = new Date();
			var sleep = new StanfordSleepinessData(this.sleepVal, date);
			this.sleepService.logSleepinessData(sleep);
			this.sleepVal = null;
			this.lastSelection = SleepService.AllSleepinessData[SleepService.AllSleepinessData.length-1];
			Storage.set({key: 'sleepinessData', value: JSON.stringify(SleepService.AllSleepinessData)}).then(() =>
			{console.log("Setting sleepiness data in home.page");}
			);

			Storage.set({key: 'allData', value: JSON.stringify(SleepService.AllSleepData)}).then(() =>
			{console.log("Setting all data in home.page");}
			);

			Storage.set({key: 'showCard', value: JSON.stringify(true)}).then(() =>
			{console.log("Save preference.true ");}
			);
			
		}
		else{
			this.emptySelection();

		}
		
	}

	hideCard(){
		this.lastSelection = null;
		Storage.set({key: 'showCard', value: JSON.stringify(false)}).then(() =>
			{console.log("Save preference, false");}
			);

	}

	// async successSelect() {
	// 	const alert = await this.alertController.create({
	// 	  cssClass: 'my-custom-class',
	// 	  header: 'Selection Confirmed',
	// 	  message: 'Your selection has been sucessfully added!',
	// 	  buttons: ['OK']
	// 	});
	
	// 	await alert.present();
	
	// 	const { role } = await alert.onDidDismiss();
	// 	console.log('onDidDismiss resolved with role', role);
	//   }

	async emptySelection() {
		const alert = await this.alertController.create({
		  cssClass: 'my-custom-class',
		  header: 'Empty Selection',
		  message: 'Please select a rating',
		  buttons: ['OK']
		});
	
		await alert.present();
	
		const { role } = await alert.onDidDismiss();
		console.log('onDidDismiss resolved with role', role);
	  }

	  

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	// get allSleepData() {
	// 	return SleepService.AllSleepData;
	// }

}
