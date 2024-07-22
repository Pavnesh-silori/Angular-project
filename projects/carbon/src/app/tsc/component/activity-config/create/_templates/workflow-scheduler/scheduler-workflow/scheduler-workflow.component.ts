import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

import { isEqual } from 'lodash';
import * as moment from 'moment';

import { DATE_CONSTANT, DateService } from '@library/date';
import { Frequency } from '@library/tsc-common';
// tsc-library
import { FrequencyController } from '@carbon/controller/frequency.controller';
import { DateFilterComponent } from '@library/date';
import { StorageService } from '@library/storage-service';
import { MaterialFormFieldAppearance, MessageAlertIconEnum, MessageAlertTypeEnum } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-scheduler-workflow',
    templateUrl: './scheduler-workflow.component.html',
    styleUrls: ['./scheduler-workflow.component.scss']
})
export class SchedulerWorkflowComponent implements OnInit {
    Frequency = Frequency;
    messageAlertTypeEnum = MessageAlertTypeEnum;
    messageAlertIconEnum = MessageAlertIconEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

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

    frequency: any[] = [];
    frequencyType: string = 'days';

    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;

    @ViewChild('startDatePicker') startDatePicker!: MatDatepicker<any>;
    @ViewChild('endDatePicker') endDatePicker!: MatDatepicker<any>;

    today: Date = new Date();
    reportID: number;

    @Input() assignee: any[] = [];
    @Input() approver: any[] = [];

    @Output() emitFilter = new EventEmitter();

    enableWorkflowFC = new FormControl(false);

    initialObject: any;
    @Output() isEqual: EventEmitter<boolean> = new EventEmitter();

    isUpdate: boolean = false;
    disabled: boolean = false;
    endScheduleFC: FormControl = new FormControl(true, Validators.required);

    maxDays = moment(new Date()).endOf('year').dayOfYear();
    maxFrequencyValue: number = this.maxDays;

    constructor(
        public dateService: DateService,
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private frequencyController: FrequencyController,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.schedulerFGInit();
        this.getFrequency();
    }

    toggleReminder() {
        if (this.isReminderSetAC.value) {
            this.disabled = false;
            this.schedulerAC.enable();
            this.endScheduleFC.enable({ emitEvent: false });
            this.endScheduleFC.value ? this.endDateAC.disable() : this.endDateAC.enable();
        } else {
            this.disabled = true;
            this.schedulerAC.disable();
            this.endScheduleFC.disable({ emitEvent: false });
        }
    }

    toggleWorkflowStatus(value) {
        this.enableWorkflowFC.patchValue(value);
    }

    formatDate(date: Date, control) {
        let formatted = moment(date).format("YYYY-MM-DD");
        this.schedulerAC.get(control).patchValue(formatted);
    }

    schedulerFGInit() {
        this.schedulerFG = this.formBuilder.group({
            workflow: this.formBuilder.group({
                workflowEnabled: [false],
                activityConfigAssignee: this.formBuilder.group({
                    assigneeID: [[], Validators.required],
                }),
                activityConfigApprover: this.formBuilder.group({
                    approverID: [[]],
                }),
                activityConfigWorkflow: this.formBuilder.group({
                    autoApprove: [true, Validators.required]
                }),
                isReminderSet: [false, Validators.required],
            }),
            scheduler: this.formBuilder.group({
                reminderEnabled: [false],
                frequencyOffset: [, [Validators.required, Validators.min(0), Validators.max(this.maxFrequencyValue)]],
                frequencyID: [, Validators.required],
                startDate: [, Validators.required],
                endDate: [, Validators.required]
            }),
        });

        this.formGroupInitStateAndSubscriptions();
    }

    get autoApproveAC(): AbstractControl {
        return this.workflowAC.get('activityConfigWorkflow.autoApprove') as AbstractControl;
    }

    get approverAC(): AbstractControl {
        return this.workflowAC.get('activityConfigApprover.approverID') as AbstractControl;
    }

    get isReminderSetAC(): AbstractControl {
        return this.schedulerFG.get('workflow.isReminderSet');
    }

    get workflowAC(): FormGroup {
        return this.schedulerFG.get('workflow') as FormGroup;
    }

    get schedulerAC(): AbstractControl {
        return this.schedulerFG.get('scheduler') as FormGroup;
    }

    get startDateAC(): AbstractControl {
        return this.schedulerAC.get('startDate') as FormControl;
    }

    get endDateAC(): AbstractControl {
        return this.schedulerAC.get('endDate') as FormControl;
    }

