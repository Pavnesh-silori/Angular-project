import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductAndService } from '@netzero/model/product-service.model';
import { ProductServiceTabTypeEnum } from '@netzero/enum/product-service-type.enum';

import { SharedProductService } from '@netzero/controller/shared-product-service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, DialogEnum, FormAction, MATERIAL_CONSTANT, StatusService } from '@library/tsc-common';
import { Subject, combineLatest } from 'rxjs';
// /tsc-library

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styles: []
})

export class ViewComponent implements OnInit {

	COMMON_CONSTANT = COMMON_CONSTANT;
	MATERIAL_CONSTANT = MATERIAL_CONSTANT;
	ButtonTooltipEnum = ButtonTooltipEnum;
	FormAction = FormAction;

	ProductServiceTabTypeEnum = ProductServiceTabTypeEnum;
	productAndServiceM = new ProductAndService();

	currentOrgID: any;
	productAndServiceID: any;
	tabType: string;

	showApiKey = false;
	data: any;

	paramsData: any;

	status: any;
	private destroy$ = new Subject<void>();

	constructor(
		private activatedRoute: ActivatedRoute,
		private stroageService: StorageService,
		private sharedProductAndService: SharedProductService,
		public StatusService: StatusService,
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.paramsData = combineLatest([
			this.activatedRoute.parent.parent.params,
			this.activatedRoute.data
		]).subscribe(([params, data]) => {
			this.productAndServiceID = params['productID'];
			this.tabType = data.tabType;
			this.getProductAndService();
		});
	}

	getProductAndService() {
		this.sharedProductAndService.fetchData(this.productAndServiceID, this.currentOrgID, this.tabType.toLowerCase());
		this.sharedProductAndService.data$.subscribe((res: any) => {
			this.productAndServiceM = res;
		});
	}

	ngOnDestroy(): void {
		if (this.paramsData) {
		  this.paramsData.unsubscribe();
		}
	  }
}
