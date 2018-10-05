import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	items$: Observable<string[]>;
	constructor(private dataService: DataService, private alertCtrl: AlertController) {}

	ngOnInit() {
		this.items$ = this.dataService.getItems();
	}

	addItem() {
		let newItem = Math.round(Math.random()*1000).toString();
		this.dataService.addItem(newItem);
	}

	addItemAlert() {
		this.alertCtrl.create({
			header: 'New Item',
			message: 'Please enter new Item',
			inputs: [
				{
					type: 'text',
					name: 'item'
				}
			],
			buttons: [
				{
					text: 'Add Item',
					handler: (data) => {
						this.dataService.addItem(data.item);
					}
				}
			]
		}).then((alert) => {
			alert.present();
		});
	}
}
