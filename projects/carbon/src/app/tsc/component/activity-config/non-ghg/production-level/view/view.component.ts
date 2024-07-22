// Below are shared for this component
// PROCESS_WASTE_GAS_EXPORT
// PROCESS_PRECURSOR_EXPORT
// PROCESS_INTERMEDIATE_PRODUCT_EXPORT
// PROCESS_PRODUCTION_LEVEL

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { ProcessService } from '@carbon/service/process.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-production-level-activity-config-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})

export class ProductionLevelActivityConfigViewComponent implements OnInit {

    constructor(
        activatedRoute: ActivatedRoute,
        private processService: ProcessService,

        // tsc-library
        storageService: StorageService
        // tsc-library
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');
        this.activityKeyID = activatedRoute.snapshot.data.activityKeyID;
    }

    // tsc-library
    COMMON_CONSTANT = COMMON_CONSTANT;
    // /tsc-library/

    ActivityKeyIDEnum = ActivityKeyIDEnum;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    currentOrgID: any;
    activityKeyID: ActivityKeyIDEnum;
    activityConfig: any;
    activityConfigData: any;
    getProcessByIDCall: boolean = true;
    entityTypeLabel: string = 'Entity';

    entity: any[] = [];

    process: any;

    ngOnInit(): void {
        this.setEntityTypeLabel(this.activityKeyID);
    }

    ngAfterContentChecked() {
        if (this.activityConfig) {
            this.activityConfigData = this.activityConfig.activityConfigData;

            if (this.getProcessByIDCall && !this.process && this.activityConfigData) {
                this.getProcessByIDCall = false;
                this.getProcessByID(this.currentOrgID, this.activityConfigData.process.id, false);
            }
        }
    }

    setEntityTypeLabel(activityKeyID: ActivityKeyIDEnum) {
        switch (activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT:
                this.entityTypeLabel = 'Waste Gas Source';
                break;
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT:
                this.entityTypeLabel = 'Precursor Source';
                break;
            case ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT:
                this.entityTypeLabel = 'Intermediate Product';
                break;
            case ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL:
                this.entityTypeLabel = 'Product';
                break;
        }
    }

    async getProcessByID(orgID: number, processID: number, isLatest: boolean) {
        this.process = await this.processService.getProcessByID(orgID, processID, isLatest);

        this.createEntitySource(this.process);
    }

    createEntitySource(process: any) {
        let inputOutput: any;
        let coProduct: any;
        let finishProduct: any;

        switch (this.activityKeyID) {
            case ActivityKeyIDEnum.PROCESS_WASTE_GAS_EXPORT: {
                this.entityTypeLabel = 'Waste Gas';
                inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM &&
                    output.entitySource.some(source =>
                        source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.VENTED_OR_FLARED ||
                        source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_TO_NON_CBAM_INSTALLATION ||
                        source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_TO_CBAM_INSTALLATION
                    ))?.entitySource;
                break;
            }
            case ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT: {
                let entityID: any = null;
                this.entityTypeLabel = 'Precursor Source';

                entityID = [...new Set(process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT)
                    ?.entitySource.filter(entity => entity.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS)
                    ?.map(entity => entity.entityID)) ?? []];

                if (entityID?.length > 0) {
                    inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT)
                        .entities.filter(entity => entityID.includes(entity.id));
                }

                break;
            }
            case ActivityKeyIDEnum.PROCESS_INTERMEDIATE_PRODUCT_EXPORT: {
                let entityID: any = null;
                this.entityTypeLabel = 'Intermediate Product';

                entityID = [...new Set(process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT)
                    ?.entitySource.filter(entity => entity.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS)
                    ?.map(entity => entity.entityID)) ?? []];

                if (entityID?.length > 0) {
                    inputOutput = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT)
                        .entities.filter(entity => entityID.includes(entity.id));
                }

                break;
            }
            case ActivityKeyIDEnum.PROCESS_PRODUCTION_LEVEL: {
                this.entityTypeLabel = 'Product';
                coProduct = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT)?.entities;
                finishProduct = process.output.find(output => output.type.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT)?.entities;

                if (coProduct) {
                    inputOutput = coProduct;
                    this.entityTypeLabel = 'Co-product';
                } else if (finishProduct) {
                    inputOutput = finishProduct;
                    this.entityTypeLabel = 'Finished Product';
                } else {
                    inputOutput = null;
                    this.entityTypeLabel = 'Product';
                }

                break;
            }
        }

        if (inputOutput) {
            this.entity = inputOutput;
        } else {
            this.entity = [];
        }
    }


}
