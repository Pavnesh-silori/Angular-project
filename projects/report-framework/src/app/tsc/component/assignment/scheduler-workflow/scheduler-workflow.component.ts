import { Component, ElementRef, EventEmitter, Inject, OnInit, Optional, Output, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { MatDatepicker } from '@angular/material/datepicker';

import { Moment } from 'moment';
import * as moment from 'moment';

import { LookupCodeEnum } from '@report-framework/enum/lookup-code.enum';

import { AssignmentController } from '@report-framework/controller/assignment.controller';

import { environment } from 'src/environments/environment';

// tsc-library
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance, LookupService, LookupValueM, MessageAlertTypeEnum, MessageAlertIconEnum, DialogEnum, FormAction, ButtonLabelEnum, ButtonTooltipEnum, MATERIAL_CONSTANT, MatSelectSearchService, COMMON_CONSTANT } from '@library/tsc-common';
import { DateFilterComponent } from '@library/date';
import { UserService } from '@library/user-service';
import { ToastrService, ToastrTitle, ToastrColor } from '@library/toastr-service';
// /tsc-library/

const reporting_framework_lookup_url = environment.REPORTING_FRAMEWORK_API_URL;

@Component({
    selector: 'app-scheduler-workflow',
    templateUrl: './scheduler-workflow.component.html',
    styleUrls: ['./scheduler-workflow.component.scss']
})
export class SchedulerWorkflowComponent implements OnInit {

    @Output() emitFilter = new EventEmitter();

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;
    ButtonTooltipEnum = ButtonTooltipEnum;
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    currentOrgID: any;

    schedulerFG: FormGroup;

    allUser: any;
    isSlideToggleChecked: boolean = true;
    isReminderChecked: boolean = false;
    isApproved: boolean = true;

    durationField: any;
    action: string;
    assigneData: any = [];
    title: string;
    reportConfigID: any = null;
    reportConfigIntervalID: any = null;
    configID: any = null;
    configIntervalID: any = null;

    frequency = ['YEARLY', 'MONTHLY']
    intervalList: any[] = [];

    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

    @ViewChild('startDatePicker') startDatePicker!: MatDatepicker<any>;
    @ViewChild('endDatePicker') endDatePicker!: MatDatepicker<any>;

    today: Date = new Date();
    reportID: number;

    userList: any[] = [];

    @ViewChild('header') header: ElementRef;
    @ViewChild('footer') footer: ElementRef;
    @ViewChild('body') body: ElementRef;

    userSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        @Optional() @Inject(MAT_DIALOG_DATA) private data,
        @Optional() private dialogRef: MatDialogRef<SchedulerWorkflowComponent>,
        private renderer: Renderer2,
        private assigneController: AssignmentController,
        private storageService: StorageService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private toastrService: ToastrService,
        private lookupService: LookupService,
    ) {
        if (data != null && data != undefined) {
            this.action = this.data['action'];
            this.assigneData = this.data['assignMetric'];
            this.dialogRef.disableClose = true;
            this.reportConfigID = this.data['configID'];
            this.reportConfigIntervalID = this.data['reportConfigID'];
            this.configID = this.data['configID'];
            this.configIntervalID = this.data['configIntervalID'];
        }
    }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.schedulerFGInit();
        if (this.action == FormAction.CREATE) {
            if (this.data.assignMetric) {
                this.addAssignMetric();
            }
            this.title = ButtonLabelEnum.CREATE_BTN_LABEL;
        } else if (this.action == FormAction.UPDATE) {
            this.title = ButtonLabelEnum.UPDATE_BTN_LABEL;
            this.patchData();
        } else {
            this.toastrService.openToast(ToastrTitle.ERROR, 'Unrecognized action!', ToastrColor.ERROR);
        }
        this.getUser();
        this.getFrequency();

    }

    ngAfterViewInit() {
        const headerHeight = this.header.nativeElement.offsetHeight;
        const footerHeight = this.footer.nativeElement.offsetHeight;
        const offsetHeight = 'calc(90vh - ' + (headerHeight + footerHeight + 24) + 'px)';

        this.renderer.setStyle(this.body.nativeElement, 'height', offsetHeight);
        this.renderer.setStyle(this.body.nativeElement, 'max-height', offsetHeight);

    }

    schedulerFGInit() {
        this.schedulerFG = this.formBuilder.group({
            workflow: this.formBuilder.group({
                assigneeID: [, Validators.required],
                approverID: [{ value: null, disabled: true }],
                isAutoApprove: [true, Validators.required],
                isReminderSet: [false, Validators.required]
            }),
            reminder: this.formBuilder.group({
                frequencyInterval: [{ value: null, disabled: true }],
                frequencyID: [{ value: null, disabled: true }],
                startDate: [{ value: null, disabled: true }],
                endDate: [{ value: null, disabled: true }]
            }),
            metric: []
        });
    }

    patchData() {
        this.assigneController.getSchedularDetails(this.currentOrgID, this.configID, this.configIntervalID).subscribe((res: any) => {
            this.schedulerFG.patchValue({
                workflow: res.workFlow,
                reminder: res.reminder,
            });
        })
    }

    addAssignMetric() {
        this.schedulerFG.get('metric').setValue(this.assigneData);
    }

    getUser() {
        this.userService.getCurrentOrgUserAccess(this.currentOrgID)
            .then(allUser => {
                this.allUser = allUser;

                allUser.map((user) => {
                    let metric = {
                        id: user.id,
                        name: (user.firstName ? user.firstName + ' ' + (user.lastName != null ? user.lastName : '') : ''),
                    };
                    this.userList.push(metric);
                });

                // ngx mat select search
                this.userSearchUtil.entityArr = this.userList;
                this.userSearchUtil.createSubscription();
            })
            .catch(error => {
                console.error('Error fetching user access:', error);
            });
    }

    async getFrequency() {
        let lookup = [
            {
                lookupCode: [LookupCodeEnum.FREQUENCY],
                lookupKey: []
            }
        ]
        this.intervalList = <LookupValueM[]>await this.lookupService.getLookup(reporting_framework_lookup_url, lookup);
    }

    openApprover() {
        const formArray = this.schedulerFG.get('workflow');
        const approverControl = formArray.get('approverID');
        if (this.isSlideToggleChecked) {
            this.isSlideToggleChecked = false;
            this.enableControlWithValidation(approverControl);
        } else {
            this.isSlideToggleChecked = true;
            this.disableControl(approverControl)
        }
    }

    openReminder() {
        const formArray = this.schedulerFG.get('reminder');
        const controlsToEnable = ['frequencyInterval', 'frequencyID', 'startDate', 'endDate']
            .map(controlName => formArray.get(controlName));

        if (this.isReminderChecked) {
            this.isReminderChecked = false;
            this.disableControls(controlsToEnable);
        } else {
            this.isReminderChecked = true;
            this.enableControlsWithValidation(controlsToEnable);
        }
    }


    disableControl(control: AbstractControl) {
        control.disable();
    }

    enableControlWithValidation(control: AbstractControl) {
        control.enable();
        this.addValidation(control, [Validators.required]);
    }

    enableControlsWithValidation(controls: AbstractControl[]) {
        controls.forEach(control => {
            control.enable();
            this.addValidation(control, [Validators.required]);
        });
    }

    disableControls(controls: AbstractControl[]) {
        controls.forEach(control => control.disable());
    }

    addValidation(control: AbstractControl, validators: ValidatorFn[]) {
        control.setValidators(validators);
        control.updateValueAndValidity();
    }

    openDatepicker() {
        this.pickerDirective.open();
    }

    openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    }

    monthSelectedHandlerForStartDate(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
        datepicker.close();
        const formArray = this.schedulerFG.get('reminder');
        formArray.get('startDate').setValue(normalizedMonthAndYear);
        this.formatDate('startDate');
        this.emitFilter.emit();
    }


    monthSelecktedHandler(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
        datepicker.close();

        const assigneeGroup = this.schedulerFG.get('workflow') as FormGroup;
        const reminderGroup = this.schedulerFG.get('reminder') as FormGroup;

        if (assigneeGroup && reminderGroup) {
            const startDateControl = reminderGroup.get('startDate');

            if (startDateControl) {
                startDateControl.setValue("just check");
                this.formatDate('startDate');
                this.emitFilter.emit();
            } else {
                console.error('startDate control not found in reminder');
            }
        } else {
            console.error('assignee or reminder not found in schedulerFG');
        }
    }

    monthSelectedHandlerForEndDate(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
        datepicker.close();
        const selectedDate = normalizedMonthAndYear.endOf('month');
        const formArray = this.schedulerFG.get('reminder');
        formArray.get('endDate').setValue(selectedDate);
        this.formatDate('endDate');
        this.emitFilter.emit();
    }

    formatDate(control: string) {
        const controlToPatch = this.schedulerFG.get('reminder.' + control);
        if (controlToPatch) {
            let date = moment(controlToPatch.value).format("YYYY-MM-DD");
            controlToPatch.patchValue(date);
        } else {
            console.error('Control not found:', control);
        }
    }

    takeFocusAway(durationField) {
        this.durationField = document.getElementById(durationField);
        this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
    }

    createScheduleWorkFlow() {
        if (this.schedulerFG.valid) {
            this.assigneController.createSchedular(this.currentOrgID, this.configID, this.configIntervalID, this.schedulerFG.value, this.reportID).subscribe((res: any) => {
                if (res.status == 'success') {
                    this.dialogRef.close(DialogEnum.SUCCESS_DR);
                }
            })
        } else {
            this.schedulerFG.markAllAsTouched();
        }
        console.log(this.schedulerFG.value);
    }

}
