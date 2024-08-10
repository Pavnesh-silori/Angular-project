import { Injectable } from '@angular/core';

import { MakeModel, MakeModelI } from '../model/make-model.model';

import { MakeModelController } from '../controller/make-model.controller';

@Injectable({
    providedIn: 'root'
})

export class MakeModelService {

    constructor(
        private makeModelController: MakeModelController
    ) { }

    async getMake(type): Promise<MakeModelI[]> {
        let makeI: MakeModelI[];
        try {
            makeI = await this.makeModelController.getMake(type).toPromise();

            if (makeI) {
                return makeI;
            } else {
                return [new MakeModel()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new MakeModel()];
        }
    }

    async getModel(makeID, type): Promise<MakeModelI[]> {
        let modelI: MakeModelI[];
        try {
            modelI = await this.makeModelController.getModel(makeID, type).toPromise();

            if (modelI) {
                return modelI;
            } else {
                return [new MakeModel()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new MakeModel()];
        }
    }
}
