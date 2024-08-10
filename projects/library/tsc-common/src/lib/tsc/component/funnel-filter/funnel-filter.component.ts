import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { FormControl } from '@angular/forms';

import { MATERIAL_CONSTANT } from '../../constant/material.constant';

import { MatSelectSearchService } from '../../service/mat-select-search.service';

@Component({
    selector: 'funnel-filter',
    templateUrl: './funnel-filter.component.html',
    styleUrls: ['./funnel-filter.component.scss']
})
export class FunnelFilterComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    @Input() header: string = 'Filter Key'; /* header value shown next to funnel icon */
    @Input() active: boolean = false; /* show filter icon with blue color or not */
    @Input() showSearchBar: boolean = true; /* show search bar or not */
    @Input() searchByPlaceholder: string = 'name'; /* search placehodler */
    @Input() searchBy: string[] = ['name']; /* in search bar which column used to search */
    @Input() selectAllLabel: string = 'All'; /* in dropdown first column for all */
    @Input() entityList: any = []; /* filter list */
    @Input() view: string = 'name'; /* values visible to user in dropdown */
    @Input() value: string = 'keyID'; /* value that gets passes to form control */
    @Input() type: 'mono' | 'multi'; /* type of select accepts values: mono/multi */
    @Input() selectFC: FormControl; /* formcontrol for filter select */        
    @Input() resetFlag: boolean = false /*reset all filter */

    @Output() mono: EventEmitter<any> = new EventEmitter(); /* emits selected value for single select */
    @Output() multi: EventEmitter<any> = new EventEmitter(); /* emits selected value for multiple select */
    @Output() selected: EventEmitter<any> = new EventEmitter(); /* output for selected object for chip creation */


    all_entities_length: number = 0;

    filterFC: FormControl = new FormControl();

    init: boolean = true;
    all_entities_value: any[] = [];
    selected_entities: Set<any> = new Set<any>();

    prev;
    multiFilterApplied: boolean = false;

    searchUtil: MatSelectSearchService = new MatSelectSearchService(this.searchBy);;

    constructor() { }

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        if(changes.searchBy) {
            this.searchUtil.searchBy = this.searchBy;
        }
        if ((changes?.entityList) || (changes?.resetFlag && !changes.resetFlag.firstChange)) {
            this.addAllEntities();
        }
    }

    addAllEntities() {
        if (this.entityList != null && this.entityList != undefined && this.entityList.length > 0) {
            if (this.type == 'multi') {
                this.all_entities_length = this.entityList.length;
                this.all_entities_value = ['all'];

                this.entityList.forEach(entity => {
                    this.selected_entities.add(entity)
                    this.all_entities_value.push(entity[this.value])
                });

                this.selectFC.patchValue(this.all_entities_value);
            }

            this.searchUtil.entityArr = this.entityList;
            this.searchUtil.createSubscription();
        }
    }

    selectionChange(value) { this.mono.emit(value); }
    selectedEntity(entity) { this.selected.next(entity); }

    resetOnNoChange(event) {
        if (event) {
            this.prev = this.selectFC.value;
            this.multiFilterApplied = false;
        } else {
            if (this.prev != this.selectFC.value && !this.multiFilterApplied) {
                this.selectFC.patchValue(this.prev, { onlySelf: true });
            }
        }
    }

    selectEntity(entity /* entity: json */) {
        if (!this.selected_entities.delete(entity)) {
            this.selected_entities.add(entity);
        }

        const k = this.selectFC.value.indexOf('all');
        if (k > -1) {
            if (this.selectFC.value.length > this.all_entities_length) {
                this.selectFC.patchValue([]);
            } else if (this.selectFC.value.length == this.all_entities_length) {
                this.selectFC.value.splice(k, 1);
                this.selectFC.patchValue(this.selectFC.value);
            } else {
                this.selectFC.patchValue(this.all_entities_value);
            }
        } else {
            if (this.selectFC.value.length == this.all_entities_length) {
                this.selectFC.patchValue(this.all_entities_value);
            }
        }
    }

    applyFilter() {
        if (this.selectFC.value.length == 0) return;

        this.multiFilterApplied = true;
        this.multi.emit(this.selectFC.value);
        this.selected.next(this.selected_entities);
    }

    selectAllEntities() {
        if (!this.selectFC.value.includes('all') && this.selectFC.value.length > 0) {
            this.selectFC.reset([]);
            this.selected_entities.clear();
            return;
        }

        this.selectFC.patchValue(this.all_entities_value);
        this.entityList.forEach(entity => this.selected_entities.add(entity));

    }
}
