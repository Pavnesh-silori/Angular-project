import { Injectable } from '@angular/core';

import { UtilitySourceType, UtilitySourceTypeM } from '../model/source-consumer.model';

import { SourceController } from '../controller/source.controller';

// tsc-library
import { Static, StaticI } from '@library/tsc-common';
// /tsc-library/

@Injectable({
    providedIn: 'root'
})

export class SourceService {

    constructor(
        private sourceController: SourceController
    ) { }

    async getUtilitySourceAndType(orgID): Promise<UtilitySourceTypeM> {
        let utlitySourceType: UtilitySourceTypeM;
        try {
            utlitySourceType = await this.sourceController.getUtilitySourceAndType(orgID).toPromise();

            if (utlitySourceType) {
                return utlitySourceType;
            } else {
                return new UtilitySourceType();
            }
        } catch (error) {
            console.error('Error -', error);
            return new UtilitySourceType();
        }
    }

    async getSourceConsumerType(orgID, type): Promise<StaticI[]> {
        let sourceLoadType: StaticI[];
        try {
            sourceLoadType = await this.sourceController.getSourceConsumerType(orgID, type).toPromise();

            if (sourceLoadType) {
                return sourceLoadType;
            } else {
                return [new Static()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Static()];
        }
    }

}
