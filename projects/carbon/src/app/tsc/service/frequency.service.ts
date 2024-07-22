import { Injectable } from "@angular/core";

import { FrequencyController } from '@carbon/controller/frequency.controller';
import { FrequencyKeyIDEnum, FrequencyLabelEnum } from "@carbon/enum/frequency.enum";

@Injectable({
    providedIn: 'root'
})

export class FrequencyService {

    constructor(
        private frequencyController: FrequencyController
    ) { }

    async getAllFrequency(): Promise<any> {
        let frequency: any;

        try {
            frequency = await this.frequencyController.getAllFrequency().toPromise();

            if (frequency) {
                return frequency;
            } else {
                return null;
            }
        } catch (error) {
            console.error('error in getFrequency -', error);
            return null;
        }
    }

    getFrequencyLabelByKeyID(frequencyKeyID): FrequencyLabelEnum {
        let label: FrequencyLabelEnum;

        switch (frequencyKeyID) {
            case FrequencyKeyIDEnum.DAILY:
                label = FrequencyLabelEnum.DAILY;
                break;
            case FrequencyKeyIDEnum.MONTHLY:
                label = FrequencyLabelEnum.MONTHLY;
                break;
            case FrequencyKeyIDEnum.YEARLY:
                label = FrequencyLabelEnum.YEARLY;
                break;
            default:
                label = null;
                break;
        }

        return label;
    }

}
