import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';

import { Router, UrlTree } from '@angular/router';

import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';

import { ViewUtility } from '../view.utility';

import { COMMON_CONSTANT } from '@library/tsc-common';
import { EMISSION_FACTOR_TYPE } from '@carbon/constant/emission-factor-type.constant';
import { CARBON_RECORD_VIEW } from '@carbon/constant/carbon-record-view.constant';
import { ESTIMATION_FACTOR_TYPE } from '@carbon/constant/estimation-factor-type.constant';
import { Gas } from '@carbon/enum/gas.enum';

@Component({
    selector: 'factor-details',
    templateUrl: './factor-details.component.html',
    styleUrls: ['../../view.component.scss']
})
export class FactorDetailsComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;

    title_length: any = 15;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (window.innerWidth > 1280) this.title_length = 15;
        else this.title_length = 12;
    }

    @Input() factorData: any;
    @Input() gasGwp: any;
    @Input() activityKeyID: any;
    @Input() emissionsData: any;
     @Input() calAppInEmployComm: any;

    gasValueGwp: any;
    emissionData: any;
    estimationData: any;
    _activityKeyID: any;
    wasteEmissionData: any;

    employeeCommutingEmission: any;
    isEmployeeCoummutingEmission: boolean = false;

    isEmployeeCommutingAverageMethod: boolean;
    isEmployeeCommutingDistanceFuelMethod: boolean;

    constructor(
        private router: Router,
        public viewUtil: ViewUtility
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.factorData?.currentValue != null) {
            this.emissionData = this.factorData['emissionFactor'];
            this.estimationData = this.factorData['estimationFactor'];

            this.employeeCommutingEmission = this.factorData;
            if (this.employeeCommutingEmission[0] != null) {
                this.isEmployeeCoummutingEmission = true;
            }
        }

        if (changes.activityKeyID?.currentValue != null || changes.gasGwp?.currentValue != null) {
            if (changes.gasGwp?.currentValue != null) this.gasValueGwp = this.gasGwp;
            if (changes.activityKeyID?.currentValue != null) this._activityKeyID = this.activityKeyID;
            this.renderView(this._activityKeyID);
        }

        if (changes.emissionsData?.currentValue != null) {
            this.wasteEmissionData = this.emissionsData;
        }

        if (changes.calAppInEmployComm?.currentValue != null) {
            if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_AVGERAGE_METHOD) {
                this.isEmployeeCommutingAverageMethod = true;
            } else if (
                this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_DISTANCE_METHOD ||
                this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_FUEL_METHOD
            ) {
                this.isEmployeeCommutingDistanceFuelMethod = true;
            }
        }
    }

    ngOnInit(): void { }
    renderView(activityKeyID) {
        let view = this.viewUtil.renderView(activityKeyID);
        if (view == CARBON_RECORD_VIEW.SCOPE_2_VIEW ||
            view == CARBON_RECORD_VIEW.STATIONARY_COMBUSTION_VIEW ||
            view == CARBON_RECORD_VIEW.MOBILE_COMBUSTION_VIEW
        ) {
            if (this.gasGwp?.length)
                this.gasValueGwp = this.gasGwp.filter((item) => this.filterGases(item));
        }
    }

    filterGases(element) {
        if (element['gasKeyID'] == Gas.CARBON_DIOXIDE ||
            element['gasKeyID'] == Gas.METHANE ||
            element['gasKeyID'] == Gas.NITROUS_OXIDE) {
            return true;
        }
    }

    getRouteToFactor(type, factor) {
        let url: string = '.';
        let urlTree: UrlTree;
        if (type == EMISSION_FACTOR_TYPE.STANDARD) {
            urlTree = this.router.createUrlTree([`carbon-setting/factor-database/standard-emission-factor/standard/emission/database/${encodeURIComponent(factor['databaseName'])}/${factor['databaseID']}/version/${factor['versionName']}/${factor['versionID']}/activity/${factor['activityKeyID']}/factor`], { queryParams: { activity: 'Purchased Electricity' } });
        } else if (type == EMISSION_FACTOR_TYPE.CUSTOM) {
            urlTree = this.router.createUrlTree([`carbon-setting/factor-database/custom-emission-factor/custom/emission/database/${encodeURIComponent(factor['databaseName'])}/${factor['databaseID']}/factor/${factor['factorName']}/${factor['factorID']}/version`]);
        } else if (type == ESTIMATION_FACTOR_TYPE.CUSTOM) {
            urlTree = this.router.createUrlTree([`carbon-setting/factor-database/custom-estimation-factor/custom/estimation/database/${encodeURIComponent(factor['databaseName'])}/${factor['databaseID']}/factor/${factor['factorName']}/${factor['factorID']}/version`]);
        }

        // Convert the URL tree to a string URL
        url = this.router.serializeUrl(urlTree);
        window.open(url);
    }

}
