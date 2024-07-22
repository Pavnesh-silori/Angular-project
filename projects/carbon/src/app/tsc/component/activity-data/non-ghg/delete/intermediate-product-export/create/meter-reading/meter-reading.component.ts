import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { FuelService } from '@carbon/service/fuel.service';
import * as moment from 'moment';
import { isEqual } from "lodash";

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';
import { MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';

@Component({
    selector: 'app-meter-reading',
    templateUrl: './meter-reading.component.html',
    styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {

    @Input() activityConfig: any;
    activityDataFG: FormGroup;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    unitM: UnitM[] = [];
    fuelUnitList: UnitM[] = [];
    energyUnitM: UnitM[] = [];

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    activityData: any;
	isSource: boolean = false;
	sourceName: string = null;

	docList: any[] = [];

	isEqual: boolean = true;
	initialObject: any;
    action:any;

    fuelUnitTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    energyUnitSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    @ViewChild('fileInput') fileInput: ElementRef;
    @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private fb: FormBuilder,
        private formBuilder: FormBuilder,
        private fuelService: FuelService,
        private unitService: UnitService,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
        this.ActivityDataInit();
        this.getUnitList();
        this.addActivity();
    }

    ActivityDataInit() {
        this.activityDataFG = this.formBuilder.group({
            activityDataDetails: this.formBuilder.array([]),
        });
    }

    get activityDataFA(): FormArray {
        return this.activityDataFG.get('activityDataDetails') as FormArray;
    }

    addActivity() {
        this.activityDataFA.push(
            this.formBuilder.group({
                activityDataID: [],
                recordID: [],
                activityKeyID: [],
                precursorExported:[,Validators.required],
                dateRange: [,Validators.required],
                startDate:[],
                endDate:[],
                meterOpeningReading: [,Validators.required],
                meterClosingReading: [,Validators.required],
                meterUnitID: [,Validators.required],
            })
        );
    }

    pathFormData() {
        this.activityDataFA.push(
            this.formBuilder.group({
                recordID: this.activityData.recordID,
                sourceTypeID: this.activityData.sourceTypeID,
                sourceTypeName: this.activityData.sourceTypeName,
                sourceID: this.activityData.sourceID,
                sourceName: this.activityData.sourceName,
                dateRange: { startDate: moment(this.activityData['startDate']), endDate: moment(this.activityData['endDate']) },
                startDate: this.activityData.startDate,
                endDate: this.activityData.endDate,
                precursorExported: this.activityData.precursorExported,
                meterOpeningReading: this.activityData.meterOpeningReading,
                meterClosingReading: this.activityData.meterClosingReading,
                meterUnitID: this.activityData.meterUnitID,
                activityID: this.activityData.activityID,
            })
        );

        if (this.activityData.sourceName != null) {
            this.sourceName = this.activityData.sourceName;
            this.isSource = true;
        }

        // this.updateValidators();

        this.activityDataFA.valueChanges
            .subscribe(() => this.isEqual = isEqual(this.initialObject, this.activityDataFA.value));

        this.initialObject = this.activityDataFA.value;
        this.isEqual = true;
    }

    getUnitList() {
        forkJoin([
            this.fuelService.getFuelByActivityKeyID(ActivityKeyIDEnum.STATIONARY_COMBUSTION),
            this.unitService.getUnit([])
        ]).subscribe(([fuelUnitM, unitM]) => {
            this.fuelUnitList = fuelUnitM;
            this.unitM = unitM;

            this.energyUnitM = this.unitService.filterUnit(this.unitM, [UnitTypeKeyID.ENERGY]);

            // ngx mat select search
            this.fuelUnitTypeSearchUtil.entityArr = this.fuelUnitList;
            this.fuelUnitTypeSearchUtil.createSubscription();

            // ngx mat select search
            this.energyUnitSearchUtil.entityArr = this.energyUnitM;
            this.energyUnitSearchUtil.createSubscription();

            if (this.action == 'update') {
                this.activityData = this.activityConfig.activityData;
                this.pathFormData();
            }
        },
            error => {
                console.error('error in formInitialization -', error);
            });
    }

    fileUpload(event) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.openToast('Error', file, 'error');
                return;
            }

            if (file.size > 10485760) {
                this.toastrService.openToast(ToastrTitle.ERROR, 'fileSizeError', ToastrColor.ERROR);
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.noBillFileAvailable = false;
            this.billFileName = file['name'];
            this.fileInput.nativeElement.value = null;
            this.docUploadChange.emit(this.billFile);

        }
    }

    removeFile() {
        this.billFile = null;
        this.billFileName = '';
        this.noBillFileAvailable = true;
        this.fileInput.nativeElement.value = null;
        this.docUploadChange.emit(this.billFile);
    }

    uploadDoc() {
        this.fileInput.nativeElement.click();
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityDataFG.get(control).hasError(error);
    }
}