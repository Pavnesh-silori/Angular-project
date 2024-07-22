import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { ToastrService } from '@library/toastr-service';
import { DateFormatEnum, DateInputComponent, DateInputTypeEnum, DateService } from '@library/date';
import { COMMON_CONSTANT, FormErrorEnum, ImageErrorEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
// /tsc-library/
@Component({
    selector: 'app-create',
    templateUrl: './create-update.component.html',
    styles: []
})
export class CreateUpdateComponent implements OnInit {

    activityDataFG: FormGroup
    currentOrgID: any;
    sourceData: any;
    source: any;

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    formErrorEnum = FormErrorEnum;
    dateInputTypeEnum = DateInputTypeEnum;

    units: any;
    allUnit: any;

    startDate: string;
    endDate: string;

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;

    @ViewChild('fileInput') fileInput: ElementRef;
    @ViewChild('customDateInput') customDateInput: DateInputComponent;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private toastrService: ToastrService,
        private dateService: DateService,
        private storageService: StorageService,
        private unitService: UnitService
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');

        this.route.data.subscribe(data => {
            this.sourceData = data['activityForm'];
            console.log("source", this.sourceData)
            if (this.sourceData == ActivityKeyIDEnum.PROCESS_PRECURSOR_CONSUMPTION) {
                this.source = 'consumed'
            } else if (this.sourceData == ActivityKeyIDEnum.PROCESS_PRECURSOR_EXPORT) {
                this.source = 'exported'
            }
        });

        this.activityDataInit();
        this.getUnit();
    }

    dateInpChange() {
        let startDate = this.customDateInput.startDateFC.value;
        let endDate = this.customDateInput.endDateFC.value;

        if (startDate) {
            this.startDate = this.dateService.formatDate(startDate, DateFormatEnum.YYYY_MM_DD);
        }

        if (endDate) {
            this.endDate = this.dateService.formatDate(endDate, DateFormatEnum.YYYY_MM_DD);
        }
    }

    activityDataInit() {
        this.activityDataFG = this.formBuilder.group({
            quantity: [],
            unitID: [],
        });
    }

    async getUnit() {
        this.allUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
    }

    fileUpload(event) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_TYPE_ERROR, 'error');
                return;
            }

            if (file.size > COMMON_CONSTANT.MAX_IMAGE_SIZE) {
                this.toastrService.openToast('Error', ImageErrorEnum.INVALID_IMAGE_SIZE_ERROR, 'error');
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.noBillFileAvailable = false;
            this.billFileName = file['name'];
            console.log(this.billFileName);

            this.fileInput.nativeElement.value = null;
            // this.docUploadChange.emit(this.billFile);

        }
    }

    removeFile() {
        this.billFile = null;
        this.billFileName = '';
        this.noBillFileAvailable = true;
        this.fileInput.nativeElement.value = null;
        // this.docUploadChange.emit(this.billFile);
    }

    uploadDoc() {
        this.fileInput.nativeElement.click();
    }

    onSubmit() {

    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityDataFG.get(control).hasError(error);
    }
}