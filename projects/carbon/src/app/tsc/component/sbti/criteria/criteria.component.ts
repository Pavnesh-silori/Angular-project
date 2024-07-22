import { Component, OnInit } from '@angular/core';

import { CreateHomeComponent } from '../target/create/enterprise/create-home/create-home.component';
import { MatDialog } from '@angular/material/dialog';
import { NearTermComponent } from '../target/create/enterprise/near-term/near-term.component';
import { LongTermComponent } from '../target/create/enterprise/long-term/long-term.component';
import { ScopeCoverageEnum } from '@carbon/enum/sbti.enum';
import { SbtiCriteria } from '@carbon/model/sbti.model';
import { SbtiController } from '@carbon/controller/sbti.controller';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';

// tsc-library
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
	selector: 'app-criteria',
	templateUrl: './criteria.component.html',
	styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {
	ScopeCoverage = ScopeCoverageEnum;
	rootOrgID: any;
	sbtiCriteriaM = new SbtiCriteria();

	isBaseYearAndSettingsSaved: boolean = false;
	viewOnlyPendingCriteria: boolean = false;
	showC4Flag: boolean = true;
	showC5Flag: boolean = true;
	showC8Flag: boolean = true;
	showC9Flag: boolean = true;

	showScopeCoverageBlockFlag: boolean = true;
	showEmissionCoverageBlockFlag: boolean = true;
	showEmissionAccountingRequirementFlag: boolean = true;
	showTimeFrameBlockFlag: boolean = true;
	showAmbitionBlockFlag: boolean = true;
	showRecalculationAndTargetValidityBlockFlag: boolean = true;

	constructor(
		private storageService: StorageService,
		private dialog: MatDialog,
		private sbtiController: SbtiController,
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage('rootOrgID');
		this.getSbtiCriteriaCheckList();
	}

	async getSbtiCriteriaCheckList() {
		await this.sbtiController.getSbtiCriteriaCheckList(this.rootOrgID).subscribe(response => {
			this.sbtiCriteriaM = response;
			this.getBaseYearAndSettings();
		}, error => {
			console.error('error in getSbtiCriteriaCheckList', error);
		});
	}

	changeViewOnlyPendingCriteria() {
		this.viewOnlyPendingCriteria = !this.viewOnlyPendingCriteria;

		if (this.viewOnlyPendingCriteria) {
			this.showC4();
			this.showC5();
			this.showC8();
			this.showC9();
			this.showScopeCoverageBlock();
		}

	}

	showC4() {
		if (this.sbtiCriteriaM['s3EmissionsPct'] < 40) {
			this.showC4Flag = false;
		} else {
			this.showC4Flag = !this.sbtiCriteriaM['s3NearTermReductionTarget'];
		}
	}

	showC5() {
		if (!this.sbtiCriteriaM['isUseOfSoldProducts']) {
			this.showC5Flag = false;
		} else {
			this.showC5Flag = !this.sbtiCriteriaM['s3NearTermReductionTarget'];
		}
	}

	showC8() {
		if (this.sbtiCriteriaM['s3NearTermTargetEmissionPct'] < 67) {
			this.showC8Flag = false;
		} else {
			this.showC8Flag = !this.sbtiCriteriaM['s3NearTermReductionTarget'];
		}
	}

	showC9() {
		if (this.sbtiCriteriaM['s3LongTermTargetEmissionPct'] < 90) {
			this.showC9Flag = false;
		} else {
			this.showC9Flag = !this.sbtiCriteriaM['s3LongTermReductionTarget'];
		}
	}

	getBaseYearAndSettings() {
		let isBaseYearSet = this.sbtiCriteriaM['isSbtiBaseYear'];
		let isSbtiSettings = this.sbtiCriteriaM['isSbtiSettings'];
		this.isBaseYearAndSettingsSaved = isBaseYearSet && isSbtiSettings;
	}

	openTargetHome() {
		let config = CARBON_CONSTANT.RIGHT_DIALOG_CONFIG;
		config['data'] = {};
		config['minWidth'] = '60vw';
		config['maxWidth'] = '60vw';

		this.dialog.open(CreateHomeComponent, config);
	}

	setNearTermTarget(scope) {
		this.dialog.open(NearTermComponent, {
			data: {
				scope: scope
			},
			minWidth: '40vw',
			maxWidth: '40vw',
			height: '100%',
			position: { right: '-2px', top: '0px' },
		});
	}

	setLongTermTarget() {
		this.dialog.open(LongTermComponent, {
			data: {
				scope: ScopeCoverageEnum.SCOPE_3
			},
			minWidth: '40vw',
			maxWidth: '40vw',
			height: '100%',
			position: { right: '-2px', top: '0px' },
		});
	}

	showScopeCoverageBlock() {
		if (this.isBaseYearAndSettingsSaved && !this.showC4Flag && !this.showC5Flag && this.sbtiCriteriaM['s3LongTermReductionTarget']) {
			this.showScopeCoverageBlockFlag = false;
		}
		this.showEmissionCoverageBlock();
		this.showEmissionAccountingRequirementBlock();
		this.showTimeFrameBlock();
		this.showAmbitionBlock();
	}

	showEmissionCoverageBlock() {
		if (!this.showC8Flag && !this.showC9Flag && this.sbtiCriteriaM['isAnyNearAndLongTermTarget']) {
			this.showEmissionCoverageBlockFlag = false;
		}
	}

	showEmissionAccountingRequirementBlock() {
		if (this.isBaseYearAndSettingsSaved && this.sbtiCriteriaM['isSbtiSettings']) {
			this.showEmissionAccountingRequirementFlag = false;
		}
	}

	showTimeFrameBlock() {
		if (this.sbtiCriteriaM['isSbtiSettings'] && this.sbtiCriteriaM['isAnyNearAndLongTermTarget'] && this.sbtiCriteriaM['isAnyNearTermReductionTarget']) {
			this.showTimeFrameBlockFlag = false;
		}
	}

	showAmbitionBlock() {
		if (this.sbtiCriteriaM['isNearAndLongTermTargetForScope1And2'] && this.sbtiCriteriaM['isNearAndLongTermTargetForScope3']) {
			this.showAmbitionBlockFlag = false;
		}
	}

}
