import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

import * as moment from 'moment';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { WasteGeneratedService } from '@carbon/service/waste-generated.service';
import { ReplaySubject, Subject, Subscription, combineLatest } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';


// library
import { FormErrorEnum, InvalidForm, NocFileUploadEnum, TypeConfirmationDialog } from '@library/tsc-common';
import { MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { DateFormatEnum, DateInputTypeEnum, DateService } from '@library/date';
import { MatDialog } from '@angular/material/dialog';
import { CarbonDocumentController } from '@carbon/controller/document.controller';
import { StorageService } from '@library/storage-service';
import { ActivityKeyIDEnum } from '@carbon/enum/activity.enum';

@Component({
    selector: 'adhoc-waste-generated',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent {

    faPlus = faPlus;
    displayedColumns: any = ['name', 'accountingPeriod', 'wasteTreatmentMethod', 'wasteTreated'];

    dataSource: any = [];

    wasteTreatmentList: any = [];
    wasteTypeList: any = ['steel', 'paper', 'copper', 'waste-water'];

    carbonConstant = CARBON_CONSTANT;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    FormErrorEnum = FormErrorEnum;
    DateFormatEnum = DateFormatEnum;
    DateInputTypeEnum = DateInputTypeEnum;

    docFileList: any[] = [];
    docFileList1: any = [];

    activityDataFG: FormGroup;
    formDataFG: FormGroup;
    formDataArray: FormArray;
    activityData: any;
    activityID:any;

    currentOrgID: number;
    wasteTypeAndTreatmentMethod: any[] = [];

    billFile: File = null;
    billFileName: string;
    noBillFileAvailable: boolean = true;
    file: any;

    activityConfig: any;
    activityConfigData: any;

    wasteTreatmentList1: any[];

    wasteArray: any = [];
    action: string = 'create';

    unit: any[];
    conformationValue: any;

    dataInputMethodList: any[] = [];

    dataInputMethodKeyID: any;
    currentFormArr: FormArray;
    fb: any;
    filled: boolean = false;
    submit: boolean = false;

    addBoolean; boolean = false;
    addIndex: number;
    dataSubscription: any;

    wasteTypeArray: any = [];
    massUnit: any= [];

    unitFilterFC: FormControl = new FormControl();
    unitFilterUnsubscribe = new Subject<void>();
    unitFiltered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    wasteTypeMap: Map<number, string[]> = new Map<number, string[]>();
    name: any;

    dataSourceLength: any;
    areaUnit: any;
    fileIndexN: number;

    haveWT: boolean = false;
    dataInit: boolean = false;

    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
    @ViewChildren('fileInput') fileInputs: QueryList<ElementRef<HTMLInputElement>>;
    @ViewChildren('fileInput') fileInput: QueryList<ElementRef>;
    fileInputArr: ElementRef[];

    constructor(
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private carbonDocumentController: CarbonDocumentController,
        private wasteGeneratedService: WasteGeneratedService,
        private activatedRoute: ActivatedRoute,
        private toastrService: ToastrService,
        private unitService: UnitService,
        private router: Router,
        private dateService: DateService,
        private storageService: StorageService,
    ) { }

    async ngOnInit(): Promise<void> {
        this.currentOrgID = parseInt(this.storageService.getStorage(['currentOrgID']));
        combineLatest([this.activatedRoute.queryParams, this.activatedRoute.params]).subscribe(([queryParam2, param2]) => {
            this.action = queryParam2['action'];
            this.activityID = queryParam2['activityID']
        });
        this.createForm();
        this.getUnit();
        await this.getAllWasteTypeAndTreatmentMethod();

    }

    dateInputSub: Subscription;
    fileInputLoadSub: Subscription;
    ngAfterViewInit() {
        this.fileInputLoadSub = this.fileInput.changes.subscribe(() => this.updateFileInputArray());
        this.updateFileInputArray();
    }

    private updateFileInputArray() {
        if (this.fileInput && this.fileInput.length > 0) {
            this.fileInputArr = this.fileInput.toArray();
        }
    }

    createForm() {
        this.activityDataFG = this.formBuilder.group({
            wasteTreatedDetails: this.formBuilder.array([])
        });
        this.addFormControls();
        this.getTreatmentMethodsForSelectedWasteType();
        this.updateValidators()
    }

    updateValidators() {
        this.currentFormArr = this.activityDataFG.get('wasteTreatedDetails') as FormArray;
        for (let i = 0; i < this.currentFormArr.controls.length; ++i) {
            let item = this.currentFormArr.controls[i];
            this.removeValidators(item);
            item.valueChanges.subscribe(() => {
                this.removeValidators(item);
                this.isFormFilled(item);
                this.submit = false;
                if (this.filled) {
                    this.submit = true;
                    this.addValidators(item);
                }
                this.filled = false;
            });
        }
    }


    isFormFilled(formGroup) {
        if (formGroup.get('wasteTypeID').value != null) this.filled = true;
        if (formGroup.get('accountingPeriod').value != null) this.filled = true;
        if (formGroup.get('wasteTreatmentMethodID').value != null) this.filled = true;
        if (formGroup.get('wasteTreated').value != null) this.filled = true;
        if (formGroup.get('wasteTreatedUnitID').value != null) this.filled = true;
    }

    removeValidators(formGroup) {

        formGroup.get('wasteTypeID').clearValidators();
        formGroup.get('accountingPeriod').clearValidators();
        formGroup.get('wasteTreatmentMethodID').clearValidators();
        formGroup.get('wasteTreated').clearValidators();
        formGroup.get('wasteTreatedUnitID').clearValidators();

        this.updateValueAndValidity(formGroup);

    }

    addValidators(formGroup) {
        formGroup.get('wasteTypeID').addValidators([Validators.required]);
        formGroup.get('accountingPeriod').addValidators([Validators.required]);
        formGroup.get('wasteTreatmentMethodID').addValidators([Validators.required]);
        formGroup.get('wasteTreated').addValidators([Validators.required, Validators.min(0)]);
        formGroup.get('wasteTreatedUnitID').addValidators([Validators.required]);

        this.updateValueAndValidity(formGroup);

    }

    addFormControls() {
        this.dataSource.forEach((DataSource,index) => {
            let name = "";
            this.wasteTypeArray.forEach((res) => {
                if (DataSource.name == res.id) {
                    name = res.name;
                }
            });

            this.wasteTreatedDetailsFA.push(
                this.formBuilder.group({
                    wasteTypeID: [DataSource.name],
                    activityDataID: [],
                    startDate: ['null',],
                    endDate: ['null',],
                    accountingPeriod: [,],
                    wasteTreatmentMethodID: [,],
                    wasteTreated: [, [Validators.min(0)]],
                    wasteTreatedUnitID: [],
                    docID: [],
                    docType: [],
                    docName: [],
                    docPath: [],
                    docSize: [],
                    file: [],
                    rows: []
                })
            );
            this.docFileList = new Array(index).fill(null);
        })
    }

    updateValueAndValidity(formGroup) {
        formGroup.get('wasteTypeID').updateValueAndValidity({ emitEvent: false });
        formGroup.get('accountingPeriod').updateValueAndValidity({ emitEvent: false });
        formGroup.get('wasteTreatmentMethodID').updateValueAndValidity({ emitEvent: false });
        formGroup.get('wasteTreated').updateValueAndValidity({ emitEvent: false });
        formGroup.get('wasteTreatedUnitID').updateValueAndValidity({ emitEvent: false });

    }

    updateTheForm() {
        if (this.action === 'update') {
            this.dataInit = true;
            const formGroup = this.formBuilder.group({
                activityDataID: [this.activityData.activityDataID],
                wasteTypeID: [this.activityData.wasteTypeID],
                activityID: [this.activityData.activityDataID],
                startDate: [this.activityData.startDate],
                endDate: [this.activityData.endDate],
                accountingPeriod: [{ startDate: moment(this.activityData.startDate), endDate: moment(this.activityData.endDate) }],
                wasteTreatmentMethodID: [this.activityData.wasteTreatedMethodID],
                wasteTreated: [this.activityData.wasteTreated],
                wasteTreatedUnitID: [this.activityData.wasteTreatedUnitID],
                docID: this.activityData.file ? this.activityData.file.id : null,
                docName: this.activityData.file ? this.activityData.file.name : null,
                docPath: this.activityData.file ? this.activityData.file.path : null,
                docType: [],
                docSize: [],
                rows: [],
            });
            this.wasteTreatedDetailsFA.push(formGroup);
            this.dataSource = [{ name: this.activityData.wasteTypeID }];
            this.getTreatmentMethodsForSelectedWasteType();
        }
    }

    getTreatmentMethodsForSelectedWasteType() {
        if(!this.haveWT){
            return;
        }
        this.dataSource.forEach((wasteType) => {
            const treatmentMethods = this.wasteTypeAndTreatmentMethod[wasteType.name - 1].treatmentMethod;
            const formArray = this.activityDataFG.get('wasteTreatedDetails') as FormArray;
            if (this.action == 'update') {
                const formGroup = formArray.at(0) as FormGroup;
                formGroup.get('rows').setValue(treatmentMethods);
            } else {
                const formGroup = formArray.at(this.dataSourceLength) as FormGroup;
                this.dataSourceLength++;
                formGroup.get('rows').setValue(treatmentMethods);
            }
        })

    }

    async getAllWasteTypeAndTreatmentMethod(): Promise<void> {
        try {
            this.wasteTypeAndTreatmentMethod = await this.wasteGeneratedService.getAllWasteTypes(this.activityID);
            this.haveWT = true;
            if(this.dataInit) {
                this.getTreatmentMethodsForSelectedWasteType();
            }
        } catch (error) {
            console.error('Error fetching waste type and treatment method data:', error);
        }
    }

    async getUnit() {
        this.massUnit = await this.unitService.getUnit([`type:${UnitTypeKeyID.MASS}`]);
    }

    isValid = () => { return !this.activityDataFG.invalid; }

    getTreatmentMethods(event: any, index: number) {
        const treatmentMethods = this.wasteTypeAndTreatmentMethod[event.value - 1]?.treatmentMethod;
        const formArray = this.activityDataFG.get('wasteTreatedDetails') as FormArray;
        const formGroup = formArray.at(index) as FormGroup;
        formGroup.get('rows').setValue(treatmentMethods);
    }


    getTreatmentMethods2(index: number) {
        this.wasteTreatmentList = [];
        this.wasteTreatmentList1[index].forEach((res) => {
            this.wasteTreatmentList.push(res);
        })
    }

    get wasteTreatedDetailsFA(): FormArray {
        return this.activityDataFG.get('wasteTreatedDetails') as FormArray;
    }

    // Add a new waste Type

    add() {
        this.name = '';
        this.wasteTreatedDetailsFA.push(this.onsubmit1({ name: '4' }));
        this.docFileList = new Array(this.docFileList.length+1).fill(null);
        this.updateValidators();
    }

    onsubmit1(item?) {
        return this.formBuilder.group({
            wasteTypeID: [item?.name],
            activityDataID: [],
            startDate: ['null'],
            endDate: ['null'],
            accountingPeriod: [,],
            wasteTreatmentMethodID: [,],
            wasteTreated: [,],
            wasteTreatedUnitID: [],
            docID: [],
            docType: [],
            docName: [],
            docPath: [],
            docSize:[],
            file: [],
            rows: []
        });
    }

    onDeleteRow(index: number): void {
        const wasteDetailArray = this.activityDataFG.get('wasteTreatedDetails') as FormArray;
        wasteDetailArray.removeAt(index);
        this.docFileList.splice(index,1);
    }


    // patch  a startDate and Date in formArray

    formatDate() {
        this.wasteTreatedDetailsFA.controls.forEach((control: FormGroup) => {
            const accountingPeriodControl = control.get('accountingPeriod');
            if (accountingPeriodControl) {
                let date = accountingPeriodControl.value;
                if (date && date.startDate && date.endDate) {
                    let startDate = moment(date.startDate).format("YYYY-MM-DD");
                    let endDate = moment(date.endDate).format("YYYY-MM-DD");
                    control.get('startDate').patchValue(startDate);
                    control.get('endDate').patchValue(endDate);
                }
            }
        });
    }

    // ng on changes calls, here i manage create and update calls
    async getConfiguration(configuration) {
        if(this.haveWT == false){
            await this.getAllWasteTypeAndTreatmentMethod();
        }
        this.conformationValue = configuration;
        if (this.action == 'update') {
            this.activityData = configuration.activityData;
            this.updateTheForm();
        } else {
            const wasteTypes = configuration.activityConfigData.wasteTypes.flat();
            this.dataSource = [];
            wasteTypes.forEach((res) => {
                this.dataSource.push({ name: res })
            })
            this.dataSourceLength = 0;
            this.createForm();
        }
    }

    getActivityData() {
        const formArray = this.activityDataFG.get('wasteTreatedDetails') as FormArray;
        formArray.controls.forEach((control: FormGroup, index: number) => {
            if (control.get('wasteTreatmentMethodID').value == null) {
                this.docFileList.splice(index,1);
            }
        });

        this.activityDataFG.markAllAsTouched();
        if (this.activityDataFG.invalid || this.submit == false) {
            this.toastrService.openToast('Error', 'Fill at least one waste type detail', 'error');
            return;
        } else {
            return {
                'activityData': this.activityData,
                'activityDataFile': this.docFileList
            }
        }
    }

    updateActivityData() {
        return {
            'activityData': this.activityData,
        }
    }

    isValidForm(): boolean {
        if (this.activityDataFG.invalid) {
            const fromArray = this.activityDataFG.get('wasteTreatedDetails') as FormArray;
            fromArray.markAllAsTouched();
            // this.activityDataFG.markAllAsTouched();
            return false;
        }

        this.activityData = {};
        const validControls: FormGroup[] = [];
        const formArray = this.activityDataFG.get('wasteTreatedDetails') as FormArray;

        formArray.controls.forEach((control: FormGroup) => {
            if (control.get('wasteTreatmentMethodID').value != null) {
                control.get('rows').setValue(null);
                validControls.push(control);
            }
        });
        const newFormArray = new FormArray(validControls);
        this.activityData = JSON.parse(JSON.stringify(newFormArray.value));
        return true;
    }

    validity: EventEmitter<boolean> = new EventEmitter<boolean>();
    activityDataValidity() {
        this.activityDataFG.valueChanges.subscribe(() => this.validity.emit(!this.activityDataFG.invalid));
    }

    fileUpload(event, formGroup: FormGroup, index: number) {
        let file = event.target.files[0];
        if (file) {

            if (file.type !== 'application/pdf') {
                this.toastrService.error(NocFileUploadEnum.INVALID_FILE_TYPE_ERROR)
                return;
            }

            if (file.size > NocFileUploadEnum.MAX_FILE_SIZE) {
                this.toastrService.error(NocFileUploadEnum.INVAID_FILE_SIZE_ERROR)
                return;
            }

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e: any) => { };

            this.billFile = file;
            this.billFileName = file['name'];

            formGroup.get('docName').patchValue(file['name']);
            formGroup.get('docSize').patchValue(this.getFileSizeWithUnit(file['size']));

            this.docFileList[index] = file;

            if (this.action == 'update') {
                this.fileCreateUpdate(formGroup);
            }
        } else {
            this.toastrService.error('Please upload a file!');
            return;
        }
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

    removeFile(formGroup: FormGroup, index: number) {
        if (this.action == 'create') {
            this.fileInputArr[index].nativeElement.value = null;
        }

        this.billFile = null;
        this.billFileName = '';

        formGroup.get('docName').reset();
        formGroup.get('docSize').reset();
        formGroup.get('docPath').reset(null);
        formGroup.get('docID').reset();

        this.docFileList[index] = this.billFile;
    }

    toFormData(): FormData {
        const formData = new FormData();
        formData.append('payload', this.billFile);

        return formData;
    }

    fileCreateUpdate(formGroup: FormGroup) {
        if (formGroup.get('docID').value == null) {
            this.carbonDocumentController.createDocument(this.currentOrgID, formGroup.get('activityDataID').value, ActivityKeyIDEnum.WASTE_GENERATED_IN_OPERATIONS,
                this.toFormData()).subscribe((response) => {
                    this.file = response['response'];
                    this.updateFileFormControl(formGroup);
                }, error => {
                    console.log("error in fileCreate -", error);
                });
        } else {
            this.carbonDocumentController.updateDocument(this.currentOrgID, formGroup.get('docID').value, this.toFormData())
                .subscribe((response) => {
                    this.file = response['response'];
                    this.updateFileFormControl(formGroup);
                }, error => {
                    console.log("error in fileUpdate -", error);
                });
        }
    }

    updateFileFormControl(formGroup) {
        formGroup.get('docID').patchValue(this.file.id);
        formGroup.get('docName').patchValue(this.file.name);
        formGroup.get('docPath').patchValue(this.file.path);
    }

    deleteConfirmation(formGroup: FormGroup, index) {
        const dialogRef = this.dialog.open(TypeConfirmationDialog, {

            minWidth: '650px',
            maxWidth: '600px',
            data: {
                icon: 'delete',
                header: 'Are you sure you want to delete ?',
                body: '<p class = "ps-1"><strong class="pe-1"> Note:</strong>This file will be deleted permanently and you won`t be able to track it`s progress.</p><span class="fw-bold ps-1">Are you sure you want to delete?</span>',
                confirmationInput: 'DELETE',
                buttonOne: 'Cancel',
                buttonTwo: 'Delete'
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.deleteDocument(formGroup.get('docID').value, formGroup, index);
            } else {
                dialogRef.close()
            }
        });
    }

    deleteDocument(docID, formGroup, index) {
        this.carbonDocumentController.deleteDocument(this.currentOrgID, docID).subscribe(res => {
            this.removeFile(formGroup, index);
        }, error => {
            console.log("error in deleteDocument -", error);
        });
    }


    public errorHandling = (control: string, error: string) => {
        return this.activityDataFG.controls[control].hasError(error);
    }
    // custome  button to check the validation of all input field

    // onSubmit() {
    //     this.activityDataFG.markAllAsTouched();
    //     if (this.activityDataFG.invalid || this.submit == false) {
    //         this.utility.openToast('Error', 'Fill at least one waste type detail', 'error');
    //         return;
    //     }
    // }

}