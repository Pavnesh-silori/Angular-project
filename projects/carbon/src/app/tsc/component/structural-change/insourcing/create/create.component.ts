import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Moment } from 'moment';

import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment';

import { Location } from '@angular/common';

import { InOutsourcingBaseYearEmissionDialogComponent } from '../../in-outsourcing-base-year-emission-dialog/in-outsourcing-base-year-emission-dialog.component';

import { date_format_providers } from '@carbon/constant/carbon.constant';
import { StructuralChangeTabTypeEnum, StructuralChangeTypeEnum } from '@carbon/enum/ghg.enum';
import { ScopeWithActivityM } from '@carbon/model/scope.model';
import { ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';

import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';

import { ScopeService } from '@carbon/service/scope.service';
import { GhgBaseYearService } from '@carbon/service/ghg.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { DateService } from '@library/date';
import { StorageService } from '@library/storage-service';
import { MatDatepicker } from '@angular/material/datepicker';
// /tsc-library

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
    providers: date_format_providers
})

export class CreateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    StructuralChangeTabType = StructuralChangeTabTypeEnum;

    createInOutsourcingFG: FormGroup;

    rootOrgID: any;
    tabType: any;
    type: any;

    maxLength = 100;

    currentYear: number = this.dateService.getCurrentYear();
    minYear: number = 1900;
    maxYear: number = this.currentYear - 1;
    currentValueYear = this.currentYear - 1;

    year: number[] = [];

    emissionYear: number[] = [];
    showEmissionYear: boolean = false;
    baseYear: number = null;
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
    yearlyEmissionDialogData: { [key: string]: any } = {};

    noActivitiesSelected: boolean = true;
    emissionsForBaseYearRequired: boolean = false;

    resetEmissionDataRequired: boolean = false;
    resetEmissionList: any[] = [];
    dataFillInit: boolean = true;

    ghgEmissionRes: ghgBaseYearEmissionViewM[];
    noEntityYearRange: string = null;

    fillEmissionYear = [];
    prevData = [];

    today: Date = new Date();

    constructor(
        private storageService: StorageService,
        private dateService: DateService,
        private scopeService: ScopeService,
        private ghgBaseYearController: GhgBaseYearController,
        private baseYearController: BaseYearController,
        private activatedRoute: ActivatedRoute,
        private createInOutsourcingFB: FormBuilder,
        private dialog: MatDialog,
        private ghgBaseYearService: GhgBaseYearService,
        private toastrService: ToastrService,
        public location: Location,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.data.subscribe(data => {
            this.tabType = data['tabType'];
            if (this.tabType == StructuralChangeTabTypeEnum.INSOURCING) {
                this.type = StructuralChangeTypeEnum.INSOURCING;
            } else if (this.tabType == StructuralChangeTabTypeEnum.OUTSOURCING) {
                this.type = StructuralChangeTypeEnum.OUTSOURCING;
            }
        })

        this.createInOutsourcingInit();
        this.populateYear();
        this.getAllScopeWithActivity();
        this.getSbtiBaseYear();
        this.ghgBaseYearEmission();
    }

    async ghgBaseYearEmission() {
        this.ghgEmissionRes = <ghgBaseYearEmissionViewM[]>await this.ghgBaseYearService.getAllGHGEmissionsForView(this.rootOrgID);
        this.ghgBaseYear = this.ghgEmissionRes['baseYear'];

        this.setBaseYear();
    }

    getSbtiBaseYear() {
        this.baseYearController.getBaseYearByType(this.rootOrgID, BaseYearEnum.SBTI_BASE_YEAR).subscribe((res: ghgBaseYearEmissionViewM) => {
            this.sbtiBaseYear = res.baseYear;
        })
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

    createInOutsourcingInit() {
        this.createInOutsourcingFG = this.createInOutsourcingFB.group({
            type: [this.type],
            entityName: [, [Validators.required]],
            entityStartYear: [, [Validators.required]],
            description: [],
            eventDate: [, [Validators.required]],
            activityID: [, [Validators.required]],
            structuralChangeData: [[], [Validators.required]]
        });

        this.createInOutsourcingFG.get('entityStartYear').valueChanges.subscribe((value) => {
            this.populateYearForEmissions(value);
        });

        this.createInOutsourcingFG.get('activityID').valueChanges.subscribe((selectedActivityIDs) => {
            this.selectedScopeActivity = this.activityList.filter(activity => selectedActivityIDs.includes(activity.id));

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

    formatDate(control: string) {
        let date = moment(this.createInOutsourcingFG.controls[control].value).format("YYYY-MM-DD");
        this.createInOutsourcingFG.controls[control].patchValue(date);
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
            if (year >= this.baseYear)
                this.emissionYear.push(year);
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

    openGhgEmissionDialog(year) {
        const dialogData = this.yearlyEmissionDialogData[year];
        const dialog = this.dialog.open(InOutsourcingBaseYearEmissionDialogComponent,
            {
                data: {
                    year: year,
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
                this.yearlyEmissionDialogData[year] = emissionRes;

                if (!this.fillEmissionYear.includes(year)) {
                    this.fillEmissionYear.push(year);
                }

                const index = this.resetEmissionList.indexOf(year);
                if (index != -1) {
                    this.resetEmissionList.splice(index, 1);
                }

                this.dialogDataArray.forEach((data) => {
                    if (data.year == year) {
                        let index = this.dialogDataArray.indexOf(data);
                        this.dialogDataArray.splice(index, 1);
                    }
                });

                if (year == this.baseYear) {
                    this.emissionsForBaseYearRequired = false;
                }

                this.dialogDataArray.push(emissionRes);
                this.createInOutsourcingFG.get('structuralChangeData').patchValue(this.dialogDataArray);
                if (this.dataFillInit) this.dataFillInit = false;
                this.prevData = this.selectedScopeActivity;

            }
        });
    }

    createInOutSource() {
        console.log('ads', this.createInOutsourcingFG);
        const emissionFormControl = this.createInOutsourcingFG.get('structuralChangeData');

        if (this.createInOutsourcingFG.get('entityStartYear').value <= this.baseYear) {
            if (emissionFormControl.value) {
                const emissionData = emissionFormControl.value;
                this.emissionsForBaseYearRequired = true;
                for (let i = 0; i < emissionData.length; i++) {
                    if (emissionData[i]['year'] == this.baseYear) {
                        this.emissionsForBaseYearRequired = false;
                        break;
                    }
                }
            }
            if (this.emissionsForBaseYearRequired && this.createInOutsourcingFG.controls['entityStartYear'].value <= this.baseYear) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }

        if (this.createInOutsourcingFG.invalid) {
            this.createInOutsourcingFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);

            if (emissionFormControl.value) {
                const emissionData = emissionFormControl.value;
                for (const emission of emissionData) {
                    if (emission.year == this.baseYear) {
                        this.emissionsForBaseYearRequired = false;
                    } else if (emission.year != this.baseYear && this.baseYear == this.emissionYear.find(year => year == this.baseYear)) {
                        this.emissionsForBaseYearRequired = true;
                    }
                }
            } else if (this.baseYear == this.emissionYear.find(year => year == this.baseYear)) {
                this.emissionsForBaseYearRequired = true;
            }
            return;
        }


        if (this.resetEmissionList.length != 0) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        let fillData = [];
        let activityList = [];
        fillData = this.createInOutsourcingFG.get('structuralChangeData').value;
        activityList = this.createInOutsourcingFG.get('activityID').value;

        let dataJson = [];
        for (let i = 0; i < fillData.length; i++) {
            let updatedJson = this.createInOutsourcingFG.get('structuralChangeData').value[i];
            let isExistData = this.createInOutsourcingFG.get('structuralChangeData').value[i]?.['emissionRecords']?.filter(id => activityList.includes(id['activityID']));
            updatedJson['emissionRecords'] = isExistData;
            dataJson.push(updatedJson);
        }

        this.createInOutsourcingFG.get('structuralChangeData').patchValue(dataJson);

        this.ghgBaseYearController.createStructuralChangeOrg(this.rootOrgID, this.createInOutsourcingFG.value)
            .subscribe((subsidiaryRes: ResponseM) => {
                this.location.back();
            },
                error => {
                    console.log('error in createInOutSource - ', error);
                });
    }

    // Datepicker calender open/close
    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    public errorHandling = (control: string, error: string) => {
        return this.createInOutsourcingFG.controls[control].hasError(error);
    }

}
