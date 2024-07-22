import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { ActivityDataService } from '@carbon/service/activity-data.service';
import { ActivityService } from '@carbon/service/activity.service';

import { ActivityDataController } from '@carbon/controller/activity-data.controller';
import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';
import { GwpdatasetController } from '@carbon/controller/gwp-dataset.controller';

import { StorageService } from '@library/storage-service';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styles: []
})
export class ViewComponent implements OnInit {
    currentOrgID: any;

    factorData: any;
    cedID: any;
    gwpDatasetID: any;
    activityDataID: any;
    activityKeyID: any;

    recordData: any;
    emissionData: any;
    calculatedEmissionDataID: any;
    gasGwp: any;

    employeeCommutingData: any;
    calAppInEmployComm: any;

    surveyID: any
    tableData: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private activityDataService: ActivityDataService,
        private activityService: ActivityService,
        private activityDataController: ActivityDataController,
        private gwpdatasetController: GwpdatasetController,
        private employeeSurveyController: EmployeeSurveyController,
        private storageService: StorageService,
    ) { }

    async ngOnInit(): Promise<void> {
        this.storageService.setStorage('switchOrgRedirect', 'YES');
        this.currentOrgID = this.storageService.getStorage(['currentOrgID']);

        await this.getAllActivity();

        this.activatedRoute.params.subscribe(params => {
            this.activityDataID = parseInt(params.activityDataID);
            this.activityKeyID = params.activityKeyID;
            this.calculatedEmissionDataID = parseInt(params.calculatedEmissionDataID);
            this.selectActivity();
            if (this.activityKeyID == ActivityKeyIDEnum.EMPLOYEE_COMMUTING) {
                this.getEmissionDataForEmployeeComm();
            } else {
                this.getEmissionDataByActivityDataID();
            }
        })
    }

    allActivities: any[];
    async getAllActivity() {
        this.allActivities = await this.activityService.getAllActivityNew()
    }

    selectActivity() {
        const all_scope_activities = this.allActivities?.filter(activity => activity.scope != null);

        const scope1And2Activities = all_scope_activities.filter(activity => activity.scope.keyID == ScopeKeyIDEnum.SCOPE_1_KEY_ID || activity.scope.keyID == ScopeKeyIDEnum.SCOPE_2_KEY_ID).map(activity => activity.keyID);
        const scope3Activities = all_scope_activities.filter(activity => activity.scope.keyID == ScopeKeyIDEnum.SCOPE_3_KEY_ID).map(activity => activity.keyID);

        if (scope1And2Activities.includes(this.activityKeyID)) {
            this.getActivityDataByID();
        } else if (this.activityKeyID == ActivityKeyIDEnum.EMPLOYEE_COMMUTING) {
            this.getActivityDataByIDForEmployee();
        } else if (scope3Activities.includes(this.activityKeyID)) {
            this.getScope3ActivityDataByID();
        }
    }

    async getActivityDataByID() {
        this.recordData = await this.activityDataService.getActivityDataByID(this.currentOrgID, this.activityDataID, this.activityKeyID);
    }

    async getActivityDataByIDForEmployee() {
        this.recordData = await this.activityDataController.getEmissionDataForEmployeeComm(this.currentOrgID, this.calculatedEmissionDataID)
            .subscribe((res: any) => {
                this.recordData = res;
                this.surveyID = res['activityData']['recordID'];
                this.getTableData();
            }, error => {
                console.log(error)
            })
    }

    async getScope3ActivityDataByID() {
        if (this.activityKeyID == 'waste-generated-in-operations') {
            this.activityDataController.getWasateGeneratedDetails(this.currentOrgID, this.activityDataID).subscribe((res: any) => {
                this.recordData = res;
            }, error => {
                console.log(error, 'Waste generation')
            })
        // } else {
        //     this.activityDataController.getScope3ActivityDataByID(this.currentOrgID, this.activityDataID)
        //         .subscribe(recordDataRes => {
        //             this.recordData = recordDataRes;
        //         }, error => {
        //             console.log('error in getScope3ActivityDataByID() - ', error)
        //         })
        } else {
            this.activityDataController.getScope3ActivityDataByKeyID(this.currentOrgID, this.activityKeyID, this.activityDataID)
                .subscribe(recordDataRes => {
                    this.recordData = recordDataRes;
                }, error => {
                    console.log('error in getScope3ActivityDataByKeyID() - ', error)
                })
        }
    }

    getEmissionDataByActivityDataID() {
        this.activityDataController.getEmissionDataByActivityDataID(this.currentOrgID, this.calculatedEmissionDataID)
            .subscribe(emissionRes => {
                if (emissionRes != null) {
                    this.emissionData = emissionRes;
                    this.cedID = emissionRes['cedID'];
                    this.gwpDatasetID = emissionRes['gwpDatasetID'];
                    this.getFactorDetailsByCEDID();
                    if (this.gwpDatasetID) this.getGasAndGwpdatasetByID();
                }
            }, error => {
                console.log('error in getEmissionDataByActivityDataID() - ', error)
            })
    }

    getEmissionDataForEmployeeComm() {
        this.activityDataController.getEmissionDataByActivityDataIDForEmployee(this.currentOrgID, this.calculatedEmissionDataID)
            .subscribe((emissionRes) => {
                if (emissionRes != null) {
                    this.emissionData = emissionRes;
                    this.calAppInEmployComm = this.emissionData['calculationDetails'].calculationApproachStdKeyID;
                    this.cedID = this.emissionData.cedID;
                    this.gwpDatasetID = this.emissionData['calculationDetails'].gwpDatasetID;
                    // this.emissionData = emissionRes['calculationDetails'];
                    this.employeeCommutingData = emissionRes['primaryEmissionModesList'];
                    this.getFactorDetailsEmpCommByCEDID();
                    if (this.gwpDatasetID) this.getGasAndGwpdatasetByID();
                }
            }, error => {
                console.log(error);
            })
    }

    getFactorDetailsByCEDID() {
        this.activityDataController.getCalculatedEmissionDataByCEDID(this.currentOrgID, this.cedID)
            .subscribe(factorRes => {
                this.factorData = factorRes;
            }, error => {
                console.log('error in getFactorDetailsByCEDID() - ', error);
            })
    }

    getFactorDetailsEmpCommByCEDID() {
        this.activityDataController.getEmissionFactorForModeOfTransport(this.currentOrgID, this.calculatedEmissionDataID)
            .subscribe((res: any) => {
                this.factorData = res;
            })
    }

    getGasAndGwpdatasetByID() {
        this.gwpdatasetController.getGasAndGwpdatasetByID(this.gwpDatasetID)
            .subscribe(gwpDatasetRes => {
                this.gasGwp = gwpDatasetRes;
            }, error => {
                console.log('error in getGasAndGwpdatasetByID() - ', error);
            })
    }

    getTableData() {
        this.employeeSurveyController.getSurveySummary(this.currentOrgID, this.surveyID)
            .subscribe(tableData => {
                this.tableData = tableData;
            })
    }

}
