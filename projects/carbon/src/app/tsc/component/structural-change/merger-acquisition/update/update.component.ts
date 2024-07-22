import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import * as moment from 'moment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

import { isEqual } from "lodash";

import { Location } from '@angular/common';

import { EmissionDataDialog } from '../../emission-data-dialog/emission-data-dialog.component';

import { date_format_providers } from '@carbon/constant/carbon.constant';
import { StructuralChangeData, StructuralChangeDataM, ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';
import { StructuralChangeTabTypeEnum, StructuralChangeTypeEnum } from '@carbon/enum/ghg.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';

import { BaseYearController } from '@carbon/controller/base-year.controller';
import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';

import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';
import { GhgBaseYearService } from '@carbon/service/ghg.service';

// tsc-library
import { ButtonLabelEnum, FormAction, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { DateService } from '@library/date';
// /tsc-library

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styles: [],
    providers: date_format_providers
})
export class UpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    updateMergerAcquisitionFG: FormGroup;

    rootOrgID: any;
    recordID: any;

    maxLength = 100;

    structuralChangeRes = new StructuralChangeData();

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

    dialogDataArray: any[] = [];

    emissionsForBaseYearRequired: boolean = false;

    yearlyEmissionDialogData: { [key: number]: any } = {};

    tabType: any;
    type: any;

    initialObject: any;
    isEqual: boolean = true;

    ghgEmissionRes: ghgBaseYearEmissionViewM[];
    afterClosed: boolean = false;

    fillEmissionYear = [];
    routerLink: string;
    noEntityYearRange: string = null;

    consolidationApproachList: any[] = [];
    consolidationApproachKeyIDList: any[] = [];

    action: string;

    today: Date = new Date();

    constructor(
        public router: Router,
        public activatedRoute: ActivatedRoute,
        private consolidationApproachService: ConsolidationApproachService,
        private storageUtility: StorageService,
        private dateService: DateService,
        private updateMergerAcquisitionFB: FormBuilder,
        private dialog: MatDialog,
        private baseYearController: BaseYearController,
        private ghgBaseYearController: GhgBaseYearController,
        private ghgBaseYearService: GhgBaseYearService,
        private toastrService: ToastrService,
        public location: Location,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageUtility.getStorage('rootOrgID');

        this.activatedRoute.params.subscribe((param) => {
            this.recordID = param['recordID']
        });

        this.activatedRoute.data.subscribe(data => {
            this.tabType = data['tabType'];
            if (this.tabType == StructuralChangeTabTypeEnum.MERGER_ACQUISITION) {
                this.type = StructuralChangeTypeEnum.MERGER_ACQUISITION;
                this.routerLink = `carbon-setting/structural-change/merger-acquisition/page`;

            } else if (this.tabType == StructuralChangeTabTypeEnum.DIVESTMENT) {
                this.type = StructuralChangeTypeEnum.DIVESTMENT;
                this.routerLink = `carbon-setting/structural-change/divestment/page`;
            }
        })

        this.updateMergerAcquisitionInit();
        this.getStructuralChangeOrgByID();
        this.populateYear();
        this.getSbtiBaseYear();
        this.ghgBaseYearEmission();
        this.getAllConsolidationApproachByOrgID();
    }

    ngAfterViewInit() {
        this.updateMergerAcquisitionFG.get('entityStartYear').valueChanges.subscribe((value) => {
            this.populateYearForEmissions(value);
        });
    }

    async ghgBaseYearEmission() {
        this.ghgEmissionRes = <ghgBaseYearEmissionViewM[]>await this.ghgBaseYearService.getAllGHGEmissionsForView(this.rootOrgID);
        this.ghgBaseYear = this.ghgEmissionRes['baseYear'];
        this.setBaseYear();
        this.populateYearForEmissions(this.updateMergerAcquisitionFG.get('entityStartYear').value);
    }


    async getAllConsolidationApproachByOrgID() {
        this.consolidationApproachList = await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);

        this.consolidationApproachList.forEach((data) => {
            this.consolidationApproachKeyIDList.push(data.keyID);
        });
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

    updateMergerAcquisitionInit() {
        this.updateMergerAcquisitionFG = this.updateMergerAcquisitionFB.group({
            type: [this.type],
            entityName: ['', [Validators.required]],
            entityStartYear: ['', [Validators.required]],
            activityTypeID: [],
            description: [],
            eventDate: ['', [Validators.required]],
            structuralChangeData: [[], [Validators.required]]
        });

    }

    getStructuralChangeOrgByID() {
        this.ghgBaseYearController.getStructuralChangeOrgByID(this.rootOrgID, this.recordID, this.type).subscribe(
            (res: StructuralChangeDataM) => {
                if (res) {
                    this.structuralChangeRes = res;
                    this.patchStructuralChangeData();
                    this.updateMergerAcquisitionFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.updateMergerAcquisitionFG.getRawValue()); });
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
        this.updateMergerAcquisitionFG.patchValue({
            entityName: this.structuralChangeRes['entityName'],
            entityStartYear: this.structuralChangeRes['entityStartYear'],
            description: this.structuralChangeRes['description'],
            eventDate: this.structuralChangeRes['eventDate'],
            structuralChangeData: this.structuralChangeRes['structuralChangeData'],
        });

        this.structuralChangeRes['structuralChangeData'].forEach(data => {
            this.fillEmissionYear.push(data.year);
        });

        this.initialObject = this.updateMergerAcquisitionFG.value;
        this.isEqual = true;
    }

    formatDate(control: string) {
        let date = moment(this.updateMergerAcquisitionFG.controls[control].value).format("YYYY-MM-DD");
        this.updateMergerAcquisitionFG.controls[control].patchValue(date);
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
            const structuralChangeData = this.updateMergerAcquisitionFG.get('structuralChangeData').value;
            dialogData = structuralChangeData.find(data => (data.year == year));
            this.action = FormAction.UPDATE;
        } else {
            dialogData = this.yearlyEmissionDialogData[year];
            this.action = FormAction.CREATE;
        }
        this.afterClosed = false;
        const dialog = this.dialog.open(EmissionDataDialog,
            {
                data: {
                    year: year,
                    yearlyEmissionData: dialogData,
                    dialogTitle: 'GHG base year emission confirmation - ' + year,
                    consolidationApproachKeyIDList: this.consolidationApproachKeyIDList,
                    action: this.action
                },
                minWidth: '80vw',
                maxWidth: '80vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });

        dialog.afterClosed().subscribe((emissionRes) => {
            if (emissionRes) {
                this.fillEmissionYear.push(year);
                this.afterClosed = true;
                this.structuralChangeRes = emissionRes;
                this.yearlyEmissionDialogData[year] = emissionRes;
                const updatedStructuralChangeData = [...this.updateMergerAcquisitionFG.get('structuralChangeData').value];
                const index = updatedStructuralChangeData.findIndex(data => data.year == year);
                if (index != -1) {
                    updatedStructuralChangeData[index] = emissionRes;
                } else {
                    updatedStructuralChangeData.push(emissionRes);
                }

                if (year == this.baseYear) {
                    this.emissionsForBaseYearRequired = false;
                }

                this.updateMergerAcquisitionFG.get('structuralChangeData').patchValue(updatedStructuralChangeData);
                this.dialogDataArray = updatedStructuralChangeData;
            }
        });
    }

    updateMergerAcquisition() {
        if (this.isEqual) return;

        console.log('ads', this.updateMergerAcquisitionFG);
        let currentDataArr;
        let prevDataArr: [];
        if (this.updateMergerAcquisitionFG.get('structuralChangeData').value) {
            prevDataArr = this.updateMergerAcquisitionFG.get('structuralChangeData').value;
            currentDataArr = prevDataArr.filter(data => data['year'] >= this.updateMergerAcquisitionFG.get('entityStartYear').value);

            if (currentDataArr.length == 0) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }

        const emissionFormControl = this.updateMergerAcquisitionFG.get('structuralChangeData');

        if (this.updateMergerAcquisitionFG.get('entityStartYear').value <= this.baseYear) {
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
            if (this.emissionsForBaseYearRequired && this.updateMergerAcquisitionFG.controls['entityStartYear'].value <= this.baseYear) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }


        if (this.updateMergerAcquisitionFG.invalid) {
            this.updateMergerAcquisitionFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);

            if (emissionFormControl) {
                const emissionsData = emissionFormControl.value;

                const emissionsForBaseYear = emissionsData.find((structuralChangeData) => {
                    return structuralChangeData.year == this.baseYear &&
                        ((structuralChangeData.emissionRecords && structuralChangeData.emissionRecords[0]?.['equityShareApproach']?.['emission'] == ('' || null)));
                });

                if (emissionsForBaseYear) {
                    this.emissionsForBaseYearRequired = true;
                }
            }
            return;
        }

        this.updateMergerAcquisitionFG.get('structuralChangeData').patchValue(currentDataArr);

        this.ghgBaseYearController.updateStructuralChangeOrg(this.rootOrgID, this.recordID, this.updateMergerAcquisitionFG.value)
            .subscribe((subsidiaryRes: ResponseM) => {
                this.router.navigate([this.routerLink]);
            },
                error => {
                    console.log('error in updateStructuralChangeOrg - ', error);
                });
    }

    // Datepicker calender open/close
    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    public errorHandling = (control: string, error: string) => {
        return this.updateMergerAcquisitionFG.controls[control].hasError(error);
    }

}
