import { Component, Inject, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { forkJoin } from 'rxjs';
import { isEqual } from 'lodash';

import { VehicleTypeEnum } from '@netzero/enum/vechile-type.enum';

import { VehicleCategoryM, EngineStrokeM, VehicleTypeM } from '@netzero/model/vehicle.model';

import { VehicleController } from '@netzero/controller/vehicle.controller';

import { VehicleService } from '@netzero/service/vehicle.service';

// tsc-library
import {
    ResponseM,
    MaterialFormFieldAppearance,
    InvalidForm,
    ButtonLabelEnum,
    FormAction,
    PageTitleEnum,
    FormErrorEnum,
    ButtonTooltipEnum,
    MATERIAL_CONSTANT
} from '@library/tsc-common';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService, ToastrColor } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { DateInputComponent, DateInputTypeEnum } from '@library/date';
// /tsc-library/

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: []
})

export class CreateUpdateComponent implements OnInit {
    FormAction = FormAction;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonTooltipEnum = ButtonTooltipEnum;
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    PageTitleEnum = PageTitleEnum;
    DateInputTypeEnum = DateInputTypeEnum
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    
    vehicleFG: FormGroup;
    rootOrgID: any;
    action: string;
    vehicleID: any;
    vehicle: any;
    isEngineStroke: boolean = false;
    isEqual: boolean = true;
    initialObject: any;

    vehicleTypeM: VehicleTypeM[];
    vehicleCategoryM: VehicleCategoryM[];
    vehicleCategoryOR: VehicleCategoryM[];
    vehicleCategoryNR: VehicleCategoryM[];
    vehicleCategory: VehicleCategoryM[];
    engineStrokeM: EngineStrokeM[];
    unitM: UnitM[];
    
    @ViewChild('yearInput') yearInput: DateInputComponent;
    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) private dialogData: any,
        private dialogRef: MatDialogRef<CreateUpdateComponent>,
        private formBuilder: FormBuilder,
        private renderer: Renderer2,
        private toastrService: ToastrService,
        private unitService: UnitService,
        private vehicleController: VehicleController,
        private vehicleService: VehicleService,
        private storageService: StorageService,
    ) {
        dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.vehicleFGInit();

        if (this.dialogData) {
            this.action = this.dialogData.action;
            if (this.action == FormAction.UPDATE) {
                this.vehicleID = this.dialogData.vehicleID;
            }
        }

        forkJoin([this.getVehicleType(), this.getVehicleCategory(), this.getEngineStroke(), this.getUnit()]).subscribe(([]) => {
            if (this.action == FormAction.UPDATE) {
                this.getVehicleByID();
            }
        }, error => {
            console.error('error in forkJoin -', error);
        });
    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(100vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);

        this.vehicleFG.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.vehicleFG.value));
    }

    vehicleFGInit() {
        this.vehicleFG = this.formBuilder.group({
            vehicleName: [, Validators.required],
            vehicleTypeID: [, Validators.required],
            vehicleNumber: [, Validators.required],
            engineStrokeId: [],
            odoMeterUnitID: [, Validators.required],
            vehicleCategoryID: [, Validators.required],
            year: [, Validators.required]
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

        this.vehicleFG.get('engineStrokeId').clearValidators();
        this.vehicleFG.get('engineStrokeId').updateValueAndValidity();

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
                this.createVehicle();
            } else {
                let toast: any;
                toast = this.toastrService.getToastStatus(res.status);
                this.toastrService.openToast(toast.title, res.message, toast.color);
            }
        });
    }

    vechileSubmit() {
        if (this.vehicleFG.invalid) {
            this.vehicleFG.markAllAsTouched();
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
            this.dialogRef.close('opSuccess');
        }, error => {
            console.log('error in createVehicle -', error);
        });
    }

    getVehicleByID() {
        this.vehicleController.getVehicleByID(this.rootOrgID, this.vehicleID).subscribe((res: any) => {
            this.vehicle = res;
            this.yearInput.durationFC.setValue(this.vehicle['year']);
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
            vehicleCategoryID: this.vehicle['vehicleCategory'].id,
            year: this.vehicle['year']
        });

        let durationToPatch = this.vehicleFG.get('year').value;
        this.yearInput.durationFC.patchValue(durationToPatch.toString());

        if (this.vehicle['engineStroke'] !== null) {
            this.isEngineStroke = true;
            this.vehicleFG.patchValue({
                engineStrokeId: this.vehicle['engineStroke'].id
            });
        }

        this.initialObject = this.vehicleFG.value;
        this.isEqual = true;
    }

    updateVehicle() {
        this.vehicleController.updateVehicle(this.rootOrgID, this.vehicleFG.value, this.vehicleID).subscribe((res: ResponseM) => {
            let toast: any;
            toast = this.toastrService.getToastStatus(res.status);
            this.toastrService.openToast(toast.title, res.message, toast.color);
            this.dialogRef.close('opSuccess');
        }, error => {
            console.log('error in updateVehicle -', error);
        })
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.vehicleFG.get(control).hasError(error);
    }

    errorHandlingForRadio = (controlPath: string, error: string): boolean => {
        return this.vehicleFG.get(controlPath).hasError(error) && this.vehicleFG.get(controlPath).touched;
    }

}
