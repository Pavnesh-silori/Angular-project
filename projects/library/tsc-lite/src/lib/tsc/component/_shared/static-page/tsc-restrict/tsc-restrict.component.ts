import { Component, OnInit } from '@angular/core';

import { SavedConsumptionParameter, SavedConsumptionParameterM } from '../../../../model/parameter.model';

import { ParameterService } from '../../../../service/parameter.service';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'lib-tsc-restrict',
    templateUrl: './tsc-restrict.component.html',
    styleUrls: ['./tsc-restrict.component.scss']
})
export class TscRestrictComponent implements OnInit {

    orgID: any;
    layoutID: any;
    consumptionParameter = [new SavedConsumptionParameter()];

    setLayoutRedirectUrl = '/layout/page';
    setConsumptionRedirectUrl = '/preference/consumption-parameter/add';

    constructor(
        private storageService: StorageService,
        private parameterService: ParameterService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');

        this.getSavedConsumptionParameter();
    }

    async getSavedConsumptionParameter() {
        this.consumptionParameter = <SavedConsumptionParameterM[]>await this.parameterService.getSavedConsumptionParameter(this.orgID);
    }

}
