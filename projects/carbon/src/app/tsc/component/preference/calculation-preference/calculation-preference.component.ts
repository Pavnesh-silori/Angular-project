import {
    Component,
    OnInit,
} from '@angular/core';

import {
    FormArray,
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
} from '@angular/forms';

import { SelectionModel } from '@angular/cdk/collections';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';
import { CalculationApproachKeyIDEnum } from '@carbon/enum/calculation-approach.enum';

import { GwpDatasetI } from '@carbon/model/gwp-dataset.model';
import { ConsolidationApproachM } from '@carbon/model/consolidation-approach.model';
import { CalculationApproachI } from '@carbon/model/calculation-approach.model';

import { PreferenceController } from '@carbon/controller/preference.controller';
import { ConsolidationApproachService } from '@carbon/service/consolidation-approach.service';
import { CalculationApproachService } from '@carbon/service/calculation-approach.service';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, ButtonTooltipEnum, COMMON_CONSTANT, FormErrorEnum, InvalidForm, MATERIAL_CONSTANT, MaterialFormFieldAppearance, TABLE_CONSTANT } from '@library/tsc-common';
import { EMISSION_FACTOR_SOUREC_KEYID_ENUM } from '@library/netzero';
// /tsc-library/

@Component({
    selector: 'app-calculation-preference',
    templateUrl: './calculation-preference.component.html',
    styleUrls: ['./calculation-preference.component.scss']
})

export class CalculationPreferenceComponent implements OnInit {
    ActivityKeyIDEnum = ActivityKeyIDEnum;

    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    COMMON_CONSTANT = COMMON_CONSTANT;

    preferenceFG: FormGroup;

    currentOrgID: any;
    preferenceID: any;
    preference: any;
    standardEFRec: any;

    hasPreference: boolean = false;

    consApps = new SelectionModel(true, []);
    gwpDatasetM: GwpDatasetI[];
    consolidationApproach: ConsolidationApproachM[];
    scope2CalculationApproach: CalculationApproachI[];
    selectedEmissionFactorSources: any[] = [];
    selectedEmissionFactorSourceVersions: any[] = [];

    activeLabelKey: string = 'SCOPE1';

    tabs: any = [
        {
            label: 'Scope 1',
            key: 'SCOPE1'
        },
        {
            label: 'Scope 2',
            key: 'SCOPE2'
        },
        {
            label: 'Scope 3',
            key: 'SCOPE3'
        }
    ];

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;

    constructor(
        private formBuilder: FormBuilder,
        private preferenceController: PreferenceController,
        private consolidationApproachService: ConsolidationApproachService,
        private calculationApproachService: CalculationApproachService,

        private stroageService: StorageService,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.stroageService.getStorage('currentOrgID');
        this.preferenceInit();
        this.getGwpDataset();
        this.getOrgPreference();
        this.getConsolidationAppraoches();
        this.getScope2CalculationApproach();
    }

    preferenceInit() {
        this.preferenceFG = this.formBuilder.group({
            gwpDatasetID: [, [Validators.required]],
            scope2CalculationApproachID: [, [Validators.required]],
            consolidationApproachID: [, [Validators.required]],
            orgEFSourcePriority: this.formBuilder.group({
                scope1: this.formBuilder.array([]),
                scope2: this.formBuilder.array([]),
                scope3: this.formBuilder.array([]),
            }),
        });
    }

    get orgEFSourcePriorityFA() {
        return this.preferenceFG.get('orgEFSourcePriority') as FormGroup;
    }
    get scope1Array() {
        return this.orgEFSourcePriorityFA.get('scope1') as FormArray;
    }

    get scope2Array() {
        return this.orgEFSourcePriorityFA.get('scope2') as FormArray;
    }

    get scope3Array() {
        return this.orgEFSourcePriorityFA.get('scope3') as FormArray;
    }

    getGwpDataset() {
        this.preferenceController.getGwpDataset()
            .subscribe((getGwpDatasetRes: any) => {
                this.gwpDatasetM = getGwpDatasetRes;
            },
                error => {
                    console.log('error in getGwpDataset() -', error);
                });
    }

