import { Component, OnInit } from '@angular/core';

import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { SourceKeyID } from '@carbon/enum/cbam.enum';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-precursor-consumption-activity-config-view',
    templateUrl: './view.component.html',
    styles: [
    ]
})
export class PrecursorConsumptionActivityConfigViewComponent implements OnInit {

    constructor() { }

    // tsc-library
    COMMON_CONSTANT = COMMON_CONSTANT;
    // /tsc-library/

    SourceKeyID = SourceKeyID;

    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    activityConfig: any;
    activityConfigData: any;
    isEntityCreate: boolean = true;

    entity: any[] = [];

    ngOnInit(): void {
    }

    ngAfterContentChecked() {
        if (this.activityConfig) {
            this.activityConfigData = this.activityConfig.activityConfigData;

            if (this.isEntityCreate && this.activityConfigData) {
                this.isEntityCreate = false;
                this.createEntitySource(this.activityConfig);
            }
        }
    }

    createEntitySource(activityConfig) {
        const result = [];

        activityConfig.activityConfigData.ioSourceConfig.forEach(config => {
            const entityId = config.entity.id;
            const entityName = config.entity.name;

            // Find if entity already exists in result array
            let entityObj = result.find(e => e.entity.id === entityId);

            // If entity does not exist, create a new one
            if (!entityObj) {
                entityObj = {
                    entity: {
                        id: entityId,
                        name: entityName
                    },
                    inputOutputSource: []
                };
                result.push(entityObj);
            }

            entityObj.inputOutputSource.push({
                id: config.inputOutputSource.id,
                name: config.inputOutputSource.name,
                keyID: config.inputOutputSource.keyID,
                description: config.inputOutputSource.description,
                sourceType: config.sourceType ? {
                    id: config.sourceType.id,
                    name: config.sourceType.name,
                    keyID: config.sourceType.keyID
                } : null,
                source: config.source ? config.source.map(s => ({
                    id: s.id,
                    name: s.name
                })) : null
            });
        });

        this.entity = result;
    }

}
