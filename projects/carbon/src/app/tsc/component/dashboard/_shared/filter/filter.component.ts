import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { ConsolidationApproachM } from '@carbon/model/consolidation-approach.model';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service'; 

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-filter-carbon',
    templateUrl: './filter.component.html',
    styles: [
    ]
})
export class CarbonFilterComponent implements OnInit {

    rootOrgID: any;
    currentOrgType: any;

    @Output()
    emitFilter = new EventEmitter();

    @Input() module: any;
    @Input() have_default_consolidation_approach: boolean = false;

    facilityFC = new FormControl(false);
    subsidiaryFC = new FormControl(false);
    consolidationApproachFC = new FormControl();

    includeFacility = false;
    includeSubsidiary = false;
    consolidationApproach: ConsolidationApproachM[] = null;

    constructor(
        private consolidationApproachService: ConsolidationApproachService,

        // tsc-library
        storageService: StorageService
        // /tsc-library/
    ) {
        this.rootOrgID = storageService.getStorage('rootOrgID');
        this.currentOrgType = storageService.getStorage('currentOrgType');
    }

    ngOnInit(): void {
        this.getConsolidationAppraoches();
    }

    isIncludeFacility() {
        this.emitFilter.emit();
    }

    isIncludeSubsidiary() {
        this.emitFilter.emit();
    }

    async getConsolidationAppraoches() {
        this.consolidationApproach = <ConsolidationApproachM[]>await this.consolidationApproachService.getAllConsolidationApproachByOrgID(this.rootOrgID);
        if (!this.have_default_consolidation_approach) {
            if (this.consolidationApproach.length) {
                this.consolidationApproachFC.patchValue(this.consolidationApproach[0].keyID);
            }
        }
        this.emitFilter.emit();
    }

    selectConsolidationApproach(event) {
        this.consolidationApproachFC.patchValue(event.value, { emitEvent: false });
        this.emitFilter.emit();
    }
}

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatCheckboxModule,
    ],
    exports: [
        CarbonFilterComponent
    ],
    declarations: [
        CarbonFilterComponent
    ],
})

export class CarbonFilterModule { }
