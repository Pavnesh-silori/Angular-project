import { Injectable } from "@angular/core";

import { ToastrService } from "@library/toastr-service";

import { ActivityDataController } from "@carbon/controller/activity-data.controller";

import { ToastrTitle, ToastrColor } from "@library/toastr-service";

@Injectable({
    providedIn: 'root'
})

export class ActivityDataService {

    constructor(
        private toastrService: ToastrService,
        private activityDataController: ActivityDataController,
    ) { }

    getActivityDataByID(currentOrgID, activityDataID, activityKeyID): Promise<any> {
        return new Promise(resolve => {
            let formData: any;
            this.activityDataController.getActivityDataByID(currentOrgID, activityKeyID, activityDataID).subscribe((result: any) => {
                formData = result;
            }, error => {
                console.log('error in getActivityDataByID() -', error);
                this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting activity details.', ToastrColor.ERROR);
            }).add(() => {
                resolve(formData);
            })
        })
    }

    getFugitiveRefrigerationActivityDataByCedID(currentOrgID, activityKeyID, cedID): Promise<any> {
        return new Promise(resolve => {
            let formData: any;
            this.activityDataController.getFugitiveRefrigerationActivityDataByCedID(currentOrgID, activityKeyID, cedID)
                .subscribe((result: any) => {
                    formData = result;
                }, error => {
                    console.log('error in getFugitiveRefrigerationActivityDataByCedID() -', error);
                    this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting activity details.', ToastrColor.ERROR);
                }).add(() => {
                    resolve(formData);
                })
        })
    }

    getFactorDetailsByFormDataID(currentOrgID, formDataID, activityKeyID): Promise<any> {
        return new Promise(resolve => {
            let factors: any;
            this.activityDataController.getFactorDetailsByFormDataID(currentOrgID, formDataID, activityKeyID).subscribe((result: any) => {
                factors = result;
            }, error => {
                console.log('error in getFactorDetailsByFormDataID() -', error);
                this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting factor details.', ToastrColor.ERROR);
            }).add(() => {
                resolve(factors);
            })
        })
    }

    getActivityDataWithActivityDataConfig(currentOrgID, activityDataKeyID, activityDataID): Promise<any> {
        return new Promise(resolve => {
            let formData: any;
            this.activityDataController.getActivityDataWithActivityDataConfigByID(currentOrgID, activityDataKeyID, activityDataID).subscribe((result: any) => {
                formData = result;
            }, error => {
                console.log('error in get getActivityDataDetailsByID -', error);
                this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting form details.', ToastrColor.ERROR);
            }).add(() => {
                resolve(formData);
            })
        })
    }

}