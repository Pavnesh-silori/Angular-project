import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import { Location } from '@angular/common';

import { FrequencyKeyIDEnum } from '@report-framework/enum/frequency.enum';
import { RecordConfigM } from '@report-framework/model/record-config.model';
import { ReportingPrefenceForReportDetail } from '@report-framework/model/reporting-preference.model';

import { ReportConfigController } from '@report-framework/controller/report-config.controller';
import { ReportingPreferenceController } from '@report-framework/controller/reporting-preference.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ToastrColor, ToastrService } from '@library/toastr-service';
import { ButtonLabelEnum, COMMON_CONSTANT, FormAction, InvalidForm,MatSelectSearchService, MaterialFormFieldAppearance, ResponseM } from '@library/tsc-common';
import { DateService } from '@library/date';
// / tsc-library

@Component({
	selector: 'app-report-config',
	templateUrl: './report-config.component.html',
	styles: [
	]
})
export class ReportConfigComponent implements OnInit {

	@Input() type: string = null;
	@Output() nextEmit: EventEmitter<number> = new EventEmitter<number>(null);
	@Output() reportingFrameworkEmit: EventEmitter<number> = new EventEmitter<number>();

	MaterialFormFieldAppearance = MaterialFormFieldAppearance;
	COMMON_CONSTANT = COMMON_CONSTANT;
	ButtonLabelEnum = ButtonLabelEnum;
	FormAction = FormAction; 
	FrequencyKeyIDEnum = FrequencyKeyIDEnum;

	currentOrgID: any;
	rootOrgID: any;
	configID: number = null;
	action: string = FormAction.CREATE;

	formDataFG: FormGroup;
	prefReportingFrameworkList = [new ReportingPrefenceForReportDetail];

	reportingSector: string = null;
	orgReportingPeriod: string;

	reportDetails: RecordConfigM;

	reporingPeriods: string[] = [];
	reportingPeriodList: any[] = [];

	intervalList: any[] = [];
	frequencyList: any[] = [];

	reportingFrameworkExistYearList: any[] = [];
	isReadOnly: boolean = false;
	isDisable: boolean = false;

	frameworkSearchUtil: MatSelectSearchService = new MatSelectSearchService(['reportFrameworkName']);

	constructor(
		private formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private reportConfigController: ReportConfigController,
		private reportingPreferenceController: ReportingPreferenceController,
		private storageService: StorageService,
		private toastrService: ToastrService,
		private dateService: DateService

	) { }

