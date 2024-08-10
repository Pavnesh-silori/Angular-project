import { Component, Inject, OnInit, ViewChild, SimpleChanges, Input, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { forkJoin } from 'rxjs';

import { isEqual } from 'lodash';

import { VehicleCategoryM, EngineStrokeM, VehicleTypeM, VehicleM } from '../../../model/vehicle.model';
import { VehicleController } from '../../../controller/vehicle.controller';
import { VehicleService } from '../../../service/vehicle.service';
import { PreferenceService } from '../../../service/preference.service';
import { VehicleTypeEnum } from '../../../enum/vechile-type.enum';
import { PagePathEnum } from '../../../enum/page-path.enum';
import { EMISSION_FACTOR_SOUREC_KEYID_ENUM } from '../../../enum/emission-factor.enum';
import { ACTIVITY_KEYID_ENUM } from '../../../enum/activity.enum';

// tsc-library
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, PageTitleEnum, VIEW_TYPE_ENUM, FormErrorEnum, TSCCommonService, DialogEnum } from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ApplicationKeyID } from '@library/application-service';
import { DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})

export class CreateUpdateComponent implements OnInit {
    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    PageTitleEnum = PageTitleEnum;
    VIEW_TYPE_ENUM = VIEW_TYPE_ENUM;
    VehicleTypeEnum = VehicleTypeEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    DateInputTypeEnum = DateInputTypeEnum
    @ViewChild('yearInput') yearInput: DateInputComponent;

    vehicleFG: FormGroup;
    rootOrgID: any;
    userID: any;
    applicationStdKeyID: string;
    action: string;
    source: string;
    vehicleID: any;
    vehicle: any;
    isEngineStroke: boolean = false;
    isEqual: boolean = true;
    isIpcc: boolean = false;
    intialObject: any;

    vehicleTypeM: VehicleTypeM[];
    vehicleCategoryM: VehicleCategoryM[];
    vehicleCategoryOR: VehicleCategoryM[];
    vehicleCategoryNR: VehicleCategoryM[];
    vehicleCategory: VehicleCategoryM[];
    engineStrokeM: EngineStrokeM[];
    unitM: UnitM[];

    constructor(
        @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any,
        @Optional() private dialogRef: MatDialogRef<CreateUpdateComponent>,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private unitService: UnitService,
        private vehicleController: VehicleController,
        private vehicleService: VehicleService,
        private preferenceService: PreferenceService,
        private storageService: StorageService,
        private tSCCommonService: TSCCommonService,
        @Inject('constant') private constant: any
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.userID = this.storageService.getStorage('userID');

        this.vehicleFGInit();
        this.ipccFieldHandler();

        if (this.dialogData) {
            this.action = this.dialogData.action;
            this.source = this.dialogData.source;

            if (this.action == FormAction.UPDATE) {
                this.vehicleID = this.dialogData.vehicleID;
            }
        } else {
            this.activatedRoute.data.subscribe(data => {
                this.action = data.action;
                this.source = data.source;
            });

            this.activatedRoute.params.subscribe(params => {
                if (this.action == FormAction.UPDATE) {
                    this.vehicleID = params.vehicleID;
                }
            });
        }
    }

    vehicleFGInit() {
        this.vehicleFG = this.formBuilder.group({
            vehicleName: [, Validators.required],
            vehicleNumber: [, Validators.required],
            vehicleTypeID: [, Validators.required],
            vehicleCategoryID: [],
            engineStrokeId: [],
            odoMeterUnitID: [, Validators.required],
            year: []
        });
    }

    dateInpChange() {
        let duration = this.yearInput.durationFC.value;
        this.vehicleFG.get('year').patchValue(duration);
    }

    async getVehicleType() {
        this.vehicleTypeM = <VehicleTypeM[]>await this.vehicleService.getVehicleType();
    }

    async getVehicleCategory() {
        this.vehicleCategoryM = <VehicleCategoryM[]>await this.vehicleService.getVehicleCategory();

        this.vehicleCategoryOR = this.vehicleCategoryM.filter(item => item['vehicleType']['keyID'] == VehicleTypeEnum.ON_ROAD);
        this.vehicleCategoryNR = this.vehicleCategoryM.filter(item => item['vehicleType']['keyID'] == VehicleTypeEnum.NON_ROAD);
    }

    async getEngineStroke() {
        this.engineStrokeM = <EngineStrokeM[]>await this.vehicleService.getEngineStroke();
    }

