import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SubsidiaryFormComponent } from '../subsidary-form/subsidiary-form.component';

import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { SubsidiaryEmissionDataM } from '@carbon/model/subsidiary-emission-data.model';
import { SubsidiaryEnum } from '@carbon/enum/subsidiary.enum';
import {ConsolidationApproachKeyIDEnum, ConsolidationApproachNameEnum } from '@carbon/enum/consolidation-approach.enum';

import { SubsidiaryEmissionDataController } from '@carbon/controller/subsidiary-emission-data.controller';
import { SubsidiaryController } from '@carbon/controller/subsidiary.controller';

// library //
import { StorageService } from '@library/storage-service';
import { COMMON_CONSTANT, DialogEnum, FormAction } from '@library/tsc-common';
// / library // 
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  COMMON_CONSTANT = COMMON_CONSTANT;
  CARBON_CONSTANT = CARBON_CONSTANT;

  ConsolidationApproachKeyIDEnum = ConsolidationApproachKeyIDEnum;

  currentOrgID: any;

  subsidaryEmissionData: SubsidiaryEmissionDataM;
  subsidaryEmissionID: any;
  consolidationApproaches: any = [];

  subsidiary: any = null;
  orgSubsidaryList: any[];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private subsidiaryEmissionDataController: SubsidiaryEmissionDataController,
    private storageService: StorageService,
    private subsidiaryController: SubsidiaryController
  ) { }

  ngOnInit(): void {

    this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));

    this.activatedRoute.queryParams
      .subscribe((queryParams) => {
        this.subsidaryEmissionID = queryParams['id'];
      });

      this.getSubsidaryEmissionDataByID();
  }

  getSubsidaryEmissionDataByID() {
    this.subsidiaryEmissionDataController.getSubsidaryEmissionDataByID(this.currentOrgID, this.subsidaryEmissionID).subscribe((response: SubsidiaryEmissionDataM) => {
      this.subsidaryEmissionData = response;
      this.getSubsidaryByOrgID(this.currentOrgID);

    },
      error => {
        console.log('error in getSubsidiaryEmissionData -', error);
      });
  }

  getDataKey(consolidationApproachKey) {
    switch (consolidationApproachKey) {
      case ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH:
        return 'equityShareApproach';
      case ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH:
        return 'financialControlApproach';
      case ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH:
        return 'operationalControlApproach';
      default:
        console.error('undefined case encountered - ', consolidationApproachKey);
    }
  }

  getKeyValue(consolidationApproachKey) {
    switch (consolidationApproachKey) {
      case ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH:
        return ConsolidationApproachNameEnum.EQUITY_CONTROL_APPROACH;
      case ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH:
        return ConsolidationApproachNameEnum.FINANCIAL_CONTROL_APPROACH;
      case ConsolidationApproachKeyIDEnum.OPERATIONAL_CONTROL_APPROACH:
        return ConsolidationApproachNameEnum.OPERATIONAL_CONTROL_APPROACH;
      default:
        console.error('undefined case encountered - ', consolidationApproachKey);
    }
  }

  setSubsidary(subsidiaryID) {
		this.subsidiary = this.orgSubsidaryList.find(subsidiary => (subsidiary['id'] == subsidiaryID));
	}

  getSubsidaryByOrgID(orgID) {
		this.subsidiaryController.getSubsidiaryByOrgID(orgID, SubsidiaryEnum.APPROVED)
			.subscribe((response: any) => {
				this.orgSubsidaryList = response;
				this.setSubsidary(this.subsidaryEmissionData.subsidiaryID);
			});

	}

  editEmissionData() {
    const dialogRef = this.dialog.open(SubsidiaryFormComponent, {
      data: {
        action: FormAction.UPDATE,
        subsidaryEmissionID: this.subsidaryEmissionID,
        currentOrgID: this.currentOrgID,
      },
      minWidth: '80vw',
      maxWidth: '80vw',
      height: '100%',
      position: { right: '-2px', top: '0px' },
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res == DialogEnum.SUCCESS_DR)
        this.router.navigate([`/subsidiary/emission/data/page`]);
    });
  }

}
