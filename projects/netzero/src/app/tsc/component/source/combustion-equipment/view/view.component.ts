import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AssetController } from '@netzero/controller/asset.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styles: []
})

export class ViewComponent implements OnInit {

	COMMON_CONSTANT = COMMON_CONSTANT;

	currentOrgID: any;

	assetID: any;
	asset: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private assetController: AssetController,
		private stroageService: StorageService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.activatedRoute.parent.parent.params.subscribe((params) => {
			this.assetID = params.assetID;
		});
		
		this.getAssetByID();
	}

	getAssetByID(){
		this.assetController.getAssetByID(this.assetID, this.currentOrgID).subscribe((res: any) => {
			this.asset = res;
		});
	}
}
