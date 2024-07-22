
import { Component, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

import { ActivityM } from '@carbon/model/activity.model';
import { ActivityDataService } from '@carbon/service/activity-data.service';
import { ActivityService } from '@carbon/service/activity.service';

import { ActivityConfigController } from '@carbon/controller/activity-config.controller';
import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { ViewComponent } from '@carbon/component/activity-config/ghg/scope-1/mobile-combustion2/view/view.component';
import { CreateUpdateComponent } from './create-update/create-update.component';

/* tsc-library */
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { InvalidForm } from '@library/tsc-common';
import { UpdateComponent } from './update';
/* tsc-library */

@Component({
    selector: 'app-Mobile-combustion',
    templateUrl: './mobile-combustion.component.html',
})
export class MobileCombustion2Component extends UpdateComponent {

    currentOrgID: any;

    activityID: any;
    activityDataID: any;
    activityKeyID: any;
    activity = new ActivityM();
    selectedTab: number = 1;

    isActivityDataValid = true;

    activityDataWithDataConfig: any;
    activityConfigData: any;
    activityConfigSource:any;
    configuration: any;

    approveBtn: boolean = false;
    updateBtn: boolean = true;
    submitBtn: boolean = false;
    activityDataAction: any = 'APPROVED';
    @ViewChild('configCreate') activityConfigComp: ViewComponent;
    @ViewChild('activityDataComp') activityDataComp: CreateUpdateComponent;
    isApiValid = true;

    constructor(
        public storageService: StorageService,
        public activatedRoute: ActivatedRoute,
        public location: Location,
        public toastrService: ToastrService,
        public activityDataService: ActivityDataService,
        public activityDataController: ActivityDataController,
        public activityConfigController: ActivityConfigController,
        public activityService: ActivityService
    ) {
        super(toastrService, activityDataController, location, activityDataService, activityConfigController, activityService)
        storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = parseInt(storageService.getStorage(['currentOrgID']));
    }

    ngOnInit(): void {

        let params = this.activatedRoute.snapshot.params;
        this.activityDataID = params['activityDataID'];
        this.activatedRoute.data.subscribe((routeData) => {
            if (routeData['activityID']) {
                this.activityID = routeData['activityID'];
            }

            if (routeData['activityKeyID']) {
                this.activityKeyID = routeData['activityKeyID'];
            }
            this.getActivityDataWithActivityDataConfig(this.activityKeyID, this.activityDataID)
        });
    }

    cancelBtn() {
        this.location.back();
    }


}