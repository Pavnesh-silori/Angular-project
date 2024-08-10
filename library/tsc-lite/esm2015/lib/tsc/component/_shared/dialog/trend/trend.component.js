import { __awaiter } from "tslib";
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { LIST_CONSTANT } from '../../../../constant/list.constant';
import { AggregateDataRequest } from '../../../../model/aggregate-data.model';
import { Parameter } from '../../../../model/parameter.model';
// tsc-library
import { DialogEnum, MaterialFormFieldAppearance } from '@library/tsc-common';
import { DateTimeIntervalEnum } from '@library/date';
import { ChartViewStateEnum, BasicAreaLineBarChart, ChartTypeEnum, ChartTitle } from '@library/echart';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "@library/date";
import * as i3 from "../../../../service/parameter.service";
import * as i4 from "../../../../service/aggregate-data.service";
import * as i5 from "@library/tsc-common";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/material/core";
import * as i10 from "@library/echart";
import * as i11 from "@angular/material/dialog";
import * as i12 from "@angular/material/tooltip";
import * as i13 from "@angular/forms";
import * as i14 from "@angular/common";
// /tsc-library/
export class TrendComponent {
    constructor(data, storageService, dateService, parameterService, aggregateDataService, tscCommonService) {
        this.data = data;
        this.storageService = storageService;
        this.dateService = dateService;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dateTimeIntervalEnum = DateTimeIntervalEnum;
        this.dialogEnum = DialogEnum;
        this.parameterM = [new Parameter()];
        this.chartType = ChartTypeEnum.BASIC_AREA_CHART;
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = new BasicAreaLineBarChart();
        this.dateRangeFC = new FormControl('LAST_24_HRS', Validators.required);
        this.trendData = data['trendData'];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.dateRangeChange(this.dateRangeFC.value);
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
        });
    }
    dateRangeChange(selectedDateRange) {
        this.startTime = this.dateService.getStartDateTime(selectedDateRange);
        switch (selectedDateRange) {
            case DateTimeIntervalEnum.LAST_24_HRS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_TIME);
                this.interval = 'min_15';
                break;
            case DateTimeIntervalEnum.LAST_7_DAYS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                this.interval = 'hour_1';
                break;
            case DateTimeIntervalEnum.LAST_30_DAYS:
                this.endTime = this.dateService.getEndDateTime(DateTimeIntervalEnum.CURRENT_DAY);
                this.interval = 'day_1';
                break;
            default:
                this.endTime = null;
                this.interval = null;
                break;
        }
        this.getTrendData();
    }
    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }
    getTrendData() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            this.viewStateFlag = ChartViewStateEnum.LOADING;
            try {
                let requestData = new AggregateDataRequest();
                const isCounterParameter = this.getCounterParameter((_a = this.trendData) === null || _a === void 0 ? void 0 : _a.paramMetric);
                requestData.interval = this.interval;
                requestData.entityID = ((_b = this.trendData) === null || _b === void 0 ? void 0 : _b.entityID) ? [this.trendData.entityID] : null;
                requestData.deviceID = ((_c = this.trendData) === null || _c === void 0 ? void 0 : _c.deviceID) ? [this.trendData.deviceID] : null;
                requestData.entityType = (_d = this.trendData) === null || _d === void 0 ? void 0 : _d.entityType;
                requestData.params = [
                    {
                        name: this.trendData.paramMetric,
                        dsAgg: "avg",
                        agg: "avg",
                        sourceLoadType: isCounterParameter ? "all" : null,
                        source_or_load: isCounterParameter ? "source" : null,
                    }
                ];
                requestData.nullifyParams();
                requestData.startTime = this.startTime;
                requestData.endTime = this.endTime;
                const trendRes = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_e = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0]) === null || _e === void 0 ? void 0 : _e.data.length) > 0) {
                    this.paramLabel = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].paramLabel;
                    this.chartData.metaData = trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].data.map(item => ({
                        name: moment(new Date(item.date)).format("YYYY-MM-DD HH:mm:ss"),
                        value: item.value
                    }));
                    this.chartData.unit = {
                        name: '',
                        code: trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].unit,
                    };
                    this.chartData.yAxisLabel = (trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].paramLabel) + ' (' + (trendRes === null || trendRes === void 0 ? void 0 : trendRes[0].unit) + ')';
                    this.chartData.showDataZoomSlider = true;
                    this.chartData.showDataView = true;
                    this.chartData.showMagicType = true;
                    this.chartData.showRestore = true;
                    this.chartData.showDownloadImage = true;
                    this.viewStateFlag = ChartViewStateEnum.HAS_DATA;
                }
                else {
                    this.viewStateFlag = ChartViewStateEnum.NO_DATA;
                }
            }
            catch (error) {
                this.viewStateFlag = ChartViewStateEnum.NO_DATA;
                console.error(`Error in getTrendData()`, error);
            }
        });
    }
}
TrendComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.StorageService }, { token: i2.DateService }, { token: i3.ParameterService }, { token: i4.AggregateDataService }, { token: i5.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
TrendComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TrendComponent, selector: "lib-trend", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ paramLabel }} Trend\n    </strong>\n\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"dialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n\n<div class=\"matDialogContent\" mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"matFieldWidth100\"\n                [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label>Select daterange</mat-label>\n                <mat-select (selectionChange)=\"dateRangeChange($event.value)\" [formControl]=\"dateRangeFC\">\n                    <mat-option disabled>Select daterange</mat-option>\n                    <mat-option *ngFor=\"let daterange of listConstant.TREND_DATE_RANGE\" [value]=\"daterange.value\">\n                        {{ daterange.label }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <lib-basic-area-line-bar [chartTypeInp]=\"chartType\" [chartTitleInp]=\"chartTitle\" [viewStateInp]=\"viewStateFlag\"\n                [dataInp]=\"chartData\"></lib-basic-area-line-bar>\n        </div>\n    </div>\n</div>", components: [{ type: i6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i7.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i8.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i9.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i10.BasicAreaLineBarComponent, selector: "lib-basic-area-line-bar", inputs: ["chartTypeInp", "viewStateInp", "chartTitleInp", "dataInp"] }], directives: [{ type: i11.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i11.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i12.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i11.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i7.MatLabel, selector: "mat-label" }, { type: i13.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i13.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i14.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-trend',
                    templateUrl: './trend.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.StorageService }, { type: i2.DateService }, { type: i3.ParameterService }, { type: i4.AggregateDataService }, { type: i5.TSCCommonService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFjLE1BQU0sbUNBQW1DLENBQUM7QUFLMUUsY0FBYztBQUNkLE9BQU8sRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7QUFDaEcsT0FBTyxFQUFlLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdkcsZ0JBQWdCO0FBU2hCLE1BQU0sT0FBTyxjQUFjO0lBdUJ2QixZQUNvQyxJQUFJLEVBQzVC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QUFDLFVBQVUsR0FBRyxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRyxDQUFDLEVBQUUsVUFBVSxJQUFHLElBQUksSUFBRyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQSxHQUFHLEdBQUcsQ0FBQztvQkFDdkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO29CQUV4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztpQkFFcEQ7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7aUJBQ25EO2FBRUo7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFFaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNuRDs7S0FDSjs7NEdBM0lRLGNBQWMsa0JBd0JYLGVBQWU7Z0dBeEJsQixjQUFjLGlEQzVCM0IsaytDQW1DTTs0RkRQTyxjQUFjO2tCQVAxQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxNQUFNLEVBQUUsRUFDUDtpQkFDSjs7MEJBMEJRLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7IExJU1RfQ09OU1RBTlQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9saXN0LmNvbnN0YW50JztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YVJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9hZ2dyZWdhdGUtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXIsIFBhcmFtZXRlck0gfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wYXJhbWV0ZXIubW9kZWwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZS9wYXJhbWV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2UvYWdncmVnYXRlLWRhdGEuc2VydmljZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEaWFsb2dFbnVtLCBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UsIFRTQ0NvbW1vblNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IERhdGVTZXJ2aWNlLCBEYXRlVGltZUludGVydmFsRW51bSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRWaWV3U3RhdGVFbnVtLCBCYXNpY0FyZWFMaW5lQmFyQ2hhcnQsIENoYXJ0VHlwZUVudW0sIENoYXJ0VGl0bGUgfSBmcm9tICdAbGlicmFyeS9lY2hhcnQnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi10cmVuZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVHJlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbGlzdENvbnN0YW50ID0gTElTVF9DT05TVEFOVDtcblxuICAgIG1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgICBkYXRlVGltZUludGVydmFsRW51bSA9IERhdGVUaW1lSW50ZXJ2YWxFbnVtO1xuICAgIGRpYWxvZ0VudW0gPSBEaWFsb2dFbnVtO1xuXG4gICAgb3JnSUQ6IGFueTtcbiAgICB0cmVuZERhdGE6IGFueTtcbiAgICBzdGFydFRpbWU6IGFueTtcbiAgICBlbmRUaW1lOiBhbnk7XG4gICAgaW50ZXJ2YWw6IGFueTtcbiAgICBwYXJhbUxhYmVsOiBhbnk7XG4gICAgcGFyYW1ldGVyTSA9IFtuZXcgUGFyYW1ldGVyKCldO1xuXG4gICAgY2hhcnRUeXBlOiBzdHJpbmcgPSBDaGFydFR5cGVFbnVtLkJBU0lDX0FSRUFfQ0hBUlQ7XG4gICAgdmlld1N0YXRlRmxhZzogc3RyaW5nID0gQ2hhcnRWaWV3U3RhdGVFbnVtLkxPQURJTkc7XG4gICAgY2hhcnRUaXRsZSA9IG5ldyBDaGFydFRpdGxlKCk7XG4gICAgY2hhcnREYXRhID0gbmV3IEJhc2ljQXJlYUxpbmVCYXJDaGFydCgpO1xuXG4gICAgZGF0ZVJhbmdlRkM6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCdMQVNUXzI0X0hSUycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0ZVNlcnZpY2U6IERhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YVNlcnZpY2U6IEFnZ3JlZ2F0ZURhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRzY0NvbW1vblNlcnZpY2U6IFRTQ0NvbW1vblNlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMudHJlbmREYXRhID0gZGF0YVsndHJlbmREYXRhJ107XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuXG4gICAgICAgIHRoaXMuZGF0ZVJhbmdlQ2hhbmdlKHRoaXMuZGF0ZVJhbmdlRkMudmFsdWUpO1xuICAgICAgICB0aGlzLmdldFBhcmFtZXRlckJ5TGF5b3V0SUQoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbWV0ZXJCeUxheW91dElEKCkge1xuICAgICAgICB0aGlzLnBhcmFtZXRlck0gPSA8UGFyYW1ldGVyTVtdPmF3YWl0IHRoaXMucGFyYW1ldGVyU2VydmljZS5nZXRQYXJhbWV0ZXJCeUxheW91dElEKHRoaXMub3JnSUQpO1xuICAgIH1cblxuICAgIGRhdGVSYW5nZUNoYW5nZShzZWxlY3RlZERhdGVSYW5nZSkge1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5kYXRlU2VydmljZS5nZXRTdGFydERhdGVUaW1lKHNlbGVjdGVkRGF0ZVJhbmdlKTtcblxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRGF0ZVJhbmdlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVUaW1lSW50ZXJ2YWxFbnVtLkxBU1RfMjRfSFJTOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RW5kRGF0ZVRpbWUoRGF0ZVRpbWVJbnRlcnZhbEVudW0uQ1VSUkVOVF9USU1FKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gJ21pbl8xNSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGF0ZVRpbWVJbnRlcnZhbEVudW0uTEFTVF83X0RBWVM6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gdGhpcy5kYXRlU2VydmljZS5nZXRFbmREYXRlVGltZShEYXRlVGltZUludGVydmFsRW51bS5DVVJSRU5UX0RBWSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9ICdob3VyXzEnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERhdGVUaW1lSW50ZXJ2YWxFbnVtLkxBU1RfMzBfREFZUzpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldEVuZERhdGVUaW1lKERhdGVUaW1lSW50ZXJ2YWxFbnVtLkNVUlJFTlRfREFZKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gJ2RheV8xJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0VHJlbmREYXRhKCk7XG4gICAgfVxuXG4gICAgZ2V0Q291bnRlclBhcmFtZXRlcihwYXJhbU1ldHJpY1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMudHNjQ29tbW9uU2VydmljZS5nZXRVbmlxdWVPYmplY3QodGhpcy5wYXJhbWV0ZXJNLCAnaXNDb3VudGVyJywgcGFyYW1NZXRyaWNWYWx1ZSk7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXIgPyBwYXJhbWV0ZXIuaXNDb3VudGVyIDogZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJlbmREYXRhKCkge1xuXG4gICAgICAgIHRoaXMudmlld1N0YXRlRmxhZyA9IENoYXJ0Vmlld1N0YXRlRW51bS5MT0FESU5HO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSBuZXcgQWdncmVnYXRlRGF0YVJlcXVlc3QoKTtcblxuICAgICAgICAgICAgY29uc3QgaXNDb3VudGVyUGFyYW1ldGVyID0gdGhpcy5nZXRDb3VudGVyUGFyYW1ldGVyKHRoaXMudHJlbmREYXRhPy5wYXJhbU1ldHJpYyk7XG5cbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmVudGl0eUlEID0gdGhpcy50cmVuZERhdGE/LmVudGl0eUlEID8gW3RoaXMudHJlbmREYXRhLmVudGl0eUlEXSA6IG51bGw7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5kZXZpY2VJRCA9IHRoaXMudHJlbmREYXRhPy5kZXZpY2VJRCA/IFt0aGlzLnRyZW5kRGF0YS5kZXZpY2VJRF0gOiBudWxsO1xuICAgICAgICAgICAgcmVxdWVzdERhdGEuZW50aXR5VHlwZSA9IHRoaXMudHJlbmREYXRhPy5lbnRpdHlUeXBlO1xuXG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5wYXJhbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRyZW5kRGF0YS5wYXJhbU1ldHJpYyxcbiAgICAgICAgICAgICAgICAgICAgZHNBZ2c6IFwiYXZnXCIsXG4gICAgICAgICAgICAgICAgICAgIGFnZzogXCJhdmdcIixcbiAgICAgICAgICAgICAgICAgICAgc291cmNlTG9hZFR5cGU6IGlzQ291bnRlclBhcmFtZXRlciA/IFwiYWxsXCIgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2Vfb3JfbG9hZDogaXNDb3VudGVyUGFyYW1ldGVyID8gXCJzb3VyY2VcIiA6IG51bGwsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLm51bGxpZnlQYXJhbXMoKTtcblxuICAgICAgICAgICAgcmVxdWVzdERhdGEuc3RhcnRUaW1lID0gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5lbmRUaW1lID0gdGhpcy5lbmRUaW1lO1xuXG4gICAgICAgICAgICBjb25zdCB0cmVuZFJlcyA9IGF3YWl0IHRoaXMuYWdncmVnYXRlRGF0YVNlcnZpY2UuZ2V0QWdncmVnYXRlRGF0YSh0aGlzLm9yZ0lELCByZXF1ZXN0RGF0YSk7XG5cbiAgICAgICAgICAgIGlmICh0cmVuZFJlcz8uWzBdPy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtTGFiZWwgPSB0cmVuZFJlcz8uWzBdLnBhcmFtTGFiZWw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5tZXRhRGF0YSA9IHRyZW5kUmVzPy5bMF0uZGF0YS5tYXAoaXRlbSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBtb21lbnQobmV3IERhdGUoaXRlbS5kYXRlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS51bml0ID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogdHJlbmRSZXM/LlswXS51bml0LFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS55QXhpc0xhYmVsID0gdHJlbmRSZXM/LlswXS5wYXJhbUxhYmVsICsgJyAoJyArIHRyZW5kUmVzPy5bMF0udW5pdCArICcpJztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5zaG93RGF0YVpvb21TbGlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnNob3dEYXRhVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGEuc2hvd01hZ2ljVHlwZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGEuc2hvd1Jlc3RvcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnNob3dEb3dubG9hZEltYWdlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlRmxhZyA9IENoYXJ0Vmlld1N0YXRlRW51bS5IQVNfREFUQTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnID0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEE7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGdldFRyZW5kRGF0YSgpYCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8ZGl2IG1hdC1kaWFsb2ctdGl0bGU+XG4gICAgPHN0cm9uZyBjbGFzcz1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgIHt7IHBhcmFtTGFiZWwgfX0gVHJlbmRcbiAgICA8L3N0cm9uZz5cblxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2UgY2RrRm9jdXNJbml0aWFsIGNsYXNzPVwiZmxvYXQtZW5kIG1hdERpYWxvZ0Nsb3NlXCIgbWF0VG9vbHRpcD1cIkNsb3NlXCJcbiAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwiYmVmb3JlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiIFttYXQtZGlhbG9nLWNsb3NlXT1cImRpYWxvZ0VudW0uQ0xPU0VfRFJcIj5cbiAgICAgICAgICAgIGNsb3NlXG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibWF0RGlhbG9nQ29udGVudFwiIG1hdC1kaWFsb2ctY29udGVudD5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0RmllbGRXaWR0aDEwMFwiXG4gICAgICAgICAgICAgICAgW2FwcGVhcmFuY2VdPVwibWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0IGRhdGVyYW5nZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChzZWxlY3Rpb25DaGFuZ2UpPVwiZGF0ZVJhbmdlQ2hhbmdlKCRldmVudC52YWx1ZSlcIiBbZm9ybUNvbnRyb2xdPVwiZGF0ZVJhbmdlRkNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gZGlzYWJsZWQ+U2VsZWN0IGRhdGVyYW5nZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGRhdGVyYW5nZSBvZiBsaXN0Q29uc3RhbnQuVFJFTkRfREFURV9SQU5HRVwiIFt2YWx1ZV09XCJkYXRlcmFuZ2UudmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGVyYW5nZS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgIDxsaWItYmFzaWMtYXJlYS1saW5lLWJhciBbY2hhcnRUeXBlSW5wXT1cImNoYXJ0VHlwZVwiIFtjaGFydFRpdGxlSW5wXT1cImNoYXJ0VGl0bGVcIiBbdmlld1N0YXRlSW5wXT1cInZpZXdTdGF0ZUZsYWdcIlxuICAgICAgICAgICAgICAgIFtkYXRhSW5wXT1cImNoYXJ0RGF0YVwiPjwvbGliLWJhc2ljLWFyZWEtbGluZS1iYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19