    haveSector(formGroup: FormGroup, activityKeyID: ActivityKeyIDEnum) {
        const sourceKeyID = formGroup.get('emissionFactorSourceKeyID').value;
        if (sourceKeyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES && activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION) return true;
        return false;
    }

    getOrgPreference() {
        // this.orgEFSourcePriorityFA.clear();
        this.preferenceController.getOrgPreference(this.currentOrgID)
            .subscribe(preferenceRes => {
                this.preference = preferenceRes;
                this.preferenceID = this.preference['preferenceID'];

                // for consolidation approach set
                if (this.preferenceID != null) {
                    this.preference['consolidationApproachID'].map(caID => this.consApps.select(caID));
                } else {
                    this.consolidationApproach.map(ca => this.consApps.select(ca['id']));
                }

                //calculation Approach set
                let calApproachID = this.preference['scope2CalculationApproachID'] != null ? this.preference['scope2CalculationApproachID'] :
                    this.scope2CalculationApproach.find(calApproach => calApproach['keyID'] == CalculationApproachKeyIDEnum.MARKET_BASED)['id'];

                this.patchcalculationApproach(calApproachID);

                let _GWPDataSetID;
                if (this.preference['gwpDatasetID'] == null) {
                    this.hasPreference = false;

                    // finding GWPDataset with CARBON_CONSTANT.LATEST_GWP_DATASET_KEY_ID
                    let gWPDataset = this.gwpDatasetM.find((gwpDataset) => gwpDataset['gwpDatasetKeyID'] == CARBON_CONSTANT.LATEST_GWP_DATASET_KEY_ID);
                    _GWPDataSetID = gWPDataset['gwpDatasetID'];
                } else {
                    this.hasPreference = true;
                    _GWPDataSetID = this.preference['gwpDatasetID'];
                }

                this.patchGWPDataSet(_GWPDataSetID);

                /* SEF: Standard Emission Factor */
                this.loadEmissionFactors();

            },
                error => {
                    console.error('error in getOrgPreference() -', error);
                });
    }

    patchGWPDataSet(_GWPDataSetID) {
        this.preferenceFG.patchValue({ gwpDatasetID: _GWPDataSetID });
    }

    patchcalculationApproach(calculationApproachID) {
        this.preferenceFG.patchValue({ scope2CalculationApproachID: calculationApproachID });
    }

    loadEmissionFactors() {
        this.standardEFRec = this.preference['activity'];
        this.addSEFactors(this.standardEFRec);
    }

