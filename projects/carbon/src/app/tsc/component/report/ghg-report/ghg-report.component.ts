import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';

import * as moment from 'moment';
import { Moment } from 'moment';


import { GhgAuditDialog } from '../ghg-audit/ghg-audit.dialog';

import { environment } from 'src/environments/environment';

import { GhgAuditDetailsM } from '@carbon/model/ghg-audit.model';
import { ConsolidationApproachM } from '@carbon/model/consolidation-approach.model';
import { ConsolidationApproachKeyIDEnum } from '@carbon/enum/consolidation-approach.enum';
import { BaseYearEnum } from '@carbon/enum/base-year.enum';
import { ScopeKeyIDEnum } from '@carbon/enum/scope.enum';

import { ConsolidationApproachController } from '@carbon/controller/consolidation-approach.controller';
import { BaseYearController } from '@carbon/controller/base-year.controller';
import { EmissionController } from '@carbon/controller/emission.controller';
import { ActivityController } from '@carbon/controller/activity.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { GhgAuditService } from '@carbon/service/ghg-audit.service';
import { OrganizationController } from '@library/organization-service';
import { DialogEnum, InvalidForm, MaterialFormFieldAppearance } from '@library/tsc-common';
import { ToastrColor, ToastrService } from '@library/toastr-service';
// / tsc-library

@Component({
    selector: 'app-ghg-report',
    templateUrl: './ghg-report.component.html',
    styleUrls: ['./ghg-report.component.scss']
})

export class GhgReportComponent implements OnInit {

    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    environment = environment;

    reportFG: FormGroup;

    auditorDetails = ['Date of verification:', 'Verifier:', 'Email:', 'Phone:', 'Address:'];
    emissionHeaders = ['EMISSIONS', 'TOTAL (mtCO2e)', 'CO2 (mt)', 'CH4 (mt)', 'N2O (mt)', 'HFCs (mt)', 'PFCs (mt)', 'SF6 (mt)'];
    emissionValues = ['totalEmission', 'co2', 'ch4', 'n2o', 'hfc', 'pfc', 'sf6'];
    durationField: any;
    currentOrgID: any;

    showReport: boolean = false;
    isAudited: boolean = false;
    isScope3EmissionsIncluded: boolean = false;
    isEquityShare: boolean = false;
    isFinancialShare: boolean = false;
    isOperationalShare: boolean = false;

    reportYear: any;
    ghgAuditDetailM: GhgAuditDetailsM = new GhgAuditDetailsM();

    orgName: string;
    orgLogoUrl: any;

    consolidationApproachList: ConsolidationApproachM[] = [];
    consolidationApproach: string;
    reportStartDate: string;
    reportEndDate: string;
    activityList: any;
    baseYearDetails: any;

    baseYearEmissions: any[] = [];
    reportYearScope1Emissions: any;
    reportYearScope2Emissions: any;
    reportYearScope3Emissions: any;
    baseYearScope1Emissions: any;
    baseYearScope2Emissions: any;
    baseYearScope3Emissions: any;
    biogenicEmissions: any;

