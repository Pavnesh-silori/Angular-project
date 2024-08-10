import { __awaiter } from "tslib";
import { Component } from '@angular/core';
import { AggregateDataRequest } from '../../../model/aggregate-data.model';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT, MaterialFormFieldAppearance } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { ApplicationKeyID } from '@library/application-service';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "../../../service/aggregate-data.service";
import * as i3 from "@library/date";
export class ConsumptionComponent {
    constructor(storageService, aggregateDataService) {
        this.storageService = storageService;
        this.aggregateDataService = aggregateDataService;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.paramMetric = "gwFlowTotalizer";
        }
        this.formFieldAppearance = MaterialFormFieldAppearance.FORM_FIELD_APPEARANCE_STANDARD;
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
        this.getConsumptionData();
    }
    getConsumptionData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const requestData = this.createDataRequest();
                const consumptionRes = yield this.aggregateDataService.getAggregateData(this.orgID, requestData);
            }
            catch (error) {
                console.error(`Error in getConsumptionData()`, error);
            }
        });
    }
    createDataRequest() {
        const requestData = new AggregateDataRequest();
        requestData.startTime = this.startDate;
        requestData.endTime = this.endDate;
        requestData.interval = this.interval;
        requestData.params = [
            {
                name: this.paramMetric,
                dsAgg: "sum",
                agg: "sum",
                source_or_load: "source",
                sourceLoadType: "all"
            }
        ];
        requestData.nullifyParams();
        requestData.groupAll = true;
        return requestData;
    }
}
ConsumptionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, deps: [{ token: i1.StorageService }, { token: i2.AggregateDataService }], target: i0.ɵɵFactoryTarget.Component });
ConsumptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ConsumptionComponent, selector: "app-consumption", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\">Consumption Dashboard</div>\n        </div>\n    </div>\n\n    <div class=\"card-body pt-0\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <lib-date-filter-two [materialFormFieldAppearanceInp]=\"formFieldAppearance\" [frequencyInp]=\"frequency\"\n                    [defaultFrequencyInp]=\"defaultFrequency\" [dateTypeInp]=\"dateType\" [showDefaultDurationInp]=\"true\"\n                    [timezoneInp]=\"timezone\" (dateFilterEmitter)=\"dateFilterEmitted($event)\"></lib-date-filter-two>\n            </div>\n        </div>\n    </div>\n</div>", components: [{ type: i3.DateFilterTwoComponent, selector: "lib-date-filter-two", inputs: ["materialFormFieldAppearanceInp", "frequencyInp", "defaultFrequencyInp", "dateTypeInp", "timezoneInp", "labelInp", "showDefaultDurationInp", "cdrFormatInp", "rangeInp", "showRangeInp", "showTimeInCDRInp", "showCdrRangeLabelInp"], outputs: ["dateFilterEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-consumption',
                    templateUrl: './consumption.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.AggregateDataService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9jb25zdW1wdGlvbi9jb25zdW1wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUszRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLDJCQUEyQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pILE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQVFoRSxNQUFNLE9BQU8sb0JBQW9CO0lBbUI3QixZQUNZLGNBQThCLEVBQzlCLG9CQUEwQztRQUQxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQW5CdEQsbUJBQWMsR0FBRyxlQUFlLENBQUM7UUFDakMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFROUIsY0FBUyxHQUFVLEVBQUUsQ0FBQztJQVVuQixDQUFDO0lBRUosUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsY0FB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a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsTUFBTSxFQUFFLEVBQ1A7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVEYXRhUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FnZ3JlZ2F0ZS1kYXRhLm1vZGVsJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL2FnZ3JlZ2F0ZS1kYXRhLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQsIEZSRVFVRU5DWV9DT05TVEFOVCwgTWF0ZXJpYWxGb3JtRmllbGRBcHBlYXJhbmNlLCBUU0NDb21tb25TZXJ2aWNlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBEYXRlVHlwZUVudW0sIEZyZXF1ZW5jeUVudW0gfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uS2V5SUQgfSBmcm9tICdAbGlicmFyeS9hcHBsaWNhdGlvbi1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY29uc3VtcHRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb25zdW1wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25zdW1wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb21tb25Db25zdGFudCA9IENPTU1PTl9DT05TVEFOVDtcbiAgICBmcmVxdWVuY3lDb25zdGFudCA9IEZSRVFVRU5DWV9DT05TVEFOVDtcbiAgICBmcmVxdWVuY3lFbnVtID0gRnJlcXVlbmN5RW51bTtcblxuICAgIGZvcm1GaWVsZEFwcGVhcmFuY2U6IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZTtcbiAgICBkYXRlVHlwZTogYW55O1xuICAgIG9yZ0lEOiBhbnk7XG4gICAgYXBwbGljYXRpb25LZXlJRDogYW55O1xuICAgIHRpbWV6b25lOiBhbnk7XG4gICAgcGFyYW1NZXRyaWM6IHN0cmluZztcbiAgICBmcmVxdWVuY3k6IGFueVtdID0gW107XG4gICAgZGVmYXVsdEZyZXF1ZW5jeTogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogYW55O1xuICAgIGVuZERhdGU6IGFueTtcbiAgICBzZWxlY3RlZEZyZXF1ZW5jeTogYW55O1xuICAgIGludGVydmFsOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YVNlcnZpY2U6IEFnZ3JlZ2F0ZURhdGFTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub3JnSUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2N1cnJlbnRPcmdJRCcpO1xuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2UoJ2FwcGxpY2F0aW9uS2V5SUQnKTtcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgndGltZXpvbmUnKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbktleUlEID09IEFwcGxpY2F0aW9uS2V5SUQuV0FURVJfS0VZX0lEKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmFtTWV0cmljID0gXCJnd0Zsb3dUb3RhbGl6ZXJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VfU1RBTkRBUkQ7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gdGhpcy5mcmVxdWVuY3lDb25zdGFudC5maWx0ZXIoZnJlcXVlbmN5ID0+IGZyZXF1ZW5jeS5rZXlJRCAhPSAnQ1VTVE9NJyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEZyZXF1ZW5jeSA9IHRoaXMuZnJlcXVlbmN5RW51bS5NT05USExZO1xuICAgICAgICB0aGlzLmRhdGVUeXBlID0gRGF0ZVR5cGVFbnVtLkVYQ0xVU0lWRTtcbiAgICB9XG5cbiAgICBkYXRlRmlsdGVyRW1pdHRlZChkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBkYXRhLnN0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZGF0YS5lbmREYXRlO1xuICAgICAgICBsZXQgc2VsZWN0ZWRGcmVxdWVuY3kgPSBkYXRhLmZyZXF1ZW5jeTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGcmVxdWVuY3kgPT0gdGhpcy5mcmVxdWVuY3lFbnVtLkRBSUxZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJob3VyXzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwiZGF5XzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uWUVBUkxZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJtb250aF8xXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldENvbnN1bXB0aW9uRGF0YSgpO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29uc3VtcHRpb25EYXRhKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSB0aGlzLmNyZWF0ZURhdGFSZXF1ZXN0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnN1bXB0aW9uUmVzID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVEYXRhU2VydmljZS5nZXRBZ2dyZWdhdGVEYXRhKHRoaXMub3JnSUQsIHJlcXVlc3REYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGdldENvbnN1bXB0aW9uRGF0YSgpYCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRGF0YVJlcXVlc3QoKSB7XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdERhdGEgPSBuZXcgQWdncmVnYXRlRGF0YVJlcXVlc3QoKTtcblxuICAgICAgICByZXF1ZXN0RGF0YS5zdGFydFRpbWUgPSB0aGlzLnN0YXJ0RGF0ZTtcbiAgICAgICAgcmVxdWVzdERhdGEuZW5kVGltZSA9IHRoaXMuZW5kRGF0ZTtcbiAgICAgICAgcmVxdWVzdERhdGEuaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xuICAgICAgICByZXF1ZXN0RGF0YS5wYXJhbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wYXJhbU1ldHJpYyxcbiAgICAgICAgICAgICAgICBkc0FnZzogXCJzdW1cIixcbiAgICAgICAgICAgICAgICBhZ2c6IFwic3VtXCIsXG4gICAgICAgICAgICAgICAgc291cmNlX29yX2xvYWQ6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgc291cmNlTG9hZFR5cGU6IFwiYWxsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICAgICAgcmVxdWVzdERhdGEubnVsbGlmeVBhcmFtcygpO1xuICAgICAgICByZXF1ZXN0RGF0YS5ncm91cEFsbCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3REYXRhO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNhcmRPdmVyd3JpdGUgaDEwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlckxlZnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlVGl0bGVcIj5Db25zdW1wdGlvbiBEYXNoYm9hcmQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IHB0LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICAgIDxsaWItZGF0ZS1maWx0ZXItdHdvIFttYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2VJbnBdPVwiZm9ybUZpZWxkQXBwZWFyYW5jZVwiIFtmcmVxdWVuY3lJbnBdPVwiZnJlcXVlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgW2RlZmF1bHRGcmVxdWVuY3lJbnBdPVwiZGVmYXVsdEZyZXF1ZW5jeVwiIFtkYXRlVHlwZUlucF09XCJkYXRlVHlwZVwiIFtzaG93RGVmYXVsdER1cmF0aW9uSW5wXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBbdGltZXpvbmVJbnBdPVwidGltZXpvbmVcIiAoZGF0ZUZpbHRlckVtaXR0ZXIpPVwiZGF0ZUZpbHRlckVtaXR0ZWQoJGV2ZW50KVwiPjwvbGliLWRhdGUtZmlsdGVyLXR3bz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==