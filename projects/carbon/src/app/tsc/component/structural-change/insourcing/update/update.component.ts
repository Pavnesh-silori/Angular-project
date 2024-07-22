import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import * as moment from 'moment';
import { isEqual } from "lodash";

import { Moment } from 'moment';

import { MatDatepicker } from '@angular/material/datepicker';

import { Location } from '@angular/common';

import { InOutsourcingBaseYearEmissionDialogComponent } from '../../in-outsourcing-base-year-emission-dialog/in-outsourcing-base-year-emission-dialog.component';

import { StructuralChangeTabTypeEnum, StructuralChangeTypeEnum } from '@carbon/enum/ghg.enum';
import { date_format_providers } from '@carbon/constant/carbon.constant';
import { ScopeWithActivityM } from '@carbon/model/scope.model';
import { StructuralChangeData, StructuralChangeDataM, ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';

import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

import { ScopeService } from '@carbon/service/scope.service';
import { GhgBaseYearService } from '@carbon/service/ghg.service';

// tsc-library
import { ButtonLabelEnum, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID, UomCode } from '@library/unit-service';
import { StorageService } from '@library/storage-service';
import { DateService } from '@library/date';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// /tsc-library
@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styles: [''],
    providers: date_format_providers
})
export class UpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    StructuralChangeTabType = StructuralChangeTabTypeEnum;

    updateInOutsourcingFG: FormGroup;

    rootOrgID: any;
    tabType: any;
    type: any;
    recordID: any;

    maxLength = 100;

    currentYear: number = this.dateService.getCurrentYear();
    minYear: number = 1900;
    maxYear: number = this.currentYear - 1;
    currentValueYear = this.currentYear - 1;

    year: number[] = [];

    emissionYear: number[] = [];
    showEmissionYear: boolean = false;
    baseYear: number;
    ghgBaseYear: number = null;
    sbtiBaseYear: number = null;

    scope: any;
    scopeKeyID: any;
    scopeName: any;
    scopeID: any;
    scopesWithActivity: ScopeWithActivityM[] = [];
    activityList: any;
    selectedScopeActivity: any[] = [];

    dialogDataArray: any[] = [];
    yearlyEmissionDialogData: { [key: number]: any } = {};

    noActivitiesSelected: boolean = true;
    emissionsForBaseYearRequired: boolean = false;

    structuralChangeRes = new StructuralChangeData();

    initialObject: any;
    isEqual: boolean = true;

    ghgEmissionRes: ghgBaseYearEmissionViewM[];
    afterClosed: boolean = false;

    fillEmissionYear = [];
    routerLink: any;

    resetEmissionDataRequired: boolean = false;
    resetEmissionList: any[] = [];

    noEntityYearRange: string = null;

    unit: UnitM;
    unitList: UnitM[];

    dataFillInit: boolean = true;
    prevData = [];

    preSelectedActivityList = [];

    today: Date = new Date();

    constructor(
        private storageService: StorageService,
        private dateService: DateService,
        private scopeService: ScopeService,
        private ghgBaseYearController: GhgBaseYearController,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private updateInOutsourcingFB: FormBuilder,
        private dialog: MatDialog,
        private baseYearController: BaseYearController,
        private ghgBaseYearService: GhgBaseYearService,
        private unitService: UnitService,
        private toastrService: ToastrService,
        public location: Location,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.activatedRoute.data.subscribe(data => {
            this.tabType = data['tabType'];
            if (this.tabType == StructuralChangeTabTypeEnum.INSOURCING) {
                this.type = StructuralChangeTypeEnum.INSOURCING;
                this.routerLink = `carbon-setting/structural-change/insourcing/page`;
            } else if (this.tabType == StructuralChangeTabTypeEnum.OUTSOURCING) {
                this.type = StructuralChangeTypeEnum.OUTSOURCING;
                this.routerLink = `carbon-setting/structural-change/outsourcing/page`;
            }
        })

        this.activatedRoute.params.subscribe((param) => {
            this.recordID = param['recordID']
        });

        this.getAllScopeWithActivity();
        this.updateInOutsourcingInit();
        this.getStructuralChangeOrgByID();
        this.populateYear();
        this.getSbtiBaseYear();
        this.ghgBaseYearEmission();
    }

    ngAfterViewInit() {
        this.updateInOutsourcingFG.get('entityStartYear').valueChanges.subscribe((value) => {
            this.populateYearForEmissions(value);
        });

        this.updateInOutsourcingFG.get('activityID').valueChanges.subscribe((selectedActivityIDs) => {
            this.selectedScopeActivity = this.activityList?.filter(activity => selectedActivityIDs.includes(activity.id));

            if (this.selectedScopeActivity.every(element => this.preSelectedActivityList.includes(element))) {
                this.resetEmissionDataRequired = false;
            } else {
                if (this.fillEmissionYear.length != 0) {
                    this.resetEmissionDataRequired = true;
                } else {
                    this.resetEmissionDataRequired = false;
                }
            }

            if (!this.dataFillInit) {
                const isExit = this.selectedScopeActivity.every(item => this.prevData.includes(item));
                if (!isExit) {
                    this.resetEmissionDataRequired = true;
                } else {
                    this.resetEmissionDataRequired = false;
                }
            }

            this.noActivitiesSelected = selectedActivityIDs.length == 0;

            if (this.resetEmissionDataRequired) {
                this.resetEmissionList = [];
                this.fillEmissionYear.forEach(year => {
                    this.resetEmissionList.push(year);
                });
            }
        });
    }

    async getUnit() {
        this.unitList = <UnitM[]>await this.unitService.getUnit([`type:` + UnitTypeKeyID.EQUIVALENT_EMISSION]);
        this.unit = this.unitList.find(unit => unit.uomCode == UomCode.TCO2E);
    }

    async ghgBaseYearEmission() {
        this.ghgEmissionRes = <ghgBaseYearEmissionViewM[]>await this.ghgBaseYearService.getAllGHGEmissionsForView(this.rootOrgID);
        this.ghgBaseYear = this.ghgEmissionRes['baseYear'];
        this.setBaseYear();
        this.populateYearForEmissions(this.updateInOutsourcingFG.get('entityStartYear').value);
    }

    setBaseYear() {
        if (this.ghgBaseYear && this.sbtiBaseYear) {
            if (this.ghgBaseYear == this.sbtiBaseYear || this.ghgBaseYear > this.sbtiBaseYear) {
                this.baseYear = this.ghgBaseYear;
            } else {
                this.baseYear = this.sbtiBaseYear;
            }
        } else if (this.ghgBaseYear) {
            this.baseYear = this.ghgBaseYear;
        } else {
            this.baseYear = this.sbtiBaseYear;
        }
    }

    getSbtiBaseYear() {
        this.baseYearController.getBaseYearByType(this.rootOrgID, BaseYearEnum.SBTI_BASE_YEAR).subscribe((res: ghgBaseYearEmissionViewM) => {
            this.sbtiBaseYear = res.baseYear;
        })
    }

    async getAllScopeWithActivity() {
        this.scopesWithActivity = <ScopeWithActivityM[]>await this.scopeService.getAllScopeWithActivity();

        if (this.tabType == StructuralChangeTabTypeEnum.INSOURCING) {
            this.scopeKeyID = 'SCOPE3';
            this.scopeName = 'Scope 3';
            this.scopeID = 3;
        } else if (this.tabType == StructuralChangeTabTypeEnum.OUTSOURCING) {
            this.scopeKeyID = 'SCOPE1';
            this.scopeName = 'Scope 1';
            this.scopeID = 1;
        }

        this.scope = this.scopesWithActivity.find(scope => scope.keyID == this.scopeKeyID);
        this.activityList = this.scope.activity;
    }

    updateInOutsourcingInit() {
        this.updateInOutsourcingFG = this.updateInOutsourcingFB.group({
            type: [this.type],
            entityName: [, [Validators.required]],
            entityStartYear: [, [Validators.required]],
            description: [],
            eventDate: [, [Validators.required]],
            activityID: [, [Validators.required]],
            structuralChangeData: [, [Validators.required]]
        });
    }

    getStructuralChangeOrgByID() {
        this.ghgBaseYearController.getStructuralChangeOrgByID(this.rootOrgID, this.recordID, this.type).subscribe(
            (res: StructuralChangeDataM) => {
                if (res) {
                    this.structuralChangeRes = res;
                    this.patchStructuralChangeData();
                    this.updateInOutsourcingFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.updateInOutsourcingFG.getRawValue()); });
                }
                else {
                    this.structuralChangeRes = new StructuralChangeData();
                }
            },
            (error) => {
                console.log('error in getStructuralChangeOrgByID -', error);
                this.structuralChangeRes = new StructuralChangeData();
            }
        );
    }

    patchStructuralChangeData() {
        this.updateInOutsourcingFG.patchValue({
            entityName: this.structuralChangeRes['entityName'],
            entityStartYear: this.structuralChangeRes['entityStartYear'],
            description: this.structuralChangeRes['description'],
            eventDate: this.structuralChangeRes['eventDate'],
            activityID: this.structuralChangeRes['activityID'],
            structuralChangeData: this.structuralChangeRes['structuralChangeData'],

        });

        this.preSelectedActivityList = this.activityList?.filter(activity => this.updateInOutsourcingFG.get('activityID').value.includes(activity.id));

        this.updateInOutsourcingFG.get('activityID').valueChanges.subscribe((selectedActivityIDs) => {
            this.selectedScopeActivity = this.activityList.filter(activity => selectedActivityIDs.includes(activity.id));
            this.noActivitiesSelected = selectedActivityIDs.length == 0;
        });

        this.initialObject = this.updateInOutsourcingFG.value;
        this.isEqual = true;

        this.structuralChangeRes['structuralChangeData'].forEach(data => {
            this.fillEmissionYear.push(data.year);
        });
    }

    formatDate(control: string) {
        let date = moment(this.updateInOutsourcingFG.controls[control].value).format("YYYY-MM-DD");
        this.updateInOutsourcingFG.controls[control].patchValue(date);
    }

    populateYear() {
        for (let year = this.minYear; year <= this.maxYear; year++) {
            this.year.push(year);
        }
    }

    populateYearForEmissions(entityStartYear) {
        this.noEntityYearRange = null;
        this.showEmissionYear = true;
        this.emissionYear = [];

        for (let year = entityStartYear; year <= this.maxYear; year++) {
            if (year >= this.baseYear) {
                this.emissionYear.push(year);
            }
            if (entityStartYear == this.baseYear - 1) {
                this.noEntityYearRange = `${entityStartYear}`;
            }
            else {
                if (year < this.baseYear) {
                    this.noEntityYearRange = `${entityStartYear}   -  ${this.baseYear - 1}`;
                }
            }

            if (entityStartYear == this.baseYear + 1) {
                this.noEntityYearRange = `${this.baseYear}`;
            }
            if (entityStartYear > this.baseYear + 1) {
                this.noEntityYearRange = `${this.baseYear}   -  ${entityStartYear - 1}`
            }
        }

    }

    openGhgEmissionDialog(year, action) {
        let dialogData;
        if (action == 'update') {
            const structuralChangeData = this.updateInOutsourcingFG.get('structuralChangeData').value;
            dialogData = structuralChangeData.find(data => (data.year == year));
        } else {
            dialogData = this.yearlyEmissionDialogData[year];
        }
        this.afterClosed = false;
        const dialog = this.dialog.open(InOutsourcingBaseYearEmissionDialogComponent,
            {
                data: {
                    year: year,
                    emissionUnit: this.unit,
                    scopeID: this.scopeKeyID,
                    scopeName: this.scopeName,
                    selectedScopeActivity: this.selectedScopeActivity,
                    yearlyEmissionData: dialogData
                },
                minWidth: '80vw',
                maxWidth: '80vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });

        dialog.afterClosed().subscribe((emissionRes) => {
            if (emissionRes) {
                this.afterClosed = true;
                this.structuralChangeRes = emissionRes;
                this.fillEmissionYear.push(year);

                const modifiedList = this.resetEmissionList.filter(element => element !== year);
                this.resetEmissionList = modifiedList;

                const updatedStructuralChangeData = [...this.updateInOutsourcingFG.get('structuralChangeData').value];
                const index = updatedStructuralChangeData.findIndex(data => data.year == year);
                if (index != -1) {
                    updatedStructuralChangeData[index] = emissionRes;
                } else {
                    updatedStructuralChangeData.push(emissionRes);
                }

                if (year == this.ghgBaseYear) {
                    this.emissionsForBaseYearRequired = false;
                }

                this.updateInOutsourcingFG.get('structuralChangeData').patchValue(updatedStructuralChangeData);
                this.dialogDataArray = updatedStructuralChangeData;

                if (this.dataFillInit) this.dataFillInit = false;
                this.prevData = this.selectedScopeActivity;
            }
        });
    }

    updateInOutSource() {
        console.log('ads', this.updateInOutsourcingFG);
        let currentDataArr;
        let prevDataArr: [];
        if (this.updateInOutsourcingFG.get('structuralChangeData').value) {
            prevDataArr = this.updateInOutsourcingFG.get('structuralChangeData').value;
            currentDataArr = prevDataArr.filter(data => data['year'] >= this.updateInOutsourcingFG.get('entityStartYear').value);

            if (currentDataArr.length == 0) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }

        const emissionFormControl = this.updateInOutsourcingFG.get('structuralChangeData');

        if (this.updateInOutsourcingFG.get('entityStartYear').value <= this.ghgBaseYear) {
            if (emissionFormControl.value) {
                const emissionData = emissionFormControl.value;
                this.emissionsForBaseYearRequired = true;
                for (let i = 0; i < emissionData.length; i++) {
                    if (emissionData[i]['year'] == this.ghgBaseYear) {
                        this.emissionsForBaseYearRequired = false;
                        break;
                    }
                }
            }
            if (this.emissionsForBaseYearRequired && this.updateInOutsourcingFG.controls['entityStartYear'].value <= this.ghgBaseYear) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }

        if (this.updateInOutsourcingFG.invalid) {
            this.updateInOutsourcingFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);

            if (emissionFormControl) {
                const emissionsData = emissionFormControl.value;

                const emissionsForBaseYear = emissionsData.find((structuralChangeData) => {
                    return structuralChangeData.year == this.ghgBaseYear &&
                        ((structuralChangeData.emissionRecords && structuralChangeData.emissionRecords[0]?.['equityShareApproach']?.['emission'] == ('' || null)));
                });

                if (emissionsForBaseYear) {
                    this.emissionsForBaseYearRequired = true;
                }
            }
            return;
        }

        if (this.resetEmissionList.length != 0) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.updateInOutsourcingFG.get('structuralChangeData').patchValue(currentDataArr);

        let fillData = [];
        let activityList = [];
        fillData = this.updateInOutsourcingFG.get('structuralChangeData').value;
        activityList = this.updateInOutsourcingFG.get('activityID').value;

        let dataJson = [];
        for (let i = 0; i < fillData.length; i++) {
            let updatedJson = this.updateInOutsourcingFG.get('structuralChangeData').value[i];
            let isExistData = this.updateInOutsourcingFG.get('structuralChangeData').value[i]?.['emissionRecords']?.filter(id => activityList.includes(id['activityID']));
            updatedJson['emissionRecords'] = isExistData;
            dataJson.push(updatedJson);
        }

        this.updateInOutsourcingFG.get('structuralChangeData').patchValue(dataJson);
        this.ghgBaseYearController.updateStructuralChangeOrg(this.rootOrgID, this.recordID, this.updateInOutsourcingFG.value)
            .subscribe((subsidiaryRes: ResponseM) => {
                this.router.navigate([this.routerLink]);
            },
                error => {
                    console.log('error in updateInOutSource - ', error);
                });
    }

    // Datepicker calender open/close
    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    public errorHandling = (control: string, error: string) => {
        return this.updateInOutsourcingFG.controls[control].hasError(error);
    }
}
