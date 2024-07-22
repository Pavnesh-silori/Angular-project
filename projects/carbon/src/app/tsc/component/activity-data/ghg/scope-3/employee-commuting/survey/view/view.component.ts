import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

// tsc-library
import { StorageService } from '@library/storage-service'
import { DialogOneComponent } from '@library/tsc-common';
import { DialogOneEnum } from '@library/tsc-common';
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
// tsc-library

import { EmployeeSurveyController } from '@carbon/controller/employee-survey.controller';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})
export class ViewComponent {
	buttonFlag = false;

	surveyStatus: any;
	surveyID: any;

	currentOrgID: any;
	@ViewChild('refreshBtn') refreshBtn: ElementRef;

	constructor(
		private dialog: MatDialog,
		private activatedRoute: ActivatedRoute,
        private employeeSurveyController: EmployeeSurveyController,
		private storageService: StorageService,
		private toastrService: ToastrService
	) { }

	ngOnInit() {
		this.currentOrgID = this.storageService.getStorage(['currentOrgID']);
		this.activatedRoute.params.subscribe((param) => {
			this.surveyID = param['surveyID'];
		});
	}

	getStatus($event) {
		if ($event == 'COMPLETED') {
			this.buttonFlag = false;
		}
		else {
			this.buttonFlag = true;
		}
	}

	endSurvey() {
		const dialogRef = this.dialog.open(DialogOneComponent, {
			maxWidth: '550px',
			maxHeight: '600px',
			data: {
				type: DialogOneEnum['DELETE'],// type of dialog
				icon: 'warning',// material icon
				header: ' Are you sure you want to end survey?',//heading of dialog
				body: 'NOTE: No further responses will be submitted or accepted. Are you sure you want to end survey?',// body of dialog
				buttonOne: 'Cancel',// button label on reject action
				buttonTwo: 'End'// button label on Success action
			}
		});

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result) {
					this.employeeSurveyController.endSurvey(this.currentOrgID, this.surveyID).subscribe(
						res => {
							this.refreshBtn.nativeElement.click();
						},
						error => {
							console.error('Error ending survey:', error);
						}
					);
				}
			})
	}

	sendReminder() {
		const dialogRef = this.dialog.open(DialogOneComponent, {
			maxWidth: '450px',
			maxHeight: '600px',
			data: {
				type: DialogOneEnum['CONFIRMATION'],
				icon: 'timer',
				header: 'Send Reminder',
				body: 'An email reminder will be sent to all employees who have not yet completed their forms.',
				buttonOne: 'Cancel',
				buttonTwo: 'Send'
			}
		});

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result) {
					this.employeeSurveyController.sendReminderSurvey(this.currentOrgID, this.surveyID).subscribe(
						res => {
							this.refreshBtn.nativeElement.click();
						},
						error => {
							console.log('Error reminer survey', error)
						},
					);
				}
			})
	}

}


