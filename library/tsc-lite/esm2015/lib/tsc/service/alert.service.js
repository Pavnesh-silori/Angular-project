import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class AlertService {
    setAlertProperties(alertObject, label, content, type, icon) {
        alertObject.showAlert = true;
        alertObject.alertLabel = label;
        alertObject.alertContent = content;
        alertObject.messageAlertType = type;
        alertObject.messageAlertIcon = icon;
        return alertObject;
    }
    resetAlertProperties(alertObject) {
        alertObject.showAlert = false;
        alertObject.alertLabel = '';
        alertObject.alertContent = '';
        alertObject.messageAlertType = '';
        alertObject.messageAlertIcon = '';
        return alertObject;
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sT0FBTyxZQUFZO0lBRXJCLGtCQUFrQixDQUFDLFdBQW1CLEVBQUUsS0FBYSxFQUFFLE9BQWUsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUM5RixXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM3QixXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMvQixXQUFXLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUNuQyxXQUFXLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFcEMsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELG9CQUFvQixDQUFDLFdBQW1CO1FBQ3BDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQzVCLFdBQVcsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzlCLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDbEMsV0FBVyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUVsQyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOzswR0FwQlEsWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBBbGVydE0gfSBmcm9tIFwiLi4vbW9kZWwvYWxlcnQubW9kZWxcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZSB7XG5cbiAgICBzZXRBbGVydFByb3BlcnRpZXMoYWxlcnRPYmplY3Q6IEFsZXJ0TSwgbGFiZWw6IHN0cmluZywgY29udGVudDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGljb246IHN0cmluZyk6IEFsZXJ0TSB7XG4gICAgICAgIGFsZXJ0T2JqZWN0LnNob3dBbGVydCA9IHRydWU7XG4gICAgICAgIGFsZXJ0T2JqZWN0LmFsZXJ0TGFiZWwgPSBsYWJlbDtcbiAgICAgICAgYWxlcnRPYmplY3QuYWxlcnRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgYWxlcnRPYmplY3QubWVzc2FnZUFsZXJ0VHlwZSA9IHR5cGU7XG4gICAgICAgIGFsZXJ0T2JqZWN0Lm1lc3NhZ2VBbGVydEljb24gPSBpY29uO1xuXG4gICAgICAgIHJldHVybiBhbGVydE9iamVjdDtcbiAgICB9XG5cbiAgICByZXNldEFsZXJ0UHJvcGVydGllcyhhbGVydE9iamVjdDogQWxlcnRNKTogQWxlcnRNIHtcbiAgICAgICAgYWxlcnRPYmplY3Quc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICAgICAgIGFsZXJ0T2JqZWN0LmFsZXJ0TGFiZWwgPSAnJztcbiAgICAgICAgYWxlcnRPYmplY3QuYWxlcnRDb250ZW50ID0gJyc7XG4gICAgICAgIGFsZXJ0T2JqZWN0Lm1lc3NhZ2VBbGVydFR5cGUgPSAnJztcbiAgICAgICAgYWxlcnRPYmplY3QubWVzc2FnZUFsZXJ0SWNvbiA9ICcnO1xuXG4gICAgICAgIHJldHVybiBhbGVydE9iamVjdDtcbiAgICB9XG59Il19