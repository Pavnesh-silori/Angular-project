import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlllocateReviewRunController } from '@carbon/controller/allocate-review-run.controller';
import { RunStatusKeyIDEnum, SourceKeyID } from '@carbon/enum/cbam.enum';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { PROCESS_INPUT_ENUM, PROCESS_OUTPUT_ENUM } from '@netzero/enum/process.enum';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM } from '@netzero/enum/process.enum';

import { MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { MessageAlertTypeEnum, MessageAlertIconEnum } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

@Component({
	selector: 'app-allocate-review-run',
	templateUrl: './allocate-review-run.component.html',
	styleUrls: ['./allocate-review-run.component.scss']
})
export class AllocateReviewRunComponent implements OnInit {

	RunStatusKeyIDEnum = RunStatusKeyIDEnum;

	currentOrgID: any;
	runID: any;
	massAllocation: boolean = false;

	// global constant
	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;
	// 

	allocationData: any;
	percentage: boolean = false;

	ProcessInputEnum = PROCESS_INPUT_ENUM;
	ProcessOutputEnum = PROCESS_OUTPUT_ENUM;

	massOrVolume: any[] = [];
	ActivityKeyIDEnum: ActivityKeyIDEnum;

	allocationMethod = [
		{ name: "Mass or Volume", keyID: "MASS_OR_VOLUME", id: 1 },
		{ name: "Percentage", keyID: "PERCENTAGE", id: 2 }
	];


	// Reactive forms
	allocationFG: FormGroup;

	@Input() isDataCollection;
	@Input() stepperIndex;
	@Input() linkedRecordsInp: number;
	@Input() runStatusInp: RunStatusKeyIDEnum;

	@Output() runStatusChange = new EventEmitter<any>();

	linkedRecords: number;
	checkLinkedRecords: number = 0;
	runStatus: RunStatusKeyIDEnum;

	constructor(
		private formBuilder: FormBuilder,
		private toasterService: ToastrService,
		private allocateReviewRun: AlllocateReviewRunController,
		private storageService: StorageService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) { }

	async ngOnInit(): Promise<void> {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.activatedRoute.queryParams.subscribe((queryParams) => {
			if (queryParams.runID) {
				this.runID = queryParams.runID;
			}
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.linkedRecordsInp && this.linkedRecordsInp) {
			this.linkedRecords = this.linkedRecordsInp;
		}

		if (changes.runStatusInp && this.runStatusInp) {
			this.runStatus = this.runStatusInp;
		}

		if (this.isDataCollection || this.stepperIndex === 4) {
			this.handleChanges();
		}
	}

	getLabelText(label: any) {
		if (label == null) {
			return;
		}
		if (label == this.ProcessInputEnum.FUEL) {
			return 'Fuel name: '
		} else if (label == this.ProcessOutputEnum.FINISHED_PRODUCT || label == this.ProcessOutputEnum.CO_PRODUCT || label == this.ProcessOutputEnum.INTERMEDIATE_PRODUCT || label == this.ProcessOutputEnum.PRECURSOR_PRODUCT) {
			return 'Product name'
		} {
			return 'Name: '
		}
	}

	async handleChanges() {
		await this.getAllocateReviewRun();
		this.createForm();
	}

	createForm() {
		this.allocationFG = this.formBuilder.group({
			processFA: this.formBuilder.array([])
		});
		if (this.allocationData) {
			this.setProcessFormArray();
		}
	}

	get processFAControls() {
		return (this.allocationFG.get('processFA') as FormArray).controls;
	}

	processFG(process: { id, name, recordsCollected }) {
		return this.formBuilder.group({
			processID: process.id,
			recordsCollected: process.recordsCollected,
			processName: process.name,
			inputFA: this.formBuilder.array([]),
			outputFA: this.formBuilder.array([])
		})
	}


	setProcessFormArray() {
		this.checkLinkedRecords = 0;
		this.allocationData.forEach(process => {
			let processFG: FormGroup = this.processFG(process);
			if (this.linkedRecords == null) {
				this.checkLinkedRecords += process.linkedRecords;
			}

			this.processFA.push(processFG);
			process.input.forEach(input => {

				let inputFG: FormGroup = this.getProcessInput(input);
				(processFG.get('inputFA') as FormArray).push(inputFG);
				input.source.forEach(source => {
					let activityData = [];
					let sourceInputFG: FormGroup;
					if (source.data.length > 0) {
						source.data.forEach(async (data: any) => {
							let sourceInputFG;
							if (!source.allocations.length && input.keyID == this.ProcessInputEnum.PRECURSOR_PRODUCT) {
								sourceInputFG = this.getInputSourceFG(source, 'allocationMethod', data, activityData);
							} else {
								const checkSingleOrCommonSource = this.checkAllocate(source.allocations, source.allocationMethodStdID);
								switch (checkSingleOrCommonSource) {
									case "singleSource":
										sourceInputFG = this.getInputSourceFG(source, 'singleSource', data, activityData);
										break;
									case "allocationMethod":
										sourceInputFG = this.getInputSourceFG(source, 'allocationMethod', data, activityData);
										break;
									default:
										sourceInputFG = this.getInputSourceFG(source, 'commonSubMeter', data, activityData);
										break;
								}
								// if (source.allocations[0]?.isAllocationRequired) {
								// 	sourceInputFG = this.getInputSourceFG(source, 'commonSubMeter', data, activityData);
								// } else {
								// 	sourceInputFG = this.getInputSourceFG(source, 'singleSource', data, activityData);
								// }
							}
							(inputFG.get('sourceFG') as FormArray).push(sourceInputFG);
						});
					}

				});
			});

			process.output.forEach((output, outputIndex) => {
				let outputFG: FormGroup = this.getProcessOutput(output);
				(processFG.get('outputFA') as FormArray).push(outputFG);
				output.source.forEach((source, index) => {
					let sourceOutputFG: FormGroup;
					// if (source.data.length >= 0) {
					source.data.forEach((data: any, index1) => {
						if (output.keyID === this.ProcessOutputEnum.PRECURSOR_PRODUCT ||
							output.keyID === this.ProcessOutputEnum.INTERMEDIATE_PRODUCT ||
							output.keyID === this.ProcessOutputEnum.FINISHED_PRODUCT) {
							sourceOutputFG = this.getOutputSourceFG(source, 'MassOrVol', 'multi', data, output.keyID, outputIndex, index1);
						} else if (output.keyID === this.ProcessOutputEnum.CO_PRODUCT) {
							sourceOutputFG = this.getOutputSourceFG(source, 'MassOrVol', 'singleSource', data, output.keyID, outputIndex, index1);
						} else {
							sourceOutputFG = this.getOutputSourceFG(source, 'percentage', 'multi', data, output.keyID, outputIndex, index1);
						}
						(outputFG.get('outputSourceFG') as FormArray).push(sourceOutputFG);
					})
					// }
				});
			});
		});
	}

	get processFA() {
		return this.allocationFG.get('processFA') as FormArray;
	}

	getProcessInput(input: { id, name, keyID }) {
		return this.formBuilder.group({
			inputID: input.id,
			inputName: input.name,
			inputKeyID: input.keyID,
			sourceFG: this.formBuilder.array([])
		})
	}

	getProcessOutput(output: { id, name, keyID }) {
		return this.formBuilder.group({
			outputID: output.id,
			outputName: output.name,
			outputKeyID: output.keyID,
			outputSourceFG: this.formBuilder.array([])
		})
	}

	getOutputSourceFG(source: { id, name, processInputOutputID, keyID }, allocationMethod: string, singleSource: string, data: any, outputKeyID, index, dataIndex): FormGroup {
		let formGroup: FormGroup;
		formGroup = this.formBuilder.group({
			entityID: data.entity ? [data.entity.id] : null,
			sourceID: source.id,
			sourceName: [source.name],
			sourceKeyID: [source.keyID],
			entityName: data.entity ? [data.entity.name] : null,
			sourceProcessInputOutPutID: [source.processInputOutputID],
			massOrVolume: [data.massOrVolumm],
			massAllocation: true,
			markAsReviewed: [data.markAsReviewed ? data.markAsReviewed : null, Validators.required],
			allocationMethod: outputKeyID === 'intermediate-product'
				? 'MASS_OR_VOLUME'
				: (allocationMethod === 'percentage'
					? 'PERCENTAGE'
					: (data.allocationMethod != null
						? data.allocationMethod
						: null)),

			allocationPct: [data.allocationPct || null],
			description: [data.description || null],
			uomCode: data.unit.uomCode ? data.unit.uomCode : '',
			unitName: data.unit.uomName,
			amount: data.amount,
			activityData: [],
			keyID: outputKeyID,
			exportedQuantity: source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS ? data.totalProductProduced : null,
			// exportedUnitName: source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS || PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS ? data.totalProductProducedUnit ? data.totalProductProducedUnit.uomName : null,
			// exportUomCode: source.keyID == PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS || PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS ? data.totalProductProducedUnit ? data.totalProductProducedUnit.uomCode : null,
			exportedUnitName: source.keyID === PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS
				? (data.totalProductProducedUnit ? data.totalProductProducedUnit.uomName : null)
				: null,

			exportUomCode: source.keyID === PROCESS_OUTPUT_ENTITY_SOURCE_KEYID_ENUM.EXPORTED_FROM_THIS_PROCESS
				? (data.totalProductProducedUnit ? data.totalProductProducedUnit.uomCode : null)
				: null,

			singleSource: singleSource,
			isMassBasedAllocationRequired: allocationMethod == 'MassOrVol' ? true : false,
			index: index,
			dataIndex: dataIndex
		});

		if (data.allocationMethod != null) {
			if (data.allocationMethod == 'MASS_OR_VOLUME') {
				this.allocationMethodCheck("MASS_OR_VOLUME", index);
			} else if (data.allocationMethod == 'PERCENTAGE') {
				this.allocationMethodCheck("PERCENTAGE", index);

			}
		}
		this.getActivityConfigData(formGroup, source)
		return formGroup;
	}

	getInitialMarkAsReviewed(data: any): boolean {
		if (data.allocationMethod == "MASS_OR_VOLUME" || data.allocationMethod == "PERCENTAGE") {
			return true;
		} else {
			return false;
		}
	}

	getInitialAllocationMethod(massOrVolume: number, percentage: number): string {
		if (massOrVolume) {
			this.massAllocation = true;
			this.percentage = false;
			return 'MASS_OR_VOLUME';
		} else if (percentage) {
			this.massAllocation = false;
			this.percentage = true;
			return 'PERCENTAGE';
		} else {
			return '';
		}
	}

	allocationMethodCheck(keyID, index) {
		if (keyID == 'MASS_OR_VOLUME') {
			this.massAllocation = true;
			this.percentage = false;
			this.massOrVolume[index] = 'massAllocation';
		} else if (keyID == "PERCENTAGE") {
			this.massAllocation = false;
			this.percentage = true;
			this.massOrVolume[index] = 'percentage';
		}

	}

	routeToActivity(activity: any) {
		if (activity.formType == ACTIVITY_FORM_TYPE_KEYID_ENUM.GHG_FORM) {
			this.router.navigate(
				[`/activity-data/${activity.activityKeyID}/page`], { queryParams: { activityConfigID: activity.ids } });
		} else {
			this.router.navigate(
				[`/cbam/activity-data/activity/${activity.activityKeyID}/page`], { queryParams: { activityConfigID: activity.ids } });
		}
	}

	getConsumedPercentage(percentage: number, totalAmount, unit: string, uomCode: string) {
		if (percentage <= 100) {
			const consumedAmount = (percentage / 100) * totalAmount;
			return `${consumedAmount} ${uomCode} (${unit})`;
		}

	}

	getInputSourceFG(source: { id, name, processInputOutputID, keyID }, allocationMethod: string, data, activityData: any) {
		const isAllocationMethod = allocationMethod === 'allocationMethod'
		const isSingleSource = allocationMethod === 'singleSource';
		const isCommonSubMeter = allocationMethod === 'commonSubMeter';
		let awaited_activity_data = [];

		let fg = this.formBuilder.group({
			entityID: data.entity ? [data.entity.id] : null,
			sourceID: source.id,
			sourceName: [source.name],
			sourceKeyID: [source.keyID],
			entityName: data.entity ? [data.entity.name] : null,
			sourceProcessInputOutPutID: source.processInputOutputID,
			isSingleSource: isSingleSource,
			isAllocation: isAllocationMethod,
			isCommonSubMeter: isCommonSubMeter,
			allocationPct: isSingleSource ? null : [data.allocationPct || '', Validators.required],
			description: isSingleSource ? null : [data.description || '', Validators.required],
			markAsReviewed: [data.markAsReviewed ? data.markAsReviewed : null, Validators.required],
			uomCode: data.unit ? data.unit.uomCode : '--',
			unitName: data.unit ? data.unit.uomName : '--',
			amount: data.amount,
			activityData: []
		});
		this.getActivityConfigData(fg, source)
		return fg;
	}

	getActivityConfigData(formGroup: FormGroup, source: any) {
		let activityData = [];

		source.activity.forEach(activity => {
			activity.config.forEach(config => {
				const { activityKeyID, id, name } = config;

				let existingEntry = activityData.find(item => item.activityKeyID === activityKeyID);
				if (existingEntry) {
					existingEntry.ids.push(id);
				} else {
					existingEntry = {
						activityKeyID: activityKeyID,
						name: name,
						formType: activity.type[0].keyID,
						activityName: activity.name,
						ids: []
					}
					existingEntry.ids.push(id);
					activityData.push(existingEntry)
				}

			});
		});

		// Convert activityData to an array of objects
		activityData = Object.values(activityData);
		formGroup.patchValue({ activityData: activityData });
	}

	async getAllocateReviewRun() {
		try {
			const res: any = await this.allocateReviewRun.getAllocationReviewRun(this.currentOrgID, this.runID).toPromise();
			this.allocationData = res;
			// this.isAllocateOrNot();
		} catch (error) {
			console.error('Error fetching allocation review run data:', error);
		}
	}

	checkAllocate(sourceAllocations, sourceAllocationStdID) {
		if (sourceAllocationStdID.length == 2) {
			if (sourceAllocations[0].subtype[0].id == sourceAllocationStdID[1]) {
				return 'singleSource';
			} else {
				return 'commonSubMeter'
			}
		} else {
			if (sourceAllocations[0].id == sourceAllocationStdID[0]) {
				return 'singleSource';
			} else {
				return 'allocationMethod'
			}
		}
	}

	async onSubmit(runStatus: string) {
		let result = [];
		let isValid = true;
		const processFAArray = this.allocationFG.get('processFA') as FormArray;
		if (this.allocationFG.valid) {
			processFAArray.controls.forEach((process, index) => {
				let inputOutputIndex;
				if (!result[index]) {
					result[index] = {};
				}

				result[index].processID = process.value.processID;
				result[index].sourceLevelData = [];

				process.value.inputFA.forEach((input, i) => {
					inputOutputIndex = i;
					result[index].sourceLevelData.push({
						typeID: input.inputID,
						allocationData: []
					})
					input.sourceFG?.forEach((source) => {
						if (source && !source.markAsReviewed) {
							isValid = false;
							this.toasterService.error('Please select "Mark as reviewed" for all allocations.');
							return;
						} else {
							result[index].sourceLevelData[i].allocationData.push({
								"sourceID": source.sourceID,
								"entityID": source.entityID,
								"allocationPct": source.allocationPct,
								"description": source.description,
								"allocationMethod": "PERCENTAGE",
								"processInputOutputID": source.sourceProcessInputOutPutID,
								"markAsReviewed": true,
								"ioType": 'INPUT',
								"massOrVolume": '',
								"uomCode": ''
							});
						}
					});
				});
				process.value.outputFA.forEach((input, j) => {
					result[index].sourceLevelData.push({
						typeID: input.outputID,
						allocationData: []
					})
					input.outputSourceFG?.forEach((source, sourceIndex) => {

						if (source.singleSource == 'singleSource') {
							source.allocationMethod = 'PERCENTAGE';
						}

						if (sourceIndex != 0 && (source.keyID == 'co-product' || source.keyID == 'finished-product')) {
							if (source.allocationPct) {
								source.allocationMethod = 'PERCENTAGE'
							} else {
								source.allocationMethod = 'MASS_OR_VOLUME'
							}
						}

						if (source && !source.markAsReviewed && sourceIndex == 0) {
							// if (sourceIndex == 0) {
							isValid = false;
							this.toasterService.error('Please select "Mark as reviewed" for all allocations.');
							return;
							// }
						} else {
							if (source.allocationMethod == 'PERCENTAGE' && (source.allocationPct == null || source.description == null)) {
								if (source.singleSource != 'multi' && source.singleSource != 'singleSource') {
									if (sourceIndex == 0) {
										isValid = false;
										this.toasterService.error('Please fill all valid fields');
										return;
									}
								}

							} else if (source.allocationMethod == 'PERCENTAGE') {
								source.massOrVolume = null;
							} else if (source.allocationMethod == 'MASS_OR_VOLUME') {
								source.allocationPct = null;
								source.description = null;
							}
							result[index].sourceLevelData[j + inputOutputIndex + 1].allocationData.push({
								"sourceID": source.sourceID,
								"entityID": source.entityID,
								"allocationPct": source.allocationPct,
								"description": source.description,
								"processInputOutputID": source.sourceProcessInputOutPutID,
								"ioType": 'OUTPUT',
								"markAsReviewed": true,
								"massOrVolume": source.massOrVolume,
								"uomCode": '',
								"allocationMethod": source.allocationMethod
							});
						}
					});
				});
			});
		} else {
			isValid = false;
			this.toasterService.error('please fill percentage and description');
		}


		if (isValid) {
			if (this.linkedRecords == null) {
				this.linkedRecords = this.checkLinkedRecords;
			}
			let allocationData = {
				totalActivityData: this.linkedRecords,
				runStatus: runStatus,
				processLevelData: {}
			}
			allocationData.processLevelData = result;
			// this.allocateReviewRun.createAllocationData(this.currentOrgID, this.runID, allocationData).subscribe((res: any) => {
			// 	if (res.status == 'success') {
			// 		return true;
			// 	} else {
			// 		return false;
			// 	}
			// })
			let promise = this.allocateReviewRun.createAllocationData(this.currentOrgID, this.runID, allocationData).toPromise();
			try {
				const response = await promise;
				return true;

			} catch (error) {
				return false;
			}
		}
	}

	runStatusChangeFnc(event) {
		this.runStatusChange.emit(event);
	}
}

