import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

import { EmissionMetadatasController } from '@netzero/controller/efdb-metadatas.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

// tsc-library
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
    selector: 'app-uk-defra-metadata',
    templateUrl: './uk-defra-metadata.component.html',
})

export class UKDefraMetadataComponent implements OnInit {

    purchasedGoodServiceEFDB = [];
    materialTypes: Array<any> = [];
    materialOriginTypes: any[] = [];

    materialTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    materialOriginTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @Input('emssionFactorSourceKeyID') emssionFactorSourceKeyID: any;
    @Input('emfMetadataForm') emfMetadataForm: FormGroup;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    currentOrgID: any;
    COMMON_CONSTANT = COMMON_CONSTANT;
    FormErrorEnum = FormErrorEnum;

    constructor(private emissionMetadatasController: EmissionMetadatasController,
        private storageService: StorageService) {
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getMaterialTypes();
    }

    async getMaterialTypes() {
        this.emissionMetadatasController.getMaterialTypes(this.currentOrgID, ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES, this.emssionFactorSourceKeyID)
            .subscribe((res: any) => {
                this.materialTypes = res;
                // ngx mat select search
                this.materialTypeSearchUtil.entityArr = this.materialTypes;
                this.materialTypeSearchUtil.createSubscription();
                const materialTypeID = this.emfMetadataForm?.get('materialTypeID').value;
                if (materialTypeID) {
                    this.materialTypeChanged({ value: materialTypeID } as MatSelectChange);
                }
            });
    }

    materialTypeChanged(event: MatSelectChange) {
        this.materialOriginTypes = [];
        const materialType = this.materialTypes.find(mt => mt.id === event.value);
        if (materialType) {
            this.materialOriginTypes = materialType?.originType;
            this.materialOriginTypeSearchUtil.entityArr = this.materialOriginTypes;
            this.materialOriginTypeSearchUtil.createSubscription();
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.emfMetadataForm.controls[control].hasError(error);
    }


}