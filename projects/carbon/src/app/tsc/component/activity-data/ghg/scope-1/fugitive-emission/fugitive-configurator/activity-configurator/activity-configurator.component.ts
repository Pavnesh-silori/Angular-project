import { Component, OnInit } from '@angular/core';

import { FugitiveActivityConfiguratorController } from '@carbon/controller/fugitive-activity-configurator.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
	selector: 'app-activity-configurator',
	templateUrl: './activity-configurator.component.html',
	styleUrls: ['./activity-configurator.component.scss']
})

export class ActivityConfiguratorComponent implements OnInit {

	isConfigured: boolean = false;
	currentOrgID: any;

	constructor(
		private fugitiveActivityConfiguratorController: FugitiveActivityConfiguratorController,
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.isActivityConfiguratorConfigured();
	}


	isActivityConfiguratorConfigured() {
		this.fugitiveActivityConfiguratorController.isActivityConfiguratorConfigured(this.currentOrgID).subscribe(response => {
			this.isConfigured = response['isConfigured'];
		},
			error => {
				console.log('error in isActivityConfiguratorConfigured() -', error);
			})
	}
}
