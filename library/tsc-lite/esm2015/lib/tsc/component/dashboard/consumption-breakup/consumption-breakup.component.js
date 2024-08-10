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
            name: 'Source',
            color: '#495057',
        };
        this.chartTitleForLoad = {
            name: 'Load',
            color: '#495057',
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
            this.interval = "hour_1";
        }
        else if (selectedFrequency == this.frequencyEnum.MONTHLY) {
            this.interval = "day_1";
        }
        else if (selectedFrequency == this.frequencyEnum.YEARLY) {
            this.interval = "month_1";
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
        var _a;
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
                if (((_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                    let chartData = new DoughnutChart();
                    chartData = {
                        showDataView: true,
                        showRestore: true,
                        showDownloadImage: true,
                        metaData: result.map(item => ({
                            name: item.sourceLoadType,
                            value: item.data[0].value,
                            unit: {
                                code: item.unit,
                            },
                        })),
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
ConsumptionBreakupDashboardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionBreakupDashboardComponent, selector: "lib-consumption-breakup", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Breakup</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgSourceRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgSourceRes?.[0]?.['unit'],\n                        label: 'Sourced',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <ng-container *ngTemplateOutlet=\"sourceConsumTemplate; context: {\n                        value: orgConsumedRes?.[0]?.['data']?.[0]?.['value'],\n                        unit: orgConsumedRes?.[0]?.['unit'],\n                        label: 'Consumed',\n                        loader: showLoader\n                        }\"></ng-container>\n                </mat-card>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForSource\" [chartTitleInp]=\"chartTitleForSource\" [dataInp]=\"chartDataForSource\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div class=\"col-sm-6\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-doughnut [viewStateInp]=\"viewStateFlagForLoad\" [chartTitleInp]=\"chartTitleForLoad\" [dataInp]=\"chartDataForLoad\"></lib-doughnut>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #sourceConsumTemplate let-label=\"label\" let-value=\"value\" let-unit=\"unit\" let-loader=\"loader\">\n    <ng-container *ngIf=\"loader; else dataTemplate\">\n        <lib-skeleton-loader [count]=\"1\" [appearance]=\"''\"\n            [theme]=\"{ 'border-radius': '16px', height: '40px', 'background-color': 'rgb(230 232 235)' }\"></lib-skeleton-loader>\n    </ng-container>\n\n    <ng-template #dataTemplate>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <span class=\"fs-2 fw-bold text-primary\">{{ value ? tscCommonService.formatLargeNumber(value, 'false', 1)\n                    : commonConstant.HYPHEN\n                    }}</span>\n                <span class=\"text-secondary fw-bold\"> {{ value ? unit : '' }} </span>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 fs-4\">\n                {{ label }}\n            </div>\n        </div>\n    </ng-template>\n</ng-template>", components: [{ type: i4.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i5.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6.DoughnutComponent, selector: "lib-doughnut", inputs: ["viewStateInp", "chartTitleInp", "dataInp"] }, { type: i3.SkeletonComponent, selector: "lib-skeleton-loader", inputs: ["count", "appearance", "theme"] }], directives: [{ type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-consumption-breakup',
                    templateUrl: './consumption-breakup.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.AggregateDataService }, { type: i3.TSCCommonService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24tYnJlYWt1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvY29uc3VtcHRpb24tYnJlYWt1cC9jb25zdW1wdGlvbi1icmVha3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9jb25zdW1wdGlvbi1icmVha3VwL2NvbnN1bXB0aW9uLWJyZWFrdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFNM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RixPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQTJCLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7QUFDN0YsZ0JBQWdCO0FBUWhCLE1BQU0sT0FBTyxvQ0FBb0M7SUFvQzdDLFlBQ1ksY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzNDLGdCQUFrQztRQUZqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMzQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBckM3QyxtQkFBYyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxzQkFBaUIsR0FB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QzVEO3FCQUFNO29CQUNILElBQUksQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7aUJBQzFEO2dCQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXVDLFFBQVEsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzVFOztLQUNKO0lBRUQsaUJBQWlCLENBQUMsUUFBZ0IsRUFBRSxRQUFpQjtRQUVqRCxNQUFNLFdBQVcsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7UUFFL0MsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckMsV0FBVyxDQUFDLE1BQU0sR0FBRztZQUNqQjtnQkFDSSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEdBQUcsRUFBRSxLQUFLO2dCQUNWLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixjQUFjLEVBQUUsS0FBSzthQUN4QjtTQUNKLENBQUM7UUFDRixXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsV0FBVyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFaEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7a0lBakxRLG9DQUFvQztzSEFBcEMsb0NBQW9DLCtEQ3BCakQsdXRIQW1GYzs0RkQvREQsb0NBQW9DO2tCQU5oRCxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSxzQ0FBc0M7b0JBQ25ELE1BQU0sRUFBRSxFQUNQO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YVJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZ2dyZWdhdGUtZGF0YS5tb2RlbCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9hZ2dyZWdhdGUtZGF0YS5zZXJ2aWNlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IENPTU1PTl9DT05TVEFOVCwgRlJFUVVFTkNZX0NPTlNUQU5ULCBUU0NDb21tb25TZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBEYXRlVHlwZUVudW0sIEZyZXF1ZW5jeUVudW0gfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uS2V5SUQgfSBmcm9tICdAbGlicmFyeS9hcHBsaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IENoYXJ0VGl0bGUsIENoYXJ0VGl0bGVNLCBDaGFydFZpZXdTdGF0ZUVudW0sIERvdWdobnV0Q2hhcnQgfSBmcm9tICdAbGlicmFyeS9lY2hhcnQnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1jb25zdW1wdGlvbi1icmVha3VwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29uc3VtcHRpb24tYnJlYWt1cC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25zdW1wdGlvbkJyZWFrdXBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29tbW9uQ29uc3RhbnQgPSBDT01NT05fQ09OU1RBTlQ7XG4gICAgZnJlcXVlbmN5Q29uc3RhbnQgPSBGUkVRVUVOQ1lfQ09OU1RBTlQ7XG4gICAgZnJlcXVlbmN5RW51bSA9IEZyZXF1ZW5jeUVudW07XG5cbiAgICBkYXRlVHlwZTogYW55O1xuICAgIG9yZ0lEOiBhbnk7XG4gICAgYXBwbGljYXRpb25LZXlJRDogYW55O1xuICAgIHRpbWV6b25lOiBhbnk7XG4gICAgcGFyYW1NZXRyaWM6IHN0cmluZztcbiAgICBmcmVxdWVuY3k6IGFueVtdID0gW107XG4gICAgZGVmYXVsdEZyZXF1ZW5jeTogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogYW55O1xuICAgIGVuZERhdGU6IGFueTtcbiAgICBzZWxlY3RlZEZyZXF1ZW5jeTogYW55O1xuICAgIGludGVydmFsOiBhbnk7XG4gICAgb3JnU291cmNlUmVzOiBhbnk7XG4gICAgb3JnQ29uc3VtZWRSZXM6IGFueTtcbiAgICBzaG93TG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHZpZXdTdGF0ZUZsYWdGb3JTb3VyY2U6IHN0cmluZyA9IENoYXJ0Vmlld1N0YXRlRW51bS5MT0FESU5HO1xuICAgIHZpZXdTdGF0ZUZsYWdGb3JMb2FkOiBzdHJpbmcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICBjaGFydERhdGFGb3JTb3VyY2UgPSBuZXcgRG91Z2hudXRDaGFydCgpO1xuICAgIGNoYXJ0RGF0YUZvckxvYWQgPSBuZXcgRG91Z2hudXRDaGFydCgpO1xuXG4gICAgY2hhcnRUaXRsZUZvclNvdXJjZTogQ2hhcnRUaXRsZU0gPSB7XG4gICAgICAgIG5hbWU6ICdTb3VyY2UnLFxuICAgICAgICBjb2xvcjogJyM0OTUwNTcnLFxuICAgIH07XG5cbiAgICBjaGFydFRpdGxlRm9yTG9hZDogQ2hhcnRUaXRsZU0gPSB7XG4gICAgICAgIG5hbWU6ICdMb2FkJyxcbiAgICAgICAgY29sb3I6ICcjNDk1MDU3JyxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFnZ3JlZ2F0ZURhdGFTZXJ2aWNlOiBBZ2dyZWdhdGVEYXRhU2VydmljZSxcbiAgICAgICAgcHVibGljIHRzY0NvbW1vblNlcnZpY2U6IFRTQ0NvbW1vblNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uS2V5SUQnKTtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndGltZXpvbmUnKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbktleUlEID09IEFwcGxpY2F0aW9uS2V5SUQuRU5FUkdZX0tFWV9JRCkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbU1ldHJpYyA9IFwiZW5nRW5lcmd5VXNlZFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwbGljYXRpb25LZXlJRCA9PSBBcHBsaWNhdGlvbktleUlELldBVEVSX0tFWV9JRCkge1xuICAgICAgICAgICAgdGhpcy5wYXJhbU1ldHJpYyA9IFwiZ3dGbG93VG90YWxpemVyXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZyZXF1ZW5jeSA9IHRoaXMuZnJlcXVlbmN5Q29uc3RhbnQuZmlsdGVyKGZyZXF1ZW5jeSA9PiBmcmVxdWVuY3kua2V5SUQgIT0gJ0NVU1RPTScpO1xuICAgICAgICB0aGlzLmRlZmF1bHRGcmVxdWVuY3kgPSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWTtcbiAgICAgICAgdGhpcy5kYXRlVHlwZSA9IERhdGVUeXBlRW51bS5FWENMVVNJVkU7XG4gICAgfVxuXG4gICAgZGF0ZUZpbHRlckVtaXR0ZWQoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gZGF0YS5zdGFydERhdGU7XG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IGRhdGEuZW5kRGF0ZTtcbiAgICAgICAgbGV0IHNlbGVjdGVkRnJlcXVlbmN5ID0gZGF0YS5mcmVxdWVuY3k7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRnJlcXVlbmN5ID09IHRoaXMuZnJlcXVlbmN5RW51bS5EQUlMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwiaG91cl8xXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGcmVxdWVuY3kgPT0gdGhpcy5mcmVxdWVuY3lFbnVtLk1PTlRITFkpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBcImRheV8xXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRGcmVxdWVuY3kgPT0gdGhpcy5mcmVxdWVuY3lFbnVtLllFQVJMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwibW9udGhfMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRPcmdMZXZlbFNvdXJjZUNvbnN1bShcInNvdXJjZVwiKS50aGVuKGFwcCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZ1NvdXJjZVJlcyA9IGFwcDtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmdldE9yZ0xldmVsU291cmNlQ29uc3VtKFwibG9hZFwiKS50aGVuKGFwcCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9yZ0NvbnN1bWVkUmVzID0gYXBwO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuZ2V0RW50aXlMZXZlbENvbnN1bXB0aW9uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0T3JnTGV2ZWxTb3VyY2VDb25zdW0oY2F0ZWdvcnk6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB0aGlzLmNyZWF0ZURhdGFSZXF1ZXN0KGNhdGVnb3J5LCB0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVEYXRhU2VydmljZS5nZXRBZ2dyZWdhdGVEYXRhKHRoaXMub3JnSUQsIHJlcXVlc3REYXRhKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGdldE9yZ0xldmVsU291cmNlQ29uc3VtKCR7Y2F0ZWdvcnl9KWAsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RW50aXlMZXZlbENvbnN1bXB0aW9uKCkge1xuICAgICAgICBhd2FpdCB0aGlzLmdldEVudGl0eUxldmVsU291cmNlQ29uc3VtKFwic291cmNlXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmdldEVudGl0eUxldmVsU291cmNlQ29uc3VtKFwibG9hZFwiKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdHlMZXZlbFNvdXJjZUNvbnN1bShjYXRlZ29yeTogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWdGb3JTb3VyY2UgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvckxvYWQgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHRoaXMuY3JlYXRlRGF0YVJlcXVlc3QoY2F0ZWdvcnksIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuYWdncmVnYXRlRGF0YVNlcnZpY2UuZ2V0QWdncmVnYXRlRGF0YSh0aGlzLm9yZ0lELCByZXF1ZXN0RGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQ/LlswXT8uZGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgY2hhcnREYXRhID0gbmV3IERvdWdobnV0Q2hhcnQoKTtcblxuICAgICAgICAgICAgICAgIGNoYXJ0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RhdGFWaWV3OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzaG93UmVzdG9yZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Rvd25sb2FkSW1hZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1ldGFEYXRhOiByZXN1bHQubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uc291cmNlTG9hZFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5kYXRhWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGl0ZW0udW5pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhRm9yU291cmNlID0gY2hhcnREYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWdGb3JTb3VyY2UgPSBDaGFydFZpZXdTdGF0ZUVudW0uSEFTX0RBVEE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGFGb3JMb2FkID0gY2hhcnREYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWdGb3JMb2FkID0gQ2hhcnRWaWV3U3RhdGVFbnVtLkhBU19EQVRBO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gJ3NvdXJjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnRm9yU291cmNlID0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnRm9yTG9hZCA9IENoYXJ0Vmlld1N0YXRlRW51bS5OT19EQVRBO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGNhdGVnb3J5ID09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnRm9yU291cmNlID0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZ0ZvckxvYWQgPSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgaW4gZ2V0RW50aXR5TGV2ZWxTb3VyY2VDb25zdW0oJHtjYXRlZ29yeX0pYCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRGF0YVJlcXVlc3QoY2F0ZWdvcnk6IHN0cmluZywgZ3JvdXBBbGw6IGJvb2xlYW4pIHtcblxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IG5ldyBBZ2dyZWdhdGVEYXRhUmVxdWVzdCgpO1xuXG4gICAgICAgIHJlcXVlc3REYXRhLnN0YXJ0VGltZSA9IHRoaXMuc3RhcnREYXRlO1xuICAgICAgICByZXF1ZXN0RGF0YS5lbmRUaW1lID0gdGhpcy5lbmREYXRlO1xuICAgICAgICByZXF1ZXN0RGF0YS5pbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBhcmFtTWV0cmljLFxuICAgICAgICAgICAgICAgIGRzQWdnOiBcInN1bVwiLFxuICAgICAgICAgICAgICAgIGFnZzogXCJzdW1cIixcbiAgICAgICAgICAgICAgICBzb3VyY2Vfb3JfbG9hZDogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgc291cmNlTG9hZFR5cGU6IFwiYWxsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgcmVxdWVzdERhdGEubnVsbGlmeVBhcmFtcygpO1xuICAgICAgICByZXF1ZXN0RGF0YS5ncm91cEFsbCA9IGdyb3VwQWxsO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0RGF0YTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkIG1haW4tY2FyZCBjYXJkT3ZlcndyaXRlIGgxMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJMZWZ0Q29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZVRpdGxlXCI+Q29uc3VtcHRpb24gQnJlYWt1cDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgcHQtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgPGxpYi1kYXRlLWZpbHRlci10d28gW2ZyZXF1ZW5jeUlucF09XCJmcmVxdWVuY3lcIiBbZGVmYXVsdEZyZXF1ZW5jeUlucF09XCJkZWZhdWx0RnJlcXVlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGVUeXBlSW5wXT1cImRhdGVUeXBlXCIgW3Nob3dEZWZhdWx0RHVyYXRpb25JbnBdPVwidHJ1ZVwiIFt0aW1lem9uZUlucF09XCJ0aW1lem9uZVwiXG4gICAgICAgICAgICAgICAgICAgIChkYXRlRmlsdGVyRW1pdHRlcik9XCJkYXRlRmlsdGVyRW1pdHRlZCgkZXZlbnQpXCI+PC9saWItZGF0ZS1maWx0ZXItdHdvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwiY2FyZE92ZXJ3cml0ZSBjYXJkQmFja2dyb3VuZENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzb3VyY2VDb25zdW1UZW1wbGF0ZTsgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9yZ1NvdXJjZVJlcz8uWzBdPy5bJ2RhdGEnXT8uWzBdPy5bJ3ZhbHVlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0OiBvcmdTb3VyY2VSZXM/LlswXT8uWyd1bml0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NvdXJjZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiBzaG93TG9hZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9tYXQtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwiY2FyZE92ZXJ3cml0ZSBjYXJkQmFja2dyb3VuZENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzb3VyY2VDb25zdW1UZW1wbGF0ZTsgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9yZ0NvbnN1bWVkUmVzPy5bMF0/LlsnZGF0YSddPy5bMF0/LlsndmFsdWUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQ6IG9yZ0NvbnN1bWVkUmVzPy5bMF0/LlsndW5pdCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb25zdW1lZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6IHNob3dMb2FkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1jYXJkIGNsYXNzPVwiY2FyZE92ZXJ3cml0ZSBjYXJkQmFja2dyb3VuZENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGliLWRvdWdobnV0IFt2aWV3U3RhdGVJbnBdPVwidmlld1N0YXRlRmxhZ0ZvclNvdXJjZVwiIFtjaGFydFRpdGxlSW5wXT1cImNoYXJ0VGl0bGVGb3JTb3VyY2VcIiBbZGF0YUlucF09XCJjaGFydERhdGFGb3JTb3VyY2VcIj48L2xpYi1kb3VnaG51dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkT3ZlcndyaXRlIGNhcmRCYWNrZ3JvdW5kQ29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItZG91Z2hudXQgW3ZpZXdTdGF0ZUlucF09XCJ2aWV3U3RhdGVGbGFnRm9yTG9hZFwiIFtjaGFydFRpdGxlSW5wXT1cImNoYXJ0VGl0bGVGb3JMb2FkXCIgW2RhdGFJbnBdPVwiY2hhcnREYXRhRm9yTG9hZFwiPjwvbGliLWRvdWdobnV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNzb3VyY2VDb25zdW1UZW1wbGF0ZSBsZXQtbGFiZWw9XCJsYWJlbFwiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LXVuaXQ9XCJ1bml0XCIgbGV0LWxvYWRlcj1cImxvYWRlclwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2FkZXI7IGVsc2UgZGF0YVRlbXBsYXRlXCI+XG4gICAgICAgIDxsaWItc2tlbGV0b24tbG9hZGVyIFtjb3VudF09XCIxXCIgW2FwcGVhcmFuY2VdPVwiJydcIlxuICAgICAgICAgICAgW3RoZW1lXT1cInsgJ2JvcmRlci1yYWRpdXMnOiAnMTZweCcsIGhlaWdodDogJzQwcHgnLCAnYmFja2dyb3VuZC1jb2xvcic6ICdyZ2IoMjMwIDIzMiAyMzUpJyB9XCI+PC9saWItc2tlbGV0b24tbG9hZGVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNkYXRhVGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZzLTIgZnctYm9sZCB0ZXh0LXByaW1hcnlcIj57eyB2YWx1ZSA/IHRzY0NvbW1vblNlcnZpY2UuZm9ybWF0TGFyZ2VOdW1iZXIodmFsdWUsICdmYWxzZScsIDEpXG4gICAgICAgICAgICAgICAgICAgIDogY29tbW9uQ29uc3RhbnQuSFlQSEVOXG4gICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgZnctYm9sZFwiPiB7eyB2YWx1ZSA/IHVuaXQgOiAnJyB9fSA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgZnMtNFwiPlxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctdGVtcGxhdGU+Il19