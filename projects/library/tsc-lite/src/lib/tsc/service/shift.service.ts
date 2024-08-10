import { Injectable } from '@angular/core';

import { Shift, ShiftM } from '../model/shift.model';

import { ShiftController } from '../controller/shift.controller';

@Injectable({
    providedIn: 'root'
})

export class ShiftService {

    constructor(
        private shiftController: ShiftController
    ) { }

    async getShift(orgID, skipLoader): Promise<ShiftM[]> {
        let shiftM: ShiftM[];
        try {
            shiftM = await this.shiftController.getShift(orgID, skipLoader).toPromise();

            if (shiftM) {
                return shiftM;
            } else {
                return [new Shift()];
            }
        } catch (error) {
            console.error('Error -', error);
            return [new Shift()];
        }
    }
}
