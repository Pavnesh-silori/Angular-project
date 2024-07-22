import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PROCESS_INPUT_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { Process, ProcessM } from '@carbon/model/process.model';

import { ActivatedRoute } from '@angular/router';

import { StorageService } from '@library/storage-service';
import { ButtonTooltipEnum, COMMON_CONSTANT, DialogEnum, MATERIAL_CONSTANT } from '@library/tsc-common';

import { cloneDeep } from 'lodash-es';

import { ProcessController } from '@carbon/controller/process.controller';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    DialogEnum = DialogEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;

    COMMON_CONSTANT = COMMON_CONSTANT;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;

    public value_length = 50;

    currentOrgID: any;

    isPageView: boolean = true;

    processID: any;
    process: ProcessM = new Process();

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        @Optional() @Inject(MAT_DIALOG_DATA) data,
        private processController: ProcessController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);

        if (data) {
            this.isPageView = false;
            this.value_length = 40;
            this.processID = data['processID'];

            this.getProcessByID(this.processID);
        } else {
            activatedRoute.params.subscribe(params => {
                this.processID = params['processID']
                this.getProcessByID(this.processID);
            });
        }
    }

    ngOnInit(): void {
    }

    getProcessByID(processID: number) {
        this.processController.getProcessByID(this.currentOrgID, processID)
            .subscribe((process: ProcessM) => {
                this.process = process;
            },
            error => {
                console.error('error in getProcessByID() - ', error);
            });
    }

    formatTooltip(entities: any[]) {
        let viewList = cloneDeep(entities);
        viewList.shift();
        return viewList.map(v => v.name).join('\n');
    }

    public showSource(entity: any[]) {
        let length: number = entity.length;
        return length >= 1 ? `+${--length}` : false;
    }

    entityCount(entity: any[]) {
        let length: number = entity.length;
        return length > 1 ? `+${--length}` : false;
    }

    getValue(entity, type: 'INPUT' | 'OUTPUT') {
        let key_id: string = entity.type.keyID;
        if (type == 'INPUT') {
            switch (key_id) {
                case PROCESS_INPUT_ENUM.HEAT:
                case PROCESS_INPUT_ENUM.ELECTRICITY:
                    return entity.entitySource;
                case PROCESS_INPUT_ENUM.FUEL:
                case PROCESS_INPUT_ENUM.RAW_MATERIAL:
                case PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT:
                case PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT:
                    return entity.entities;
                default:
                    console.error('unidentified key case encountered - ', key_id);
            }
        } else {
            switch (key_id) {
                case PROCESS_OUTPUT_ENUM.HEAT:
                case PROCESS_OUTPUT_ENUM.ELECTRICITY:
                case PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM:
                    return entity.entitySource;
                case PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT:
                case PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE:
                case PROCESS_OUTPUT_ENUM.CO_PRODUCT:
                case PROCESS_OUTPUT_ENUM.PROCESS_EMISSIONS:
                case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
                case PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT:
                    return entity.entities;
                default:
                    console.error('unidentified key case encountered - ', key_id);
            }
        }
    }

    getSource(entity, type: 'INPUT' | 'OUTPUT', entityID?: number) {
        let key_id: string = entity.type.keyID;
        if (type == 'INPUT') {
            switch (key_id) {
                case PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT:
                    return entity.entitySource.filter(es => es.entityID == entityID);
                default:
                    // console.info('unidentified source key case encountered - ', key_id);
                    return [];
            }
        } else {
            switch (key_id) {
                case PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT:
                case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
                    return entity.entitySource.filter(es => es.entityID == entityID);
                default:
                    // console.info('unidentified source key case encountered - ', key_id);
                    return [];
            }
        }
    }

}
