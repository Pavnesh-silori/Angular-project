import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ActivityMappingComponent } from '../activity-mapping/activity-mapping.component';
import { ProcessMappingController } from '@carbon/controller/process-map.controller';
import { ACTIVITY_FORM_TYPE_KEYID_ENUM } from '@carbon/enum/activity-form-enum';
import { PROCESS_INPUT_ENUM } from '@netzero/enum/process.enum';

// lib
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
import { ActivatedRoute } from '@angular/router';
import { MessageAlertTypeEnum, MessageAlertIconEnum } from '@library/tsc-common';

// lib
@Component({
    selector: 'app-process-map',
    templateUrl: './process-map.component.html',
    styleUrls: ['./process-map.component.scss']
})

export class ProcessMapComponent implements OnInit {
    currentOrgID: any;
    process: any;

    ACTIVITY_FORM_TYPE_KEYID_ENUM = ACTIVITY_FORM_TYPE_KEYID_ENUM;

    constructor(
        private stroageService: StorageService,
        private dialog: MatDialog,
        private processMappingController: ProcessMappingController,
        private toastrService: ToastrService,
        private activatedRoute: ActivatedRoute,
    ) { }

    action: any;
    runID: any;

    isAllocation: boolean = false;
    isSubMeter: boolean = false;

    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;

    // k: any;
    show: boolean = false;
    afterShow: boolean = false;


    finalResult: any = [];

    selectedFormData: any = [];
    allInputActivityMap: any = [];

    count: number = 0;

    checkAllocationRadio: boolean = true;

