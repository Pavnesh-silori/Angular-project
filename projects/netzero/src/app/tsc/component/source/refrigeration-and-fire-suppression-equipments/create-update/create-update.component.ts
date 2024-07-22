import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { isEqual } from 'lodash';

import * as moment from 'moment-timezone';

// datepicker
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
// /datepicker/

import { EquipmentController } from '@netzero/controller/equipment.controller';

import { GasService } from '@carbon/service/gas.service';
import { EquipmentService } from '@netzero/service/equipment.service';

// tsc-library
import { ToastrService } from '@library/toastr-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, DialogEnum, FormAction, InvalidForm, MATERIAL_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, TSCCommonService } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styles: [
    ]
})
export class CreateUpdateComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;

    FormAction = FormAction;

    action: any;
    title: string = 'Create';
    isCreate: boolean = false;

    equipmentFG: FormGroup;
    groupID: any;
    equipment: any;

    initialObject: any;
    isEqual: boolean = false;

    equipmentList: any[];
    gasList: any[];
    unitList: any[];

    isReadOnly = false;

    maxLength: number = 200;

    gasSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    unitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private equipmentController: EquipmentController,
        private gasService: GasService,
        private equipmentService: EquipmentService,
        private unitService: UnitService,
        private toastrService: ToastrService,
        public tSCCommonService: TSCCommonService,
        private renderer: Renderer2,
        private dialogRef: MatDialogRef<CreateUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        this.action = this.data['action'];
        this.currentOrgID = this.data['currentOrgID'];
        this.dialogRef.disableClose = true;
    }


    ngOnInit(): void {
        this.getGas();
        this.getUnit();
        this.equipementFGInit();
        this.getEquipment();

        if (this.action == FormAction.CREATE) {
            this.isCreate = true;
        } else {
            this.isCreate = false;
            this.isReadOnly = true;

            this.title = "Update";
            this.groupID = this.data['group'];

            this.getEquipmentByGroupID();
        }

    }

    ngAfterViewInit() {
        this.heightHandler();
        this.equipmentFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.equipmentFG.value); });
    }

    heightHandler(): void {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(90vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);
    }

    equipementFGInit() {
        this.equipmentFG = this.formBuilder.group({
            name: [, Validators.required],
            description: ['', [Validators.maxLength(100)]],
            equipmentTypeID: [, Validators.required],
            gasID: [, Validators.required],
            totalCapacity: [, Validators.required],
            totalCapacityUnitID: [, Validators.required],
            initialDate: [, Validators.required]
        })
    }

    formatDate(control: string) {

        let date = moment(this.equipmentFG.controls[control].value).format("YYYY-MM-DD");
        this.equipmentFG.controls[control].patchValue(date);
    }

    async getEquipment() {
        this.equipmentList = <any>await this.equipmentService.getEquipment();
    }

    async getGas() {
        this.gasList = <any>await this.gasService.getGas();

        // ngx mat select search
        this.gasSearchUtil.entityArr = this.gasList;
        this.gasSearchUtil.createSubscription();
    }

    async getUnit() {
        this.unitList = <any>await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);

        // ngx mat select search
        this.unitSearchUtil.entityArr = this.unitList;
        this.unitSearchUtil.createSubscription();
    }

    createUpdate() {
        if (this.action == FormAction.CREATE) {
            this.createEquipmentGroup();
        } else {
            this.updateEquipmentGroup();
        }
    }

    createEquipmentGroup() {
        if (this.equipmentFG.invalid) {
            this.equipmentFG.markAllAsTouched();
            this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
            return [];
        }

        this.equipmentController.createEquipment(this.equipmentFG.value, this.currentOrgID)
            .subscribe((createRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in createEquipment -', error);
                });
    }

    updateEquipmentGroup() {
        if (this.equipmentFG.invalid) {
            console.log('invalid form -', this.equipmentFG.value);
            this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
            return [];
        }

        this.equipmentController.updateEquipment(this.currentOrgID, this.groupID, this.equipmentFG.value)
            .subscribe((updateRes) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in updateEquipment -', error);
                })
    }


    getEquipmentByGroupID() {
        this.equipmentController.getEquipmentByGroupID(this.currentOrgID, this.groupID).subscribe(response => {
            this.equipment = response;
            this.patchEquipment(this.equipment);
        },
            error => {
                console.log('error in getEquipment -', error);
            });
    }

    patchEquipment(equipment) {
        this.equipmentFG.patchValue({
            name: equipment['name'],
            description: equipment['description'],
            equipmentTypeID: equipment['equipmentTypeID'],
            gasID: equipment['gasID'],
            totalCapacity: equipment['totalCapacity'],
            totalCapacityUnitID: equipment['totalCapacityUnitID'],
            initialDate: equipment['initialDate']
        });

        this.initialObject = this.equipmentFG.value;
        this.isEqual = true;
    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('description').value;
        if (description) return (this.maxLength - description.length);
        else return this.maxLength;
    }

    // Datepicker calender open/close
    openDatepicker(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) { datepicker.open(); }
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.equipmentFG.get(control).hasError(error);
    }
}
