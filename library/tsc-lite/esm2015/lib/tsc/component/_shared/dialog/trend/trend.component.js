import { __awaiter } from "tslib";
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LIST_CONSTANT } from '../../../../constant/list.constant';
import { AggregateDataRequest } from '../../../../model/aggregate-data.model';
import { Parameter } from '../../../../model/parameter.model';
// tsc-library
import { COMMON_CONSTANT, DialogEnum, LOADING_GRAPHIC, MaterialFormFieldAppearance, NO_DATA_GRAPHIC } from '@library/tsc-common';
import { DateTimeIntervalEnum } from '@library/date';
import * as moment from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@library/storage-service";
import * as i3 from "@library/date";
import * as i4 from "../../../../service/parameter.service";
import * as i5 from "../../../../service/aggregate-data.service";
import * as i6 from "@library/tsc-common";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/select";
import * as i10 from "@angular/material/core";
import * as i11 from "@angular/material/tooltip";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/common";
import * as i14 from "ngx-echarts";
// /tsc-library/
export class TrendComponent {
    constructor(dialogRef, data, storageService, dateService, parameterService, aggregateDataService, tscCommonService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.storageService = storageService;
        this.dateService = dateService;
        this.parameterService = parameterService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.dialog = dialog;
        //TODO: SOMYA AGRAWAL, remove all chart dependency once chart library completed..
        this.listConstant = LIST_CONSTANT;
        this.materialFormFieldAppearance = MaterialFormFieldAppearance;
        this.dateTimeIntervalEnum = DateTimeIntervalEnum;
        this.dialogEnum = DialogEnum;
        this.renderFlag = 'LOADING';
        this.parameterM = [new Parameter()];
        this.dateRangeFC = new FormControl('LAST_24_HRS', Validators.required);
        this.trendData = data['trendData'];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.dateRangeChange(this.dateRangeFC.value);
        this.noDataOption = {
            title: {
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
        this.getParameterByLayoutID();
    }
    getParameterByLayoutID() {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameterM = (yield this.parameterService.getParameterByLayoutID(this.orgID));
        });
    }
    dateRangeChange(selectedDateRange) {
        this.renderFlag = 'LOADING';
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
        this.chartDataCheck();
        this.getTrendData();
    }
    chartDataCheck() {
        if (this.renderFlag == 'LOADING') {
            this.chartDataOption = LOADING_GRAPHIC;
        }
        else if (this.renderFlag == 'DATA') {
            this.drawChart();
        }
        else {
            this.chartDataOption = this.noDataOption;
        }
    }
    getCounterParameter(paramMetricValue) {
        const parameter = this.tscCommonService.getUniqueObject(this.parameterM, 'isCounter', paramMetricValue);
        return parameter ? parameter.isCounter : false;
    }
    getTrendData() {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            this.renderFlag = 'LOADING';
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
                        ourceLoadType: isCounterParameter ? "all" : null,
                        source_or_load: isCounterParameter ? "source" : null,
                    }
                ];
                requestData.nullifyParams();
                requestData.startTime = this.startTime;
                requestData.endTime = this.endTime;
                this.trendData = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
                if (((_f = (_e = this.trendData) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.data.length) > 0) {
                    this.paramLabel = (_g = this.trendData) === null || _g === void 0 ? void 0 : _g[0].paramLabel;
                    this.renderFlag = 'DATA';
                }
                else {
                    this.renderFlag = 'NO_DATA';
                }
                this.chartDataCheck();
            }
            catch (error) {
                console.error(`Error in getTrendData()`, error);
            }
        });
    }
    drawChart() {
        var _a, _b, _c, _d, _e, _f, _g;
        const value = (_a = this.trendData) === null || _a === void 0 ? void 0 : _a[0].data.map(item => item.value);
        const unit = (_b = this.trendData) === null || _b === void 0 ? void 0 : _b[0].unit;
        let formattedDatesForXAxis;
        if (this.dateRangeFC.value == DateTimeIntervalEnum.LAST_24_HRS) {
            formattedDatesForXAxis = (_c = this.trendData) === null || _c === void 0 ? void 0 : _c[0].data.map(item => {
                const date = new Date(item.date);
                return moment(date).format("HH:mm");
            });
        }
        else {
            formattedDatesForXAxis = (_d = this.trendData) === null || _d === void 0 ? void 0 : _d[0].data.map(item => {
                const date = new Date(item.date);
                return moment(date).format("YYYY-MM-DD HH:mm:ss");
            });
        }
        const formattedDatesForTooltip = (_e = this.trendData) === null || _e === void 0 ? void 0 : _e[0].data.map(item => {
            const date = new Date(item.date);
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
        });
        this.chartDataOption = {
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: true },
                    saveAsImage: { show: true }
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    const dataIndex = params[0].dataIndex;
                    let tooltip = '';
                    tooltip += formattedDatesForTooltip[dataIndex] + '<br />';
                    params.forEach(function (param) {
                        tooltip += 'Value: <b><span style="float: right; margin-left:15px;">' + (param.value != null ? (param.value) + ' ' + unit : COMMON_CONSTANT.HYPHEN) + '</span></b>';
                    });
                    return tooltip;
                }
            },
            dataZoom: [
                {
                    type: 'slider',
                    filterMode: 'none'
                },
                {
                    type: 'inside',
                    filterMode: 'none'
                }
            ],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: formattedDatesForXAxis
            },
            yAxis: {
                type: 'value',
                name: ((_f = this.trendData) === null || _f === void 0 ? void 0 : _f[0].paramLabel) + ' (' + ((_g = this.trendData) === null || _g === void 0 ? void 0 : _g[0].unit) + ')',
                nameLocation: 'middle',
                nameGap: 40
            },
            series: [
                {
                    data: value,
                    type: 'line',
                    areaStyle: {}
                }
            ]
        };
    }
}
TrendComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }, { token: i2.StorageService }, { token: i3.DateService }, { token: i4.ParameterService }, { token: i5.AggregateDataService }, { token: i6.TSCCommonService }, { token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
TrendComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: TrendComponent, selector: "lib-trend", ngImport: i0, template: "<div mat-dialog-title>\n    <strong class=\"dialogTitle\">\n        {{ paramLabel }} Trend\n    </strong>\n    <button mat-icon-button mat-dialog-close cdkFocusInitial class=\"float-end matDialogClose\" matTooltip=\"Close\"\n        matTooltipPosition=\"before\">\n        <span class=\"material-symbols-outlined\" [mat-dialog-close]=\"dialogEnum.CLOSE_DR\">\n            close\n        </span>\n    </button>\n</div>\n<div class=\"matDialogContent\" mat-dialog-content>\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <mat-form-field class=\"mat-field-width-100\" [appearance]=\"materialFormFieldAppearance.FORM_FIELD_APPEARANCE\">\n                <mat-label>Select daterange</mat-label>\n                <mat-select (selectionChange)=\"dateRangeChange($event.value)\" [formControl]=\"dateRangeFC\">\n                    <mat-option disabled>Select daterange</mat-option>\n                    <mat-option *ngFor=\"let daterange of listConstant.TREND_DATE_RANGE\" [value]=\"daterange.value\">\n                        {{ daterange.label }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div echarts [options]=\"chartDataOption\"></div>\n    </div>\n</div>", components: [{ type: i7.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i8.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i9.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i10.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["type", "mat-dialog-close", "aria-label", "matDialogClose"], exportAs: ["matDialogClose"] }, { type: i11.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i8.MatLabel, selector: "mat-label" }, { type: i12.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i12.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i13.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i14.NgxEchartsDirective, selector: "echarts, [echarts]", inputs: ["options", "theme", "loading", "initOpts", "merge", "autoResize", "loadingType", "loadingOpts"], outputs: ["chartInit", "optionsError", "chartClick", "chartDblClick", "chartMouseDown", "chartMouseMove", "chartMouseUp", "chartMouseOver", "chartMouseOut", "chartGlobalOut", "chartContextMenu", "chartLegendSelectChanged", "chartLegendSelected", "chartLegendUnselected", "chartLegendScroll", "chartDataZoom", "chartDataRangeSelected", "chartTimelineChanged", "chartTimelinePlayChanged", "chartRestore", "chartDataViewChanged", "chartMagicTypeChanged", "chartPieSelectChanged", "chartPieSelected", "chartPieUnselected", "chartMapSelectChanged", "chartMapSelected", "chartMapUnselected", "chartAxisAreaSelected", "chartFocusNodeAdjacency", "chartUnfocusNodeAdjacency", "chartBrush", "chartBrushEnd", "chartBrushSelected", "chartRendered", "chartFinished"], exportAs: ["echarts"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-trend',
                    templateUrl: './trend.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i2.StorageService }, { type: i3.DateService }, { type: i4.ParameterService }, { type: i5.AggregateDataService }, { type: i6.TSCCommonService }, { type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLGVBQWUsRUFBMkIsTUFBTSwwQkFBMEIsQ0FBQztBQUlwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLG1DQUFtQyxDQUFDO0FBSzFFLGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsMkJBQTJCLEVBQUUsZUFBZSxFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ25KLE9BQU8sRUFBZSxvQkFBb0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQUNqQyxnQkFBZ0I7QUFTaEIsTUFBTSxPQUFPLGNBQWM7SUF3QnZCLFlBQ1ksU0FBdUMsRUFDZixJQUFJLEVBQzVCLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLGdCQUFrQyxFQUNs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ICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnZWNoYXJ0cyc7XG5cbmltcG9ydCB7IExJU1RfQ09OU1RBTlQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9saXN0LmNvbnN0YW50JztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YVJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9hZ2dyZWdhdGUtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYXJhbWV0ZXIsIFBhcmFtZXRlck0gfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wYXJhbWV0ZXIubW9kZWwnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZS9wYXJhbWV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2UvYWdncmVnYXRlLWRhdGEuc2VydmljZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQsIERpYWxvZ0VudW0sIExPQURJTkdfR1JBUEhJQywgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLCBOT19EQVRBX0dSQVBISUMsIFRTQ0NvbW1vblNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IERhdGVTZXJ2aWNlLCBEYXRlVGltZUludGVydmFsRW51bSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXRyZW5kJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHJlbmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlczogW1xuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAvL1RPRE86IFNPTVlBIEFHUkFXQUwsIHJlbW92ZSBhbGwgY2hhcnQgZGVwZW5kZW5jeSBvbmNlIGNoYXJ0IGxpYnJhcnkgY29tcGxldGVkLi5cblxuICAgIGxpc3RDb25zdGFudCA9IExJU1RfQ09OU1RBTlQ7XG5cbiAgICBtYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2UgPSBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2U7XG4gICAgZGF0ZVRpbWVJbnRlcnZhbEVudW0gPSBEYXRlVGltZUludGVydmFsRW51bTtcbiAgICBkaWFsb2dFbnVtID0gRGlhbG9nRW51bTtcblxuICAgIG9yZ0lEOiBhbnk7XG4gICAgdHJlbmREYXRhOiBhbnk7XG4gICAgc3RhcnRUaW1lOiBhbnk7XG4gICAgZW5kVGltZTogYW55O1xuICAgIGludGVydmFsOiBhbnk7XG4gICAgcGFyYW1MYWJlbDogYW55O1xuICAgIG5vRGF0YU9wdGlvbjogYW55O1xuICAgIHJlbmRlckZsYWc6IHN0cmluZyA9ICdMT0FESU5HJztcbiAgICBjaGFydERhdGFPcHRpb246IEVDaGFydHNPcHRpb247XG5cbiAgICBwYXJhbWV0ZXJNID0gW25ldyBQYXJhbWV0ZXIoKV07XG5cbiAgICBkYXRlUmFuZ2VGQzogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ0xBU1RfMjRfSFJTJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxUcmVuZENvbXBvbmVudD4sXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0ZVNlcnZpY2U6IERhdGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHBhcmFtZXRlclNlcnZpY2U6IFBhcmFtZXRlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YVNlcnZpY2U6IEFnZ3JlZ2F0ZURhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRzY0NvbW1vblNlcnZpY2U6IFRTQ0NvbW1vblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2dcbiAgICApIHtcbiAgICAgICAgdGhpcy50cmVuZERhdGEgPSBkYXRhWyd0cmVuZERhdGEnXTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ0lEJyk7XG5cbiAgICAgICAgdGhpcy5kYXRlUmFuZ2VDaGFuZ2UodGhpcy5kYXRlUmFuZ2VGQy52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub0RhdGFPcHRpb24gPSB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JhcGhpYzogTk9fREFUQV9HUkFQSElDLFxuICAgICAgICAgICAgeEF4aXM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgICAgICAgIHlBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5nZXRQYXJhbWV0ZXJCeUxheW91dElEKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UGFyYW1ldGVyQnlMYXlvdXRJRCgpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJNID0gPFBhcmFtZXRlck1bXT5hd2FpdCB0aGlzLnBhcmFtZXRlclNlcnZpY2UuZ2V0UGFyYW1ldGVyQnlMYXlvdXRJRCh0aGlzLm9yZ0lEKTtcbiAgICB9XG5cbiAgICBkYXRlUmFuZ2VDaGFuZ2Uoc2VsZWN0ZWREYXRlUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJGbGFnID0gJ0xPQURJTkcnO1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5kYXRlU2VydmljZS5nZXRTdGFydERhdGVUaW1lKHNlbGVjdGVkRGF0ZVJhbmdlKTtcblxuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRGF0ZVJhbmdlKSB7XG4gICAgICAgICAgICBjYXNlIERhdGVUaW1lSW50ZXJ2YWxFbnVtLkxBU1RfMjRfSFJTOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuZGF0ZVNlcnZpY2UuZ2V0RW5kRGF0ZVRpbWUoRGF0ZVRpbWVJbnRlcnZhbEVudW0uQ1VSUkVOVF9USU1FKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gJ21pbl8xNSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgRGF0ZVRpbWVJbnRlcnZhbEVudW0uTEFTVF83X0RBWVM6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gdGhpcy5kYXRlU2VydmljZS5nZXRFbmREYXRlVGltZShEYXRlVGltZUludGVydmFsRW51bS5DVVJSRU5UX0RBWSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9ICdob3VyXzEnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIERhdGVUaW1lSW50ZXJ2YWxFbnVtLkxBU1RfMzBfREFZUzpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSB0aGlzLmRhdGVTZXJ2aWNlLmdldEVuZERhdGVUaW1lKERhdGVUaW1lSW50ZXJ2YWxFbnVtLkNVUlJFTlRfREFZKTtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gJ2RheV8xJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhcnREYXRhQ2hlY2soKTtcbiAgICAgICAgdGhpcy5nZXRUcmVuZERhdGEoKTtcbiAgICB9XG5cbiAgICBjaGFydERhdGFDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnTE9BRElORycpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhT3B0aW9uID0gTE9BRElOR19HUkFQSElDO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVuZGVyRmxhZyA9PSAnREFUQScpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YU9wdGlvbiA9IHRoaXMubm9EYXRhT3B0aW9uO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q291bnRlclBhcmFtZXRlcihwYXJhbU1ldHJpY1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMudHNjQ29tbW9uU2VydmljZS5nZXRVbmlxdWVPYmplY3QodGhpcy5wYXJhbWV0ZXJNLCAnaXNDb3VudGVyJywgcGFyYW1NZXRyaWNWYWx1ZSk7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXIgPyBwYXJhbWV0ZXIuaXNDb3VudGVyIDogZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJlbmREYXRhKCkge1xuICAgICAgICB0aGlzLnJlbmRlckZsYWcgPSAnTE9BRElORyc7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IG5ldyBBZ2dyZWdhdGVEYXRhUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBpc0NvdW50ZXJQYXJhbWV0ZXIgPSB0aGlzLmdldENvdW50ZXJQYXJhbWV0ZXIodGhpcy50cmVuZERhdGE/LnBhcmFtTWV0cmljKTtcblxuICAgICAgICAgICAgcmVxdWVzdERhdGEuaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xuICAgICAgICAgICAgcmVxdWVzdERhdGEuZW50aXR5SUQgPSB0aGlzLnRyZW5kRGF0YT8uZW50aXR5SUQgPyBbdGhpcy50cmVuZERhdGEuZW50aXR5SURdIDogbnVsbDtcbiAgICAgICAgICAgIHJlcXVlc3REYXRhLmRldmljZUlEID0gdGhpcy50cmVuZERhdGE/LmRldmljZUlEID8gW3RoaXMudHJlbmREYXRhLmRldmljZUlEXSA6IG51bGw7XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5lbnRpdHlUeXBlID0gdGhpcy50cmVuZERhdGE/LmVudGl0eVR5cGU7XG5cbiAgICAgICAgICAgIHJlcXVlc3REYXRhLnBhcmFtcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudHJlbmREYXRhLnBhcmFtTWV0cmljLFxuICAgICAgICAgICAgICAgICAgICBkc0FnZzogXCJhdmdcIixcbiAgICAgICAgICAgICAgICAgICAgYWdnOiBcImF2Z1wiLFxuICAgICAgICAgICAgICAgICAgICBvdXJjZUxvYWRUeXBlOiBpc0NvdW50ZXJQYXJhbWV0ZXIgPyBcImFsbFwiIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlX29yX2xvYWQ6IGlzQ291bnRlclBhcmFtZXRlciA/IFwic291cmNlXCIgOiBudWxsLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXF1ZXN0RGF0YS5udWxsaWZ5UGFyYW1zKCk7XG5cbiAgICAgICAgICAgIHJlcXVlc3REYXRhLnN0YXJ0VGltZSA9IHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICAgICAgcmVxdWVzdERhdGEuZW5kVGltZSA9IHRoaXMuZW5kVGltZTtcblxuICAgICAgICAgICAgdGhpcy50cmVuZERhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZURhdGFTZXJ2aWNlLmdldEFnZ3JlZ2F0ZURhdGEodGhpcy5vcmdJRCwgcmVxdWVzdERhdGEpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy50cmVuZERhdGE/LlswXT8uZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbUxhYmVsID0gdGhpcy50cmVuZERhdGE/LlswXS5wYXJhbUxhYmVsO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmxhZyA9ICdEQVRBJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGbGFnID0gJ05PX0RBVEEnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YUNoZWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbiBnZXRUcmVuZERhdGEoKWAsIGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZHJhd0NoYXJ0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJlbmREYXRhPy5bMF0uZGF0YS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcbiAgICAgICAgY29uc3QgdW5pdCA9IHRoaXMudHJlbmREYXRhPy5bMF0udW5pdDtcblxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZXNGb3JYQXhpcztcblxuICAgICAgICBpZiAodGhpcy5kYXRlUmFuZ2VGQy52YWx1ZSA9PSBEYXRlVGltZUludGVydmFsRW51bS5MQVNUXzI0X0hSUykge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZXNGb3JYQXhpcyA9IHRoaXMudHJlbmREYXRhPy5bMF0uZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoXCJISDptbVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZXNGb3JYQXhpcyA9IHRoaXMudHJlbmREYXRhPy5bMF0uZGF0YS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlc0ZvclRvb2x0aXAgPSB0aGlzLnRyZW5kRGF0YT8uWzBdLmRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hhcnREYXRhT3B0aW9uID0ge1xuICAgICAgICAgICAgdG9vbGJveDoge1xuICAgICAgICAgICAgICAgIGZlYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZpZXc6IHsgc2hvdzogdHJ1ZSwgcmVhZE9ubHk6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUFzSW1hZ2U6IHsgc2hvdzogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXG4gICAgICAgICAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NoYWRvdydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBwYXJhbXNbMF0uZGF0YUluZGV4O1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9vbHRpcCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9IGZvcm1hdHRlZERhdGVzRm9yVG9vbHRpcFtkYXRhSW5kZXhdICsgJzxiciAvPic7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwICs9ICdWYWx1ZTogPGI+PHNwYW4gc3R5bGU9XCJmbG9hdDogcmlnaHQ7IG1hcmdpbi1sZWZ0OjE1cHg7XCI+JyArIChwYXJhbS52YWx1ZSAhPSBudWxsID8gKHBhcmFtLnZhbHVlKSArICcgJyArIHVuaXQgOiBDT01NT05fQ09OU1RBTlQuSFlQSEVOKSArICc8L3NwYW4+PC9iPic7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YVpvb206IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlOiAnbm9uZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2luc2lkZScsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGU6ICdub25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1hdHRlZERhdGVzRm9yWEF4aXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICd2YWx1ZScsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50cmVuZERhdGE/LlswXS5wYXJhbUxhYmVsICsgJyAoJyArIHRoaXMudHJlbmREYXRhPy5bMF0udW5pdCArICcpJyxcbiAgICAgICAgICAgICAgICBuYW1lTG9jYXRpb246ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgIG5hbWVHYXA6IDQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8ZGl2IG1hdC1kaWFsb2ctdGl0bGU+XG4gICAgPHN0cm9uZyBjbGFzcz1cImRpYWxvZ1RpdGxlXCI+XG4gICAgICAgIHt7IHBhcmFtTGFiZWwgfX0gVHJlbmRcbiAgICA8L3N0cm9uZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlIGNka0ZvY3VzSW5pdGlhbCBjbGFzcz1cImZsb2F0LWVuZCBtYXREaWFsb2dDbG9zZVwiIG1hdFRvb2x0aXA9XCJDbG9zZVwiXG4gICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cImJlZm9yZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBbbWF0LWRpYWxvZy1jbG9zZV09XCJkaWFsb2dFbnVtLkNMT1NFX0RSXCI+XG4gICAgICAgICAgICBjbG9zZVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtYXREaWFsb2dDb250ZW50XCIgbWF0LWRpYWxvZy1jb250ZW50PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJtYXQtZmllbGQtd2lkdGgtMTAwXCIgW2FwcGVhcmFuY2VdPVwibWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLkZPUk1fRklFTERfQVBQRUFSQU5DRVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U2VsZWN0IGRhdGVyYW5nZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IChzZWxlY3Rpb25DaGFuZ2UpPVwiZGF0ZVJhbmdlQ2hhbmdlKCRldmVudC52YWx1ZSlcIiBbZm9ybUNvbnRyb2xdPVwiZGF0ZVJhbmdlRkNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gZGlzYWJsZWQ+U2VsZWN0IGRhdGVyYW5nZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGRhdGVyYW5nZSBvZiBsaXN0Q29uc3RhbnQuVFJFTkRfREFURV9SQU5HRVwiIFt2YWx1ZV09XCJkYXRlcmFuZ2UudmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGVyYW5nZS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGVjaGFydHMgW29wdGlvbnNdPVwiY2hhcnREYXRhT3B0aW9uXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=