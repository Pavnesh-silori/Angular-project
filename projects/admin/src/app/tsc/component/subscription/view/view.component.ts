import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { SubscriptionService } from '@Admin/service/subscription.service';
import { SubscriptionController } from '@Admin/controller/subscription.controller';
import { SubscriptionM } from '@Admin/model/subscription.model';
import { PlanPriceType } from '@library/subscription-service';

// library
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ApplicationService } from '@library/application-service';
// /library/

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
	faEllipsisV = faEllipsisV;
	PlanPriceType = PlanPriceType;

	rootOrgID: any;
	isCancelled: any;

	subscriptionM: SubscriptionM[] = [];
	activeSubscription: SubscriptionM[] = [];
	paymentMaintenanceStatus: any;
    appLogoBasePath: string = '/assets/images/application-logo/icon/';

	constructor(
		private router: Router,
		private subscriptionService: SubscriptionService,
		private subscriptionController: SubscriptionController,
        private applicationService: ApplicationService,
		private toasterService: ToastrService,
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
		this.getSubscriptionByRootOrgID(this.rootOrgID);
	}

	async getSubscriptionByRootOrgID(rootOrgID) {
		this.subscriptionM = <SubscriptionM[]>await this.subscriptionService.getSubscriptionByRootOrgID(rootOrgID);

		if (!(this.subscriptionM['paymentMaintenance'] && this.subscriptionM['subscription'])) {
			this.router.navigate(['/subscription/plan']);
		}

		this.activeSubscription = this.subscriptionM['subscription'];
		this.activeSubscription.forEach((subscription) => {
			subscription.application = subscription.application.filter(applicationFilter =>
				applicationFilter['applicationKeyID'] !== 'ACCOUNT' && applicationFilter['applicationKeyID'] !== 'TSC_OFFSET'
			);
		});
		this.paymentMaintenanceStatus = this.subscriptionM['paymentMaintenance']
		if (this.paymentMaintenanceStatus == 'YES') {
			this.toasterService.openToast('Info', `Oops! System is under maintenantence. Please give some time and try again.`, 'info');
		}
	}

	cancelSubscription(subscriptionID) {
		this.subscriptionController.cancelSubscription(this.rootOrgID, subscriptionID).subscribe((cancelRes) => {
			if (cancelRes['status'] == 'SUCCESS') {
				let toast = this.toasterService.getToastStatus(cancelRes['status']);
				this.toasterService.openToast(toast['title'], cancelRes['message'], toast['color']);
				this.activeSubscription.find(subscription => subscription.subscriptionID == subscriptionID).isCancelled = true; // Set isCancelled flag to true
			}
		},
			error => {
				console.log('Error in cancelSubscription -', error);
				this.toasterService.openToast(error.error['title'], error.error['message'], error.error['result']);
			});
	}

    getApplicationLogoFileName(keyID: string): string {
        let logo: string;
        logo = this.appLogoBasePath + this.applicationService.getApplicationLogoFileName(keyID) + '.png';
        return logo;
    }

}
