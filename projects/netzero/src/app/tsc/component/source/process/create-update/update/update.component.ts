import { Component, OnInit, ViewChild } from '@angular/core';

import {
    FormArray,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { isEqual } from 'lodash';
import { cloneDeep } from 'lodash-es';
import { merge } from 'rxjs';

import { ProcessM } from '@carbon/model/process.model';
import { PROCESS_INPUT_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';

import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
import { InvalidForm, LookupValueM } from '@library/tsc-common';

import { FormService } from '../create-update-form.service';

import { SharedComponent } from '../_shared/shared.component';

import { ProductAndServiceService } from '@netzero/service/product-and-service.service';

import { FuelController } from '@carbon/controller/fuel.controller';
import { ProcessController } from '@carbon/controller/process.controller';
import { CustomFuelController } from '@netzero/controller/cutom-fuel.controller';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
    PROCESS_INPUT_ENUM = PROCESS_INPUT_ENUM;
    PROCESS_OUTPUT_ENUM = PROCESS_OUTPUT_ENUM;

    standardFuel: any;

    products
    fuel: any;

    input: LookupValueM[];
    output: LookupValueM[];
    processes: any;

    currentOrgID;
    processFG: FormGroup;

    isEqual: boolean = true;
    initialObject: any;
    initialCustomFuel: any;
    initialStandardFuel: any;

    @ViewChild(SharedComponent) process: SharedComponent;

    constructor(
        storageService: StorageService,
        activatedRoute: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private productService: ProductAndServiceService,
        private fuelController: FuelController,
        private processController: ProcessController,
        private processFormService: FormService,
        private customFuelController: CustomFuelController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
        activatedRoute.params.subscribe(params => this.processID = params['processID']);
    }

    processID: number;
    async ngOnInit(): Promise<any> {
        this.processFGInit();
        await this.getAllNecessaryValues();
    }

    processFGInit() {
        this.processFG = this.formBuilder.group({
            name: [, [Validators.required]],
            description: [],
            dataInputField: [, [Validators.required]],
            isCBAMProcess: [, Validators.required],
            input: this.formBuilder.array([]),
            output: this.formBuilder.array([]),
        });
    }

    getProcessByID(processID: number) {
        this.processController.getProcessByID(this.currentOrgID, processID)
            .subscribe((process: ProcessM) => {
                this.patchProcess(process);
            });
    }

    get inputFA() {
        return this.processFG.get('input') as FormArray;
    }

    get outputFA() {
        return this.processFG.get('output') as FormArray;
    }

    patchProcess(process) {
        this.processFG.patchValue(process);
        let inputs: any[] = process.input;

        let have_fuel_input: boolean = false;

        if (process.isCBAMProcess) {
            for (let input of inputs) {
                let formGroup: FormGroup = null;
                let type_key_id: string = input.type.keyID;
                if (type_key_id == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
                    let entities: any[] = (input.entities as any[]).slice();
                    let entitySource: any[] = (input.entitySource as any[]).slice();
                    entities.forEach((entity, index) => {
                        let entity_list = entities.slice(index);
                        let entity_source_list = entitySource.filter(es => es.entityID == entity.id);
                        formGroup = this.processFormService.patchAndGetInputFG(input, entity_list, entity_source_list, this.getOutputList(type_key_id), this.getOptionList('INPUT', type_key_id));
                        this.inputFA.push(formGroup);
                    });
                } else {
                    formGroup = this.processFormService.patchAndGetInputFG(input, input.entities, input.entitySource, this.getInputList(type_key_id), this.getOptionList('INPUT', type_key_id));
                    this.inputFA.push(formGroup);
                }

                if (type_key_id == PROCESS_INPUT_ENUM.FUEL) {
                    have_fuel_input = true;
                    this.process.initFuelControls(this.fuel, this.standardFuel);

                    let custom_fuel_ids = input.entities.filter((fuel) => !fuel.isStandard).map((fuel) => fuel.id);
                    let standard_fuel_ids = input.entities.filter((fuel) => fuel.isStandard).map((fuel) => fuel.id);

                    this.process.customFuelFC.patchValue(custom_fuel_ids);
                    this.process.standardFuelFC.patchValue(standard_fuel_ids);
                }
            }

            let outputs: any[] = process.output;
            for (let output of outputs) {
                let formGroup: FormGroup;
                let type_key_id: string = output.type.keyID;

                if (type_key_id == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT || type_key_id == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT) {
                    let entities: any[] = (output.entities as any[]).slice();
                    let entitySource: any[] = (output.entitySource as any[]).slice();
                    entities.forEach((entity, index) => {
                        let entity_list = entities.slice(index);
                        let entity_source_list = entitySource.filter(es => es.entityID == entity.id);
                        formGroup = this.processFormService.patchAndGetOutputFG(output, entity_list, entity_source_list, this.getOutputList(type_key_id), this.getOptionList('OUTPUT', type_key_id));
                        this.outputFA.push(formGroup);
                    });
                } else {
                    formGroup = this.processFormService.patchAndGetOutputFG(output, output.entities, output.entitySource, this.getOutputList(type_key_id), this.getOptionList('OUTPUT', type_key_id));
                    this.outputFA.push(formGroup);
                }

            }
        }

        this.initialObject = this.processFG.getRawValue();
        if (have_fuel_input) {
            this.initialCustomFuel = this.process.customFuelFC.value;
            this.initialStandardFuel = this.process.standardFuelFC.value;
            merge(
                this.processFG.valueChanges,
                this.process.customFuelFC.valueChanges,
                this.process.standardFuelFC.valueChanges)
                .subscribe(() => {
                    this.isEqual =
                        isEqual(this.initialObject, this.processFG.getRawValue()) &&
                        isEqual(this.initialCustomFuel, this.process.customFuelFC.value) &&
                        isEqual(this.initialStandardFuel, this.process.standardFuelFC.value);
                });
        } else {
            this.processFG.valueChanges.subscribe(() => {
                this.isEqual = isEqual(this.initialObject, this.processFG.getRawValue());
            });
        }
    }

    getInputList(typeKeyID): any[] {
        let inputTypeList;
        let optionList: any;
        if (typeKeyID == PROCESS_INPUT_ENUM.FUEL) {
            // inputTypeList = this.fuel.map(f => f);
        } else if (
            typeKeyID == PROCESS_INPUT_ENUM.RAW_MATERIAL ||
            typeKeyID == PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT ||
            typeKeyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
            inputTypeList = this.products.filter(p => p.productCategory.find(c => c.keyID == typeKeyID));

            if (typeKeyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
                let inputs: any = this.input.find(i => i.keyID == typeKeyID);
                optionList = inputs.source;
            }
        } else {
            let input: any = this.input.find(i => i.keyID == typeKeyID);
            inputTypeList = input.source;
        }

        return inputTypeList;
    }

    getOutputList(typeKeyID): any[] {
        let outputTypeList;
        if (typeKeyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT || typeKeyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT) {
            outputTypeList = this.products.filter(p => p.productCategory.find(c => c.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT));
        } else if (
            typeKeyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
            typeKeyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT) {
            outputTypeList = this.products.filter(p => p.productCategory.find(c => c.keyID == typeKeyID));
        } else if (typeKeyID == PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE) {
            outputTypeList = this.products.filter(p => p.productCategory.some(c => c.keyID == typeKeyID));
        } else if (typeKeyID == PROCESS_OUTPUT_ENUM.PROCESS_EMISSIONS) {
            outputTypeList = this.processes;
        } else {
            let output: any = this.output.find(o => o.keyID == typeKeyID);
            outputTypeList = output.source;
        }

        return outputTypeList;
    }

    getOptionList(type: 'INPUT' | 'OUTPUT', typeKeyID): any[] {
        let optionList: any = null;

        if (type == 'INPUT') {
            if (typeKeyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
                let inputs: any = this.input.find(i => i.keyID == typeKeyID);
                optionList = inputs.source;
            }
        } else {
            if (typeKeyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT || typeKeyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT) {

                let outputs: any = this.output.find(i => i.keyID == typeKeyID);
                optionList = outputs.source;
            }
        }
        return optionList;
    }

    async getAllNecessaryValues() {
        [
            this.products,
            this.input,
            this.output,
            this.fuel,
            this.processes,
            this.standardFuel
        ] = <any[]>await Promise.all([
            this.productService.getProductList(this.currentOrgID),
            this.processController.getProcessInputs().toPromise(),
            this.processController.getProcessOutputs().toPromise(),
            this.customFuelController.getCustomFuels(this.currentOrgID).toPromise(),
            this.processController.getProcessList(this.currentOrgID).toPromise(),
            this.fuelController.getFuelStationaryCombustion().toPromise()
        ]);
        this.getProcessByID(this.processID);
    }

    async getProducts() {
        this.products = await this.productService.getProductList(this.currentOrgID);
    }

    updateProcess() {
        if(this.process.haveFuelInput) {
            if (this.processFG.invalid || (this.process.customFuelFC.invalid && this.process.standardFuelFC.invalid)) {
                this.processFG.markAllAsTouched();
                this.process.customFuelFC.markAsTouched();
                console.error('invalid form - ', this.processFG);
    
                this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
                return;
            }    
        } else {
            if (this.processFG.invalid) {
                this.processFG.markAllAsTouched();
                console.error('invalid form - ', this.processFG);
    
                this.toastrService.error(InvalidForm.INVALID_FORM_MESSAGE);
                return;
            }
        }

        let process = cloneDeep(this.processFG.getRawValue());

        this.processFormService.createValueJson(process, this.process);
        this.processController.updateProcess(this.currentOrgID, this.processID, process)
            .subscribe((res) => {
                /* TODO restore redirect to view page */
                // this.router.navigate(['/source/process', this.processID, 'view']);
                this.router.navigate(['/source/process/page']);
            });
    }

}
