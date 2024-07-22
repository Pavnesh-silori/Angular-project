import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AssetController } from '@netzero/controller/asset.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
import { VehicleController } from '@netzero/controller/vehicle.controller';
// /tsc-library

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styles: []
})

export class ViewComponent implements OnInit {

	COMMON_CONSTANT = COMMON_CONSTANT;

	currentOrgID: any;

	vehicleID: any;
	vehicle: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private vehicleController: VehicleController,
		private stroageService: StorageService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.activatedRoute.parent.parent.params.subscribe((params) => {
			this.vehicleID = params.id;
		});
		this.getVehicleByID();
	}

	getVehicleByID(){
		this.vehicleController.getVehicleByID(this.currentOrgID, this.vehicleID).subscribe((res: any) => {
			this.vehicle = res;
		});
	}
}
