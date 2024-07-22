import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { CreateUpdateComponent } from '@netzero/component/source/product-and-service/create-update/create-update.component';
import {
    PROCESS_INPUT_ENUM,
    PROCESS_OUTPUT_ENUM
} from '@netzero/enum/process.enum';

import { FormService } from '../create-update-form.service';

// library
import { DialogResponseEnum, FormAction, FormErrorEnum, MaterialFormFieldAppearance, MatSelectSearchService, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
// /library

@Component({
    selector: 'app-process',
    templateUrl: './shared.component.html',
    styleUrls: ['../create/create.component.scss']
})
export class SharedComponent implements OnInit {
    FormErrorEnum = FormErrorEnum;
    MessageAlertTypeEnum = MessageAlertTypeEnum;
    MessageAlertIconEnum = MessageAlertIconEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    PROCESS_INPUT_ENUM = PROCESS_INPUT_ENUM;
    PROCESS_OUTPUT_ENUM = PROCESS_OUTPUT_ENUM;

    maxLength: number = 2000;

    subTypeList: any;
    outputSubTypeList: any;
    subInputMethods: any[] = [];

    @Input() delete: boolean = true;
    @Input() processFG: FormGroup;

    @Input() productID: any[] = [];
    @Input() products: any[] = [];
    @Input() processes: any[] = [];

    @Input() input: any[] = [];
    @Input() output: any[] = [];
    @Input() fuel: any[] = [];
    @Input() standardFuel: any[] = [];

    @Output() entitiyCreated: EventEmitter<string> = new EventEmitter();

    @Output() focused: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<boolean> = new EventEmitter();

    productSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    customFuelFC: FormControl;
    standardFuelFC: FormControl;

    customFuelSubscription: Subscription;
    standardFuelSubscription: Subscription;
    
    fuelSearchUtil = {
        customFuelSearch: new MatSelectSearchService(['name']),
        standardFuelSearch: new MatSelectSearchService(['name'])
    }

    haveFuelInput: boolean = false;

    constructor(
        private dialog: MatDialog,
        private formService: FormService,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes.products?.firstChange) {
            this.updateSubList();
        }
    }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.isCBAMProcessAC.valueChanges.subscribe((isCBAMProcess) => {
            if (isCBAMProcess) {
                this.inputFA.enable();
                this.inputFA.controls.forEach((input: FormGroup) => this.addValidators(input, input.get('typeKeyID').value));

                this.outputFA.enable();
                this.outputFA.controls.forEach((output: FormGroup) => this.addValidators(output, output.get('typeKeyID').value));
            } else {
                this.inputFA.disable();
                this.outputFA.disable();
            }
        });
    }

    removeValidators(group: FormGroup) {
        for (let control of Object.keys(group.controls)) {
            group.get(control).clearValidators();
            group.get(control).updateValueAndValidity();
        }
    }

    /* TODO_PN correct this code runs for each control while adding validation to typeID */
    addValidators(group: FormGroup, key_id: string) {
        let valid_fields = ['typeID'];

        switch (key_id) {
            case PROCESS_INPUT_ENUM.HEAT:
            case PROCESS_INPUT_ENUM.ELECTRICITY:
            case PROCESS_OUTPUT_ENUM.HEAT:
            case PROCESS_OUTPUT_ENUM.ELECTRICITY:
            case PROCESS_OUTPUT_ENUM.WASTE_GAS_STREAM:
                valid_fields.push('entitySourceIDs');
                break;
            case PROCESS_INPUT_ENUM.FUEL:
            case PROCESS_INPUT_ENUM.RAW_MATERIAL:
            case PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT:
            case PROCESS_OUTPUT_ENUM.CO_PRODUCT:
            case PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT:
            case PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE:
            case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
                valid_fields.push('entityIDs');
                break;
            case PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT:
                valid_fields.push('entityIDs', 'entitySourceIDs');
                break;
            default:
                console.error('unidentified validation case encountered - ', key_id);
        }

        for (let control of valid_fields) {
            group.get(control).addValidators([Validators.required]);
            group.get(control).updateValueAndValidity();
        }
    }

    getSubTypeList(index) {
        return this.inputFA.at(index).value.subType;
    }

    getSearchUtil(index, type: 'INPUT' | 'OUTPUT') {
        if (type == 'INPUT')
            return this.inputFA.at(index).value.searchUtil;
        else
            return this.outputFA.at(index).value.searchUtil;
    }

    getOptionList(index, type: 'INPUT' | 'OUTPUT') {
        if (type == 'INPUT')
            return this.inputFA.at(index).value.optionList;
        else
            return this.outputFA.at(index).value.optionList;
    }

    electricityOutputSubTypeList: any[];
    getOutputSubTypeList(index): any[] {
        if (this.outputFA.at(index).value.typeKeyID == PROCESS_OUTPUT_ENUM.ELECTRICITY) {
            if (this.electricityOutputSubTypeList == null)
                this.electricityOutputSubTypeList = this.outputFA.at(index).value.subType;
            this.outputFA.at(index).patchValue({ entitySourceIDs: [this.electricityOutputSubTypeList[0]['id']] });
            return this.electricityOutputSubTypeList;
        }

        return this.outputFA.at(index).value.subType;
    }

    get isCBAMProcessAC(): AbstractControl {
        return this.processFG.get('isCBAMProcess') as AbstractControl;
    }

    get inputFA(): FormArray {
        return this.processFG.get('input') as FormArray;
    }

    get outputFA(): FormArray {
        return this.processFG.get('output') as FormArray;
    }

    public getTypeKeyID(type, index: number) {
        if (type == 'INPUT')
            return this.inputFA.get(`${index}`).value.typeKeyID;
        else
            return this.outputFA.get(`${index}`).value.typeKeyID;
    }

    public isStandard(index: number) {
        return this.inputFA.get(`${index}`).value.isStandard;
    }

    selectedFuelNames: any[] = [];
    get fuelNames() {
        if (this.selectedFuelNames.length > 3) {
            return this.selectedFuelNames.slice(0, 3).join(', ').toString();
        } else {
            return this.selectedFuelNames.join(', ').toString();
        }
    }

    get fuelRequiredError() {
        if (this.customFuelFC.invalid && this.standardFuelFC.invalid && (this.customFuelFC.touched || this.standardFuelFC.touched))
            return true;
        return false;
    }

    initFuelControls(customFuel, standardFuel) {
        this.customFuelFC = new FormControl([], [Validators.required]);
        this.customFuelSubscription = this.customFuelFC.valueChanges.subscribe((value: any[]) => {
            this.selectedFuelNames = this.getFuelNames(this.standardFuelFC.value, 'STANDARD');

            if (value.length > 0) {
                let fuels: any[] = [];
                value.forEach(custom_fuel_id => {
                    fuels.push(this.fuel.find(fuel => fuel.id == custom_fuel_id));
                });
                fuels.map(fuel => this.selectedFuelNames.push(fuel.name));
            }
        });
        this.standardFuelFC = new FormControl([], [Validators.required]);
        this.standardFuelSubscription = this.standardFuelFC.valueChanges.subscribe((value: any[]) => {
            this.selectedFuelNames = this.getFuelNames(this.customFuelFC.value, 'CUSTOM');
            if (value.length > 0) {
                let fuels: any[] = [];
                value.forEach(standard_fuel_id => {
                    fuels.push(this.standardFuel.find(fuel => fuel.id == standard_fuel_id));
                });
                fuels.map(fuel => this.selectedFuelNames.push(fuel.name));
            }
        });

        this.fuelSearchUtil.customFuelSearch.entityArr = customFuel;
        this.fuelSearchUtil.customFuelSearch.createSubscription();
        this.fuelSearchUtil.standardFuelSearch.entityArr = standardFuel;
        this.fuelSearchUtil.standardFuelSearch.createSubscription();
    }


    getFuelNames(values: any[], fuelType: 'CUSTOM' | 'STANDARD'): string[] {
        if (values == null) {
            return [];
        }
        let selectedFuelNames: string[] = [];
        if (fuelType == 'CUSTOM') {
            let fuels: any[] = [];
            values.forEach(custom_fuel_id => {
                fuels.push(this.fuel.find(fuel => fuel.id == custom_fuel_id));
            });
            fuels.map(fuel => selectedFuelNames.push(fuel.name));

        } else {
            let fuels: any[] = [];
            values.forEach(standard_fuel_id => {
                fuels.push(this.standardFuel.find(fuel => fuel.id == standard_fuel_id));
            });
            fuels.map(fuel => { selectedFuelNames.push(fuel.name) });
        }
        return selectedFuelNames;
    }

    addInput(inputType, isStandard?) {
        let inputTypeList;
        let optionList: any;
        if (inputType.keyID == PROCESS_INPUT_ENUM.FUEL) {
            this.haveFuelInput = true;

            this.initFuelControls(this.fuel, this.standardFuel);
            if (isStandard == undefined) {
                isStandard = false;
            }
        } else if (
            inputType.keyID == PROCESS_INPUT_ENUM.RAW_MATERIAL ||
            inputType.keyID == PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT ||
            inputType.keyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
            inputTypeList = this.products.filter(p => p.productCategory.find(c => c.keyID == inputType.keyID));

            if (inputType.keyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) {
                let inputs = this.input.find(i => i.keyID == inputType.keyID);
                optionList = inputs.source;
            }
        } else {
            let input = this.input.find(i => i.keyID == inputType.keyID);
            inputTypeList = input.source;
        }

        let input_fg = this.formService.getInputFG(inputType, isStandard, inputTypeList, optionList);
        this.inputFA.push(input_fg);
    }

    ioAlreadyAdded = (type: 'INPUT' | 'OUTPUT', typekeyID: string) => {
        if (type == 'INPUT') {
            if (typekeyID == PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT) return false;

            let inputTypes: any[] = this.inputFA.value.map(f => f['typeKeyID']);
            return inputTypes.includes(typekeyID);
        } else {
            let outputTypes: any[] = this.outputFA.value.map(f => f['typeKeyID']);
            if (
                typekeyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT ||
                typekeyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT
            ) {
                return false;
            } else if (typekeyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT || typekeyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT) {
                return outputTypes.includes(PROCESS_OUTPUT_ENUM.CO_PRODUCT) || outputTypes.includes(PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT);
            }
            return outputTypes.includes(typekeyID);
        }
    }

    getTooltipInfo = (type: 'INPUT' | 'OUTPUT', typekeyID: string) => {
        if (type == 'OUTPUT') {
            if (typekeyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT || typekeyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT) {
                let outputTypes: any[] = this.outputFA.value.map(f => f['typeKeyID']);
                if (outputTypes.includes(PROCESS_OUTPUT_ENUM.CO_PRODUCT)) {
                    if (typekeyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT) {
                        return 'Co-product is already added to output list.';
                    } else {
                        return `Cannot add ${PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT} as ${PROCESS_OUTPUT_ENUM.CO_PRODUCT} is already added to output list. You can either add ${PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT} or ${PROCESS_OUTPUT_ENUM.CO_PRODUCT}.`
                    }
                } else {
                    if (typekeyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT) {
                        return `${PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT} is already added to output list.`;
                    } else {
                        return `Cannot add ${PROCESS_OUTPUT_ENUM.CO_PRODUCT} as ${PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT} is already added to output list. You can either add ${PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT} or ${PROCESS_OUTPUT_ENUM.CO_PRODUCT}.`
                    }
                }
            } else {
                return 'Output type already added to list.'
            }
        } else {
            return 'Input type already added to list.'
        }
    }

    addOutput(outputType) {
        let optionList;
        let outputTypeList;
        if (outputType.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT || outputType.keyID == PROCESS_OUTPUT_ENUM.CO_PRODUCT) {
            outputTypeList = this.products.filter(p => p.productCategory.find(c => c.keyID == PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT));
        } else if (
            outputType.keyID == PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT ||
            outputType.keyID == PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT) {
            outputTypeList = this.products.filter(p => p.productCategory.find(c => c.keyID == outputType.keyID));

            let outputs = this.output.find(i => i.keyID == outputType.keyID);
            optionList = outputs.source;
        } else if (outputType.keyID == PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE) {
            outputTypeList = this.products.filter(p => p.productCategory.some(c => c.keyID == outputType.keyID));
        } else if (outputType.keyID == PROCESS_OUTPUT_ENUM.PROCESS_EMISSIONS) {
            outputTypeList = this.processes;
        } else {
            let output = this.output.find(i => i.keyID == outputType.keyID);
            outputTypeList = output.source;
        }

        this.outputFA.push(this.formService.getOutputFG(outputType, outputTypeList, optionList));
    }

    updateSubList() {
        this.inputFA.controls.forEach(entity => this.filterAndSetEntities(entity));
        this.outputFA.controls.forEach(entity => this.filterAndSetEntities(entity));
    }

    filterAndSetEntities(entity) {
        let type_key_id = entity.value.typeKeyID;
        let entityArr = null;

        switch (entity.value.typeKeyID) {
            case PROCESS_INPUT_ENUM.RAW_MATERIAL:
            case PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT:
            case PROCESS_INPUT_ENUM.PRECURSOR_PRODUCT:
                entityArr = this.products.filter(p => p.productCategory.find(pc => pc.keyID == type_key_id));
                break;
            case PROCESS_OUTPUT_ENUM.PRECURSOR_PRODUCT:
            case PROCESS_OUTPUT_ENUM.INTERMEDIATE_PRODUCT:
            case PROCESS_OUTPUT_ENUM.BY_PRODUCT_AND_WASTE:
            case PROCESS_OUTPUT_ENUM.CO_PRODUCT:
            case PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT:
                if (type_key_id == PROCESS_OUTPUT_ENUM.CO_PRODUCT) {
                    type_key_id = PROCESS_OUTPUT_ENUM.FINISHED_PRODUCT;
                }
                entityArr = this.products.filter(p => p.productCategory.find(pc => pc.keyID == type_key_id));
                break;
        }

        let product_search_util: MatSelectSearchService = entity.get('searchUtil').value;
        this.updateSearchUtil(entityArr, product_search_util);
    }

    updateSearchUtil(entityArr: any[], searchUtil: MatSelectSearchService) {
        searchUtil.entityArr = entityArr;
        searchUtil.filteredEntities.next(entityArr);
    }

    removeInput(index) {
        if (this.inputFA.get(`${index}`)['controls'].typeKeyID.value == PROCESS_INPUT_ENUM.FUEL) {
            this.haveFuelInput = false;

            this.selectedFuelNames = [];
            this.customFuelSubscription.unsubscribe();
            this.standardFuelSubscription.unsubscribe();
        }
        this.inputFA.removeAt(index);
    }

    removeOutput(index) {
        this.outputFA.removeAt(index);
    }

    removeProcess() {
        this.remove.emit();
    }

    @Input() isSubmitClicked: boolean = false;
    isValidCBAMProcess(): boolean {
        if (this.isCBAMProcessAC.value) return (!this.isSubmitClicked || (this.inputFA.controls.length > 0 && this.outputFA.controls.length > 0));
        else return true;
    }

    charactersRemainingFn = (fg: FormGroup): number => {
        let description = fg.get('description').value;
        if (description) return (this.maxLength - description.length);
        else return this.maxLength;
    }

    createProduct() {
        let dialogRef;
        dialogRef = this.dialog.open(CreateUpdateComponent, {
            data: {
                action: FormAction.CREATE,
                source: 'Product'
            },
            minWidth: '50vw',
            maxWidth: '50vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogResponseEnum.SUCCESS) {
                    this.entitiyCreated.emit('PRODUCT');
                }
            })
    }

    errorHandling = (control: string, error: string) => {
        return this.processFG.get(control)?.hasError(error);
    }

    errorHandlingInputFA = (index: number, control: string, error: string) => {
        return this.inputFA.get(`${index}.${control}`)?.hasError(error);
    }

    errorHandlingOutputFA = (index: number, control: string, error: string) => {
        return this.outputFA.get(`${index}.${control}`)?.hasError(error);
    }
}