    checkAutoApprove() {
        this.autoApproveAC.value ? this.approverAC.disable() : this.approverAC.enable();
    }

    formGroupInitStateAndSubscriptions() {
        this.schedulerFG.disable();
        this.toggleReminder();

        this.enableWorkflowFC.valueChanges.subscribe(status => {
            if (status) {
                this.schedulerFG.enable();
                this.checkAutoApprove();
                this.toggleReminder();
            } else {
                this.schedulerFG.disable({ emitEvent: false });
                this.endScheduleFC.disable({ emitEvent: false });
            }
        });

        this.autoApproveAC.valueChanges.subscribe((autoApprove) => autoApprove ? this.approverAC.disable() : this.approverAC.enable());

        this.isReminderSetAC.valueChanges.subscribe(() => {
            this.toggleReminder();
        });

        this.endScheduleFC.valueChanges.subscribe((isEnding) => {
            if (isEnding) {
                this.disabled = true;
                this.schedulerAC.get('endDate').disable();
            } else {
                this.disabled = false;
                this.schedulerAC.get('endDate').enable();
            }
        })
    }

    isControlDisabled(control): boolean {
        return this.schedulerAC.get(control).disabled;
    }

    patchWorkflow(isWorkflowEnabled, workflow, isSchedulerEnabled, scheduler) {
        this.isUpdate = true;

        this.enableWorkflowFC.patchValue(isWorkflowEnabled);
        if (isWorkflowEnabled && workflow != null) {

            let activityConfigAssignee = workflow['activityConfigAssignee'];
            let activityConfigApprover = workflow['activityConfigApprover'];
            let activityConfigWorkflow = workflow['activityConfigWorkflow'];

            this.workflowAC.patchValue({
                activityConfigAssignee: {
                    assigneeID: activityConfigAssignee['assigneeID'] ?? []
                },
                activityConfigApprover: {
                    approverID: activityConfigApprover['approverID'] ?? []
                },
                activityConfigWorkflow: {
                    autoApprove: activityConfigWorkflow['autoApprove'] ?? []
                }
            });
        };

        this.isReminderSetAC.patchValue(isSchedulerEnabled);
        if (isSchedulerEnabled && scheduler != null) {
            this.schedulerAC.patchValue({
                frequencyOffset: scheduler['frequencyOffset'],
                frequencyID: scheduler['frequencyID'],
                startDate: scheduler['startDate'],
            });
            if (scheduler['endDate'] == DATE_CONSTANT.MAX_DATE_YYYY_MM_DD) {
                this.endScheduleFC.patchValue(true);
            } else {
                this.endScheduleFC.patchValue(false);
                this.schedulerAC.patchValue({ endDate: scheduler['endDate'] });
            }
        }

        this.isEqual.next(true);
        this.initialObject = this.schedulerFG.getRawValue();

        this.schedulerFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.schedulerFG.getRawValue()));
        });

        this.enableWorkflowFC.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(isWorkflowEnabled, this.enableWorkflowFC.value));
        })
    }

    setMaxFrequency(frequencyKeyID) {
        switch (frequencyKeyID) {
            case Frequency.DAILY:
                this.maxFrequencyValue = this.maxDays;
                this.frequencyType = 'days';
                break;
            case Frequency.MONTHLY:
                this.maxFrequencyValue = 12;
                this.frequencyType = 'months';
                break;
            case Frequency.YEARLY:
                this.maxFrequencyValue = 1;
                this.frequencyType = 'year';
                break;
            default:
                console.log('undefined case encountered -', frequencyKeyID);
        }
    }

    getFrequency() {
        this.frequencyController.getAllFrequency()
            .subscribe((frequencyRes: any) => {
                this.frequency = frequencyRes;

                if (!this.isUpdate) {
                    let defaultFrequencyID = this.frequency.find((frequency) => frequency['frequencyKeyID'] == Frequency.DAILY)['frequencyID'];
                    this.schedulerAC.get('frequencyID').patchValue(defaultFrequencyID);
                }
            }, error => console.log('error in getFrequency -', error));
    }

    takeFocusAway(durationField) {
        this.durationField = document.getElementById(durationField);
        this.durationField.classList.remove('mat-focused', 'mat-form-field-should-float');
    }

    isValidForm(): boolean {
        if (this.schedulerFG.invalid) {
            this.schedulerFG.markAllAsTouched();
            console.log('invalid form -', this.schedulerFG);
            return false;
        }

        return true;
    }

    errorHandling = (control: string, error: string) => {
        return this.schedulerFG.get(control).hasError(error);
    }
}
