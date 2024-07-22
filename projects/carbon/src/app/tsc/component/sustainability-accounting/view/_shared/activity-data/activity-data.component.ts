import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ViewUtility } from '../view.utility';

import { CARBON_RECORD_VIEW } from '@carbon/constant/carbon-record-view.constant';
import { DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { CalculationApproachKeyIDEnum } from '@carbon/enum/equiment.enum';
import { COMMON_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'activity-data',
    templateUrl: './activity-data.component.html',
    styleUrls: ['../../view.component.scss']
})
export class ActivityDataComponent implements OnInit {
    COMMON_CONSTANT = COMMON_CONSTANT;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    @Input() recordData: any;
    @Input() calAppInEmployComm: any;
    @Input() tableData: any;

    activityData: any;
    activityConfigData: any;

    dataInputMethod = DataInputMethodKeyIDEnum.ENERGY_CONSUMED;

    isEmployeeCommutingAverageMethod: boolean;
    isEmployeeCommutingDistanceFuelMethod: boolean;

    releaseGases: any;

    columnHeaders: string[] = [];
    rowHeaders: string[] = [];
    tableContent: any[][] = [];
    isTableView = false;
    surveyID: any;

    constructor(
        public viewUtil: ViewUtility,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.recordData?.currentValue != null) {
            this.activityData = this.recordData['activityData'];
            if (this.activityData != null) {
                this.activityConfigData = this.recordData['activityConfigData'];
                this.activityKeyID = this.activityData['activityKeyID'];
                this.surveyID = this.recordData.activityData['recordID'];
                this.releaseGases = this.activityData['gases'];
                this.dataInputMethod = this.recordData['activityConfigData'];
                this.renderView();
            }
        }

        if (changes.tableData?.currentValue != null) {
            this.prepareTableData();
        }

        if (changes.calAppInEmployComm?.currentValue != null) {
            if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_AVGERAGE_METHOD) {
                this.isEmployeeCommutingAverageMethod = true;
            } else if (this.calAppInEmployComm == CalculationApproachKeyIDEnum.EMPLOYEE_COMMUTE_DISTANCE_FUEL_METHOD) {
                this.isEmployeeCommutingDistanceFuelMethod = true;
            }
        }

    }

    isScope2: boolean = false;
    isSpendBased: boolean = false;
    isStationaryCombustion: boolean = false;
    isMobileCombustion: boolean = false;
    isWasteTreatmentActivity: boolean = false;
    activityKeyID: any;
    otherFugutiveActivity: boolean = false;
    purchasedGoodsAndServicesActivity: boolean = false;

    renderView() {
        const view = this.viewUtil.renderView(this.activityKeyID);
        switch (view) {
            case CARBON_RECORD_VIEW.SCOPE_2_VIEW:
                this.isScope2 = true;
                break;
            case CARBON_RECORD_VIEW.SCOPE_3_SPEND_BASED_VIEW:
                this.isSpendBased = true;
                break;
            case CARBON_RECORD_VIEW.STATIONARY_COMBUSTION_VIEW:
                this.isStationaryCombustion = true;
                break;
            case CARBON_RECORD_VIEW.MOBILE_COMBUSTION_VIEW:
                this.isMobileCombustion = true;
                break;
            case CARBON_RECORD_VIEW.WASTE_GENERATED_IN_OPERATIONS_VIEW:
                this.isWasteTreatmentActivity = true;
                break;
            case CARBON_RECORD_VIEW.OTHER_FUGUTIVE:
                this.otherFugutiveActivity = true;
                break;
            case CARBON_RECORD_VIEW.PURCHASED_GOODS_AND_SERVICES_VIEW:
                this.purchasedGoodsAndServicesActivity = true;
                break;
            case CARBON_RECORD_VIEW.CAPITAL_GOODS_VIEW:
                this.purchasedGoodsAndServicesActivity = true;
                break;
            default:
                console.log('unidentifiedwwwwwwwwwww case encountered - ', view);
        }

    }

    ngOnInit(): void {

    }

    toggleTableView() {
        this.isTableView = true;
    }

    // Method to toggle Graphical View
    toggleGraphicalView() {
        this.isTableView = false;
    }

    prepareTableData() {
        this.columnHeaders = this.tableData.distanceRanges.map((range: any) => `${range.minRange}-${range.maxRange || '315+'}`);
        this.rowHeaders = this.tableData.modeOfTransport.map((transport: any) => transport.modeOfTransportName);

        this.rowHeaders.forEach((_, rowIndex) => {
            const rowData: any[] = [];
            this.columnHeaders.forEach((_, colIndex) => {
                const cellData = this.tableData.graphData.find((item: any) =>
                    item.rangeID === colIndex && item.modeOfTransportID === rowIndex
                );
                rowData.push(cellData ? cellData.employeeCount : '');
            });
            this.tableContent.push(rowData);
        });
    }

}