    async getUnit() {
        try {
            this.unitM = <UnitM[]>await this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.LENGTH}`]);
        } catch (error) {
            console.error(error);
        }
    }

    onVehicleTypeChange(vehicleType: any) {
        this.vehicleFG.patchValue({
            vehicleCategoryID: null,
            engineStrokeId: null
        });

        if (vehicleType.keyID == VehicleTypeEnum.ON_ROAD) {
            this.isEngineStroke = false;
            this.vehicleCategory = this.vehicleCategoryOR;
        } else {
            this.isEngineStroke = true;
            this.vehicleCategory = this.vehicleCategoryNR;
        }
    }

    vehicleExist() {
        let vehicleNumber = this.vehicleFG.get('vehicleNumber').value;

        this.vehicleController.vehicleExist(this.rootOrgID, vehicleNumber).subscribe((res: any) => {
            if (res.status == false) {
                if (this.constant.CURRENT_APPLICATION_KEY_ID == ApplicationKeyID.NETZERO_KEY_ID) {
                    this.createVehicle();
                } else if (this.constant.CURRENT_APPLICATION_KEY_ID == ApplicationKeyID.EMPLOYEE_KEY_ID) {
                    this.createVehicleForEmployee();
                }
            } else {
                let toast: any;

                toast = this.toastrService.getToastStatus(res.status);
                this.toastrService.openToast(toast.title, res.message, toast.color);
            }
        });
    }

    vechileSubmit() {
        if (this.vehicleFG.invalid) {
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        } else {
            if (this.action == FormAction.CREATE) {
                this.vehicleExist();
            } else if (this.action == FormAction.UPDATE) {
                this.updateVehicle();
            }
        }
    }

    createVehicle() {
        this.vehicleController.createVehicle(this.rootOrgID, this.vehicleFG.value).subscribe((res: ResponseM) => {
            let toast: any;

            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.createUpdateVehiclePostAction(res);
        }, error => {
            console.log('error in createVehicle -', error);
        });
    }

    createVehicleForEmployee() {
        this.vehicleController.createVehicleForEmployee(this.rootOrgID, this.userID, this.vehicleFG.value).subscribe((res: ResponseM) => {
            let toast: any;

            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.createUpdateVehiclePostAction(res);
        }, error => {
            console.log('error in createVehicleForEmployee -', error);
        });
    }

    getVehicleByIDHandler() {
        forkJoin([this.getVehicleType(), this.getVehicleCategory(), this.getEngineStroke(), this.getUnit()]).subscribe(([]) => {
            if (this.action == FormAction.UPDATE) {
                this.getVehicleByID();
            }
        }, error => {
            console.error('error in forkJoin -', error);
        });
    }

    getVehicleByID() {
        this.vehicleController.getVehicleByID(this.rootOrgID, this.vehicleID).subscribe((res: any) => {
            this.vehicle = res;
            this.patchVehicle();
        }, error => {
            console.log(error);
        });
    }

    patchVehicle() {
        this.onVehicleTypeChange(this.vehicle['vehicleType']);
        this.vehicleFG.patchValue({
            vehicleName: this.vehicle['vehicleName'],
            vehicleTypeID: this.vehicle['vehicleType'].id,
            vehicleNumber: this.vehicle['vehicleNumber'],
            odoMeterUnitID: this.vehicle['odoMeterUnit'].unitID,
            vehicleCategoryID: this.vehicle.vehicleCategory?.id,
            year: this.vehicle?.year
        });

        if (!this.isIpcc) {
            let durationToPatch = this.vehicleFG.get('year').value;
            this.yearInput.durationFC.patchValue(durationToPatch.toString());
        }

        if (this.vehicle['engineStroke'] !== null) {
            this.isEngineStroke = true;
            this.vehicleFG.patchValue({
                engineStrokeId: this.vehicle['engineStroke'].id
            });
        }

        this.intialObject = this.vehicleFG.value;

        this.vehicleFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.intialObject, this.vehicleFG.value);
        });
    }

    updateVehicle() {
        this.vehicleController.updateVehicle(this.rootOrgID, this.vehicleFG.value, this.vehicleID).subscribe((res: ResponseM) => {
            let toast: any;

            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.createUpdateVehiclePostAction(res);
        }, error => {
            console.log('error in updateVehicle -', error);
        })
    }

    createUpdateVehiclePostAction(res) {
        if (this.source == VIEW_TYPE_ENUM.PAGE) {
            this.router.navigate([PagePathEnum.VEHICLE_LIST_PAGE]);
        } else if (this.source == VIEW_TYPE_ENUM.DIALOG) {
            let result: any = {
                status: DialogEnum.SUCCESS_DR,
                res
            }
            this.dialogRef.close(result);
        }
    }

    cancelButtonClick() {
        if (this.source == VIEW_TYPE_ENUM.PAGE) {
            this.tSCCommonService.back();
        } else if (this.source == VIEW_TYPE_ENUM.DIALOG) {
            this.dialogRef.close();
        }
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.vehicleFG.get(control).hasError(error);
    }

    async ipccFieldHandler() {
        let preference;
        let activity;

        if (this.constant.CURRENT_APPLICATION_KEY_ID == ApplicationKeyID.NETZERO_KEY_ID) {
            preference = await this.preferenceService.getOrgPreference(this.rootOrgID);

            if (preference.preferenceID != null) {
                activity = preference.activity.find(item => item.activityKeyID == ACTIVITY_KEYID_ENUM.STATIONARY_COMBUSTION);

                // if (activity.emissionFactorSourceKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                //     this.isIpcc = true;
                // }

                if (activity) {
                    let calculationApproach = activity.calculationApproach.length > 0 ? activity.calculationApproach[0] : null;
                    if (calculationApproach) {
                        let emissionFactorSource = calculationApproach.emissionFactorSource.find(ef => ef.id == calculationApproach.emissionFactorSourceID);
                        if (emissionFactorSource) {
                            if (emissionFactorSource.keyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES) {
                                this.isIpcc = true;
                            };
                        }
                    }
                }

            }

            this.getVehicleByIDHandler();
        } else {
            this.getVehicleByIDHandler();
        }
    }

}
