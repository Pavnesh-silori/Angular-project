import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class TargetService {

    constructor() { }

    patchData(formGroup: AbstractControl, data) {
        for(let key in formGroup['controls']) {
            if(formGroup['controls'][key] instanceof FormGroup) this.patchData(formGroup['controls'][key], data[key]);
            else formGroup['controls'][key].setValue(data[key]);
        }
    }
}
