import { Component, Input, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { EmissionMetadatasController } from '@netzero/controller/efdb-metadatas.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library

@Component({
    selector: 'app-us-eeio-metadata',
    templateUrl: './us-eeio-metadata.component.html',
})

export class USEEIOMetadataComponent implements OnInit {

    purchasedGoodServiceEFDB = [];
    categoryTypes: any[] = [];
    categoryOriginTypes: any[] = [];
    categoryTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['categoryName']);

    @Input('emssionFactorSourceKeyID') emssionFactorSourceKeyID: any;
    @Input('emssionFactorSourceName') emssionFactorSourceName: any;
    // @Input('calculationApproachName') calculationApproachName: any;
    @Input('emfMetadataForm') emfMetadataForm: FormGroup;
    // @Output() emissionMetadataUpdate = new EventEmitter<any>();
    currentOrgID: any;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;
    FormErrorEnum = FormErrorEnum;

    constructor(private emissionMetadatasController: EmissionMetadatasController,
        private storageService: StorageService) {
    }

    ngOnInit(): void {
        // console.log('USEEIOMetadataComponent');
        // console.log(this.emfMetadataForm);
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getCategoryTypes();
    }

    async getCategoryTypes() {
        // this.emissionMetadatasController.getCategory(this.currentOrgID, ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES, this.emssionFactorSourceKeyID)
        //     .subscribe((res: any) => {
        //         this.categoryTypes = res;
        //         // ngx mat select search
        //         this.categoryTypeSearchUtil.entityArr = this.categoryTypes;
        //         this.categoryTypeSearchUtil.createSubscription();
        //     });
    }

    public errorHandling = (control: string, error: string) => {
        return this.emfMetadataForm.controls[control].hasError(error);
    }

}