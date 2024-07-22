import { Injectable } from "@angular/core";

import { ToastrService } from "@library/toastr-service";

import { ActivityController } from "@carbon/controller/activity.controller";

@Injectable({
    providedIn: 'root'
})

export class ActivityService {

    constructor(
        private toastrService: ToastrService,
        private activityController: ActivityController,
    ) { }

    getAllActivity(): Promise<any[]> {
        return new Promise(resolve => {
            let activity: any[];
            this.activityController.getAllActivity()
                .subscribe((result: any) => {
                    activity = result;
                }, error => {
                    console.log('error in getAllActivity -', error);
                    this.toastrService.openToast('Error', 'Error in getting activity', 'error');
                }).add(() => {
                    resolve(activity);
                });
        });
    }

    getActivityByID(activityID): Promise<any[]> {
        return new Promise(resolve => {
            let activity: any[];
            this.activityController.getActivityByID(activityID)
                .subscribe((result: any) => {
                    activity = result;
                }, error => {
                    console.log('error in getActivityByID -', error);
                    this.toastrService.openToast('Error', 'Error in getting activity detail', 'error');
                }).add(() => {
                    resolve(activity);
                });
        });
    }
    getActivityByScopeID(scopeID: any): Promise<any[]> {
        return new Promise(resolve => {
            let activity: any[];
            this.activityController.getActivityListByScopeID(scopeID)
                .subscribe((result: any) => {
                    activity = result;
                }, error => {
                    console.log("error in getActivityByScopeID -", error);
                    this.toastrService.openToast('Error', 'Error in getting details', 'error');
                }).add(() => {
                    resolve(activity);
                });
        });
    }

    getAllActivityNew(): Promise<any[]> {
        return new Promise(resolve => {
            let activity: any[];
            this.activityController.getAllActivityNew().subscribe((result: any) => {
                activity = result;
            }, error => {
                console.log('error in getAllActivity -', error);
            }).add(() => {
                resolve(activity);
            });
        });
    }


    getActivityByKeyIDFromActivityList(activityKeyID: string, activityList: any[]) {
        return activityList?.find(activity => activity.keyID == activityKeyID);
    }
}