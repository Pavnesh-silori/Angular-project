import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
import { ViewUtility } from '../view.utility';

import { FugitiveReleasesCreateUpdateDailog } from '@carbon/component/activity-data/ghg/scope-1/fugitive-emission/other-fugitive-sources/_shared/fugitive-release-create-update/fugitive-releases-create-update.component';
// import { UpdateCategorizedRecordsComponent } from '@CarbonNetZero/component/import-records-emissions/update-categorized-records/update-categorized-records.component';
import { MatDialog } from '@angular/material/dialog';
import { CARBON_RECORD_VIEW } from '@carbon/constant/carbon-record-view.constant';
import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, MATERIAL_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'view-header',
    templateUrl: './view-header.component.html',
    styles: []
})
export class ViewHeaderComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    currentOrgID: any;

    @Input() recordData: any;
    @Input() calAppInEmployComm: any;

    activityDataID: any;

    activityData: any;
    activityConfigData: any;
    activityConfigSource: any;

    activityID: any;
    recordID: any;
    activityKeyID: any;

    isEmployeeCommutingAverageMethod: boolean;
    isEmployeeCommutingDistanceFuelMethod: boolean;

    showEdit: boolean = false;

    isScope2: boolean = false;
    isScope3SpendBased: boolean = false;
    isStationaryCombustion: boolean = false;
    isMobileCombustion: boolean = false;
    isWasteTreatmentActivity: boolean = false;
    isOtherFugutiveActivity: boolean = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private viewUtil: ViewUtility,
        private dialog: MatDialog,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes?.recordData?.currentValue != null) {
            this.activityData = changes.recordData.currentValue['activityData'];
            if (this.activityData != null) {
                this.activityID = this.activityData['activityID'];
                this.recordID = this.activityData['recordID'];
                this.activityKeyID = this.activityData['activityKeyID'];
            }

            this.activityConfigData = changes.recordData.currentValue['activityConfigData'];
            this.activityConfigSource = changes.recordData.currentValue['activityConfigSource'];

            this.renderView();
        }

        if (changes.calAppInEmployComm?.currentValue != null) {
            this.calAppInEmployComm = changes.calAppInEmployComm?.currentValue;
            if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_AVGERAGE_METHOD) {
                this.isEmployeeCommutingAverageMethod = true;
                this.showEdit = true;
            } else if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_DISTANCE_FUEL_METHOD || this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_FUEL_METHOD) {
                this.isEmployeeCommutingDistanceFuelMethod = true;
                this.showEdit = true;
            }
        }
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
        this.activatedRoute.params.subscribe(params => {
            this.activityDataID = params['activityDataID'];
        });
    }

    renderView() {
        const view = this.viewUtil.renderView(this.activityKeyID);
        switch (view) {
            case CARBON_RECORD_VIEW.SCOPE_2_VIEW:
                this.isScope2 = true;
                break;
            case CARBON_RECORD_VIEW.SCOPE_3_SPEND_BASED_VIEW:
                this.isScope3SpendBased = true;
                break;
            case CARBON_RECORD_VIEW.STATIONARY_COMBUSTION_VIEW:
                this.isStationaryCombustion = true;
                break;
            case CARBON_RECORD_VIEW.MOBILE_COMBUSTION_VIEW:
                this.isMobileCombustion = true;
                break;
            case CARBON_RECORD_VIEW.WASTE_GENERATED_IN_OPERATIONS_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
            case CARBON_RECORD_VIEW.OTHER_FUGUTIVE:
                this.isOtherFugutiveActivity = true;
                break;
            case CARBON_RECORD_VIEW.PURCHASED_GOODS_AND_SERVICES_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
                case CARBON_RECORD_VIEW.CAPITAL_GOODS_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
            default:
                console.log('unidentifiedrrrrrrrrr case encountered - ', view);
        }
    }

    routeToADUpdate() {
        // if (this.isScope3SpendBased) {
        //     let dialogRef;
        //     dialogRef = this.dialog.open(UpdateCategorizedRecordsComponent, {
        //         data: {
        //             currentOrgID: this.currentOrgID,
        //             activityDataID: this.activityDataID
        //         },
        //         minWidth: '600px',
        //         maxWidth: '600px',
        //         height: '100%',
        //         position: { right: '-2px', top: '0px' },
        //     });

        //     dialogRef.afterClosed().subscribe((closeRes) => {
        //         if (closeRes == 'Success') {
        //             this.router.navigate([`/import-records/records`]);
        //         }
        //     })
        // } else 
        if (this.isOtherFugutiveActivity) {
            let dialogRef;
            dialogRef = this.dialog.open(FugitiveReleasesCreateUpdateDailog, {
                data: {
                    currentOrgID: this.currentOrgID,
                    action: 'UPDATE',
                    activityDataID: this.activityData.id
                },
                minWidth: '600px',
                maxWidth: '600px',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });

            dialogRef.afterClosed().subscribe((closeRes) => {
                if (closeRes == 'Success') {
                    this.router.navigate([`/import-records/records`]);
                }
            })
        } else {
            this.router.navigate([`/activity-data/${this.activityDataID}/activity/${this.activityKeyID}`,
            { outlets: { activityConfig: ['update'], activityData: ['update'] } }],
                {
                    queryParams: {
                        activityID: this.activityID, activityDataID: this.activityDataID, activityKeyID: this.activityKeyID,
                        tabView: 'YES', action: 'update', from: 'record'
                    }
                }
            );
        }
    }

}
