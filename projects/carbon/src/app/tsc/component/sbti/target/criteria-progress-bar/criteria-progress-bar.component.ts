import { Component, OnInit } from '@angular/core';

import { SbtiCriteria } from '@carbon/model/sbti.model';

import { SbtiController } from '@carbon/controller/sbti.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
	selector: 'app-criteria-progress-bar',
	templateUrl: './criteria-progress-bar.component.html',
	styleUrls: ['./criteria-progress-bar.component.scss']
})
export class CriteriaProgressBarComponent implements OnInit {
	rootOrgID: any;

	sbtiCriteriaM = new SbtiCriteria();
	value = 'linear-gradient(to right, rgb(223 70 70), rgb(230 93 66), rgb(219 84 37))';
	stopperValue: number = 18; // because 7 questions are checked by default
	totalCriteriaQuestions: number = 37; // total checklist conditions
	totalCheckedQuestions: number = 7; // whose criteria was met already //C2,C23,C25,C27,C28,C29,C37
	showNearTermInfo = false;
	showLongTermInfo = false;

	constructor(
		private sbtiController: SbtiController,
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage('rootOrgID');
		this.getSbtiCriteriaCheckList();
	}

	async getSbtiCriteriaCheckList() {
		await this.sbtiController.getSbtiCriteriaCheckList(this.rootOrgID).subscribe(response => {
			this.sbtiCriteriaM = response;
			if (this.sbtiCriteriaM['isSbtiBaseYear'] && this.sbtiCriteriaM['isSbtiSettings']) { //C1,C3,C12,C35
				this.totalCheckedQuestions = this.totalCheckedQuestions + 4;
			}
			if (this.sbtiCriteriaM['isSbtiSettings']) { //C11,C13,C14,C15,C16,C18,C30,C32,C33,C34,C36
				this.totalCheckedQuestions = this.totalCheckedQuestions + 11;
			}
			if (this.sbtiCriteriaM['isAnyTargetCreated']) { // C10,C17
				this.totalCheckedQuestions = this.totalCheckedQuestions + 2;
			}
			if (this.sbtiCriteriaM['isAnyNearTermReductionTarget']) { //C20
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			}
			if (this.sbtiCriteriaM['isNearAndLongTermTargetForScope3']) { //C24,C26
				this.totalCheckedQuestions = this.totalCheckedQuestions + 2;
			}
			if (this.sbtiCriteriaM['isNearAndLongTermTargetForScope1And2']) { //C21,C22
				this.totalCheckedQuestions = this.totalCheckedQuestions + 2;
			}
			if (this.sbtiCriteriaM['isAnyNearAndLongTermTarget']) { //C7,C19,C31
				this.totalCheckedQuestions = this.totalCheckedQuestions + 3;
			}
			if (this.sbtiCriteriaM['s3LongTermReductionTarget']) { //C6
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			}
			// C4 
			if (this.sbtiCriteriaM['s3EmissionsPct'] < 40) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			} else if (this.sbtiCriteriaM['s3NearTermReductionTarget']) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			}
			//C5
			if (!this.sbtiCriteriaM['isUseOfSoldProducts']) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			} else if (this.sbtiCriteriaM['s3NearTermReductionTarget']) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			}
			//C8
			if (this.sbtiCriteriaM['s3NearTermTargetEmissionPct'] < 67) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
				this.showNearTermInfo = true;
			} else if (this.sbtiCriteriaM['s3NearTermReductionTarget']) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			}
			//C9
			if (this.sbtiCriteriaM['s3LongTermTargetEmissionPct'] < 90) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			} else if (this.sbtiCriteriaM['s3LongTermReductionTarget']) {
				this.totalCheckedQuestions = this.totalCheckedQuestions + 1;
			}

			this.setStopperValue(this.totalCheckedQuestions);
			this.setProgressBarColors(this.totalCheckedQuestions);

			if (this.sbtiCriteriaM['s3LongTermTargetEmissionPct'] < 100) {
				this.showLongTermInfo = true;
			}
		}, error => {
			console.error('error in getSbtiCriteriaCheckList', error);
		});
	}

	setStopperValue(totalCheckedQuestions) {
		this.stopperValue = Math.floor((totalCheckedQuestions / this.totalCriteriaQuestions) * 100);
	}

	setProgressBarColors(totalCheckedQuestions): string {
		if (totalCheckedQuestions <= 11) {
			this.value = 'linear-gradient(to right, rgb(223 70 70), rgb(230 93 66), rgb(219 84 37))';
		} else if (totalCheckedQuestions <= 22) {
			this.value = 'linear-gradient(to right, rgb(223 70 70), rgb(230 93 66),rgb(219 84 37), rgb(237, 128, 12), rgb(217 144 17), rgb(199 158 34))';
		} else {
			// this.value = 'linear-gradient(to right,rgb(136, 8, 8),rgb(230, 44, 74),rgb(238, 75, 43),rgb(230, 120, 56),rgb(255, 172, 28),rgb(255, 191, 0),rgb(178, 211, 118),rgb(73, 152, 73), rgb(34, 139, 34)) ';
			this.value =
				// 'linear-gradient(to right, rgb(219 84 37), rgb(223 70 70), rgb(230 93 66), rgb(212 114 57), rgb(217 144 17), rgb(199 158 34), rgb(139 168 86), rgb(73, 152, 73), rgb(34, 139, 34))';
				'linear-gradient(to right,rgb(223 70 70),rgb(230 93 66) , rgb(219 84 37) , rgb(212 114 57), rgb(217 144 17), rgb(199 158 34), rgb(139 168 86), rgb(73, 152, 73), rgb(34, 139, 34))';
		}
		return this.value;
	}

}