	ngOnInit(): void {
		this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));
		this.rootOrgID = parseInt(this.storageService.getStorage('rootOrgID'));

		this.activatedRoute.queryParams.subscribe((queryParam) => {
			this.configID = queryParam['configID'];
			if (this.configID != null) {
				this.action = FormAction.UPDATE;
				this.getReportDetailsByID();
				this.isReadOnly = true;
			}
		});

		this.formGroupInit();
		this.getReportFrameworkPrefByOrgID();
		this.generateRepotingYearList();
	}

	formGroupInit() {
		this.formDataFG = this.formBuilder.group({
			name: [, Validators.required],
			reportingFrameworkID: [, Validators.required],
            type: [, Validators.required],
			reportingYear: [, Validators.required],
			startDate: [, Validators.required],
			endDate: [, Validators.required],
			reportingInterval: [, Validators.required],
			sectorID: [],
		})
	}

	getReportFrameworkPrefByOrgID() {
		this.reportingPreferenceController.getReportingPreferencesByOrgID(this.rootOrgID).subscribe((res: ReportingPrefenceForReportDetail[]) => {
			this.prefReportingFrameworkList = res;

			// ngx mat select search
			this.frameworkSearchUtil.entityArr = this.prefReportingFrameworkList;
			this.frameworkSearchUtil.createSubscription();
		});
	}

	getSector(reportingFrameworkID) {
		this.reportingFrameworkExistYearList = [];
		this.formDataFG.controls['reportingYear'].reset(null);

		const framework = this.prefReportingFrameworkList.find(item => item.reportFrameworkID === reportingFrameworkID);
		this.reportingSector = framework['sectorName'];

		this.formDataFG.patchValue({
			reportingInterval: framework['reportIntervalKeyID'],
			sectorID: framework['sectorID'],
            type: framework['type'],
		});
		this.getReportingFrameworkExistPeriodList(reportingFrameworkID);
		this.showFrequency();
	}

	getReportingFrameworkExistPeriodList(reportingFrameworkID) {
		this.reportConfigController.getReportingFrameworkExistYear(this.currentOrgID,reportingFrameworkID).subscribe((res: any[]) => {
			this.reportingFrameworkExistYearList = res;

			if (this.action = FormAction.CREATE) {
				this.removeYearFromReportingPeriodList();
			}
		}, error => {
			console.log('error in getReportingFrameworkExistPeriodList',error);
		})
	}

	removeYearFromReportingPeriodList() {
		this.isDisable = false;
		this.reportingFrameworkExistYearList = this.reportingPeriodList.filter(year => 
			!this.reportingFrameworkExistYearList.some(year2 => year.name === year2.name));

		if (this.reportingFrameworkExistYearList.length == 0) {
			this.isDisable = true;
			this.toastrService.openToast('Your organization already created all reporting year report for this reporting framework', 'Please check your selected reporting framework', ToastrColor.INFO);
		}
	}

	getReportDetailsByID() {
		this.reportConfigController.getReportConfigByID(this.currentOrgID, this.configID).subscribe(res => {
			this.reportDetails = res;
			this.patchFormGroup();
		}, error => {
			console.log('error in getRecordDetails -', error);
		});
	}

	patchFormGroup() {
		const formattedStartDate = moment(this.reportDetails.startDate).format('MMM YYYY');
		const formattedEndDate = moment(this.reportDetails.endDate).format('MMM YYYY');

		this.formDataFG.patchValue({
			name: this.reportDetails.name,
			reportingFrameworkID: this.reportDetails.reportingFrameworkID,
			reportingYear: `${formattedStartDate} - ${formattedEndDate}`,
			startDate: this.reportDetails.startDate,
			endDate: this.reportDetails.endDate,
			reportingInterval: this.reportDetails.reportingIntervalKeyID,
			reportingPreferenceID: this.reportDetails.reportingPreferenceID
		});
		this.showFrequency();
	}

	async generateRepotingYearList() {
		try {
			this.reportingPeriodList = await this.dateService.getReportingPeriodList(this.rootOrgID, 2);
			this.reportingFrameworkExistYearList = this.reportingPeriodList;
		  } catch (error) {
			console.error('Error fetching reporting year list:', error);
		  }

		this.orgReportingPeriod = this.reportingPeriodList[0]['name'];
		this.showFrequency();
	}

	convertPeriodToStartAndEndDate(period) {

		const reportingYear = this.reportingPeriodList.find(item => item.name === period);

		this.formDataFG.patchValue({
			startDate: moment(reportingYear.startDate).format("YYYY-MM-DD"),
			endDate: moment(reportingYear.endDate).format("YYYY-MM-DD")
		});

		this.showFrequency();
	}

    showFrequency() {
        this.frequencyList = [];
        if (this.formDataFG.get('reportingInterval').value != null && this.formDataFG.get('reportingYear').value != null) {
            let metric = {
                startDate: this.formDataFG.get('startDate').value,
                endDate: this.formDataFG.get('endDate').value,
                interval: this.formDataFG.get('reportingInterval').value
            }
            this.reportConfigController.getFrequency(this.currentOrgID,metric).subscribe((res: any[]) => {
                this.frequencyList = res;
            },error => {
                console.log('Error in get frequency', error);
            });
        }
    }

	submit(buttonType) {
		if (this.formDataFG.invalid) {
			this.formDataFG.markAllAsTouched();
			this.toastrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
			return;
		}

		if (this.action == FormAction.CREATE) {
			this.reportConfigController.saveReportConfig(this.currentOrgID, this.formDataFG.value).subscribe((res: ResponseM) => {
				if (buttonType == ButtonLabelEnum.SAVE_BTN_LABEL) {
					this.location.back();
				} else {
					this.nextEmit.emit(res['response']);
				}
	
			}, error => {
				console.log('error in save report() -', error);
			});
		} else if (this.action == FormAction.UPDATE) {
			this.reportConfigController.updateReportConfig(this.currentOrgID, this.configID, this.formDataFG.value).subscribe((res: ResponseM) => {
				if (buttonType == ButtonLabelEnum.SAVE_BTN_LABEL) {
					this.location.back();
				} else {
					this.nextEmit.emit(res['response']);
				}
	
			}, error => {
				console.log('error in update report() -', error);
			});
		}
	}

	cancelBtn() {
		this.location.back();
	}

	public errorHandling = (control: string, error: string) => {
		return this.formDataFG.controls[control].hasError(error);
	}

}
