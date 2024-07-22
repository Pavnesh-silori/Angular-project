import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import {
    FormArray,
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import { forkJoin } from 'rxjs';
import { cloneDeep } from 'lodash-es';

import {
    PROCESS_INPUT_ENUM,
    PROCESS_OUTPUT_ENUM
} from '@netzero/enum/process.enum';

import { ProductAndService } from '@netzero/model/product-service.model';
import { ProductAndServiceService } from '@netzero/service/product-and-service.service';

// library
import { FuelController } from '@carbon/controller/fuel.controller';
import { ProcessController } from '@carbon/controller/process.controller';
import { Router } from '@angular/router';
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { InvalidForm, LookupValueM } from '@library/tsc-common';
import { SharedComponent } from '../_shared/shared.component';
import { FormService } from '../create-update-form.service';
// /library

import { CustomFuelController } from '@netzero/controller/cutom-fuel.controller'

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    PROCESS_INPUT_ENUM = PROCESS_INPUT_ENUM;
    PROCESS_OUTPUT_ENUM = PROCESS_OUTPUT_ENUM;

    currentOrgID: any;

    fuel: any;
    products: ProductAndService[];

    input: LookupValueM[];
    output: LookupValueM[];

    processes: any;
    standardFuel: any;

    isSubmitClicked: boolean = false;

    processFA: FormArray = new FormArray([]);
    @ViewChildren(SharedComponent) processList: QueryList<SharedComponent>;

    constructor(
        storageService: StorageService,
        private router: Router,
        private formBuilder: FormBuilder,
        private productService: ProductAndServiceService,
        private toastrService: ToastrService,
        private processFormService: FormService,
        private fuelController: FuelController,
        private processController: ProcessController,
        private customFuelController: CustomFuelController,
    ) {
        this.currentOrgID = storageService.getStorage(['currentOrgID']);
    }

    ngOnInit(): void {
        this.processFA.push(this.processFG);

        this.getAllNecessaryValues();
    }

    getAllNecessaryValues() {
        forkJoin([
            this.productService.getProductList(this.currentOrgID),
            this.processController.getProcessInputs(),
            this.processController.getProcessOutputs(),
            this.customFuelController.getCustomFuels(this.currentOrgID),
            this.processController.getProcessList(this.currentOrgID),
            this.fuelController.getFuelStationaryCombustion()
        ]).subscribe((res: any[]) => {
            this.products = res[0];
            this.input = res[1];
            this.output = res[2];
            this.fuel = res[3];
            this.processes = res[4];
            this.standardFuel = res[5];
        });
    }

    async getProducts() {
        this.products = await this.productService.getProductList(this.currentOrgID);
    }

    readonly dataInputFieldDefault: string = 'N/A';
    get processFG() {
        let processFG = this.formBuilder.group({
            name: [, [Validators.required]],
            description: [],
            dataInputField: [this.dataInputFieldDefault /* TODO */, [Validators.required]],
            isCBAMProcess: [false, Validators.required],
            input: this.formBuilder.array([]),
            output: this.formBuilder.array([]),
        });

        processFG.get('input').disable();
        processFG.get('output').disable();

        return processFG;
    }

    createProcess() {
        this.processFA.push(this.processFG);
    }

    removeProcess(index) {
        this.processFA.removeAt(index);
    }

    haveIO(fg: FormGroup): boolean {
        let input: FormArray = fg.get('input') as FormArray;
        let output: FormArray = fg.get('output') as FormArray;
        return (input.controls.length > 0 && output.controls.length > 0);
    }

    scrollToView(index) {
        setTimeout(() =>
            document.getElementById(index).scrollIntoView({
                behavior: "smooth",
                block: "center"
            }));
    }

    saveProcesses() {
        if(this.processFA.controls.length == 0) {
            let toast = this.toastrService.getToastStatus('error');
            this.toastrService.openToast(toast.title, 'Create atleast one process.', toast.color);
            return;
        }

        this.isSubmitClicked = true;

        if (this.processFA.invalid) {
            console.log('invalid form - ', this.processFA);
            this.processFA.markAllAsTouched();            
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        let first_invalid_io_process: number = 0;
        if (!this.processFA.controls.every((fg: FormGroup, index) => {
            if (fg.get('isCBAMProcess').value) {
                if (!this.haveIO(fg)) {
                    first_invalid_io_process = index;
                    return false;
                }
            }
            return true;
        })) {
            this.scrollToView(first_invalid_io_process);
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, 'Some CBAM process lack proper input/output mapping', ToastrColor.ERROR);
            return;
        }

        let processes = cloneDeep(this.processFA.value);
        processes.forEach((process, i) => {
            this.processFormService.createValueJson(process, this.processList.toArray()[i])
        });

        this.processController.createProcess(this.currentOrgID, processes)
            .subscribe((res) => {
                this.router.navigate(['/source/process/page']);
            });
    }
}
