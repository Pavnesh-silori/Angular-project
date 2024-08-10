import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { isEqual } from 'lodash';

import { Entity, EntityType, EntityTypeM } from '../../../../../model/entity.model';

import { EntityController } from '../../../../../controller/entity.controller';

import { EntityService } from '../../../../../service/entity.service';

// tsc-library
import { InvalidForm, ResponseM, MatSelectSearchService, MaterialFormFieldAppearance, ButtonLabelEnum, DialogEnum, FormErrorEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor } from '@library/toastr-service';
// /tsc-library/

@Component({
    selector: 'lib-entity',
    templateUrl: './entity.component.html',
    styleUrls: []
})
export class CreateUpdateEntityComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    ButtonLabelEnum = ButtonLabelEnum;
    DialogEnum = DialogEnum;
    FormErrorEnum = FormErrorEnum;

    title: string = 'Create';
    action: string = 'create';

    orgID: any;
    layoutID: any;
    entityID: any;
    isNewEntityTypeSelected: boolean = false;
    isEqual: boolean = false;
    initialObject: any;

    entityM: Entity;
    entityTypeM = [new EntityType()];

    entityFG: FormGroup;
    entityTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['type']);

    constructor(
        private storageService: StorageService,
        private toastService: ToastrService,
        private entityService: EntityService,
        private entityController: EntityController,
        private entityFB: FormBuilder,
        public dialogRef: MatDialogRef<CreateUpdateEntityComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
        this.action = data['action'];
        this.entityID = data['entityID'];
        this.layoutID = data['layoutID']
        this.dialogRef.disableClose = true;
    }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getEntityType();
        this.entityFGInit();

        if (this.action == 'update') {
            this.title = 'Update';
            this.getEntityByID();
        }
        this.entityFG.valueChanges.subscribe(() => { this.isEqual = isEqual(this.initialObject, this.entityFG.getRawValue()); });
    }

    async getEntityType() {
        this.entityTypeM = <EntityTypeM[]>await this.entityService.getEntityTypeByLayoutID(this.orgID, 'NO');

        this.entityTypeSearchUtil.entityArr = this.entityTypeM;
        this.entityTypeSearchUtil.createSubscription();
    }

    entityFGInit() {
        this.entityFG = this.entityFB.group({
            name: ['', Validators.required],
            type: ['', Validators.required]
        });
    }

    createNewType() {
        this.isNewEntityTypeSelected = true;
        this.entityFG.get('type').reset();
    }

    getEntityByID() {
        this.entityController.getEntityByID(this.orgID, this.layoutID, this.entityID).subscribe((entityRes) => {
            this.entityM = entityRes;
            this.patchEntity(this.entityM);
        })
    }

    patchEntity(entity) {
        this.entityFG.patchValue({
            name: entity['name'],
            type: entity['type']
        });
        this.isEqual = true;
    }

    addEntity() {
        if (this.entityFG.invalid) {
            this.entityFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        this.entityController.createEntity(this.orgID, this.layoutID, this.entityID, this.entityFG.value)
            .subscribe((addEntityRes: ResponseM) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in addEntity - ', error);
                });
    }

    updateEntity() {
        if (this.entityFG.invalid) {
            this.entityFG.markAllAsTouched();
            this.toastService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }
        this.entityController.updateEntity(this.orgID, this.layoutID, this.entityID, this.entityFG.value)
            .subscribe((addEntityRes: ResponseM) => {
                this.dialogRef.close(DialogEnum.SUCCESS_DR);
            },
                error => {
                    console.log('error in updateEntity - ', error);
                });
    }

    public errorHandling = (control: string, error: string) => {
        return this.entityFG.controls[control].hasError(error);
    }

}
