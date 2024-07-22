import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ActivityConfigEnum } from '@carbon/enum/activity-config.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { ActivityKeyIDEnum as ActivityKeyID, ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { ActivityService } from '@carbon/service/activity.service';
import { ActivityController } from '@carbon/controller/activity.controller';

@Component({
    selector: 'app-activity-selection',
    templateUrl: './activity-selection.component.html',
    styleUrls: ['./activity-selection.component.scss']
})
export class ActivitySelectionComponent implements OnInit {
    ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

    selectedButtonIndex: any;
    allFormType: any;
    allForms: any;

    allActivity: any;
    allActivityClone: any;

    origin: any;
    action: any;

    emitValueOnChange: boolean = true;
    isSelectActivity: boolean = false;

    ghgActivity: any = [];
    cbamActivity: any = [];

    selectedFormType: any;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data,
        private renderer: Renderer2,
        private activityService: ActivityService,
        private router: Router,
        private dialogRef: MatDialogRef<ActivitySelectionComponent>,
        private activityController: ActivityController,
    ) {
        this.dialogRef.disableClose = true;
        this.origin = data.origin;
        this.action = data.action;
    }

    ngOnInit(): void {
        this.getAllActivity();
        this.getAllFormData();
        if (this.origin == 'ad-hoc') {
            this.isSelectActivity = true;
        }
    }

    ngAfterViewInit() {
        this.heightHandler();
    }

    heightHandler = () => {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 48) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    async getAllActivity() {
        this.allActivity = await <any>this.activityService.getAllActivityNew();
        const activityPffNotAvailable = [
            ActivityKeyID.REFRIGERATION_AC_AND_FIRE_SUPPRESSION,
            ActivityKeyID.OTHER_FUGITIVE_EMISSION,
            ActivityKeyID.PURCHASED_GOODS_AND_SERVICES,
            ActivityKeyID.CAPITAL_GOODS,
            ActivityKeyID.UPSTREAM_TRANSPORTATION_AND_DISTRIBUTION,
            ActivityKeyID.DOWNSTREAM_TRANSPORTATION_AND_DISTRIBUTION,
            ActivityKeyID.BUSINESS_TRAVEL,
            ActivityKeyID.EMPLOYEE_COMMUTING
        ];
        this.allActivity = this.allActivity.filter(activity => !activityPffNotAvailable.includes(activity.keyID));
        this.allActivityClone = this.allActivity;
        this.allActivity.forEach((res: any) => {
            if (res.types[0].keyID == ACTIVITY_FORM_TYPE_KEYID_ENUM.GHG_FORM) {
                this.ghgActivity.push(res);
            } else {
                this.cbamActivity.push(res);
            }
        })
        if (this.isSelectActivity) {
            this.allActivity = this.ghgActivity;
        }
    }

    getAllFormData() {
        this.activityController.getAllFormsType().subscribe((res: any) => {
            // Create a new object for the additional form type to show both all actity form
            const allFormType = {
                id: 0,
                keyID: "all-form",
                name: "All forms"
            };

            this.allForms = [allFormType, ...res];
            this.selectedButtonIndex = "all-form";
        });

    }

    onClickFunction(keyID: any) {
        this.selectedButtonIndex = keyID;
        if (keyID === 'all-form') {
            this.allActivity = this.allActivityClone;
        } else {
            let allActivity1 = [];
            this.allActivityClone.forEach((activity: any) => {
                activity.types.forEach((formType: any) => {
                    if (formType.keyID == keyID) {
                        allActivity1.push(activity);
                    }
                })
            })
            this.allActivity = allActivity1;
        }
    }

    selectActivity(value) {
        let activity = value;
        try {
            if (this.origin == ActivityConfigEnum.PFF && this.action == 'create') {
                if (activity['keyID'] == ActivityKeyIDEnum.MOBILE_COMBUSTION) {
                    this.router.navigate([
                        `/carbon-setting/activity-config/activity/${ActivityKeyIDEnum.MOBILE_COMBUSTION}/create`,
                    ]);
                } else {
                    this.router.navigate([
                        `/carbon-setting/activity-config/activity/${activity['keyID']}`,
                        { outlets: { activityConfig: ['create'] } }
                    ],
                        { queryParams: { activityID: activity['id'], origin: this.origin, action: this.action, tabView: 'YES' } }
                    );
                }
            } else if (this.origin == ActivityConfigEnum.AD_HOC && this.action == 'create') {
                // this.router.navigate(['/redirect']).then(() => {
                this.router.navigate([
                    `/activity-data/activity/${activity['keyID']}`,
                    { outlets: { activityConfig: ['create'], activityData: ['create'] } }],
                    { queryParams: { activityID: activity['id'], origin: this.origin, action: this.action, tabView: 'YES' } });
                // });
            }

            this.dialogRef.close();
        } catch (error) {
            console.log(error)
        }
    }

    searchFn(event) {
        const searchTerm = (event || '').trim().toLowerCase();
        if (this.isSelectActivity || this.selectedButtonIndex == ACTIVITY_FORM_TYPE_KEYID_ENUM.GHG_FORM) {
            if (!searchTerm) {
                this.allActivity = this.ghgActivity;
            } else {
                this.allActivity = this.ghgActivity.filter((activity: any) =>
                    activity.name.toLowerCase().includes(searchTerm)
                );
            }
        } else if (this.selectedButtonIndex == ACTIVITY_FORM_TYPE_KEYID_ENUM.CBAM_FORM) {
            if (!searchTerm) {
                this.allActivity = this.cbamActivity;
            } else {
                this.allActivity = this.cbamActivity.filter((activity: any) =>
                    activity.name.toLowerCase().includes(searchTerm)
                );
            }
        }
        else {
            if (!searchTerm) {
                this.allActivity = this.allActivityClone;
            } else {
                this.allActivity = this.allActivityClone.filter((activity: any) =>
                    activity.name.toLowerCase().includes(searchTerm)
                );
            }
        }
    }
}
