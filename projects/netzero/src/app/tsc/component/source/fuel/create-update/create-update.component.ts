import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isEqual } from 'lodash';

import { FuelController } from '@netzero/controller/fuel.controller';

//tsc-library
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { ResponseM, MaterialFormFieldAppearance, InvalidForm, ButtonLabelEnum, FormAction, DialogEnum, MATERIAL_CONSTANT, ButtonTooltipEnum, TSCCommonService } from '@library/tsc-common'
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'fuel-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})

export class CreateUpdateComponent {

    @Input() action: any;
    @Input() fuelID: any;

    @Output() formStatus: EventEmitter<String> = new EventEmitter<String>();
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    title: string;
    FormAction = FormAction;

    fuelFG: FormGroup;
    initialObject: any;

    currentOrgID: any;
    ncvNumeratorUnit: UnitM[];
    ncvDenomenatorUnit: UnitM[];

    response: any;
    isEqual: boolean = true;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    maxLength: number = 500;

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;
    constructor(
        private storageService: StorageService,
        private toastrService: ToastrService,
        private formBuilder: FormBuilder,
        private fuelController: FuelController,
        private unitService: UnitService,
        public tSCCommonService: TSCCommonService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID')
        this.fuelFGInit();
        this.getUnit();
        if (this.action == FormAction.CREATE) {
            this.title = ButtonLabelEnum.CREATE_BTN_LABEL;
        }
        else if (this.action == FormAction.UPDATE) {
            this.title = ButtonLabelEnum.UPDATE_BTN_LABEL
            this.getFuelByID();
        }
        else {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Unrecognized action!', ToastrColor.ERROR);
        }
    }

    fuelFGInit() {
        this.fuelFG = this.formBuilder.group({
            name: [, Validators.required],
            description: [],
            code: [, Validators.required],
            netCalorificValue: [, Validators.required],
            ncvNumeratorUnitID: [, Validators.required],
            ncvDenominatorUnitID: [, Validators.required],
            biomassPct: [, Validators.required],
            oxidationFactor: [, Validators.required],
            isWasteGasStream: [true],
        })
    }

    createUpdateFuel() {
        if (this.action == FormAction.CREATE) {
            this.createFuel();
        } else {
            this.updateFuel();
        }
    }

    // createfuel
    createFuel() {
        console.log(this.fuelFG.value.isWasteGasStream)
        if (this.fuelFG.invalid) {
            this.fuelFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.fuelController.createFuel(this.currentOrgID, this.fuelFG.value).subscribe((createRes: ResponseM) => {
            let toast: any;
            toast = this.toastrService.getToastStatus(createRes.status);
            this.formStatus.emit(DialogEnum.SUCCESS_DR);


        }, error => {
            console.log('error in createFuel -', error);
        });
    }

    async getUnit() {
        try {
            this.ncvNumeratorUnit = await this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.ENERGY}`]);
            this.ncvDenomenatorUnit = await this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.VOLUME}`])
        } catch (error) {
            console.error(error);
        }
    }

    // update fuel

    updateFuel() {
        if (this.fuelFG.invalid) {
            this.fuelFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.fuelController.updateFuel(this.currentOrgID, this.fuelID, this.fuelFG.value)
            .subscribe((updateRes: ResponseM) => {
                let toast: any;
                toast = this.toastrService.getToastStatus(updateRes.status);
                this.formStatus.emit(DialogEnum.SUCCESS_DR);
            }, error => {
                console.log('error in updateEmployee -', error);
            });
    }

    getFuelByID() {
        this.fuelController.getFuelByID(this.currentOrgID, this.fuelID).subscribe((response: any) => {
            if (response) {
                this.response = response;
                console.log(response)
                this.patchFuelDetails();
            }
        }, error => {
            console.log('error in getEmployeeByID() -', error);
        });
    }

    patchFuelDetails() {
        this.fuelFG.patchValue({
            name: this.response['name'],
            description: this.response['description'],
            code: this.response['code'],
            netCalorificValue: this.response['netCalorificValue'],
            ncvNumeratorUnitID: this.response['ncvNumeratorUnitID'],
            ncvDenominatorUnitID: this.response['ncvDenominatorUnitID'],
            biomassPct: this.response['biomassPct'],
            oxidationFactor: this.response['oxidationFactor'],
            isWasteGasStream: this.response['isWasteGasStream'],
        })
        this.initialObject = this.fuelFG.value;

        this.fuelFG.valueChanges.subscribe(() => {
            this.isEqual = isEqual(this.initialObject, this.fuelFG.value);
        });

    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('description').value;
        if (description) return (this.maxLength - description.length);
        else return this.maxLength;
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.fuelFG.get(control).hasError(error);
    }

}