    @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
    @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private storageService: StorageService,
        private ghgAuditService: GhgAuditService,
        private organizationController: OrganizationController,
        private consolidationApproachController: ConsolidationApproachController,
        private baseYearController: BaseYearController,
        private emissionController: EmissionController,
        private activityController: ActivityController,
        private toasterService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.durationFGInit();
        this.getConsolidationApproach();
    }

    ngAfterViewInit() {
        this.reportFG.valueChanges.subscribe(() => {
            this.reportYear = this.reportFG.controls['durationPeriod'].value;
            this.consolidationApproach = this.reportFG.controls['consolidationApproach'].value;

        });
    }

    durationFGInit() {
        this.reportFG = this.formBuilder.group({
            durationPeriod: [, Validators.required],
            consolidationApproach: [, Validators.required]
        })
    }

    openAuditDialog() {
        let dialogRef = this.dialog.open(GhgAuditDialog, {
            data: {
                currentOrgID: this.currentOrgID,
                auditYear: this.reportYear,
            },
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });
        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.refreshBtn.nativeElement.click();
                }
            })
    }

    yearSelectedHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
        datepicker.close();
        let duration = moment(normalizedYear).format("YYYY");
        this.reportFG.controls['durationPeriod'].patchValue(duration);
    }

    selectedConsolidationApproach() {
        if (this.consolidationApproach == ConsolidationApproachKeyIDEnum.EQUITY_CONTROL_APPROACH) {
            this.isEquityShare = true;
            this.isFinancialShare = false;
            this.isOperationalShare = false;
        } else if (this.consolidationApproach == ConsolidationApproachKeyIDEnum.FINANCIAL_CONTROL_APPROACH) {
            this.isFinancialShare = true;
            this.isEquityShare = false;
            this.isOperationalShare = false;
        } else {
            this.isOperationalShare = true;
            this.isEquityShare = false;
            this.isFinancialShare = false;
        }
    }

    async getOrganizationDetails() {
        await this.organizationController.getOrganizationByID(this.currentOrgID).subscribe(response => {
            let orgData = response;
            this.orgName = orgData['name'];
            this.orgLogoUrl = orgData['logoUrl'];
        },
            error => {
                console.log('error in getOrganizationDetails -', error);
            })
    }

    openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    }

    async getAuditDetailsByYear() {
        this.ghgAuditDetailM = await this.ghgAuditService.getGhgAuditDetailsByYear(this.currentOrgID, this.reportYear);
        if (this.ghgAuditDetailM['id'] != null) {
            this.isAudited = true;
        } else {
            this.isAudited = false;
        }
    }

    async getConsolidationApproach() {
        this.consolidationApproachList = await this.consolidationApproachController.getAllConsolidationApproachByOrgID(this.currentOrgID).toPromise();
    }

    async getBaseYear() {
        await this.baseYearController.getBaseYearByType(this.currentOrgID, BaseYearEnum.GHG_BASE_YEAR).subscribe(response => {
            this.baseYearDetails = response;
            if (this.baseYearDetails['baseYear'] != null) {
                this.getBaseYearEmission();
            }
        },
            error => {
                console.log('error in getBaseYear -', error);
            })
    }

    viewGHGReport() {
        if (this.reportFG.invalid) {
            this.reportFG.markAllAsTouched();
            console.log('invalid form -', this.reportFG.value);
            this.toasterService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return [];
        }

        this.showReport = true;
        this.getAuditDetailsByYear();
        this.getOrganizationDetails();
        this.selectedConsolidationApproach();

        this.reportStartDate = moment(this.reportYear).startOf('year').format('MM/DD/YYYY');
        this.reportEndDate = moment(this.reportYear).endOf('year').format('MM/DD/YYYY');

        this.getActivityList();
        this.getEmissionOfReportYear();
        this.getBaseYear();
        this.getBiogenicEmissions();
    }

    async getEmissionOfReportYear() {
        await this.emissionController.getScopeWiseEmissionAtGasLevel(this.currentOrgID, this.reportYear, this.consolidationApproach, false).subscribe(response => {
            const emissions: any = response;
            for (let i = 0; i < emissions.length; i++) {
                let scope = emissions[i]['scopeKeyID'];
                if (scope == ScopeKeyIDEnum.SCOPE_1_KEY_ID) {
                    this.reportYearScope1Emissions = emissions[i]['emission'];
                } else if (scope == ScopeKeyIDEnum.SCOPE_2_KEY_ID) {
                    this.reportYearScope2Emissions = emissions[i]['emission'];
                } else {
                    if (emissions[i]['emission'] != null) {
                        this.isScope3EmissionsIncluded = true;
                    }
                    this.reportYearScope3Emissions = emissions[i]['emission'];
                }
            }
        },
            error => {
                console.log('error in getEmissionOfReportYear -', error);
            })
    }

    async getBaseYearEmission() {
        this.emissionController.getScopeWiseEmissionAtGasLevel(this.currentOrgID, this.baseYearDetails['baseYear'], this.consolidationApproach, false).subscribe(response => {
            const emissions: any = response;
            for (let i = 0; i < emissions.length; i++) {
                let scope = emissions[i]['scopeKeyID'];
                if (scope == ScopeKeyIDEnum.SCOPE_1_KEY_ID) {
                    this.baseYearScope1Emissions = emissions[i]['emission'];
                } else if (scope == ScopeKeyIDEnum.SCOPE_2_KEY_ID) {
                    this.baseYearScope2Emissions = emissions[i]['emission'];
                } else {
                    this.baseYearScope3Emissions = emissions[i]['emission'];
                }
            }
        }, error => {
            console.log('error in getBaseYearEmission -', error);
        })
    }

    async getActivityList() {
        let scopeKeyID = ScopeKeyIDEnum.SCOPE_3_KEY_ID;
        await this.activityController.getActivityListByScopeKeyID(scopeKeyID).subscribe(response => {
            this.activityList = response;
        }, error => {
            console.log('error in getActivityList -', error);
        })
    }

    async getBiogenicEmissions() {
        const startDate = moment(this.reportYear).startOf('year').format('YYYY-MM-DD');
        const endDate = moment(this.reportYear).endOf('year').format('YYYY-MM-DD');
        await this.emissionController.getBiogenicEmissions(this.currentOrgID, startDate, endDate, false, this.consolidationApproach).subscribe(response => {
            this.biogenicEmissions = response;
        },
            error => {
                console.log('error in getBiogenicEmissions() -', error);
            })
    }

    downloadReport() {
        let url: string;
        url = `${environment.CARBON_ACCOUNTING_PUBLIC_API_URL}organizations/${this.currentOrgID}/ghg/${this.reportYear}/consolidation-approach/${this.consolidationApproach}/report?isIncludeSubsidiary=false`;
        window.open(url, '_blank');
    }
}
