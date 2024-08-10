import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import * as moment from 'moment';
import { Entity } from '../../../model/entity.model';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { BasicAreaLineBarChart, ChartTitle, ChartTypeEnum, ChartViewStateEnum } from '@library/echart';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "@angular/router";
import * as i3 from "../../../service/entity.service";
import * as i4 from "../../../controller/aggregate-data.controller";
import * as i5 from "@library/date";
import * as i6 from "@angular/material/card";
import * as i7 from "@library/echart";
// /tsc-library/
export class ConsumptionComponent {
    constructor(storageService, activatedRoute, entityService, aggregateDataController) {
        this.storageService = storageService;
        this.activatedRoute = activatedRoute;
        this.entityService = entityService;
        this.aggregateDataController = aggregateDataController;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.entityM = [new Entity()];
        this.chartType = ChartTypeEnum.BASIC_BAR_CHART;
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = new BasicAreaLineBarChart();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        this.activatedRoute.queryParams
            .subscribe(queryParam => {
            this.entityID = queryParam.entityID;
            if (this.entityID) {
                this.getEntitiesByOrgID();
            }
        });
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
    }
    getEntitiesByOrgID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = yield this.entityService.getEntitiesByOrgID(this.orgID);
            this.entityName = this.entityM.find(entity => entity.id == this.entityID).name;
        });
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
        this.getWaterConsumption();
    }
    getWaterConsumption() {
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        const requestData = this.createDataRequest();
        this.aggregateDataController.getWaterConsumption(this.orgID, requestData)
            .subscribe((consumptionRes) => {
            var _a;
            if (((_a = consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0]) === null || _a === void 0 ? void 0 : _a.data.length) > 0) {
                this.chartData.metaData = consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].data.map(item => ({
                    name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                    value: item.value
                }));
                this.chartData.unit = {
                    name: '',
                    code: consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].unit,
                };
                this.chartData.yAxisLabel = (consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].paramLabel) + ' (' + (consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes[0].unit) + ')';
                this.chartData.yAxisNameGap = 70;
                this.chartData.showDataView = true;
                this.chartData.showMagicType = true;
                this.chartData.showRestore = true;
                this.chartData.showDownloadImage = true;
                this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
            }
            else {
                this.viewStateFlag = ChartViewStateEnum.NO_DATA;
            }
        }, error => {
            this.viewStateFlag = ChartViewStateEnum.NO_DATA;
            console.log('error in getWaterConsumption() -', error);
        });
    }
    createDataRequest() {
        let requestBody = {};
        requestBody['startTime'] = this.startDate;
        requestBody['endTime'] = this.endDate;
        requestBody['interval'] = this.interval;
        requestBody['entityID'] = this.entityID ? this.entityID : null;
        return requestBody;
    }
}
ConsumptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, deps: [{ token: i1.StorageService }, { token: i2.ActivatedRoute }, { token: i3.EntityService }, { token: i4.AggregateDataController }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard {{ entityName ? ' - ' + entityName : '' }}</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"chartTitle\"\n                                [viewStateInp]=\"viewStateFlag\" [dataInp]=\"chartData\"></lib-basic-area-line-bar>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i5.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i6.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i7.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-consumption',
                    templateUrl: './consumption.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.ActivatedRoute }, { type: i3.EntityService }, { type: i4.AggregateDataController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9jb25zdW1wdGlvbi9jb25zdW1wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFPckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7OztBQUN2RyxnQkFBZ0I7QUFRaEIsTUFBTSxPQUFPLG9CQUFvQjtJQTBCN0IsWUFDWSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QixFQUM1Qix1QkFBZ0Q7UUFIaEQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBNUI1RCxtQkFBYyxHQUFHLGVBQWUsQ0FBQztRQUNqQyxzQkFBaUIs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cmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvZW50aXR5Lm1vZGVsJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi9jb250cm9sbGVyL2FnZ3JlZ2F0ZS1kYXRhLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvZW50aXR5LnNlcnZpY2UnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ09NTU9OX0NPTlNUQU5ULCBGUkVRVUVOQ1lfQ09OU1RBTlQgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IERhdGVUeXBlRW51bSwgRnJlcXVlbmN5RW51bSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgQmFzaWNBcmVhTGluZUJhckNoYXJ0LCBDaGFydFRpdGxlLCBDaGFydFR5cGVFbnVtLCBDaGFydFZpZXdTdGF0ZUVudW0gfSBmcm9tICdAbGlicmFyeS9lY2hhcnQnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jb25zdW1wdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnN1bXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnN1bXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbW1vbkNvbnN0YW50ID0gQ09NTU9OX0NPTlNUQU5UO1xuICAgIGZyZXF1ZW5jeUNvbnN0YW50ID0gRlJFUVVFTkNZX0NPTlNUQU5UO1xuICAgIGZyZXF1ZW5jeUVudW0gPSBGcmVxdWVuY3lFbnVtO1xuXG4gICAgZGF0ZVR5cGU6IGFueTtcbiAgICBvcmdJRDogYW55O1xuICAgIGVudGl0eUlEOiBhbnk7XG4gICAgZW50aXR5TmFtZTogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uS2V5SUQ6IGFueTtcbiAgICB0aW1lem9uZTogYW55O1xuICAgIGZyZXF1ZW5jeTogYW55W10gPSBbXTtcbiAgICBkZWZhdWx0RnJlcXVlbmN5OiBzdHJpbmc7XG4gICAgc3RhcnREYXRlOiBhbnk7XG4gICAgZW5kRGF0ZTogYW55O1xuICAgIHNlbGVjdGVkRnJlcXVlbmN5OiBhbnk7XG4gICAgaW50ZXJ2YWw6IGFueTtcblxuICAgIGVudGl0eU0gPSBbbmV3IEVudGl0eSgpXTtcblxuICAgIGNoYXJ0VHlwZTogc3RyaW5nID0gQ2hhcnRUeXBlRW51bS5CQVNJQ19CQVJfQ0hBUlQ7XG4gICAgdmlld1N0YXRlRmxhZzogc3RyaW5nID0gQ2hhcnRWaWV3U3RhdGVFbnVtLkxPQURJTkc7XG4gICAgY2hhcnRUaXRsZSA9IG5ldyBDaGFydFRpdGxlKCk7XG4gICAgY2hhcnREYXRhID0gbmV3IEJhc2ljQXJlYUxpbmVCYXJDaGFydCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyOiBBZ2dyZWdhdGVEYXRhQ29udHJvbGxlcixcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uS2V5SUQnKTtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndGltZXpvbmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHF1ZXJ5UGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5SUQgPSBxdWVyeVBhcmFtLmVudGl0eUlEO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudGl0eUlEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0RW50aXRpZXNCeU9yZ0lEKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSB0aGlzLmZyZXF1ZW5jeUNvbnN0YW50LmZpbHRlcihmcmVxdWVuY3kgPT4gZnJlcXVlbmN5LmtleUlEICE9ICdDVVNUT00nKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0RnJlcXVlbmN5ID0gdGhpcy5mcmVxdWVuY3lFbnVtLk1PTlRITFk7XG4gICAgICAgIHRoaXMuZGF0ZVR5cGUgPSBEYXRlVHlwZUVudW0uRVhDTFVTSVZFO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEVudGl0aWVzQnlPcmdJRCgpIHtcbiAgICAgICAgdGhpcy5lbnRpdHlNID0gYXdhaXQgdGhpcy5lbnRpdHlTZXJ2aWNlLmdldEVudGl0aWVzQnlPcmdJRCh0aGlzLm9yZ0lEKTtcbiAgICAgICAgdGhpcy5lbnRpdHlOYW1lID0gdGhpcy5lbnRpdHlNLmZpbmQoZW50aXR5ID0+IGVudGl0eS5pZCA9PSB0aGlzLmVudGl0eUlEKS5uYW1lO1xuICAgIH1cblxuICAgIGRhdGVGaWx0ZXJFbWl0dGVkKGRhdGE6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGRhdGEuc3RhcnREYXRlO1xuICAgICAgICB0aGlzLmVuZERhdGUgPSBkYXRhLmVuZERhdGU7XG4gICAgICAgIGxldCBzZWxlY3RlZEZyZXF1ZW5jeSA9IGRhdGEuZnJlcXVlbmN5O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uREFJTFkpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBcImhvdXJfMVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRnJlcXVlbmN5ID09IHRoaXMuZnJlcXVlbmN5RW51bS5NT05USExZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJkYXlfMVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkRnJlcXVlbmN5ID09IHRoaXMuZnJlcXVlbmN5RW51bS5ZRUFSTFkpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBcIm1vbnRoXzFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0V2F0ZXJDb25zdW1wdGlvbigpO1xuXG4gICAgfVxuXG4gICAgZ2V0V2F0ZXJDb25zdW1wdGlvbigpIHtcblxuICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcblxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHRoaXMuY3JlYXRlRGF0YVJlcXVlc3QoKTtcblxuICAgICAgICB0aGlzLmFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyLmdldFdhdGVyQ29uc3VtcHRpb24odGhpcy5vcmdJRCwgcmVxdWVzdERhdGEpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChjb25zdW1wdGlvblJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnN1bXB0aW9uUmVzPy5bMF0/LmRhdGEubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLm1ldGFEYXRhID0gY29uc3VtcHRpb25SZXM/LlswXS5kYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtb21lbnQobmV3IERhdGUoaXRlbS5kYXRlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS51bml0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb25zdW1wdGlvblJlcz8uWzBdLnVuaXQsXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGEueUF4aXNMYWJlbCA9IGNvbnN1bXB0aW9uUmVzPy5bMF0ucGFyYW1MYWJlbCArICcgKCcgKyBjb25zdW1wdGlvblJlcz8uWzBdLnVuaXQgKyAnKSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnlBeGlzTmFtZUdhcCA9IDcwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5zaG93RGF0YVZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5zaG93TWFnaWNUeXBlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGEuc2hvd1Jlc3RvcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5zaG93RG93bmxvYWRJbWFnZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnID0gQ2hhcnRWaWV3U3RhdGVFbnVtLkhBU19EQVRBO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnID0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZyA9IENoYXJ0Vmlld1N0YXRlRW51bS5OT19EQVRBO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBnZXRXYXRlckNvbnN1bXB0aW9uKCkgLScsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVEYXRhUmVxdWVzdCgpIHtcblxuICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSB7fTtcblxuICAgICAgICByZXF1ZXN0Qm9keVsnc3RhcnRUaW1lJ10gPSB0aGlzLnN0YXJ0RGF0ZTtcbiAgICAgICAgcmVxdWVzdEJvZHlbJ2VuZFRpbWUnXSA9IHRoaXMuZW5kRGF0ZTtcbiAgICAgICAgcmVxdWVzdEJvZHlbJ2ludGVydmFsJ10gPSB0aGlzLmludGVydmFsO1xuICAgICAgICByZXF1ZXN0Qm9keVsnZW50aXR5SUQnXSA9IHRoaXMuZW50aXR5SUQgPyB0aGlzLmVudGl0eUlEIDogbnVsbDtcblxuICAgICAgICByZXR1cm4gcmVxdWVzdEJvZHk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZCBtYWluLWNhcmQgY2FyZE92ZXJ3cml0ZSBoMTAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlckNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyTGVmdENvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2VUaXRsZVwiPkNvbnN1bXB0aW9uIERhc2hib2FyZCB7eyBlbnRpdHlOYW1lID8gJyAtICcgKyBlbnRpdHlOYW1lIDogJycgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB0LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxsaWItZGF0ZS1maWx0ZXItdHdvIFtmcmVxdWVuY3lJbnBdPVwiZnJlcXVlbmN5XCIgW2RlZmF1bHRGcmVxdWVuY3lJbnBdPVwiZGVmYXVsdEZyZXF1ZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgIFtkYXRlVHlwZUlucF09XCJkYXRlVHlwZVwiIFtzaG93RGVmYXVsdER1cmF0aW9uSW5wXT1cInRydWVcIiBbdGltZXpvbmVJbnBdPVwidGltZXpvbmVcIlxuICAgICAgICAgICAgICAgICAgICAoZGF0ZUZpbHRlckVtaXR0ZXIpPVwiZGF0ZUZpbHRlckVtaXR0ZWQoJGV2ZW50KVwiPjwvbGliLWRhdGUtZmlsdGVyLXR3bz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJjYXJkT3ZlcndyaXRlIGNhcmRCYWNrZ3JvdW5kQ29sb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaWItYmFzaWMtYXJlYS1saW5lLWJhciBbY2hhcnRUeXBlSW5wXT1cImNoYXJ0VHlwZVwiIFtjaGFydFRpdGxlSW5wXT1cImNoYXJ0VGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmlld1N0YXRlSW5wXT1cInZpZXdTdGF0ZUZsYWdcIiBbZGF0YUlucF09XCJjaGFydERhdGFcIj48L2xpYi1iYXNpYy1hcmVhLWxpbmUtYmFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=