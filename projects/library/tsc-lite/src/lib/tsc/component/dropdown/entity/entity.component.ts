import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Entity, EntityM } from '../../../model/entity.model';

import { EntityService } from '../../../service/entity.service';

// tsc-library
import { COMMON_CONSTANT, FormErrorEnum, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { DropdownTypeEnum } from '../../../enum/dropdown.enum';
// /tsc-library/

@Component({
    selector: 'lib-entity',
    templateUrl: './entity.component.html',
    styles: [
    ]
})

export class EntityComponent implements OnInit {
    @Input()
    dropdownTypeInp: DropdownTypeEnum;

    commonConstant = COMMON_CONSTANT;

    materialFormFieldAppearance = MaterialFormFieldAppearance
    dropdownTypeEnum = DropdownTypeEnum;
    FormErrorEnum = FormErrorEnum;

    orgID: any;
    entityM = [new Entity()];
    dropdownType: string = this.dropdownTypeEnum.SINGLE_DROPDOWN;
    allEntityID: any[] = [];
    totalEntityCount: number = 0;

    entityFC: FormControl = new FormControl('', [Validators.required]);
    multipleEntityFC: FormControl = new FormControl([], [Validators.required]);

    entitySearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    @Output()
    emitFilter = new EventEmitter();

    constructor(
        private storageService: StorageService,
        private entityService: EntityService
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.getEntitiesHavingDevicesByOrgID();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dropdownTypeInp && this.dropdownTypeInp) {
            this.dropdownType = this.dropdownTypeInp;
        }
    }

    async getEntitiesHavingDevicesByOrgID() {
        this.entityM = <EntityM[]>await this.entityService.getEntitiesHavingDevicesByOrgID(this.orgID);

        this.entitySearchUtil.entityArr = this.entityM;
        this.entitySearchUtil.createSubscription();

        this.totalEntityCount = this.entityM.length;
        this.entityM.forEach(entity => this.allEntityID.push(entity['id']));

        if (this.entityM.length > 0) {
            this.entityFC.patchValue(this.entityM[0]['id']);
            this.emitFilter.emit();
        }
    }

    onChange(selectedEntity) {
        this.entityFC.patchValue(selectedEntity);
        this.emitFilter.emit();
    }

    selectAllEntities() {
        if (!this.multipleEntityFC.value.includes(-1)) {
            this.multipleEntityFC.reset([]);
            return;
        }
        this.multipleEntityFC.setValue([-1, ...this.allEntityID]);
        this.emitFilter.emit();
    }

    selectedEntities() {
        const selected = this.multipleEntityFC.value;

        if (selected.includes(-1)) {
            selected.shift();
            this.multipleEntityFC.patchValue(selected);
        } else if (this.multipleEntityFC.value.length == this.totalEntityCount) {
            this.allEntityID.splice(0, 0, -1);
            this.multipleEntityFC.patchValue(this.allEntityID);
        } else {
            const filteredSelected = selected.filter(s => s != -1);
            this.multipleEntityFC.patchValue(filteredSelected);
        }

        this.emitFilter.emit();
    }

}
