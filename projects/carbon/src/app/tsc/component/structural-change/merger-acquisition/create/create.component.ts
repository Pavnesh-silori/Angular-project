import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import * as moment from 'moment';
import { Moment } from 'moment';

import { Location } from '@angular/common';

import { EmissionDataDialog } from '../../emission-data-dialog/emission-data-dialog.component';

import { date_format_providers } from '@carbon/constant/carbon.constant';
import { ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { StructuralChangeTabTypeEnum, StructuralChangeTypeEnum } from '@carbon/enum/ghg.enum';

import { BaseYearController } from '@carbon/controller/base-year.controller';
import { GhgBaseYearController } from '@carbon/controller/ghg-base-year.controller';

import { GhgBaseYearService } from '@carbon/service/ghg.service';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, FormAction, InvalidForm, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { DateService } from '@library/date';
import { MatDatepicker } from '@angular/material/datepicker';
// /tsc-library

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styles: [],
    providers: date_format_providers
})
export class CreateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;

    createMergerAcquisitionFG: FormGroup;

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
    ghgBaseYear: number = null;
    sbtiBaseYear: number = null;
    baseYear: number = null;

    dialogDataArray: any[] = [];

    emissionsForBaseYearRequired: boolean = false;

    yearlyEmissionDialogData: { [key: number]: any } = {};

    ghgEmissionRes: ghgBaseYearEmissionViewM[];

    noEntityYearRange: string = null;

    consolidationApproachList: any[] = [];
    consolidationApproachKeyIDList: any[] = [];

    action: string = FormAction.CREATE;

    today: Date = new Date();

    constructor(
        private storageService: StorageService,
        private dateService: DateService,
        private baseYearController: BaseYearController,
        private ghgBaseYearController: GhgBaseYearController,
        private activatedRoute: ActivatedRoute,
        private createMergerAcquisitionFB: FormBuilder,
        private dialog: MatDialog,
        private ghgBaseYearService: GhgBaseYearService,
        private consolidationApproachService: ConsolidationApproachService,
        private toastrService: ToastrService,
        public location: Location,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.activatedRoute.data.subscribe(data => {
            this.tabType = data['tabType'];
            if (this.tabType == StructuralChangeTabTypeEnum.MERGER_ACQUISITION) {
                this.type = StructuralChangeTypeEnum.MERGER_ACQUISITION;
            } else if (this.tabType == StructuralChangeTabTypeEnum.DIVESTMENT) {
                this.type = StructuralChangeTypeEnum.DIVESTMENT;
            }
        })

        this.createMergerAcquisitionInit();
        this.populateYear();
        this.getSbtiBaseYear();
        this.ghgBaseYearEmission();
        this.getAllConsolidationApproachByOrgID();
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

    async getAllConsolidationApproachByOrgID() {
        this.consolidationApproachList = await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);

        this.consolidationApproachList.forEach((data) => {
            this.consolidationApproachKeyIDList.push(data.keyID);
        });
    }

    createMergerAcquisitionInit() {
        this.createMergerAcquisitionFG = this.createMergerAcquisitionFB.group({
            type: [this.type],
            entityName: ['', [Validators.required]],
            entityStartYear: ['', [Validators.required]],
            description: [''],
            eventDate: ['', [Validators.required]],
            activityTypeID: [],
            structuralChangeData: [[], [Validators.required]]
        });

        this.createMergerAcquisitionFG.get('entityStartYear').valueChanges.subscribe((value) => {
            this.populateYearForEmissions(value);
        });
    }

    formatDate(control: string) {
        let date = moment(this.createMergerAcquisitionFG.controls[control].value).format("YYYY-MM-DD");
        this.createMergerAcquisitionFG.controls[control].patchValue(date);
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

    fillEmissionYear = [];
    openGhgEmissionDialog(year) {
        const dialogData = this.yearlyEmissionDialogData[year];
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
                this.fillEmissionYear.push(year);
                this.yearlyEmissionDialogData[year] = emissionRes;

                const yearFormControl = this.createMergerAcquisitionFG.get('structuralChangeData');
                if (yearFormControl) {
                    yearFormControl.patchValue(this.dialogDataArray);
                }
            }
        });
    }

    createMergerAcquisition() {
        console.log('createMergerAcquisitionFG --', this.createMergerAcquisitionFG);

        const emissionFormControl = this.createMergerAcquisitionFG.get('structuralChangeData');

        if (this.createMergerAcquisitionFG.get('entityStartYear').value <= this.baseYear) {
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
            if (this.emissionsForBaseYearRequired && this.createMergerAcquisitionFG.controls['entityStartYear'].value <= this.baseYear) {
                this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
                return;
            }
        }

        if (this.createMergerAcquisitionFG.invalid) {
            this.createMergerAcquisitionFG.markAllAsTouched();
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

        this.ghgBaseYearController.createStructuralChangeOrg(this.rootOrgID, this.createMergerAcquisitionFG.value)
            .subscribe((subsidiaryRes: ResponseM) => {
                this.location.back();
            },
                error => {
                    console.log('error in createStructuralChangeOrg - ', error);
                });
    }

    // Datepicker calender open/close
    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    public errorHandling = (control: string, error: string) => {
        return this.createMergerAcquisitionFG.controls[control].hasError(error);
    }

}
