import { Injectable } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { PROCESS_INPUT_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { MatSelectSearchService } from '@library/tsc-common';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    getInputFG(inputMehtod?, isStandard?, subList?, optionList?) {

        let search_utility = new MatSelectSearchService(['name']);
        search_utility.entityArr = subList;
        search_utility.createSubscription();

        let key_id = inputMehtod ? inputMehtod.keyID : null;
        let fg = this.formBuilder.group({
            typeID: [inputMehtod ? inputMehtod.id : null, [Validators.required]],
            typeKeyID: [inputMehtod ? inputMehtod.keyID : null],
            typeName: [inputMehtod ? inputMehtod.name : null],
            isStandard: [isStandard],

            subType: [subList ?? null],
            optionList: [optionList ?? null],

            searchUtil: [search_utility],

            entityIDs: [, key_id != null && (
                key_id == PROCESS_INPUT_ENUM.RAW_MATERIAL ||
                key_id == PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT ||
                key_id == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) ? [Validators.required] : null],
            entitySourceIDs: [, key_id != null && (
                key_id == PROCESS_INPUT_ENUM.HEAT ||
                key_id == PROCESS_INPUT_ENUM.ELECTRICITY ||
                key_id == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) ? [Validators.required] : null],
        });

        return fg;
    }

    getOutputFG(outputMethod?, subList?, optionList?) {

        let search_utility = new MatSelectSearchService(['name']);
        search_utility.entityArr = subList;
        search_utility.createSubscription();

        let key_id = outputMethod ? outputMethod.keyID : null;
        let fg = this.formBuilder.group({
            typeID: [outputMethod ? outputMethod.id : null, [Validators.required]],
            typeKeyID: [outputMethod ? outputMethod.keyID : null],
            typeName: [outputMethod ? outputMethod.name : null],
            isStandard: [],

            subType: [subList ?? null],
            optionList: [optionList ?? null],

            searchUtil: [search_utility],
            entityIDs: [, key_id != null && (
                key_id == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT ||
                key_id == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                key_id == PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE ||
                key_id == PROCESS_OUTPUT_ENUM.CO_PRODUCT ||
                key_id == PROCESS_OUTPUT_ENUM.PROCESS_EMISSIONS) ? [Validators.required] : null],
            entitySourceIDs: [, key_id != null && (
                key_id == PROCESS_OUTPUT_ENUM.ELECTRICITY ||
                key_id == PROCESS_OUTPUT_ENUM.HEAT ||
                key_id == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                key_id == PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM) ? [Validators.required] : null],
        });

        return fg;
    }

    patchAndGetInputFG(input, entities: any[], entitySources: any[], subList, optionList?) {
        let search_utility = new MatSelectSearchService(['name']);
        search_utility.entityArr = subList;
        search_utility.createSubscription();

        let entityIDs = entities != null ? entities.map(e => e.id) : null;
        let entitySourceIDs = entitySources != null ? entitySources.map(e => e.id) : null;
        let type = input.type;
        let key_id = type.keyID;
        return this.formBuilder.group({
            typeID: [type.id, [Validators.required]],
            typeKeyID: [key_id],
            typeName: [type.name],
            isStandard: [],

            subType: [subList],
            optionList: [optionList],

            searchUtil: [search_utility],

            entityIDs: [
                (key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT) ? entityIDs[0] : entityIDs,
                (
                    key_id == PROCESS_INPUT_ENUM.RAW_MATERIAL ||
                    key_id == PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT ||
                    key_id == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) ? [Validators.required] : null
            ],
            entitySourceIDs: [entitySourceIDs,
                (
                    key_id == PROCESS_INPUT_ENUM.HEAT ||
                    key_id == PROCESS_INPUT_ENUM.ELECTRICITY ||
                    key_id == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) ? [Validators.required] : null
            ],
        });
    }

    patchAndGetOutputFG(output, entities: any[], entitySources: any[], subList, optionList?) {
        let search_utility = new MatSelectSearchService(['name']);
        search_utility.entityArr = subList;
        search_utility.createSubscription();

        let type = output.type;
        let key_id = type.keyID;

        let entityIDs = entities != null? entities.map(e => e.id) : null;
        let entitySourceIDs = entitySources != null? entitySources.map(e => e.id) : null;

        return this.formBuilder.group({
            typeID: [type.id, [Validators.required]],
            typeKeyID: [key_id],
            typeName: [type.name],
            isStandard: [],

            subType: [subList],
            optionList: [optionList],

            searchUtil: [search_utility],
            entityIDs: [
                (key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT) ? entityIDs[0] /* for given keys single select is used */ : entityIDs,
                (key_id == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE ||
                    key_id == PROCESS_OUTPUT_ENUM.CO_PRODUCT) ? [Validators.required] : null
            ],
            entitySourceIDs: [entitySourceIDs,
                (
                    key_id == PROCESS_OUTPUT_ENUM.ELECTRICITY ||
                    key_id == PROCESS_OUTPUT_ENUM.HEAT ||
                    key_id == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                    key_id == PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM) ? [Validators.required] : null],
        });
    }

    createValueJson(process, processComponent) {
        let standardFuel;
        let input_includes_fuel: boolean = false;
        if (process.isCBAMProcess) {
            process.input = process.input.map(input => {
                let type_key_id = input.typeKeyID;
                if (input.typeKeyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
                    input.entityIDs = [input.entityIDs];
                }

                if (type_key_id == PROCESS_INPUT_ENUM.FUEL) {
                    input_includes_fuel = true;

                    standardFuel = {
                        typeID: input.typeID,
                        typeKeyID: input.typeKeyID,
                        typeName: input.typeName,
                        isStandard: true,
                        entityIDs: processComponent.standardFuelFC.value,
                        entitySourceIDs: input.entitySourceIDs
                    };

                    return {
                        typeID: input.typeID,
                        typeKeyID: input.typeKeyID,
                        typeName: input.typeName,
                        isStandard: false,
                        entityIDs: processComponent.customFuelFC.value,
                        entitySourceIDs: input.entitySourceIDs
                    }
                } else {
                    return {
                        typeID: input.typeID,
                        typeKeyID: input.typeKeyID,
                        typeName: input.typeName,
                        isStandard: input.isStandard,
                        entityIDs: input.entityIDs,
                        entitySourceIDs: input.entitySourceIDs
                    };
                }
            });

            if (input_includes_fuel) process.input.push(standardFuel);

            process.output = process.output.map(output => {
                let entityIDs = output.entityIDs;
                if (
                    output.typeKeyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
                    output.typeKeyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                    output.typeKeyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT
                ) {
                    entityIDs = [output.entityIDs];
                }

                return {
                    typeID: output.typeID,
                    typeKeyID: output.typeKeyID,
                    typeName: output.typeName,
                    entityIDs: entityIDs,
                    entitySourceIDs: output.entitySourceIDs
                };
            });
        }
    }
}
