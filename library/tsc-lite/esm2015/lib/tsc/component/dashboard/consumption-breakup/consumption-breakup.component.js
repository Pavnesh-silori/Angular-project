import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { ApplicationKeyID } from '@library/application-service';
import { ChartViewStateEnum, DoughnutChart } from '@library/echart';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "../../../service/aggregate-data.service";
import * as i3 from "@library/tsc-common";
import * as i4 from "@library/date";
import * as i5 from "@angular/material/card";
import * as i6 from "@library/echart";
import * as i7 from "@angular/common";
// /tsc-library/
export class ConsumptionBreakupDashboardComponent {
    constructor(storageService, aggregateDataService, tscCommonService) {
        this.storageService = storageService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.showLoader = true;
        this.viewStateFlagForSource = ChartViewStateEnum.LOADING;
        this.viewStateFlagForLoad = ChartViewStateEnum.LOADING;
        this.chartDataForSource = new DoughnutChart();
        this.chartDataForLoad = new DoughnutChart();
        this.chartTitleForSource = {
            name: 'Sourced',
            color: 'grey',
        };
        this.chartTitleForLoad = {
            name: 'Consumed',
            color: 'grey',
        };
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    dateFilterEmitted(data) {
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        let selectedFrequency = data.frequency;
        if (selectedFrequency == this.frequencyEnum.DAILY) {
            this.interval = "day_1";
        }
        else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "month_1";
        }
        else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "year_1";
        }
        this.getOrgLevelSourceConsum("source").then(app => {
            this.orgSourceRes = app;
        });
        this.getOrgLevelSourceConsum("load").then(app => {
            this.orgConsumedRes = app;
        });
        this.getEntiyLevelConsumption();
    }
    getOrgLevelSourceConsum(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = this.createDataRequest(category, true);
                const result = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                return result;
            }
            catch (error) {
                console.error(`Error in getOrgLevelSourceConsum(${category})`, error);
            }
            finally {
                this.showLoader = false;
            }
        });
    }
    getEntiyLevelConsumption() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getEntityLevelSourceConsum("source");
            yield this.getEntityLevelSourceConsum("load");
        });
    }
    getEntityLevelSourceConsum(category) {
        return __awaiter(this, void 0, void 0, function* () {
            if (category == 'source') {
                this.viewStateFlagForSource = ChartViewStateEnum.LOADING;
            }
            else {
                this.viewStateFlagForLoad = ChartViewStateEnum.LOADING;
            }
            try {
                const requestData = this.createDataRequest(category, false);
                const result = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                    if (result === null || result === void 0 ? void 0 : result.every(item => item.data.length == 0)) {
                        if (category == 'source') {
                            this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                        }
                        else {
                            this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                        }
                    }
                    else {
                        let chartData = new DoughnutChart();
                        chartData = {
                            showDataView: true,
                            showRestore: true,
                            showDownloadImage: true,
                            metaData: result.map(item => {
                                var _a, _b;
                                return ({
                                    name: item.sourceLoadType,
                                    value: (_b = (_a = item.data) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value,
                                    unit: {
                                        code: item.unit,
                                    },
                                });
                            }),
                        };
                        if (category == 'source') {
                            this.chartDataForSource = chartData;
                            this.viewStateFlagForSource = ChartViewStateEnum.HAS_DATA;
                        }
                        else {
                            this.chartDataForLoad = chartData;
                            this.viewStateFlagForLoad = ChartViewStateEnum.HAS_DATA;
                        }
                    }
                }
                else {
                    if (category == 'source') {
                        this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                    }
                    else {
                        this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                    }
                }
            }
            catch (error) {
                if (category == 'source') {
                    this.viewStateFlagForSource = ChartViewStateEnum.NO_DATA;
                }
                else {
                    this.viewStateFlagForLoad = ChartViewStateEnum.NO_DATA;
                }
                console.error(`Error in getEntityLevelSourceConsum(${category})`, error);
            }
        });
    }
    createDataRequest(category, groupAll) {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.interval;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: category,
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = groupAll;
        return requestData;
    }
}
ConsumptionBreakupDashboardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, deps: [{ token: i1.StorageService }, { token: i2.AggregateDataService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionBreakupDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupDashboardComponent, selector: "lib-consumption-breakup", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgSourceRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgSourceRes?.[0]?.['unit'],\n                        label: 'Sourced',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgConsumedRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgConsumedRes?.[0]?.['unit'],\n                        label: 'Consumed',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForSource\" [chartTitleInp]=\"chartTitleForSource\" [dataInp]=\"chartDataForSource\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForLoad\" [chartTitleInp]=\"chartTitleForLoad\" [dataInp]=\"chartDataForLoad\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #sourceConsumTemplate let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-loader=\"loader\">\n    <ng-container *ngIf=\"loader; else dataTemplate\">\n        <lib-skeleton-loader [count]=\"1\" [appearance]=\"''\"\n            [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n    </ng-container>\n\n    <ng-template #dataTemplate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"fs-2 fw-bold text-primary\">{{ value ? tscCommonService.formatLargeNumber(value, 'false', 1)\n                    : commonConstant.HYPHEN\n                    }}</span>\n                <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 cardTitle\">\n                {{ label }}\n            </div>\n        </div>\n    </ng-template>\n</ng-template>", components: [{ type: i4.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i5.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6.DoughnutComponent, selector: "lib-doughnut", inputs: ["viewStateInp", "chartTitleInp", "dataInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption-breakup',
                    templateUrl: './consumption-breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.AggregateDataService }, { type: i3.TSCCommonService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24tYnJlYWt1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvY29uc3VtcHRpb24tYnJlYWt1cC9jb25zdW1wdGlvbi1icmVha3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9jb25zdW1wdGlvbi1icmVha3VwL2NvbnN1bXB0aW9uLWJyZWFrdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFNM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQWUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7OztBQUNqRixnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLG9DQUFvQztJQW9DN0MsWUFDWSxjQUE4QixFQUM5QixvQkFBMEMsRUFDM0MsZ0JBQWtDO1FBRmpDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyQzdDLG1CQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ2pDLHNCQUFpQixHQUFH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QUFDO0lBQ3ZCLENBQUM7O2tJQXhMUSxvQ0FBb0M7c0hBQXBDLG9DQUFvQywrRENwQmpELHV0SEFtRmM7NEZEL0RELG9DQUFvQztrQkFOaEQsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsc0NBQXNDO29CQUNuRCxNQUFNLEVBQUUsRUFDUDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZURhdGFSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWdncmVnYXRlLWRhdGEubW9kZWwnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvYWdncmVnYXRlLWRhdGEuc2VydmljZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQsIEZSRVFVRU5DWV9DT05TVEFOVCwgVFNDQ29tbW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgRGF0ZVR5cGVFbnVtLCBGcmVxdWVuY3lFbnVtIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbktleUlEIH0gZnJvbSAnQGxpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBDaGFydFRpdGxlTSwgQ2hhcnRWaWV3U3RhdGVFbnVtLCBEb3VnaG51dENoYXJ0IH0gZnJvbSAnQGxpYnJhcnkvZWNoYXJ0Jztcbi8vIC90c2MtbGlicmFyeS9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItY29uc3VtcHRpb24tYnJlYWt1cCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnN1bXB0aW9uLWJyZWFrdXAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uc3VtcHRpb25CcmVha3VwRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbW1vbkNvbnN0YW50ID0gQ09NTU9OX0NPTlNUQU5UO1xuICAgIGZyZXF1ZW5jeUNvbnN0YW50ID0gRlJFUVVFTkNZX0NPTlNUQU5UO1xuICAgIGZyZXF1ZW5jeUVudW0gPSBGcmVxdWVuY3lFbnVtO1xuXG4gICAgZGF0ZVR5cGU6IGFueTtcbiAgICBvcmdJRDogYW55O1xuICAgIGFwcGxpY2F0aW9uS2V5SUQ6IGFueTtcbiAgICB0aW1lem9uZTogYW55O1xuICAgIHBhcmFtTWV0cmljOiBzdHJpbmc7XG4gICAgZnJlcXVlbmN5OiBhbnlbXSA9IFtdO1xuICAgIGRlZmF1bHRGcmVxdWVuY3k6IHN0cmluZztcbiAgICBzdGFydERhdGU6IGFueTtcbiAgICBlbmREYXRlOiBhbnk7XG4gICAgc2VsZWN0ZWRGcmVxdWVuY3k6IGFueTtcbiAgICBpbnRlcnZhbDogYW55O1xuICAgIG9yZ1NvdXJjZVJlczogYW55O1xuICAgIG9yZ0NvbnN1bWVkUmVzOiBhbnk7XG4gICAgc2hvd0xvYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICB2aWV3U3RhdGVGbGFnRm9yU291cmNlOiBzdHJpbmcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICB2aWV3U3RhdGVGbGFnRm9yTG9hZDogc3RyaW5nID0gQ2hhcnRWaWV3U3RhdGVFbnVtLkxPQURJTkc7XG4gICAgY2hhcnREYXRhRm9yU291cmNlID0gbmV3IERvdWdobnV0Q2hhcnQoKTtcbiAgICBjaGFydERhdGFGb3JMb2FkID0gbmV3IERvdWdobnV0Q2hhcnQoKTtcblxuICAgIGNoYXJ0VGl0bGVGb3JTb3VyY2U6IENoYXJ0VGl0bGVNID0ge1xuICAgICAgICBuYW1lOiAnU291cmNlZCcsXG4gICAgICAgIGNvbG9yOiAnZ3JleScsXG4gICAgfTtcblxuICAgIGNoYXJ0VGl0bGVGb3JMb2FkOiBDaGFydFRpdGxlTSA9IHtcbiAgICAgICAgbmFtZTogJ0NvbnN1bWVkJyxcbiAgICAgICAgY29sb3I6ICdncmV5JyxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFnZ3JlZ2F0ZURhdGFTZXJ2aWNlOiBBZ2dyZWdhdGVEYXRhU2VydmljZSxcbiAgICAgICAgcHVibGljIHRzY0NvbW1vblNlcnZpY2U6IFRTQ0NvbW1vblNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uS2V5SUQnKTtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndGltZXpvbmUnKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbktleUlEID09IEFwcGxpY2F0aW9uS2V5SUQuRU5FUkdZX0tFWV9JRCkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbU1ldHJpYyA9IFwiZW5nRW5lcmd5VXNlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwbGljYXRpb25LZXlJRCA9PSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRCkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbU1ldHJpYyA9IFwiZ3dGbG93VG90YWxpemVyXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IHRoaXMuZnJlcXVlbmN5Q29uc3RhbnQuZmlsdGVyKGZyZXF1ZW5jeSA9PiBmcmVxdWVuY3kua2V5SUQgIT0gJ0NVU1RPTScpO1xuICAgICAgICB0aGlzLmRlZmF1bHRGcmVxdWVuY3kgPSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWTtcbiAgICAgICAgdGhpcy5kYXRlVHlwZSA9IERhdGVUeXBlRW51bS5FWENMVVNJVkU7XG4gICAgfVxuXG4gICAgZGF0ZUZpbHRlckVtaXR0ZWQoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gZGF0YS5zdGFydERhdGU7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IGRhdGEuZW5kRGF0ZTtcbiAgICAgICAgbGV0IHNlbGVjdGVkRnJlcXVlbmN5ID0gZGF0YS5mcmVxdWVuY3k7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRnJlcXVlbmN5ID09IHRoaXMuZnJlcXVlbmN5RW51bS5EQUlMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwiZGF5XzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwibW9udGhfMVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRnJlcXVlbmN5ID09IHRoaXMuZnJlcXVlbmN5RW51bS5ZRUFSTFkpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBcInllYXJfMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRPcmdMZXZlbFNvdXJjZUNvbnN1bShcInNvdXJjZVwiKS50aGVuKGFwcCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZ1NvdXJjZVJlcyA9IGFwcDtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdldE9yZ0xldmVsU291cmNlQ29uc3VtKFwibG9hZFwiKS50aGVuKGFwcCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZ0NvbnN1bWVkUmVzID0gYXBwO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2V0RW50aXlMZXZlbENvbnN1bXB0aW9uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0T3JnTGV2ZWxTb3VyY2VDb25zdW0oY2F0ZWdvcnk6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB0aGlzLmNyZWF0ZURhdGFSZXF1ZXN0KGNhdGVnb3J5LCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVEYXRhU2VydmljZS5nZXRBZ2dyZWdhdGVEYXRhKHRoaXMub3JnSUQsIHJlcXVlc3REYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGdldE9yZ0xldmVsU291cmNlQ29uc3VtKCR7Y2F0ZWdvcnl9KWAsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXlMZXZlbENvbnN1bXB0aW9uKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmdldEVudGl0eUxldmVsU291cmNlQ29uc3VtKFwic291cmNlXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmdldEVudGl0eUxldmVsU291cmNlQ29uc3VtKFwibG9hZFwiKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdHlMZXZlbFNvdXJjZUNvbnN1bShjYXRlZ29yeTogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWdGb3JTb3VyY2UgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvckxvYWQgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHRoaXMuY3JlYXRlRGF0YVJlcXVlc3QoY2F0ZWdvcnksIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYWdncmVnYXRlRGF0YVNlcnZpY2UuZ2V0QWdncmVnYXRlRGF0YSh0aGlzLm9yZ0lELCByZXF1ZXN0RGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQ/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Py5ldmVyeShpdGVtID0+IGl0ZW0uZGF0YS5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWdGb3JTb3VyY2UgPSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvckxvYWQgPSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGFydERhdGEgPSBuZXcgRG91Z2hudXRDaGFydCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYXJ0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEYXRhVmlldzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSZXN0b3JlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Rvd25sb2FkSW1hZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhRGF0YTogcmVzdWx0Lm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5zb3VyY2VMb2FkVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5kYXRhPy5bMF0/LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogaXRlbS51bml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YUZvclNvdXJjZSA9IGNoYXJ0RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvclNvdXJjZSA9IENoYXJ0Vmlld1N0YXRlRW51bS5IQVNfREFUQTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhRm9yTG9hZCA9IGNoYXJ0RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvckxvYWQgPSBDaGFydFZpZXdTdGF0ZUVudW0uSEFTX0RBVEE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvclNvdXJjZSA9IENoYXJ0Vmlld1N0YXRlRW51bS5OT19EQVRBO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvckxvYWQgPSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSAnc291cmNlJykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvclNvdXJjZSA9IENoYXJ0Vmlld1N0YXRlRW51bS5OT19EQVRBO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWdGb3JMb2FkID0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGdldEVudGl0eUxldmVsU291cmNlQ29uc3VtKCR7Y2F0ZWdvcnl9KWAsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZURhdGFSZXF1ZXN0KGNhdGVnb3J5OiBzdHJpbmcsIGdyb3VwQWxsOiBib29sZWFuKSB7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSBuZXcgQWdncmVnYXRlRGF0YVJlcXVlc3QoKTtcblxuICAgICAgICByZXF1ZXN0RGF0YS5zdGFydFRpbWUgPSB0aGlzLnN0YXJ0RGF0ZTtcbiAgICAgICAgcmVxdWVzdERhdGEuZW5kVGltZSA9IHRoaXMuZW5kRGF0ZTtcbiAgICAgICAgcmVxdWVzdERhdGEuaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xuICAgICAgICByZXF1ZXN0RGF0YS5wYXJhbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wYXJhbU1ldHJpYyxcbiAgICAgICAgICAgICAgICBkc0FnZzogXCJzdW1cIixcbiAgICAgICAgICAgICAgICBhZ2c6IFwic3VtXCIsXG4gICAgICAgICAgICAgICAgc291cmNlX29yX2xvYWQ6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIHNvdXJjZUxvYWRUeXBlOiBcImFsbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICAgIHJlcXVlc3REYXRhLm51bGxpZnlQYXJhbXMoKTtcbiAgICAgICAgcmVxdWVzdERhdGEuZ3JvdXBBbGwgPSBncm91cEFsbDtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBtYWluLWNhcmQgY2FyZE92ZXJ3cml0ZSBoMTAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlckNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyTGVmdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VUaXRsZVwiPkNvbnN1bXB0aW9uIEJyZWFrdXA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8bGliLWRhdGUtZmlsdGVyLXR3byBbZnJlcXVlbmN5SW5wXT1cImZyZXF1ZW5jeVwiIFtkZWZhdWx0RnJlcXVlbmN5SW5wXT1cImRlZmF1bHRGcmVxdWVuY3lcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0ZVR5cGVJbnBdPVwiZGF0ZVR5cGVcIiBbc2hvd0RlZmF1bHREdXJhdGlvbklucF09XCJ0cnVlXCIgW3RpbWV6b25lSW5wXT1cInRpbWV6b25lXCJcbiAgICAgICAgICAgICAgICAgICAgKGRhdGVGaWx0ZXJFbWl0dGVyKT1cImRhdGVGaWx0ZXJFbWl0dGVkKCRldmVudClcIj48L2xpYi1kYXRlLWZpbHRlci10d28+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkT3ZlcndyaXRlIGNhcmRCYWNrZ3JvdW5kQ29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNvdXJjZUNvbnN1bVRlbXBsYXRlOyBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3JnU291cmNlUmVzPy5bMF0/LlsnZGF0YSddPy5bMF0/LlsndmFsdWUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6IG9yZ1NvdXJjZVJlcz8uWzBdPy5bJ3VuaXQnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU291cmNlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6IHNob3dMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkT3ZlcndyaXRlIGNhcmRCYWNrZ3JvdW5kQ29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInNvdXJjZUNvbnN1bVRlbXBsYXRlOyBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3JnQ29uc3VtZWRSZXM/LlswXT8uWydkYXRhJ10/LlswXT8uWyd2YWx1ZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDogb3JnQ29uc3VtZWRSZXM/LlswXT8uWyd1bml0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbnN1bWVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjogc2hvd0xvYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkT3ZlcndyaXRlIGNhcmRCYWNrZ3JvdW5kQ29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItZG91Z2hudXQgW3ZpZXdTdGF0ZUlucF09XCJ2aWV3U3RhdGVGbGFnRm9yU291cmNlXCIgW2NoYXJ0VGl0bGVJbnBdPVwiY2hhcnRUaXRsZUZvclNvdXJjZVwiIFtkYXRhSW5wXT1cImNoYXJ0RGF0YUZvclNvdXJjZVwiPjwvbGliLWRvdWdobnV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRPdmVyd3JpdGUgY2FyZEJhY2tncm91bmRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1kb3VnaG51dCBbdmlld1N0YXRlSW5wXT1cInZpZXdTdGF0ZUZsYWdGb3JMb2FkXCIgW2NoYXJ0VGl0bGVJbnBdPVwiY2hhcnRUaXRsZUZvckxvYWRcIiBbZGF0YUlucF09XCJjaGFydERhdGFGb3JMb2FkXCI+PC9saWItZG91Z2hudXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI3NvdXJjZUNvbnN1bVRlbXBsYXRlIGxldC1sYWJlbD1cImxhYmVsXCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtdW5pdD1cInVuaXRcIiBsZXQtbG9hZGVyPVwibG9hZGVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRlcjsgZWxzZSBkYXRhVGVtcGxhdGVcIj5cbiAgICAgICAgPGxpYi1za2VsZXRvbi1sb2FkZXIgW2NvdW50XT1cIjFcIiBbYXBwZWFyYW5jZV09XCInJ1wiXG4gICAgICAgICAgICBbdGhlbWVdPVwieyAnYm9yZGVyLXJhZGl1cyc6ICcxNnB4JywgaGVpZ2h0OiAnNDBweCcsICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3JnYigyMzAgMjMyIDIzNSknIH1cIj48L2xpYi1za2VsZXRvbi1sb2FkZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctdGVtcGxhdGUgI2RhdGFUZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnMtMiBmdy1ib2xkIHRleHQtcHJpbWFyeVwiPnt7IHZhbHVlID8gdHNjQ29tbW9uU2VydmljZS5mb3JtYXRMYXJnZU51bWJlcih2YWx1ZSwgJ2ZhbHNlJywgMSlcbiAgICAgICAgICAgICAgICAgICAgOiBjb21tb25Db25zdGFudC5IWVBIRU5cbiAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBmdy1ib2xkXCI+IHt7IHZhbHVlID8gdW5pdCA6ICcnIH19IDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjYXJkVGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPiJdfQ==