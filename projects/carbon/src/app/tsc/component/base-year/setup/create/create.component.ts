import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


import { MatDialog } from '@angular/material/dialog';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


import { Location } from '@angular/common';
import { isEqual } from 'lodash';
import * as moment from 'moment';
import { startWith } from 'rxjs/operators';



import { MatDatepicker } from '@angular/material/datepicker';

import { GhgBaseYearEmissionConfirmationDialog } from './_shared/ghg-base-year-emission-confirmation/ghg-base-year-emission-confirmation.dialog';
import { EmissionConfirmationDialog } from './_shared/emission-confirmation-dialog/emission-confirmation.dialog';
import { WarningDialog } from './_shared/warning/warning-dialog.component';

import { SbtiSettingM } from '@carbon/model/sbti.model';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { EnterpriseEnum, OrgSizeEnum, SMEEnum, ScopeTwoMethodEnum } from '@carbon/enum/sbti.enum';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ghgBaseYearAllEmissionsM, ghgBaseYearEmissionViewM } from '@carbon/model/ghg-base-year.model';

import { BaseYearController } from '@carbon/controller/base-year.controller';

import { GhgBaseYearService } from '@carbon/service/ghg.service';
import { SbtiService } from '@carbon/service/sbti.service';
import { EmissionService } from '@carbon/service/emission.service';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';

// tsc-library
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, DialogEnum, InfoDialogComponent, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// tsc-library


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    ButtonLabelEnum = ButtonLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    BaseYear = BaseYearEnum;
    ScopeTwoMethod = ScopeTwoMethodEnum
    RECALCULATION_POLICY_CHAR_MAX_LENGTH: number = 2000;

    unit: any = CARBON_CONSTANT.DEFAULT_EMISSION_UNIT;

    @Output() success: EventEmitter<boolean> = new EventEmitter();

    rootOrgID: any;

    baseYear: any;
    allScopeConfirmed: any;
    sbtiEmissionRes: any;

    emissionData: any = [];
    biogenicEmissions: any;
    baseYearFG: FormGroup;
    action: string = 'update';

    emissionRes: ghgBaseYearAllEmissionsM[];

    checkBaseYear: boolean = false;
    checkBaseYearFalseMsg: boolean = true;
    acknowledged: boolean = true;
    isBaseYearSameAsGHG: Boolean = false;

    isEqual: boolean = false;
    initialObject: any;

    baseYearType: string;
    isSBTiBaseYear: boolean = false;
    baseYearKeyID: string;
    baseYearRouteKey: string;

    isUpdate: boolean = false;
    minBaseYear = 1990;
    maxBaseYear: number = moment().year() - 1;
    isEmissionExist: boolean = true;
    waitingForResponse: boolean = true;
    getEmissionTriggered: boolean = false;
    maxThreshold: number = 100;

    sbtiSetting;
    consolidationApproachName: string;

    min_base_year: any = new Date(this.minBaseYear, 0, 1);
    today: any = new Date(this.maxBaseYear, 0, 1);

    baseYearFC: FormControl = new FormControl(null, [Validators.min(this.min_base_year)]);

    RECALCULATION_POLICY_INFO = {
        title: 'Recalculation policy',
        body: [
            `Companies shall develop a base year emissions recalculation policy, 
                and clearly articulate the basis and context for any recalculations. 
                The policy shall state any “significance threshold” applied for 
                deciding on historic emissions recalculation.`
        ]
    }

    SIGNIFICANCE_THRESHOLD_INFO = {
        title: 'Significance threshold',
        body: [
            `Significance threshold is a qualitative and/or quantitative criterion 
            used to define any significant change to the data, inventory boundary, methods, 
            or any other relevant factors. Companies have to select a threshold percentage 
            which when breached, will trigger a recalculation of base year emissions.`
        ]
    }

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private ghgBaseYearService: GhgBaseYearService,
        private sbtiService: SbtiService,
        private storageService: StorageService,
        private emissionService: EmissionService,
        private consolidationApproachService: ConsolidationApproachService,
        private baseYearController: BaseYearController,
        private toastrService: ToastrService,
        public location: Location
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');

        this.activatedRoute.data.subscribe((data) => {
            this.isUpdate = (data['type'] == 'UPDATE');
            this.action = (this.isUpdate ? 'update' : 'create');
            this.isSBTiBaseYear = (BaseYearEnum.SBTI_BASE_YEAR == data['base_year']);
            this.baseYearKeyID = data['base_year'];
            this.baseYearType = (this.isSBTiBaseYear ? 'SBTi' : 'GHG');
            this.baseYearRouteKey = (this.isSBTiBaseYear ? 'sbti' : 'ghg');

            if (this.isUpdate) { this.getBaseYearByType(); }
            if (this.isSBTiBaseYear) {
                this.getSbtiSettingsByOrgID();
            } else {
                this.getConsolidationApproachByOrgID();
            }
        });

        this.formInit();
        this.getSBTiSettingByOrgID();
    }

    openDatepickerOnClick(datepicker: MatDatepicker<any>) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    }

    yearSelectedHandler(normalizedYear: any, datepicker: MatDatepicker<any>) {
        datepicker.close();
        let duration = moment(normalizedYear).format("YYYY");
        this.baseYearFC.patchValue(normalizedYear);

        this.baseYearAC.patchValue(duration);
        console.log(this.baseYearFC);

        this.getYearlyEmission();
    }

    takeFocusAway(durationField) {
        durationField = document.getElementById(durationField);
        durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
    }


    async getSbtiSettingsByOrgID() {
        this.sbtiSetting = <SbtiSettingM>await this.sbtiService.getSbtiSettingsByOrgID(this.rootOrgID);
        if (this.sbtiSetting.orgSizeKeyID) {
            this.consolidationApproachName = this.sbtiSetting['consolidationApproachName'];
        }
    }

    consolidationApproach: any;
    async getConsolidationApproachByOrgID() {
        this.consolidationApproach = await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);
    }

    formInit() {
        this.maxThreshold = this.isSBTiBaseYear ? 5 : 100;
        this.baseYearFG = this.formBuilder.group({
            baseYear: [, [Validators.required, Validators.min(1990), Validators.max(this.maxBaseYear), this.ghgBaseYearService.fourDigitYearValidator()]],
            recalculationPolicy: ['', Validators.required],
            significanceThreshold: new FormControl('', [Validators.required, Validators.min(0), Validators.max(this.maxThreshold)]),
            emissionData: [[]],
            calculationApproachKeyID: [, !this.isSBTiBaseYear ? [Validators.required] : null],
            useTSCEmission: [this.isSBTiBaseYear ? null : true, this.isSBTiBaseYear ? [Validators.required] : null],
            type: [this.isSBTiBaseYear ? BaseYearEnum.SBTI_BASE_YEAR : BaseYearEnum.GHG_BASE_YEAR],
        });
    }

    get baseYearAC(): AbstractControl {
        return this.baseYearFG.get('baseYear') as AbstractControl;
    }

    get useTSCEmissionAC(): AbstractControl {
        return this.baseYearFG.get('useTSCEmission') as AbstractControl;
    }

    getBaseYearByType() {
        this.baseYearController.getBaseYearByType(this.rootOrgID, this.baseYearKeyID)
            .subscribe((response: ghgBaseYearEmissionViewM) => {
                if (response) {
                    this.patchBaseYear(response);
                } else {
                    this.router.navigate([`/carbon-setting/base-year/${this.baseYearRouteKey}/create`]);
                }
            })
    }

    async getSBTiSettingByOrgID() {
        let settings = <SbtiSettingM>await this.sbtiService.getSbtiSettingsByOrgID(this.rootOrgID);

        if (settings?.orgSizeKeyID) {
            this.isBaseYearSameAsGHG = settings.isBaseYearSameAsGHG;

            if (this.isSBTiBaseYear) {
                if (settings.orgSizeKeyID == OrgSizeEnum.SME) {
                    this.minBaseYear = SMEEnum.minBaseYear;
                    this.baseYearFG.get('baseYear').addValidators([Validators.min(SMEEnum.minBaseYear)]);
                } else {
                    this.minBaseYear = EnterpriseEnum.MIN_BASE_YEAR;
                    this.baseYearFG.get('baseYear').addValidators([Validators.min(EnterpriseEnum.MIN_BASE_YEAR)]);
                }

                this.min_base_year = new Date(this.minBaseYear, 0, 1);
            }
            if (this.isBaseYearSameAsGHG) {
                this.baseYearType = 'GHG and SBTi';
            }
        }
    }

    patchBaseYear(baseYear) {
        this.baseYearFG.patchValue({
            baseYear: baseYear.baseYear,
            recalculationPolicy: baseYear.recalculationPolicy,
            significanceThreshold: baseYear.significanceThreshold,
            calculationApproachKeyID: baseYear.calculationApproachKeyID,
            useTSCEmission: baseYear.useTSCEmission
        });

        this.initialObject = this.baseYearFG.value;
        this.baseYearFG.valueChanges.pipe(startWith({})).subscribe(() => { this.isEqual = isEqual(this.initialObject, this.baseYearFG.getRawValue()); });
    }

    async getEmissionData() {
        let year = this.baseYearFG.value.baseYear;

        const startOfYear = moment(new Date().setFullYear(year)).startOf('year').format('YYYY-MM-DD');
        const endOfYear = moment(new Date().setFullYear(year)).endOf('year').format('YYYY-MM-DD');

        if (this.isSBTiBaseYear)
            this.emissionRes = <ghgBaseYearAllEmissionsM[]>await this.emissionService.getScopeActivityWiseYearlyEmission(this.rootOrgID, startOfYear, endOfYear);
        else
            this.emissionRes =
                <ghgBaseYearAllEmissionsM[]>await this.emissionService.getConsolidationApproachBasedScopeActivityEmissionByOrgID(this.rootOrgID, startOfYear, endOfYear);

        if (this.emissionRes) {
            this.waitingForResponse = false;
            this.getEmissionTriggered = true;
            this.isEmissionExist = this.emissionRes['isEmissionExist'];

            this.checkBaseYear = true;
            this.emissionData = this.emissionRes['emissionData'];
            this.biogenicEmissions = this.emissionRes['biogenic'];
            this.checkIfAllEmissionsAreConfirmed();
            this.checkBaseYearFalseMsg = this.emissionRes['emissionData'];;
        } else {
            this.checkBaseYear = false;
            this.checkBaseYearFalseMsg = false;
        }
    }

    isValidGetEmissionFields = () => {
        return (!this.baseYearFG.get('baseYear').invalid && !this.baseYearFG.get('useTSCEmission').invalid);
    }

    renderNoEmissionFoundView() {
        if (this.isSBTiBaseYear) {
            if (this.isValidGetEmissionFields()) {
                if (this.baseYearFG.get('useTSCEmission').value) return !this.isEmissionExist && this.getEmissionTriggered;
                else false;
            } else false;
        } else {
            if (this.baseYearAC.invalid) return false;
            else return !this.isEmissionExist && this.getEmissionTriggered;
        }
    }

    renderEmissionConfirmationView() {
        if (this.isSBTiBaseYear) {
            if (this.isValidGetEmissionFields())
                if (this.baseYearFG.get('useTSCEmission').value)
                    return (this.checkBaseYear && this.isEmissionExist && this.acknowledged);
                else return (this.acknowledged);
        } else {
            if (this.baseYearAC.invalid) return false;
            else return this.isEmissionExist && this.getEmissionTriggered;
        }
    }

    calculateProgress(data) {
        const progress = (data?.confirmedActivities / data?.totalActivities) * 100;
        return progress;
    }

    openGHGEmissionConfirmationDialog(emissionData, action) {
        let data = {
            action: action,
            emissionData: emissionData,
            consolidationApproach: this.consolidationApproach,
            unit: this.unit,
            baseYear: this.baseYear,
            baseYearType: this.baseYearType,
        };

        let dialogRef = this.dialog.open(GhgBaseYearEmissionConfirmationDialog, {
            disableClose: true,
            data: data,
            minWidth: '1000px',
            maxWidth: '1000px',
        });

        let prevConfirmedActivities = emissionData.confirmedActivities;
        dialogRef.afterClosed().subscribe(res => {
            if (!res) { emissionData.confirmedActivities = prevConfirmedActivities; }
        });
    }

    openEmissionConfirmationDialog(emissionData, action) {
        let data = {
            action: action,
            emissionData: emissionData,
            consolidationApproach: this.consolidationApproachName,
            unit: this.unit,
            baseYear: this.baseYear,
            baseYearType: this.baseYearType,
        };
        if (this.isSBTiBaseYear) data['useTSC'] = this.useTSCEmissionAC.value;
        else data['useTSC'] = true;

        let dialogRef = this.dialog.open(EmissionConfirmationDialog, {
            data: data,
            minWidth: '1000px',
            maxWidth: '1000px',
        });

        let prevConfirmedActivities = emissionData.confirmedActivities;
        dialogRef.afterClosed().subscribe(res => {
            if (res?.value) {
                const newEmission = res.value?.emissions;
                const prevEmission = this.baseYearFG.value.emissionData;
                emissionData['scope']['activity'].forEach(activity => {
                    newEmission.forEach(emission => {
                        if (prevEmission.indexOf(activity['id'])) {
                            if (activity['id'] == emission['activityID']) {
                                activity['emission'] = emission['emission'];
                                activity['biogenicEmission'] = emission['biogenicEmission'];
                                activity['uomID'] = res.value?.unitID;
                            }
                        }
                    });
                });
            } else {
                emissionData.confirmedActivities = prevConfirmedActivities;
            }
        });
    }

    get emissionDataArr() {
        let allActivityEmission = [];
        this.emissionData.forEach(data => {
            let activityEmission = data.scope.activity.map(({ id, emission, biogenicEmission, uomID }) => ({ activityID: id, emission, biogenicEmission, unitID: uomID }));
            allActivityEmission.push(...activityEmission);
        });
        return allActivityEmission;
    }

    openWarningDialog() {
        this.acknowledged = false;
        const dialog = this.dialog.open(WarningDialog,
            {
                data: {
                    title: 'Warning!',
                    body: `SBTi base year emission recalculation will not be done by <b>The Sustainability Cloud</b>. 
                    Recalculated emissions can still be updated in SBTi bse year to update your existing targets.`,
                    btnLabel: 'Acknowledge'
                },
                minWidth: '400px',
                maxWidth: '600px',
            });

        dialog.afterClosed().subscribe((res) => {
            this.acknowledged = true;
            if (res == DialogEnum.CLOSE_DR) this.useTSCEmissionAC.reset(true);
        });
    }

    checkIfAllEmissionsAreConfirmed() {
        let checkAllScopeBoolean = true;
        this.emissionData?.forEach((element) => {
            if (checkAllScopeBoolean) checkAllScopeBoolean = (element.confirmedActivities == element.totalActivities)
        })
        return checkAllScopeBoolean;
    }

    getYearlyEmission() {
        this.baseYear = this.baseYearFG.get('baseYear').value;
        this.waitingForResponse = true;
        if (!this.baseYearFG.get('baseYear').invalid)
            if (this.isSBTiBaseYear) {
                if (!this.baseYearFG.get('useTSCEmission').invalid) {
                    this.getEmissionData();
                }
            } else {
                this.getEmissionData();
            }
    }

    openInfoDialog(data) {
        const dialog = this.dialog.open(InfoDialogComponent,
            {
                data: data,
                minWidth: '400px',
                maxWidth: '500px',
            });
    }

    onSubmit() {
        if (this.baseYearFG.invalid) {
            this.baseYearFG.markAllAsTouched();
            console.log('invalid form - ', this.baseYearFG)
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR); return;
            return;
        }

        if (this.checkIfAllEmissionsAreConfirmed()) {
            this.baseYearFG.get('emissionData').patchValue(this.emissionDataArr);
            if (!this.isUpdate) {
                this.baseYearController.createBaseYear(this.rootOrgID, this.baseYearKeyID, this.baseYearFG.value)
                    .subscribe(res => { this.actionSuccessful(res); },
                        error => {
                            console.error('error in createBaseYear()', error);
                        });
            } else {
                this.baseYearController.updateBaseYear(this.rootOrgID, this.baseYearKeyID, this.baseYearFG.value)
                    .subscribe(res => { this.actionSuccessful(res); },
                        error => {
                            console.error('error in updateBaseYear()', error);
                        });
            }
        } else {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Please confirm your all emissions', ToastrColor.ERROR); return;

        }
    }

    actionSuccessful(res) {
        this.success.emit();
    }

    public errorHandling = (control: string, error: string) => {
        return this.baseYearFG.controls[control].hasError(error);
    }

    public radioGroupHasError = (control: string, error: string) => {
        return this.baseYearFG.controls[control].hasError(error) && this.baseYearFG.controls[control].touched;
    }

}
