import { Component } from '@angular/core';
import { COMMON_CONSTANT, FREQUENCY_CONSTANT, MaterialFormFieldAppearance } from '@library/tsc-common';
import { DateTypeEnum, FrequencyEnum } from '@library/date';
import { ApplicationKeyID } from '@library/application-service';
import * as i0 from "@angular/core";
import * as i1 from "@library/storage-service";
import * as i2 from "../../../service/aggregate-data.service";
import * as i3 from "@library/tsc-common";
export class BalanceComponent {
    constructor(storageService, aggregateDataService, tscCommonService) {
        this.storageService = storageService;
        this.aggregateDataService = aggregateDataService;
        this.tscCommonService = tscCommonService;
        this.commonConstant = COMMON_CONSTANT;
        this.frequencyConstant = FREQUENCY_CONSTANT;
        this.frequencyEnum = FrequencyEnum;
        this.frequency = [];
        this.showLoader = true;
    }
    ngOnInit() {
        this.orgID = this.storageService.getStorage('currentOrgID');
        this.applicationKeyID = this.storageService.getStorage('applicationKeyID');
        this.timezone = this.storageService.getStorage('timezone');
        if (this.applicationKeyID == ApplicationKeyID.ENERGY_KEY_ID) {
            this.label = "Energy";
            this.paramMetric = "engEnergyUsed";
        }
        else if (this.applicationKeyID == ApplicationKeyID.WATER_KEY_ID) {
            this.label = "Water";
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
    }
}
BalanceComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceComponent, deps: [{ token: i1.StorageService }, { token: i2.AggregateDataService }, { token: i3.TSCCommonService }], target: i0.ɵɵFactoryTarget.Component });
BalanceComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: BalanceComponent, selector: "lib-balance", ngImport: i0, template: "<div class=\"card main-card cardOverwrite h100\">\n    <div class=\"headerContainer\">\n        <div class=\"headerLeftContainer\">\n            <div class=\"pageTitle\"> {{ label }} Balance</div>\n        </div>\n    </div>\n</div>" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BalanceComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-balance',
                    templateUrl: './balance.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.StorageService }, { type: i2.AggregateDataService }, { type: i3.TSCCommonService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsYW5jZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvYmFsYW5jZS9iYWxhbmNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9iYWxhbmNlL2JhbGFuY2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLDJCQUEyQixFQUFvQixNQUFNLHFCQUFxQixDQUFDO0FBQ3pILE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQVFoRSxNQUFNLE9BQU8sZ0JBQWdCO0lBcUJ6QixZQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMzQyxnQkFBa0M7UUFGakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDM0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXRCN0MsbUJBQWMsR0FBRyxlQUFlLENBQUM7UUFDakMsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFTOUIsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQU10QixlQUFVLEdBQVksSUFBSSxDQUFDO0lBTXZCLENBQUM7SUFFTCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtZQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztTQUN0QzthQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLGdCQUFnQixDQUFDLFlBQVksRUFBRTtZQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLDJCQUEyQixDQUFDLDhCQUE4QixDQUFDO1FBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUV2QyxJQUFJLGlCQUFpQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztTQUMzQjthQUFNLElBQUksaUJBQWlCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDN0I7SUFFTCxDQUFDOzs4R0EzRFEsZ0JBQWdCO2tHQUFoQixnQkFBZ0IsbURDakI3QiwwT0FNTTs0RkRXTyxnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7b0JBQ3ZDLE1BQU0sRUFBRSxFQUNQO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YVJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZ2dyZWdhdGUtZGF0YS5tb2RlbCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9hZ2dyZWdhdGUtZGF0YS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdAbGlicmFyeS9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ09NTU9OX0NPTlNUQU5ULCBGUkVRVUVOQ1lfQ09OU1RBTlQsIE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZSwgVFNDQ29tbW9uU2VydmljZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgRGF0ZVR5cGVFbnVtLCBGcmVxdWVuY3lFbnVtIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbktleUlEIH0gZnJvbSAnQGxpYnJhcnkvYXBwbGljYXRpb24tc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWJhbGFuY2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9iYWxhbmNlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJhbGFuY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29tbW9uQ29uc3RhbnQgPSBDT01NT05fQ09OU1RBTlQ7XG4gICAgZnJlcXVlbmN5Q29uc3RhbnQgPSBGUkVRVUVOQ1lfQ09OU1RBTlQ7XG4gICAgZnJlcXVlbmN5RW51bSA9IEZyZXF1ZW5jeUVudW07XG5cbiAgICBmb3JtRmllbGRBcHBlYXJhbmNlOiBNYXRlcmlhbEZvcm1GaWVsZEFwcGVhcmFuY2U7XG4gICAgZGF0ZVR5cGU6IGFueTtcbiAgICBvcmdJRDogYW55O1xuICAgIGFwcGxpY2F0aW9uS2V5SUQ6IGFueTtcbiAgICB0aW1lem9uZTogYW55O1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcGFyYW1NZXRyaWM6IHN0cmluZztcbiAgICBmcmVxdWVuY3k6IGFueVtdID0gW107XG4gICAgZGVmYXVsdEZyZXF1ZW5jeTogc3RyaW5nO1xuICAgIHN0YXJ0RGF0ZTogYW55O1xuICAgIGVuZERhdGU6IGFueTtcbiAgICBzZWxlY3RlZEZyZXF1ZW5jeTogYW55O1xuICAgIGludGVydmFsOiBhbnk7XG4gICAgc2hvd0xvYWRlcjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YVNlcnZpY2U6IEFnZ3JlZ2F0ZURhdGFTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgdHNjQ29tbW9uU2VydmljZTogVFNDQ29tbW9uU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcmdJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnY3VycmVudE9yZ0lEJyk7XG4gICAgICAgIHRoaXMuYXBwbGljYXRpb25LZXlJRCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZSgnYXBwbGljYXRpb25LZXlJRCcpO1xuICAgICAgICB0aGlzLnRpbWV6b25lID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlKCd0aW1lem9uZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPT0gQXBwbGljYXRpb25LZXlJRC5FTkVSR1lfS0VZX0lEKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsID0gXCJFbmVyZ3lcIjtcbiAgICAgICAgICAgIHRoaXMucGFyYW1NZXRyaWMgPSBcImVuZ0VuZXJneVVzZWRcIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcGxpY2F0aW9uS2V5SUQgPT0gQXBwbGljYXRpb25LZXlJRC5XQVRFUl9LRVlfSUQpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSBcIldhdGVyXCI7XG4gICAgICAgICAgICB0aGlzLnBhcmFtTWV0cmljID0gXCJnd0Zsb3dUb3RhbGl6ZXJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9ybUZpZWxkQXBwZWFyYW5jZSA9IE1hdGVyaWFsRm9ybUZpZWxkQXBwZWFyYW5jZS5GT1JNX0ZJRUxEX0FQUEVBUkFOQ0VfU1RBTkRBUkQ7XG4gICAgICAgIHRoaXMuZnJlcXVlbmN5ID0gdGhpcy5mcmVxdWVuY3lDb25zdGFudC5maWx0ZXIoZnJlcXVlbmN5ID0+IGZyZXF1ZW5jeS5rZXlJRCAhPSAnQ1VTVE9NJyk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEZyZXF1ZW5jeSA9IHRoaXMuZnJlcXVlbmN5RW51bS5NT05USExZO1xuICAgICAgICB0aGlzLmRhdGVUeXBlID0gRGF0ZVR5cGVFbnVtLkVYQ0xVU0lWRTtcbiAgICB9XG5cbiAgICBkYXRlRmlsdGVyRW1pdHRlZChkYXRhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBkYXRhLnN0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gZGF0YS5lbmREYXRlO1xuICAgICAgICBsZXQgc2VsZWN0ZWRGcmVxdWVuY3kgPSBkYXRhLmZyZXF1ZW5jeTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGcmVxdWVuY3kgPT0gdGhpcy5mcmVxdWVuY3lFbnVtLkRBSUxZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJob3VyXzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uTU9OVEhMWSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IFwiZGF5XzFcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZyZXF1ZW5jeSA9PSB0aGlzLmZyZXF1ZW5jeUVudW0uWUVBUkxZKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gXCJtb250aF8xXCI7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmQgbWFpbi1jYXJkIGNhcmRPdmVyd3JpdGUgaDEwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlckxlZnRDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlVGl0bGVcIj4ge3sgbGFiZWwgfX0gQmFsYW5jZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==