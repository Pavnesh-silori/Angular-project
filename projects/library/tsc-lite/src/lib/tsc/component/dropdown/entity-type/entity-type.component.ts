import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { EntityType, EntityTypeM } from '../../../model/entity.model';

import { EntityService } from '../../../service/entity.service';

// tsc-library
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'lib-entity-type',
    templateUrl: './entity-type.component.html',
    styles: [
    ]
})
export class EntityTypeComponent implements OnInit {

    materialFormFieldAppearance = MaterialFormFieldAppearance;
    commonConstant = COMMON_CONSTANT;

    FormErrorEnum = FormErrorEnum;

    orgID: any;
    layoutID: any;
    entityTypeM = [new EntityType()];
    entityTypeFC: FormControl = new FormControl('', Validators.required);

    entityTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['type']);

    @Output()
    emitFilter = new EventEmitter();

    constructor(
        private storageService: StorageService,
        private entityService: EntityService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');

        this.getEntityTypeByLayoutID();
    }

    async getEntityTypeByLayoutID() {
        this.entityTypeM = <EntityTypeM[]>await this.entityService.getEntityTypeByLayoutID(this.orgID, 'NO');

        this.entityTypeSearchUtil.entityArr = this.entityTypeM;
        this.entityTypeSearchUtil.createSubscription();

        if (this.entityTypeM && this.entityTypeM.length > 0) {
            const defaultEntityType = this.entityTypeM[0].type;

            if (defaultEntityType) {
                this.entityTypeFC.patchValue(defaultEntityType);
                this.emitFilter.emit();
            }
        }
    }

    onChange(selectedType) {
        this.entityTypeFC.patchValue(selectedType);
        this.emitFilter.emit();
    }
}
