import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PreferenceController } from '@carbon/controller/preference.controller';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, COMMON_CONSTANT, MatSelectSearchService, MaterialFormFieldAppearance, NocFileUploadEnum } from '@library/tsc-common';
import { ProductAndServiceController } from '@netzero/controller/product-and-service.controller';
import { environment } from 'src/environments/environment';
import { ToastrColor, ToastrService, ToastrTitle } from '@library/toastr-service';

@Component({
    selector: 'app-configure-records',
    templateUrl: './configure-record.component.html',
    styleUrls: ['./configure-record.component.scss']
})


export class ConfigureRecordsComponent implements OnInit {

    form: FormGroup;
    guidelines: any[] = [
        {
            "title": "For multi select fields, use comma (,) as the delimiter in each cell."
        },
        {
            "title": "Product code is an internal code used to identify the product in your organization."
        },
        {
            "title": "Product name is a mandatory field while product description is optional."
        },
        {
            "title": "Product type is a single select field which can be either ‘Purchased’, ‘Sold’ or ‘Traded’."
        },
        {
            "title": "Product category is a multi select field."
        },
        {
            "title": "CBAM compliant field is a ‘Yes’ or ‘No’ field. Only products whose type is ‘Sold’ and category is ‘Finished good’ can be CBAM compliant."
        },
        {
            "title": "All unique ID codes are optional fields. CN code is mandatory only for CBAM compliant products."
        },
        {
            "title": "Emission factor database related fields are optional while importing. If you still wish to import EFDB related fields, following fields are mandatory for the respective databases for emission calculations:",
            "details": [
                {
                    "database": "UK Defra",
                    "requirements": "Material type, Material origin type"
                },
                {
                    "database": "Ecoinvent",
                    "requirements": "Product classification"
                }
            ]
        },
        {
            "title": "While mapping the EFDB related fields is optional, for each product, make sure to map all respective fields for a database that you want to use for calculations."
        }
    ];
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    preference: any[] = [];
    currentOrgID: string | number;

    emfSearchUtil: MatSelectSearchService = new MatSelectSearchService(['emissionFactorSourceName']);
    COMMON_CONSTANT = COMMON_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    isDisabled: boolean = false;

    @Input() type: string = null;
    // @Output() nextEmit: EventEmitter<number> = new EventEmitter<number>(null);
    @Output() configureRecordsEmit = new EventEmitter<any>();
    // file: string | Blob;
    @ViewChild('fileInput') fileInput: ElementRef;
    reporting_framework = environment.REPORTING_FRAMEWORK_API_URL;
    NocFileUploadEnum = NocFileUploadEnum;

