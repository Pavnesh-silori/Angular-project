import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { merge } from 'rxjs';

import { 
    SCOPE_WISE_EMISSION_MD, 
    CARBON_EMISSION_TREND_MD, 
    ACTIVITY_WISE_EMISSION_MD 
} from '@carbon/constant/chart.constant';

import { DashboardController } from '@carbon/controller/dashboard.controller';
import { CarbonFilterComponent } from '../_shared/filter/filter.component';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';

import {
    ToastrService,
    ToastrTitle,
    ToastrColor
} from '@library/toastr-service';

import {
    DateFilterComponent,
    DateFormatEnum,
    DateService,
    FrequencyEnum
} from '@library/date';
// /tsc-library/

@Component({
    selector: 'app-footprint',
    templateUrl: './footprint.component.html',
    styleUrls: ['./footprint.component.scss']
})

export class FootprintComponent implements OnInit, AfterViewInit {
    currentOrgID: any;

    scopeWiseEmissionRenderFlag: string = 'LOADING';
    scopeWiseEmission: any;
    scopeWiseEmissionMD = SCOPE_WISE_EMISSION_MD;

    carbonEmissionTrendRenderFlag: string = 'LOADING';
    carbonEmissionTrend: any;
    carbonEmissionTrendMD = CARBON_EMISSION_TREND_MD;

    activityWiseEmissionRenderFlag: string = 'LOADING';
    activityWiseEmission: any;
    activityWiseEmissionMD = ACTIVITY_WISE_EMISSION_MD;

    uomName: string;
    totalEmission: number;
    scope1Emission: number;
    scope2Emission: number;
    scope3Emission: number;
    totalBiogenicEmission: number;

    @ViewChild('filterChild') filterChild: DateFilterComponent;
    @ViewChild('carbonFilterChild') carbonFilterChild: CarbonFilterComponent;

    constructor(
        private dashboardController: DashboardController,
        private dateService: DateService,

        // tsc-library
        storageService: StorageService,
        private toastrService: ToastrService,
        // /tsc-library
    ) {
        this.currentOrgID = parseInt(storageService.getStorage('currentOrgID'));
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        merge(
            this.filterChild.emitFilter,
            this.carbonFilterChild.emitFilter,
        ).subscribe(() => this.checkAllFilters());
    }

    checkAllFilters() {
        if (this.carbonFilterChild.consolidationApproach != null) {
            this.getFootprintDashboard();
        }
    }

    getFootprintDashboard() {

        if (this.filterChild.frequencyFC.value == FrequencyEnum.CUSTOM && !this.filterChild.startDateFC && !this.filterChild.endDateFC) {
            return;
        }

        this.scopeWiseEmissionRenderFlag = 'LOADING';
        this.carbonEmissionTrendRenderFlag = 'LOADING';
        this.activityWiseEmissionRenderFlag = 'LOADING';

        let startDate = this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);
        let endDate = this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, DateFormatEnum.YYYY_MM_DD);

        this.dashboardController.getFootprintDashboard(this.currentOrgID, startDate, endDate,
            this.carbonFilterChild.facilityFC.value, this.carbonFilterChild.subsidiaryFC.value, this.carbonFilterChild.consolidationApproachFC.value).subscribe(data => {

                if (data['emission'] && data['emission']['data']) {
                    this.uomName = data['emission']['uomName'];
                    this.totalEmission = data['emission']['data']['totalEmission'];
                    this.scope1Emission = data['emission']['data']['scope1Emission'];
                    this.scope2Emission = data['emission']['data']['scope2Emission'];
                    this.scope3Emission = data['emission']['data']['scope3Emission'];
                    this.totalBiogenicEmission = data['emission']['data']['totalBiogenicEmission'];
                }

                if (data['scopeWiseEmission'] && data['scopeWiseEmission']['data']) {
                    this.scopeWiseEmission = data['scopeWiseEmission'];
                    this.scopeWiseEmissionRenderFlag = 'DATA';
                } else {
                    this.scopeWiseEmissionRenderFlag = 'NO_DATA';
                }

                if (data['carbonEmissionTrend'] && data['carbonEmissionTrend']['data']) {
                    this.carbonEmissionTrend = data['carbonEmissionTrend'];
                    this.carbonEmissionTrendRenderFlag = 'DATA';
                } else {
                    this.carbonEmissionTrendRenderFlag = 'NO_DATA';
                }

                if (data['activityWiseEmission'] && data['activityWiseEmission']['data']) {
                    this.activityWiseEmission = data['activityWiseEmission'];
                    this.activityWiseEmissionRenderFlag = 'DATA';
                } else {
                    this.activityWiseEmissionRenderFlag = 'NO_DATA';
                }

            }, error => {
                this.scopeWiseEmissionRenderFlag = 'NO_DATA';
                this.carbonEmissionTrendRenderFlag = 'NO_DATA';
                this.activityWiseEmissionRenderFlag = 'NO_DATA';

                this.toastrService.openToast(ToastrTitle.ERROR, 'Error in getting dashboard values', ToastrColor.ERROR);
            });
    }

}
