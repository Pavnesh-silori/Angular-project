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
    selector: 'app-uk-defra-metadata-2',
    templateUrl: './uk-defra-metadata.component.html',
})

export class UKDefraMetadataComponent implements OnInit {

    purchasedGoodServiceEFDB = [];
    materialTypes: Array<any> = [];
    materialOriginTypes: any[] = [];

    materialTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    materialOriginTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @Input('emssionFactorSourceKeyID') emssionFactorSourceKeyID: any;
    @Input('emssionFactorSourceName') emssionFactorSourceName: any;
    // @Input('calculationApproachName') calculationApproachName: any;
    @Input('emfMetadataForm') emfMetadataForm: FormGroup;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    currentOrgID: any;
    COMMON_CONSTANT = COMMON_CONSTANT;
    FormErrorEnum = FormErrorEnum;

    constructor(private emissionMetadatasController: EmissionMetadatasController,
        private storageService: StorageService) {
    }

    ngOnInit(): void {
        console.log('UKDefraMetadataComponent');
        console.log(this.emfMetadataForm);
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getMaterialTypes();
    }

    async getMaterialTypes() {
        // this.materialTypes = [
        //     {
        //         "id": 1,
        //         "name": "Plastic",
        //         "originType": [
        //             {
        //                 "id": 1,
        //                 "name": "Recycled"
        //             },
        //             {
        //                 "id": 2,
        //                 "name": "Virgin"
        //             }
        //         ]
        //     }
        // ];
        // this.materialTypeSearchUtil.entityArr = this.materialTypes;
        // this.materialTypeSearchUtil.createSubscription();
        // this.materialTypeChanged({ value: this.emfMetadataForm.get('materialOriginTypeID').value } as MatSelectChange);
        // this.emissionMetadatasController.getMaterialTypes(this.currentOrgID, ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES, this.emssionFactorSourceKeyID)
        //     .subscribe((res: any) => {
        //         this.materialTypes = res;
        //         // ngx mat select search
        //         this.materialTypeSearchUtil.entityArr = this.materialTypes;
        //         this.materialTypeSearchUtil.createSubscription();
        //         this.materialTypeChanged({ value: this.emfMetadataForm.get('materialOriginTypeID').value } as MatSelectChange);
        //     });
    }

    materialTypeChanged(event: MatSelectChange) {
        console.log('materialTypeChanged', event.value);
        this.materialOriginTypes = [];
        const materialType = this.materialTypes.find(mt => mt.id === event.value);
        if (materialType) {
            console.log('materialType', materialType);
            this.materialOriginTypes = materialType?.originType;
            this.materialOriginTypeSearchUtil.entityArr = this.materialOriginTypes;
            this.materialOriginTypeSearchUtil.createSubscription();
        }
    }

    public errorHandling = (control: string, error: string) => {
        return this.emfMetadataForm.controls[control].hasError(error);
    }


}