    isFileUpload: any;
    fileName: string = '';
    fileSize: string = '';
    progress: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private preferenceController: PreferenceController,
        private storageService: StorageService,
        private location: Location,
        private productAndServiceController: ProductAndServiceController,
        private http: HttpClient,
        private toasterService: ToastrService

    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.getOrgPreference();
        this.createForm();
        // Initialization logic goes here
    }

    onDragOver(event: any) {

    }

    onDrop(event: any) {

    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (!this.isFileAllowed(file.name)) {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.INVALID_FILE_TYPE_ERROR, ToastrColor.ERROR);
                return;
            } else if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, NocFileUploadEnum.INVAID_FILE_SIZE_ERROR, ToastrColor.ERROR);
                return;
            }

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                this.isFileUpload = file;
                this.fileName = file.name;
                this.fileSize = this.getFileSizeWithUnit(file.size);
            });
            reader.addEventListener('loadend', () => this.progress = false);
            reader.addEventListener('abort', () => {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, 'Something went wrong!', ToastrColor.ERROR);

            });
            reader.addEventListener('error', () => {
                this.resetFileInput();
                this.toasterService.openToast(ToastrTitle.ERROR, 'Error while uploading file!', ToastrColor.ERROR);
            });
        }
    }

    resetFileInput() {
        this.fileName = null;
        this.isFileUpload = null;
        if (this.fileInput && this.fileInput.nativeElement)
            this.fileInput.nativeElement.value = null;
    }

    isFileAllowed(fileName: string) {
        let isFileAllowed = false;
        const allowedFiles = ['.xlsx', '.xls'];
        const regex = /(?:\.([^.]+))?$/;
        const extension = regex.exec(fileName);
        if (undefined !== extension && null !== extension) {
            allowedFiles.forEach(extnsn => {
                if (extnsn === extension[0]) {
                    isFileAllowed = true;
                }
            });
        }
        return isFileAllowed;
    }

    getFileSizeWithUnit(billFileSize: number): string {
        const fileSizeInKB = Math.round(billFileSize / 1024);
        const fileSizeInMB = Math.round(fileSizeInKB / 1024);
        const fileSizeInGB = Math.round(fileSizeInMB / 1024);

        if (fileSizeInGB > 1) {
            return fileSizeInGB + ' GB';
        } else if (fileSizeInMB > 1) {
            return fileSizeInMB + ' MB';
        } else {
            return fileSizeInKB + ' KB';
        }
    }

    hasFile(): boolean {
        return this.isFileUpload;
    }

    toFormData(): FormData {
        const formData = new FormData();
        if (this.isFileUpload) {
            formData.append('file', this.isFileUpload);
        } else {
            formData.append('file', null);
        }
        return formData;
    }

    uploadFile() {
        try {
            this.productAndServiceController.bulkUploadProduct(this.currentOrgID, this.toFormData())
                .subscribe((response) => {
                    if (response['title'] == 'Success') {
                        this.toasterService.openToast(ToastrTitle.SUCCESS, response['message'], ToastrColor.SUCCESS);
                        this.configureRecordsEmit.emit(response['response']);
                    } else if (response['title'] == 'Error') {
                        this.toasterService.openToast(ToastrTitle.ERROR, response['message'], ToastrColor.ERROR);
                    }
                });
        } catch (error) {
            console.log("error", error);
        }
    }

    async getOrgPreference() {
        this.preference = [];
        this.preferenceController.getOrgPreference(this.currentOrgID)
            .subscribe(preferenceRes => {
                let foundPreferences = preferenceRes['activity'].filter(activity => activity.activityKeyID === ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES);
                if (foundPreferences.length > 0) {
                    this.preference = this.abstractEmissionFactorSourceInfo(foundPreferences);
                    this.emfSearchUtil.entityArr = this.preference;
                    this.emfSearchUtil.createSubscription();
                }
            });
    }

    abstractEmissionFactorSourceInfo(data): any {
        return data.flatMap(activity =>
            activity.calculationApproach.flatMap(approach =>
                approach.emissionFactorSource.map(source => ({
                    emissionFactorSourceID: source.id,
                    emissionFactorSourceName: source.name,
                    emissionFactorSourceKeyID: source.keyID,

                    calculationApproachID: approach.id,
                    calculationApproachName: approach.name,
                    calculationApproachKeyID: approach.keyID,

                    activityID: activity.activityID,
                    activityName: activity.activityName,
                    activityKeyID: activity.activityKeyID,
                }))
            )
        );
    }

    createForm() {
        try {
            this.form = this.formBuilder.group({
                isEmissionFactorMapped: true,
                emissionFactorSourceKeyID: []
            });
        } catch (error) {
            console.log("error", error);
        }
    }

    getTemplate() {
        let filters = this.getEmissionFactorMappedValue() ? { filter: `emissionFactorSourceKeyID:${this.getEmissionFactorSourceKeyIDsValue()}` } : {};

        this.http.get(`${environment.COMMON_API_URL}organizations/${this.currentOrgID}/product/sample-file`, { responseType: 'blob', observe: 'response', params: filters })
            .subscribe({
                next: (response) => {
                    const filename = this.extractTemplateFileName(response.headers.get('Content-Disposition')) || 'downloadedFile.xlsx';
                    this.downloadTemplateFile(response.body, filename);
                },
                error: (error) => console.error("error", error)
            });
    }

    extractTemplateFileName(contentDisposition: string | null): string | null {
        if (!contentDisposition) return null;
        const match = contentDisposition.match(/filename="?(.+)"?/);
        return match && match[1] ? match[1] : null;
    }

    downloadTemplateFile(blob: Blob | null, filename: string) {
        if (!blob) return;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }

    getEmissionFactorMappedValue(): boolean {
        return this.form.get('isEmissionFactorMapped').value;
    }

    getEmissionFactorSourceKeyIDsValue(): any {
        return this.form.get('emissionFactorSourceKeyID').value;
    }

    cancelBtn() {
        this.location.back();
    }

    submit() {
        if (this.hasFile()) {
            this.uploadFile();
        }
    }

    handleDragEnter() {
        // this.dragging = true;
        // if (this.disabled) {
        //   this.activeColor = 'red';
        // } else {
        //   this.activeColor = 'green';
        // }
    }

    handleDragLeave() {
        // this.dragging = false;
    }

    handleDrop(e) {
        e.preventDefault();
        // this.dragging = false;
        this.handleInputChange(e);
    }

    handleInputChange(e) {
        // if (this.disabled) {
        //   this.showMessage = true;
        //   this.message = 'FILE_SELECT_NOT_ALLOWED';
        //   return;
        // }
    }

}