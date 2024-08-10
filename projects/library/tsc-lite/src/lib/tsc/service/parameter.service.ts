import { Injectable } from '@angular/core';

import { ConsumptionParameter, ConsumptionParameterM, Parameter, ParameterM, SavedConsumptionParameter, SavedConsumptionParameterM } from '../model/parameter.model';

import { ParameterController } from '../controller/parameter.controller';

@Injectable({
    providedIn: 'root'
})

export class ParameterService {

    constructor(
        private parameterController: ParameterController,
    ) { }

    async getParameterByOrgID(orgID): Promise<ParameterM[]> {
        let parameterM: ParameterM[];
        try {
            parameterM = await this.parameterController.getParameterByOrgID(orgID).toPromise();

            if (parameterM) {
                return parameterM;
            } else {
                return [new Parameter()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Parameter()];
        }
    }

    async getParameterByLayoutID(orgID): Promise<ParameterM[]> {
        let parameterM: ParameterM[];
        try {
            parameterM = await this.parameterController.getParameterByLayoutID(orgID).toPromise();

            if (parameterM) {
                return parameterM;
            } else {
                return [new Parameter()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Parameter()];
        }
    }

    async getParameterByDeviceID(orgID, requestBody): Promise<ParameterM[]> {
        let parameterM: ParameterM[];
        try {
            parameterM = await this.parameterController.getParameterByDeviceID(orgID, requestBody).toPromise();

            if (parameterM) {
                return parameterM;
            } else {
                return [new Parameter()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Parameter()];
        }
    }

    async getConsumptionParameter(orgID): Promise<ConsumptionParameterM> {
        let consumptionParamM: ConsumptionParameterM;
        try {
            consumptionParamM = await this.parameterController.getConsumptionParameter(orgID).toPromise();

            if (consumptionParamM) {
                return consumptionParamM;
            } else {
                return new ConsumptionParameter();
            }
        } catch (error) {
            console.error('Error -', error);
            return new ConsumptionParameter();
        }
    }

    async getSavedConsumptionParameter(orgID): Promise<SavedConsumptionParameterM[]> {
        let savedConsumptionParamM: SavedConsumptionParameterM[];
        try {
            savedConsumptionParamM = await this.parameterController.getSavedConsumptionParameter(orgID).toPromise();

            if (savedConsumptionParamM) {
                return savedConsumptionParamM;
            } else {
                return [new SavedConsumptionParameter()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new SavedConsumptionParameter()];
        }
    }

}