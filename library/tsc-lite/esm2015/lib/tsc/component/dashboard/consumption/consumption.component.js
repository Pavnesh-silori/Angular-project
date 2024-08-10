import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import * as moment from 'moment';
import { EntityWithChildren, Entity } from '../../../model/entity.model';
import { EntityDialogComponent } from '../../_shared/dialog/entity/entity.component';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { ChartTitle, ChartViewStateEnum, StackBarChart } from '@library/echart';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "@angular/router";
import * as i3 from "../../../service/entity.service";
import * as i4 from "../../../controller/entity.controller";
import * as i5 from "../../../controller/aggregate-data.controller";
import * as i6 from "@angular/material/dialog";
import * as i7 from "@library/date";
import * as i8 from "@angular/material/card";
import * as i9 from "@library/echart";
// /tsc-library/
export class ConsumptionComponent {
    constructor(storageService, activatedRoute, entityService, entityController, aggregateDataController, dialog) {
        this.storageService = storageService;
        this.activatedRoute = activatedRoute;
        this.entityService = entityService;
        this.entityController = entityController;
        this.aggregateDataController = aggregateDataController;
        this.dialog = dialog;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.entityM = new Entity();
        this.consumptionEntityM = [new EntityWithChildren()];
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        this.chartTitle = new ChartTitle();
        this.chartData = new StackBarChart();
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.layoutID = this.storageService.getStorage('layoutID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        this.activatedRoute.queryParams
            .subscribe(queryParam => {
            this.entityID = queryParam.entityID;
            if (this.entityID) {
                this.getEntityByID(this.entityID);
            }
        });
        this.frequency = this.frequencyConstant.filter(frequency => frequency.keyID != 'CUSTOM');
        this.defaultFrequency = this.frequencyEnum.MONTHLY;
        this.dateType = DateTypeEnum.EXCLUSIVE;
        this.getConsumptionEntities();
    }
    getEntityByID(entityID) {
        return __awaiter(this, void 0, void 0, function* () {
            this.entityM = yield this.entityService.getEntityByID(this.orgID, this.layoutID, entityID);
            this.entityName = this.entityM.name;
        });
    }
    getConsumptionEntities() {
        this.entityController.getConsumptionEntities(this.orgID)
            .subscribe((res) => {
            this.consumptionEntityM = [res];
        }, error => {
            console.log('error in getConsumptionEntities() - ', error);
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
        this.getCumulativeConsumption();
    }
    getCumulativeConsumption() {
        this.viewStateFlag = ChartViewStateEnum.LOADING;
        const requestData = this.createDataRequest();
        this.aggregateDataController.getCumulativeConsumption(this.orgID, requestData)
            .subscribe((consumptionRes) => {
            var _a;
            if (((_a = consumptionRes === null || consumptionRes === void 0 ? void 0 : consumptionRes.records) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.chartData.metaData = consumptionRes.records.map(record => ({
                    xAxisSeries: moment(record.date).format("YYYY-MM-DD HH:mm:ss"),
                    totalData: {
                        value: record.totalConsumption.value,
                        unitCode: record.totalConsumption.unit
                    },
                    barData: record.paramData.map(param => ({
                        name: param.label,
                        value: param.value,
                        unit: {
                            code: param.unit
                        }
                    }))
                }));
                this.chartData.totalDataLabel = 'Total consumption';
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
            console.log('error in getCumulativeConsumption() -', error);
        });
    }
    openEntityDialog() {
        const dialog = this.dialog.open(EntityDialogComponent, {
            data: {
                entityID: this.entityID,
                entityObject: this.consumptionEntityM
            },
            width: '50vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });
        dialog.afterClosed().subscribe((dialogRes) => {
            if (dialogRes.entityID) {
                this.entityID = dialogRes.entityID;
                this.getEntityByID(this.entityID);
                this.getCumulativeConsumption();
            }
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
ConsumptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, deps: [{ token: i1.StorageService }, { token: i2.ActivatedRoute }, { token: i3.EntityService }, { token: i4.EntityController }, { token: i5.AggregateDataController }, { token: i6.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard{{ entityName ? ' - ' + entityName : '' }}</div>\n        </div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <lib-date-filter-two [frequencyInp]=\"frequency\" [defaultFrequencyInp]=\"defaultFrequency\"\n                    [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\" [timezoneInp]=\"timezone\"\n                    (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n            <div class=\"col-sm-4\">\n                <button class=\"btn btn-link selectEntityText mt-2 float-end\" type=\"button\" (click)=\"openEntityDialog()\">\n                    Change entity\n                </button>\n            </div>\n        </div>\n\n        <div class=\"row mt-3\">\n            <div class=\"col-sm-12\">\n                <mat-card class=\"cardOverwrite cardBackgroundColor\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <lib-stack-bar [chartTitleInp]=\"chartTitle\" [viewStateInp]=\"viewStateFlag\"\n                                [dataInp]=\"chartData\"></lib-stack-bar>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".selectEntityText{font-size:.88rem}\n"], components: [{ type: i7.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }, { type: i8.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i9.StackBarComponent, selector: "lib-stack-bar", inputs: ["viewStateInp", "chartTitleInp", "dataInp"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-consumption',
                    templateUrl: './consumption.component.html',
                    styleUrls: ['./consumption.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.ActivatedRoute }, { type: i3.EntityService }, { type: i4.EntityController }, { type: i5.AggregateDataController }, { type: i6.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9jb25zdW1wdGlvbi9jb25zdW1wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUlsRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQXVCLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTlGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBUXJGLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7OztBQUNoRixnQkFBZ0I7QUFPaEIsTUFBTSxPQUFPLG9CQUFvQjtJQTBCN0IsWUFDWSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QixFQUM1QixnQkFBa0MsRUFDbEMsdUJBQWdELEVBQ2hELE1BQWlCO1FBTGpCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7IEVudGl0eVdpdGhDaGlsZHJlbk0sIEVudGl0eVdpdGhDaGlsZHJlbiwgRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvZW50aXR5Lm1vZGVsJztcblxuaW1wb3J0IHsgRW50aXR5RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kaWFsb2cvZW50aXR5L2VudGl0eS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFbnRpdHlDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29udHJvbGxlci9lbnRpdHkuY29udHJvbGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEYXRhQ29udHJvbGxlciB9IGZyb20gJy4uLy4uLy4uL2NvbnRyb2xsZXIvYWdncmVnYXRlLWRhdGEuY29udHJvbGxlcic7XG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9lbnRpdHkuc2VydmljZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQsIEZSRVFVRU5DWV9DT05TVEFOVCB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgRGF0ZVR5cGVFbnVtLCBGcmVxdWVuY3lFbnVtIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBDaGFydFRpdGxlLCBDaGFydFZpZXdTdGF0ZUVudW0sIFN0YWNrQmFyQ2hhcnQgfSBmcm9tICdAbGlicmFyeS9lY2hhcnQnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jb25zdW1wdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbnN1bXB0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jb25zdW1wdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnN1bXB0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbW1vbkNvbnN0YW50ID0gQ09NTU9OX0NPTlNUQU5UO1xuICAgIGZyZXF1ZW5jeUNvbnN0YW50ID0gRlJFUVVFTkNZX0NPTlNUQU5UO1xuICAgIGZyZXF1ZW5jeUVudW0gPSBGcmVxdWVuY3lFbnVtO1xuXG4gICAgZGF0ZVR5cGU6IGFueTtcbiAgICBvcmdJRDogYW55O1xuICAgIGxheW91dElEOiBhbnk7XG4gICAgZW50aXR5SUQ6IGFueTtcbiAgICBlbnRpdHlOYW1lOiBzdHJpbmc7XG4gICAgYXBwbGljYXRpb25LZXlJRDogYW55O1xuICAgIHRpbWV6b25lOiBhbnk7XG4gICAgZnJlcXVlbmN5OiBhbnlbXSA9IFtdO1xuICAgIGRlZmF1bHRGcmVxdWVuY3k6IHN0cmluZztcbiAgICBzdGFydERhdGU6IGFueTtcbiAgICBlbmREYXRlOiBhbnk7XG4gICAgaW50ZXJ2YWw6IGFueTtcblxuICAgIGVudGl0eU0gPSBuZXcgRW50aXR5KCk7XG4gICAgY29uc3VtcHRpb25FbnRpdHlNID0gW25ldyBFbnRpdHlXaXRoQ2hpbGRyZW4oKV07XG5cbiAgICB2aWV3U3RhdGVGbGFnOiBzdHJpbmcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcbiAgICBjaGFydFRpdGxlID0gbmV3IENoYXJ0VGl0bGUoKTtcbiAgICBjaGFydERhdGEgPSBuZXcgU3RhY2tCYXJDaGFydCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGVudGl0eUNvbnRyb2xsZXI6IEVudGl0eUNvbnRyb2xsZXIsXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YUNvbnRyb2xsZXI6IEFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyLFxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ0lEJyk7XG4gICAgICAgIHRoaXMubGF5b3V0SUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2xheW91dElEJyk7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25LZXlJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnYXBwbGljYXRpb25LZXlJRCcpO1xuICAgICAgICB0aGlzLnRpbWV6b25lID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCd0aW1lem9uZScpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocXVlcnlQYXJhbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRpdHlJRCA9IHF1ZXJ5UGFyYW0uZW50aXR5SUQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW50aXR5SUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRFbnRpdHlCeUlEKHRoaXMuZW50aXR5SUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gdGhpcy5mcmVxdWVuY3lDb25zdGFudC5maWx0ZXIoZnJlcXVlbmN5ID0+IGZyZXF1ZW5jeS5rZXlJRCAhPSAnQ1VTVE9NJyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEZyZXF1ZW5jeSA9IHRoaXMuZnJlcXVlbmN5RW51bS5NT05USExZO1xuICAgICAgICB0aGlzLmRhdGVUeXBlID0gRGF0ZVR5cGVFbnVtLkVYQ0xVU0lWRTtcblxuICAgICAgICB0aGlzLmdldENvbnN1bXB0aW9uRW50aXRpZXMoKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRFbnRpdHlCeUlEKGVudGl0eUlEKSB7XG4gICAgICAgIHRoaXMuZW50aXR5TSA9IGF3YWl0IHRoaXMuZW50aXR5U2VydmljZS5nZXRFbnRpdHlCeUlEKHRoaXMub3JnSUQsIHRoaXMubGF5b3V0SUQsIGVudGl0eUlEKTtcbiAgICAgICAgdGhpcy5lbnRpdHlOYW1lID0gdGhpcy5lbnRpdHlNLm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0Q29uc3VtcHRpb25FbnRpdGllcygpIHtcbiAgICAgICAgdGhpcy5lbnRpdHlDb250cm9sbGVyLmdldENvbnN1bXB0aW9uRW50aXRpZXModGhpcy5vcmdJRClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogRW50aXR5V2l0aENoaWxkcmVuTSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtcHRpb25FbnRpdHlNID0gW3Jlc107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGdldENvbnN1bXB0aW9uRW50aXRpZXMoKSAtICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRlRmlsdGVyRW1pdHRlZChkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBkYXRhLnN0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZGF0YS5lbmREYXRlO1xuICAgICAgICBsZXQgc2VsZWN0ZWRGcmVxdWVuY3kgPSBkYXRhLmZyZXF1ZW5jeTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGcmVxdWVuY3kgPT0gdGhpcy5mcmVxdWVuY3lFbnVtLkRBSUxZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJob3VyXzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwiZGF5XzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uWUVBUkxZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJtb250aF8xXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldEN1bXVsYXRpdmVDb25zdW1wdGlvbigpO1xuICAgIH1cblxuICAgIGdldEN1bXVsYXRpdmVDb25zdW1wdGlvbigpIHtcblxuICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTE9BRElORztcblxuICAgICAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHRoaXMuY3JlYXRlRGF0YVJlcXVlc3QoKTtcblxuICAgICAgICB0aGlzLmFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyLmdldEN1bXVsYXRpdmVDb25zdW1wdGlvbih0aGlzLm9yZ0lELCByZXF1ZXN0RGF0YSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGNvbnN1bXB0aW9uUmVzOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdW1wdGlvblJlcz8ucmVjb3Jkcz8ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLm1ldGFEYXRhID0gY29uc3VtcHRpb25SZXMucmVjb3Jkcy5tYXAocmVjb3JkID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpc1NlcmllczogbW9tZW50KHJlY29yZC5kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlY29yZC50b3RhbENvbnN1bXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRDb2RlOiByZWNvcmQudG90YWxDb25zdW1wdGlvbi51bml0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyRGF0YTogcmVjb3JkLnBhcmFtRGF0YS5tYXAocGFyYW0gPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJhbS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBwYXJhbS51bml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS50b3RhbERhdGFMYWJlbCA9ICdUb3RhbCBjb25zdW1wdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnNob3dEYXRhVmlldyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnNob3dNYWdpY1R5cGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5zaG93UmVzdG9yZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhLnNob3dEb3dubG9hZEltYWdlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWcgPSBDaGFydFZpZXdTdGF0ZUVudW0uSEFTX0RBVEE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZUZsYWcgPSBDaGFydFZpZXdTdGF0ZUVudW0uTk9fREFUQTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGVGbGFnID0gQ2hhcnRWaWV3U3RhdGVFbnVtLk5PX0RBVEE7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGluIGdldEN1bXVsYXRpdmVDb25zdW1wdGlvbigpIC0nLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlbkVudGl0eURpYWxvZygpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2cub3BlbihFbnRpdHlEaWFsb2dDb21wb25lbnQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHlJRDogdGhpcy5lbnRpdHlJRCxcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5T2JqZWN0OiB0aGlzLmNvbnN1bXB0aW9uRW50aXR5TVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MHZ3JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogeyByaWdodDogJy0ycHgnLCB0b3A6ICcwcHgnIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGlhbG9nLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChkaWFsb2dSZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChkaWFsb2dSZXMuZW50aXR5SUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUlEID0gZGlhbG9nUmVzLmVudGl0eUlEO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRFbnRpdHlCeUlEKHRoaXMuZW50aXR5SUQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VtdWxhdGl2ZUNvbnN1bXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlRGF0YVJlcXVlc3QoKSB7XG5cbiAgICAgICAgbGV0IHJlcXVlc3RCb2R5ID0ge307XG5cbiAgICAgICAgcmVxdWVzdEJvZHlbJ3N0YXJ0VGltZSddID0gdGhpcy5zdGFydERhdGU7XG4gICAgICAgIHJlcXVlc3RCb2R5WydlbmRUaW1lJ10gPSB0aGlzLmVuZERhdGU7XG4gICAgICAgIHJlcXVlc3RCb2R5WydpbnRlcnZhbCddID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgICAgcmVxdWVzdEJvZHlbJ2VudGl0eUlEJ10gPSB0aGlzLmVudGl0eUlEID8gdGhpcy5lbnRpdHlJRCA6IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3RCb2R5O1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNhcmRPdmVyd3JpdGUgaDEwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlckxlZnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlVGl0bGVcIj5Db25zdW1wdGlvbiBEYXNoYm9hcmR7eyBlbnRpdHlOYW1lID8gJyAtICcgKyBlbnRpdHlOYW1lIDogJycgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxuICAgICAgICAgICAgICAgIDxsaWItZGF0ZS1maWx0ZXItdHdvIFtmcmVxdWVuY3lJbnBdPVwiZnJlcXVlbmN5XCIgW2RlZmF1bHRGcmVxdWVuY3lJbnBdPVwiZGVmYXVsdEZyZXF1ZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgIFtkYXRlVHlwZUlucF09XCJkYXRlVHlwZVwiIFtzaG93RGVmYXVsdER1cmF0aW9uSW5wXT1cInRydWVcIiBbdGltZXpvbmVJbnBdPVwidGltZXpvbmVcIlxuICAgICAgICAgICAgICAgICAgICAoZGF0ZUZpbHRlckVtaXR0ZXIpPVwiZGF0ZUZpbHRlckVtaXR0ZWQoJGV2ZW50KVwiPjwvbGliLWRhdGUtZmlsdGVyLXR3bz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tbGluayBzZWxlY3RFbnRpdHlUZXh0IG10LTIgZmxvYXQtZW5kXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvcGVuRW50aXR5RGlhbG9nKClcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2hhbmdlIGVudGl0eVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxtYXQtY2FyZCBjbGFzcz1cImNhcmRPdmVyd3JpdGUgY2FyZEJhY2tncm91bmRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpYi1zdGFjay1iYXIgW2NoYXJ0VGl0bGVJbnBdPVwiY2hhcnRUaXRsZVwiIFt2aWV3U3RhdGVJbnBdPVwidmlld1N0YXRlRmxhZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkYXRhSW5wXT1cImNoYXJ0RGF0YVwiPjwvbGliLXN0YWNrLWJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19