    addSEFactors(sEFactors: any[]) {
        try {
            sEFactors.forEach((sEFactor) => {
                if (sEFactor.scopeKeyID === 'SCOPE1') {
                    (this.preferenceFG.get('orgEFSourcePriority').get('scope1') as FormArray).push(this.createScopeForm(sEFactor));
                } else if (sEFactor.scopeKeyID === 'SCOPE2') {
                    (this.preferenceFG.get('orgEFSourcePriority').get('scope2') as FormArray).push(this.createScopeForm(sEFactor));
                } else if (sEFactor.scopeKeyID === 'SCOPE3') {
                    (this.preferenceFG.get('orgEFSourcePriority').get('scope3') as FormArray).push(this.createScopeForm(sEFactor));
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    createScopeForm(sEFactor): any {
        try {
            const calculationApproachIDs = sEFactor?.calculationApproachID ?? [];
            const calculationApproachs = sEFactor?.calculationApproach ?? [];

            return this.formBuilder.group({
                bq: sEFactor?.bq,
                scopeKeyID: [sEFactor?.scopeKeyID],
                activityID: [sEFactor?.activityID, [Validators.required]],
                activityKeyID: [sEFactor?.activityKeyID],
                activityName: [sEFactor?.activityName, [Validators.required]],
                calculationApproachID: this.formBuilder.array(
                    calculationApproachIDs.map(approachId => this.createCalculationApproachForm(calculationApproachs, approachId, sEFactor?.scopeKeyID))
                )
            });
        } catch (error) {
            console.error('Error creating scope form:', error);
        }
    }

    createCalculationApproachForm(calculationApproachs, approachId, scopeKeyID): any {
        try {
            const selectedCalculationApproach = calculationApproachs?.find(
                approach => approach.id == approachId
            );
            const emissionFactorSourceID = selectedCalculationApproach?.emissionFactorSourceID ?? [];
            const emissionFactorSource = selectedCalculationApproach?.emissionFactorSource ?? [];

            return this.formBuilder.group({
                calculationApproachID: [selectedCalculationApproach?.id, [Validators.required]],
                calculationApproachKeyID: [selectedCalculationApproach?.keyID],
                calculationApproachName: [selectedCalculationApproach?.name, [Validators.required]],
                emissionFactorSource: this.formBuilder.array(
                    emissionFactorSourceID.map(sourceId => this.createEmissionFactorSourceForm(emissionFactorSource, sourceId, emissionFactorSourceID, scopeKeyID))
                ),
            });
        } catch (error) {
            console.error('Error creating emission factor source form:', error);
            // Handle the error here or rethrow it to be caught by the caller
            throw error;
        }
    }

    createEmissionFactorSourceForm(emissionFactorSource, emissionFactorSourceId, emissionFactorSourceID, scopeKeyID): any {
        try {
            const selectedEmissionSource = emissionFactorSource?.find(
                item => item.id == emissionFactorSourceId
            );
            const emissionFactorSourceVersionID = selectedEmissionSource?.emissionFactorSourceVersionID ?? [];
            const sectors = selectedEmissionSource?.sectors ?? [];
            const sectorID = selectedEmissionSource?.sectorID ?? [];

            const versions = selectedEmissionSource?.emissionFactorSourceVersion ?? [];

            return this.formBuilder.group({
                // emissionFactorSourceIDs: [scopeKeyID == 'SCOPE3' ? emissionFactorSourceIDs : emissionFactorSourceIDs[0], [Validators.required]],
                emissionFactorSourceID: [selectedEmissionSource?.id, [Validators.required]],
                emissionFactorSourceKeyID: [selectedEmissionSource?.keyID],
                emissionFactorSourceName: [selectedEmissionSource?.name],
                emissionFactorSourceVersion: [emissionFactorSourceVersionID, [Validators.required]],
                emissionFactorSourceVersions: [versions],
                sectorID: sectorID,
                sectors: [sectors],
            });
        } catch (error) {
            console.error('Error creating emission factor source form:', error);
            // Handle the error here or rethrow it to be caught by the caller
            throw error;
        }
    }

    isSectorAvailabe(scopeFG: FormGroup, emissionFactorFG: FormGroup, i, j, k) {
        const scope: any = scopeFG.value, emissionFactor = emissionFactorFG.value;
        const selectedEmissionFactorID = emissionFactor.emissionFactorSourceID;

        const activityID = scope.activityID;
        const calculationApproachID = (scope.calculationApproachID as Array<any>)[j].calculationApproachID;

        const activity = this.standardEFRec.find(activity => activity?.activityID === activityID);
        const calculationApproach = activity?.calculationApproach.find(approach => approach?.id === calculationApproachID);
        const selectedEmissionFactorSource = calculationApproach?.emissionFactorSource.find(source => source?.id === selectedEmissionFactorID);

        return (scope.activityKeyID == ActivityKeyIDEnum.STATIONARY_COMBUSTION && selectedEmissionFactorSource.keyID == EMISSION_FACTOR_SOUREC_KEYID_ENUM.IPCC_GUIDELINES_FOR_NATIONAL_GREENHOUSE_GAS_INVENTORIES);
    }

    factorSourceChange(scopeFG: FormGroup, emissionFactorFG: FormGroup, i, j, k) {
        const scope: any = scopeFG.value, emissionFactor = emissionFactorFG.value;
        const selectedEmissionFactorID = emissionFactor.emissionFactorSourceID;

        const activityID = scope.activityID;
        const calculationApproachID = (scope.calculationApproachID as Array<any>)[j].calculationApproachID;

        const activity = this.standardEFRec.find(activity => activity?.activityID === activityID);
        const calculationApproach = activity?.calculationApproach.find(approach => approach?.id === calculationApproachID);
        const selectedEmissionFactorSource = calculationApproach?.emissionFactorSource.find(source => source?.id === selectedEmissionFactorID);

        emissionFactorFG.get('sectorID').patchValue(null);
        emissionFactorFG.get('emissionFactorSourceVersion').patchValue(null);
        emissionFactorFG.get('sectors').patchValue(selectedEmissionFactorSource.sectors);
    }

    async updateOrgPreference() {
        this.preferenceFG.get('consolidationApproachID').patchValue(this.consApps.selected);
        if (this.preferenceFG.invalid) {
            console.error('invalid form -', this.preferenceFG.value);
            this.preferenceFG.markAllAsTouched();
            this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        const newPreferenceFG = this.preferenceFG.value;
        newPreferenceFG.orgEFSourcePriority = this.modifyOrgSourcePriority(this.orgEFSourcePriorityFA);
        this.preferenceController.updateOrgPreference(this.currentOrgID, this.preferenceID, newPreferenceFG)
            .subscribe(preferenceRes => {
                this.preferenceInit();
                this.getOrgPreference();
            },
                error => {
                    console.error('error in updateOrgPreference -', error);
                });
    }

    modifyOrgSourcePriority(orgEFSourcePriority: FormGroup) {
        try {
            const formObjectArray = [];

            const processScope = (scope: FormArray) => {
                scope.controls.forEach((scopeItem: FormGroup) => {

                    const activityID = scopeItem.get('activityID').value;
                    const bq = scopeItem.get('bq').value;
                    const calculationApproachArray = scopeItem.get('calculationApproachID') as FormArray;

                    calculationApproachArray.controls.forEach((calculationApproachControl: FormGroup) => {
                        const calculationApproachID = calculationApproachControl.get('calculationApproachID').value;
                        const emissionFactorSources = calculationApproachControl.get('emissionFactorSource') as FormArray;
                        emissionFactorSources.controls.forEach((emissionFactorSourceControl: FormGroup) => {
                            const emissionFactorSourceID = emissionFactorSourceControl.get('emissionFactorSourceID').value;
                            const emissionFactorSourceVersionID = emissionFactorSourceControl.get('emissionFactorSourceVersion').value;
                            const sectorID = emissionFactorSourceControl.get('sectorID').value;
                            formObjectArray.push({
                                activityID,
                                bq,
                                calculationApproachID,
                                emissionFactorSourceID,
                                emissionFactorSourceVersionID,
                                sectorID
                            });
                        });
                    });
                });
            };

            processScope(orgEFSourcePriority.get('scope1') as FormArray);
            processScope(orgEFSourcePriority.get('scope2') as FormArray);
            processScope(orgEFSourcePriority.get('scope3') as FormArray);

            return formObjectArray;

        } catch (error) {
            console.error(error);
        }
    }

    async getConsolidationAppraoches() {
        this.consolidationApproach = <ConsolidationApproachM[]>await this.consolidationApproachService.getAllConsolidationApproach();
    }

    async getScope2CalculationApproach() {
        let calculationApproach = <CalculationApproachI[]>await this.calculationApproachService.getCalculationApproachScope(ScopeKeyIDEnum.SCOPE_2_KEY_ID);
        this.scope2CalculationApproach = calculationApproach['calculationApproach'];
    }

    public errorHandling = (control: string, error: string) => {
        return this.preferenceFG.controls[control].hasError(error);
    }

    public changeScopeLabel(label: string) {
        this.activeLabelKey = label;
    }

    // getEmissionFactorSource(i: number, j: number): Array<any> {

    //     const scope1Item = this.getScopeData(i);
    //     const activityID = scope1Item?.get('activityID')?.value;
    //     const calculationApproach = (scope1Item?.get('calculationApproachID') as FormArray)?.at(j);
    //     const calculationApproachID = calculationApproach?.get('calculationApproachID')?.value;
    //     // console.log(calculationApproach);

    //     const activity = this.standardEFRec.find(activity => activity?.activityID === activityID);
    //     const selectedCalculationApproach = activity?.calculationApproach.find(approach => approach?.id === calculationApproachID);

    //     const emissionFactorSource = calculationApproach?.get('emissionFactorSource') as FormArray;
    //     const usedEmissionFactor = emissionFactorSource.controls.map(item => item.get('emissionFactorSourceID')?.value);

    //     const emissionFactor = selectedCalculationApproach?.emissionFactorSource.map(item => {
    //         if (usedEmissionFactor.includes(item.id)) {
    //             Object.assign(item, { isActive: false });
    //         } else {
    //             Object.assign(item, { isActive: true });
    //         }
    //         return item;
    //     }) || [];
    //     // console.log(emissionFactor);
    //     return emissionFactor;
    // }

    private getActivityAndCalculationApproach(i: number, j: number): { activity: any, selectedCalculationApproach: any } {
        const scope1Item = this.getScopeData(i);
        const activityID = scope1Item?.get('activityID')?.value;
        const calculationApproach = (scope1Item?.get('calculationApproachID') as FormArray)?.at(j);
        const calculationApproachID = calculationApproach?.get('calculationApproachID')?.value;
    
        const activity = this.standardEFRec.find(activity => activity?.activityID === activityID);
        const selectedCalculationApproach = activity?.calculationApproach.find(approach => approach?.id === calculationApproachID);
    
        return { activity, selectedCalculationApproach };
    }
    
    private extractEmissionFactorSource(calculationApproach): FormArray {
        return calculationApproach?.get('emissionFactorSource') as FormArray;
    }
    
    private determineActiveEmissionFactors(selectedCalculationApproach: any, usedEmissionFactor: Array<any>): Array<any> {
        return selectedCalculationApproach?.emissionFactorSource.map(item => {
            Object.assign(item, { isActive: !usedEmissionFactor.includes(item.id) });
            return item;
        }) || [];
    }
    
    getEmissionFactorSource(i: number, j: number): Array<any> {
        const { selectedCalculationApproach } = this.getActivityAndCalculationApproach(i, j);
        const calculationApproach = this.getScopeData(i)?.get('calculationApproachID') as FormArray;
        const emissionFactorSource = this.extractEmissionFactorSource(calculationApproach?.at(j));
        const usedEmissionFactor = emissionFactorSource.controls.map(item => item.get('emissionFactorSourceID')?.value);
    
        return this.determineActiveEmissionFactors(selectedCalculationApproach, usedEmissionFactor);
    }

    getEmissionFactorSourceVersion(i: number, j: number, k: number): Array<any> {
        try {
            const scope1Item = this.getScopeData(i);

            const activityID = scope1Item?.get('activityID')?.value;
            const calculationApproachID = (scope1Item?.get('calculationApproachID') as FormArray)?.at(j)?.get('calculationApproachID')?.value;
            const emissionFactorSourceID = ((scope1Item?.get('calculationApproachID') as FormArray)?.at(j)?.get('emissionFactorSource') as FormArray)?.at(k)?.get('emissionFactorSourceID')?.value;

            const activity = this.standardEFRec.find(activity => activity?.activityID === activityID);
            const calculationApproach = activity?.calculationApproach.find(approach => approach?.id === calculationApproachID);
            const emissionFactorSource = calculationApproach?.emissionFactorSource.find(source => source?.id === emissionFactorSourceID);
            return emissionFactorSource?.emissionFactorSourceVersion || [];
        } catch (error) {
            console.error(error);
        }
    }

    getEmissionFactorSourceSector(formGroup: FormGroup) {
        try {
            return formGroup.get('sectors').value;
        } catch (error: unknown) {
            console.error(error);
        }
    }

    getScopeData(i: number) {
        try {
            if (this.activeLabelKey === 'SCOPE1') {
                return this.scope1Array.at(i);
            } else if (this.activeLabelKey === 'SCOPE2') {
                return this.scope2Array.at(i);
            } else {
                return this.scope3Array.at(i);
            }
        } catch (error) {
            console.error(error);
        }
    }

    addEFD(approach: FormGroup) {
        const formArray = approach.get('emissionFactorSource') as FormArray;
        const data = this.createEmissionFactorSourceForm(null, null, null, null);
        formArray.push(data);
    }

    removeEFD(approach: FormGroup, i: number) {
        const formArray = approach.get('emissionFactorSource') as FormArray;
        formArray.removeAt(i);
    }

    showRemoveEFD(approach: FormGroup): boolean {
        const formArray = approach?.get('emissionFactorSource') as FormArray;
        return formArray?.controls.length > 1;
    }

    showAddEFD(approach: FormGroup): boolean {
        return true;
    }
}