    ngOnInit(): void {
        this.currentOrgID = this.stroageService.getStorage('currentOrgID');

        this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (queryParams.runID) {
                this.runID = queryParams.runID;
                this.getProcess();
            }
        });
    }

    getAllInput() {
        this.process.forEach(entry => {
            entry.output.forEach(outputItem => {
                outputItem.source.forEach(sourceItem => {
                    sourceItem.activity.forEach(activityItem => {
                        this.allInputActivityMap.push({
                            processInputOutputID1: sourceItem.processInputOutputID,
                            id: activityItem.id,
                            isActivityMap: activityItem.mappedFormCount > 0 ? true : false,
                            sourceName: sourceItem.name,
                            sourceKeyID: sourceItem.keyID,
                            activityName: activityItem.name,
                            isVisible: activityItem.isVisible,
                            typeKeyID: 'OUTPUT',
                        });
                        if (activityItem.mappedFormCount) {
                            this.selectedFormData.push({
                                processInputOutputID: sourceItem.processInputOutputID,
                                activityID: activityItem.id,
                                activityFormID: activityItem.mappedActivityFormID,
                                typeKeyID: 'OUTPUT',
                            })
                        }
                    });
                });
            });

            entry.input.forEach(inputItem => {
                inputItem.source.forEach(sourceItem => {
                    if (sourceItem.allocations.length > 0) {
                        this.count++;
                    }
                    sourceItem.activity.forEach(activityItem => {
                        if (activityItem.mappedFormCount) {
                            this.selectedFormData.push({
                                processInputOutputID: sourceItem.processInputOutputID,
                                activityID: activityItem.id,
                                activityFormID: activityItem.mappedActivityFormID,
                                typeKeyID: 'INPUT',
                                isVisible: activityItem.isVisible,
                                inputSource: inputItem.keyID
                            })
                        }
                        if (activityItem.isVisible == true) {
                            this.allInputActivityMap.push({
                                processInputOutputID1: sourceItem.processInputOutputID,
                                id: activityItem.id,
                                isActivityMap: activityItem.mappedFormCount > 0 ? true : false,
                                isVisible: activityItem.isVisible,
                                sourceName: sourceItem.name,
                                sourceKeyID: sourceItem.keyID,
                                activityName: activityItem.name,
                                typeKeyID: 'INPUT',
                                inputSource: inputItem.keyID
                            });

                        } else {
                            this.allInputActivityMap.push({
                                processInputOutputID1: sourceItem.processInputOutputID,
                                id: activityItem.id,
                                isActivityMap: activityItem.mappedFormCount > 0 ? true : false,
                                isVisible: activityItem.isVisible,
                                sourceName: sourceItem.name,
                                sourceKeyID: sourceItem.keyID,
                                activityName: activityItem.name,
                                typeKeyID: 'INPUT',
                                inputSource: inputItem.keyID
                            })
                            if (sourceItem.allocationMethodStdID != undefined) {
                                sourceItem.allocations.forEach((allocation) => {

                                    if (allocation.id == sourceItem.allocationMethodStdID[0]) {
                                        allocation.isSelected = true;
                                        this.checkSubMeter(allocation, sourceItem, 'update');
                                    }

                                    allocation.subtype.forEach((subType) => {
                                        if (sourceItem.allocationMethodStdID.length > 1) {
                                            if (subType.id == sourceItem.allocationMethodStdID[1]) {
                                                subType.isSelected = true;
                                                this.checkSubtype(subType, sourceItem);
                                            }
                                        }
                                    })
                                })
                            }
                        }
                    });
                });
            });
        });
    }

    getProcess() {
        this.processMappingController.getProcessInput(this.currentOrgID, this.runID).subscribe((res: any) => {
            this.process = res;
            this.getAllInput();
        })
    }

    checkSubMeter(allocation: any, source: any, action: string) {
        let name = allocation.name;
        this.isSubMeter = allocation.name === 'Process sub-metering';
        allocation.showSubtype = this.isSubMeter;

        // Reset showSubtype for other allocations
        source.allocations.forEach((item: any) => {
            if (item !== allocation) {
                item.showSubtype = false;
            }
        });

        let activity = source.activity;

        activity.forEach(element => {
            if (!element.isVisible) {
                this.allInputActivityMap.forEach((input: any) => {
                    if (input.processInputOutputID1 === source.processInputOutputID && element.id == input.id) {
                        if (name === 'Allocation method') {
                            if (element.type[0].keyID == 'ghg-form') {
                                input.allocationID = allocation.id;
                                input.allocationSubTypeID = null;

                                element.formType = 'GHG form';
                                element.afterShow = true;
                                element.isShowSubType = true;
                                element.isShowFormMapping = true;
                            } else {
                                input.allocationID = null;
                                input.allocationSubTypeID = null;

                                element.isShowFormMapping = true;
                                element.afterShow = false;
                            }

                            this.selectedFormData.push({
                                id: element.id,
                                allocationMethodID: allocation.id,
                                processInputOutputID: input.processInputOutputID1,
                                typeKeyID: 'INPUT'
                            })

                            if (action !== 'update') {
                                this.selectedFormData = this.selectedFormData.filter(data =>
                                    !(data.processInputOutputID == source.processInputOutputID && data.activityID == element.id)
                                );
                                element.mappedFormCount = 0;
                                input.isActivityMap = false;
                            }
                        } else if (name === 'Process sub-metering') {
                            if (element.type[0].keyID == 'cbam-form') {
                                input.allocationID = allocation.id;
                                input.allocationSubTypeID = null;

                                element.formType = 'CBAM form';
                                element.afterShow = true;
                                element.isShowSubType = false;
                            } else {
                                input.allocationID = null;
                                input.allocationSubTypeID = null;

                                element.afterShow = false;
                                element.isShowSubType = false;
                            }
                            if (action !== 'update') {
                                this.selectedFormData = this.selectedFormData.filter(data =>
                                    !(data.processInputOutputID == source.processInputOutputID && data.activityID == element.id)
                                );
                                element.mappedFormCount = 0;
                                input.isActivityMap = false;
                            }
                        }
                    }
                });
            }
        })
    }

    checkSubtype(subtype: any, source: any) {
        this.allInputActivityMap.forEach((input: any) => {
            if (input.processInputOutputID1 === source.processInputOutputID && input.allocationID) {
                input.allocationSubTypeID = subtype.id;
            }
        })

        source.activity.forEach(element => {
            if (!element.isVisible) {
                if (element.afterShow) {
                    element.isShowSubType = true;
                } else {
                    element.isShowSubType = false;
                }
            }
        });
    }

    selectActivityForms(activity: any, processInputOutputID: any, processID: any, type: string, mappedActivityArray: []) {
        try {
            activity.isSelected = true;
            const { id, keyID, name } = activity;
            const activityKeyID = { id, keyID, name };

            const existingDataIndex = this.selectedFormData.findIndex(formData => formData.activityID === activity.id && formData.processInputOutputID === processInputOutputID && formData.typeKeyID == type);
            if (existingDataIndex !== -1) {
                // If data already exists, open dialog with pre-selected data
                let dialogRef = this.dialog.open(ActivityMappingComponent, {
                    data: {
                        activityID: activityKeyID,
                        isActivitySelection: true,
                        processID: processID,
                        activityFormID: this.selectedFormData[existingDataIndex].activityFormID
                    },
                    minWidth: '600px',
                    height: "100%",
                    position: { right: "-2px", top: "0px" },
                });

                dialogRef.afterClosed()
                    .subscribe((result) => {
                        // Update the existing data with new selection and close time
                        if (result.length) {
                            const newSelectedFormData = {
                                activityID: activity.id,
                                processInputOutputID: processInputOutputID,
                                activityFormID: result
                            }
                            this.selectedFormData[existingDataIndex] = newSelectedFormData;
                            this.selectedFormData[existingDataIndex].typeKeyID = type;
                            const existingDataIndex1 = this.allInputActivityMap.findIndex(formData => formData.id === activity.id && formData.processInputOutputID1 === processInputOutputID);
                            this.allInputActivityMap[existingDataIndex1].isActivityMap = true;
                            activity.mappedFormCount = result.length;

                        } else {
                            this.selectedFormData.splice(existingDataIndex, 1);
                            const existingDataIndex1 = this.allInputActivityMap.findIndex(formData => formData.id === activity.id && formData.processInputOutputID1 === processInputOutputID && formData.typeKeyID == type);
                            this.allInputActivityMap[existingDataIndex1].isActivityMap = false;
                            activity.mappedFormCount = 0;
                        }
                    });
            } else {
                let activityMapped = [];
                if (mappedActivityArray.length >= 0) {
                    activityMapped = mappedActivityArray;
                }
                let dialogRef = this.dialog.open(ActivityMappingComponent, {
                    data: {
                        activityID: activityKeyID,
                        isActivitySelection: true,
                        processID: processID,
                        activityFormID: activityMapped
                    },
                    minWidth: '600px',
                    height: "100%",
                    position: { right: "-2px", top: "0px" },
                });

                dialogRef.afterClosed()
                    .subscribe((result) => {
                        if (result.length) {
                            this.selectedFormData.push(
                                {
                                    activityID: activity.id,
                                    processInputOutputID: processInputOutputID,
                                    activityFormID: result,
                                    typeKeyID: type
                                }
                            )

                            const existingDataIndex1 = this.allInputActivityMap.findIndex(formData => formData.id === activity.id && formData.processInputOutputID1 === processInputOutputID && formData.typeKeyID == type);
                            this.allInputActivityMap[existingDataIndex1].isActivityMap = true;
                            activity.mappedFormCount = result.length;
                        } else {
                            const existingDataIndex1 = this.allInputActivityMap.findIndex(formData => formData.id === activity.id && formData.processInputOutputID1 === processInputOutputID && formData.typeKeyID == type);
                            this.allInputActivityMap[existingDataIndex1].isActivityMap = false;
                        }
                    });
            }
        } catch (error) {
            console.log(error, "error")
        }
    }

    async onSubmit(runStatus: any): Promise<any> {
        // console.log('selected form data', this.selectedFormData, 'process map', this.allInputActivityMap)
        let isChecked;
        this.mappingDataWithActivityForm();
        interface UnmappedActivity {
            source: string;
            activity: string;
        }
        let unMappedActivity: UnmappedActivity[] = [];
        isChecked = this.isFormValid(unMappedActivity);

        interface GroupedDataEntry {
            runStaus?: any,
            typeKeyID: any;
            inputSource: any;
            processInputOutputID: any;
            allocationMethodID?: any;
            activityFormMap: { activityID: any; activityFormID: any; }[];
        }

        if (isChecked == false) {
            this.toastrService.error('You have not mapped all valid activites');
            return false;
        }

        const groupedData: GroupedDataEntry[] = this.selectedFormData.reduce((result, obj) => {
            const existingEntry = result.find(entry => entry.processInputOutputID === obj.processInputOutputID && entry.typeKeyID == obj.typeKeyID);
            if (!existingEntry) {
                // Create a new entry
                const newDataEntry: GroupedDataEntry = {
                    typeKeyID: obj.typeKeyID,
                    processInputOutputID: obj.processInputOutputID,
                    inputSource: obj.inputSource,
                    activityFormMap: [{
                        activityID: obj.activityID,
                        activityFormID: obj.activityFormID
                    }]
                };

                // Add allocationMethodID if present
                if (obj.allocationMethodID) {
                    newDataEntry.allocationMethodID = obj.allocationMethodID;
                }

                result.push(newDataEntry);
            } else {
                // Add activityID and activityFormIDs to existing entry's activityFormMap
                existingEntry.activityFormMap.push({
                    activityID: obj.activityID,
                    activityFormID: obj.activityFormID
                });

                // Add allocationMethodID if present

                if (obj.allocationMethodID) {
                    if (!Array.isArray(obj.allocationMethodID)) {
                        obj.allocationMethodID = [obj.allocationMethodID];
                    }
                    existingEntry.allocationMethodID = obj.allocationMethodID;
                }

            }

            return result;
        }, []);

        groupedData.forEach(entry => {
            if (entry.typeKeyID === 'INPUT' && !entry.allocationMethodID) {
                if (entry.inputSource !== 'precursor-product') {
                    isChecked = false;
                }
            }
        });
        if (isChecked && this.checkAllocationRadio) {
            let Finalresult = {
                runStatus: runStatus,
                configMappedActivites: []
            }
            Finalresult.configMappedActivites = groupedData;

            let promise = this.processMappingController.saveProcessInputByRunID(this.currentOrgID, this.runID, groupedData).toPromise();
            try {
                await promise;
                return true;
            } catch (error) {
                console.log('error in configureData - ', error);
                return false;
            }

        } else {
            this.toastrService.error('You have not mapped all valid activites');
            return false;
            // let errorMessage = 'You have not mapped the following activities:\n';

            // unMappedActivity.forEach((form, index) => {
            //     errorMessage += `\n${index + 1}. Source: ${form.source}, Activity: ${form.activity}`;
            // });

            // this.toastrService.openToast(ToastrTitle.ERROR, errorMessage, ToastrColor.ERROR);
            // return false;
        }
    }

    mappingDataWithActivityForm() {
        let allocation, subAllocation, index;
        for (let i = 0; i < this.selectedFormData.length; i++) {
            const { activityID, processInputOutputID } = this.selectedFormData[i];

            for (let j = 0; j < this.allInputActivityMap.length; j++) {
                const { processInputOutputID1, id, allocationID, allocationSubTypeID } = this.allInputActivityMap[j];

                if (processInputOutputID === processInputOutputID1 && this.selectedFormData[i].typeKeyID == 'INPUT') {
                    allocation = allocationID;
                    subAllocation = allocationSubTypeID;
                    index = i;
                    let allocationArray = [];
                    if (allocation !== null && allocation != undefined) {
                        allocationArray.push(allocation);
                    }
                    if (subAllocation !== null && subAllocation != undefined) {
                        allocationArray.push(subAllocation);
                    }
                    if (allocationArray.length > 0) {
                        this.selectedFormData[index].allocationMethodID = allocationArray;
                    }

                }
            }
        }
    }

    isFormValid(unMappedActivity) {
        let isChecked = true;
        for (const obj2 of this.allInputActivityMap) {
            if (obj2.isActivityMap) {
                const matchingObjects = this.selectedFormData.filter(obj1 => obj1.processInputOutputID === obj2.processInputOutputID1 && obj1.activityID === obj2.id && obj2.typeKeyID == obj1.typeKeyID);
                if (matchingObjects.length <= 0) {
                    isChecked = false;
                    return;
                }
            } else {
                if (obj2.isVisible) {
                    unMappedActivity.push({
                        source: obj2.sourceName,
                        activity: obj2.activityName
                    })
                    isChecked = false;
                }

                // const hasAllocationMethodID = this.allInputActivityMap.some(obj1 => {
                //     return obj1.processInputOutputID1 === obj2.processInputOutputID1 && obj1.allocationID !== null;
                // });

                let falseActivity = [];
                let allocationNotFilled = false;

                this.allInputActivityMap.forEach((data) => {
                    if (data.processInputOutputID1 == obj2.processInputOutputID1 && data.typeKeyID == obj2.typeKeyID && data.isVisible == false) {
                        falseActivity.push(data);
                    }
                })

                falseActivity.forEach((activity) => {
                    if (activity.allocationID) {
                        allocationNotFilled = true;
                        if (activity.sourceKeyID == 'chp' || activity.sourceKeyID == 'non-chp') {
                        } else {
                            if (activity.isActivityMap == false) {
                                unMappedActivity.push({
                                    source: obj2.sourceName,
                                    activity: obj2.activityName
                                })
                                isChecked = false;
                            }
                        }
                    }
                })

                // if (!hasAllocationMethodID) {
                //     console.log('matching object error in false case', obj2)
                //     unMappedActivity.push({
                //         source: obj2.sourceName,
                //         activity: obj2.activityName
                //     })
                //     isChecked = false;
                // }
            }

            // here i check thr radio button 

        }
        if (isChecked == true) {
            return true;
        } else {
            return false;
        }
    }

    onSaveDraft(runStatus: any) {
        this.mappingDataWithActivityForm();
        let unMappedActivity: any;
        let isChecked = this.isFormValid(unMappedActivity);

        interface GroupedDataEntry {
            typeKeyID: any;
            processInputOutputID: any;
            allocationMethodID?: any;
            activityFormMap: { activityID: any; activityFormID: any; }[];
        }

        const groupedData: GroupedDataEntry[] = this.selectedFormData.reduce((result, obj) => {
            const existingEntry = result.find(entry => entry.processInputOutputID === obj.processInputOutputID);

            if (!existingEntry) {
                // Create a new entry
                const newDataEntry: GroupedDataEntry = {
                    typeKeyID: obj.typeKeyID,
                    processInputOutputID: obj.processInputOutputID,
                    activityFormMap: [{
                        activityID: obj.activityID,
                        activityFormID: obj.activityFormID
                    }]
                };

                // Add allocationMethodID if present
                if (obj.allocationMethodID) {
                    newDataEntry.allocationMethodID = obj.allocationMethodID;
                }

                result.push(newDataEntry);
            } else {
                // Add activityID and activityFormIDs to existing entry's activityFormMap
                existingEntry.activityFormMap.push({
                    activityID: obj.activityID,
                    activityFormID: obj.activityFormID
                });

                // Add allocationMethodID if present
                if (obj.allocationMethodID) {
                    existingEntry.allocationMethodID = obj.allocationMethodID;
                }
            }
            return result;
        }, []);

        let returnValue;
        this.processMappingController.saveProcessInputByRunID(this.currentOrgID, this.runID, groupedData).subscribe((res: any) => {
            returnValue = true;
        }, (error) => {
            returnValue = false;
        })
        if (returnValue) {
            return true;
        } else {
            return false;
        }
    }

    entityTypeWithoutRecord: any[] = [PROCESS_INPUT_ENUM.RAW_MATERIAL, PROCESS_INPUT_ENUM.INTERMEDIATE_PRODUCT];
    canAddRecord(type: 'INPUT' | 'OUTPUT', typeKeyID: string): boolean {
        if (type == 'INPUT') {
            return !this.entityTypeWithoutRecord.includes(typeKeyID);
        } else {
            return true;
        }
    }
}
