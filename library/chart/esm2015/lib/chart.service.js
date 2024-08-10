import { Injectable } from '@angular/core';
import { NO_DATA_GRAPHIC } from './tsc/constant/chart.constant';
import * as i0 from "@angular/core";
export class ChartService {
    constructor() { }
    createOptionWithTitleAndValue(title, titleColor) {
        return {
            title: {
                text: title != null ? title : '',
                textStyle: {
                    color: title != null ? (titleColor != null ? titleColor : 'Black') : '',
                },
                padding: [7, 0, 0, 20],
            },
            graphic: NO_DATA_GRAPHIC,
            xAxis: { show: false },
            yAxis: { show: false },
        };
    }
}
ChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvY2hhcnQvc3JjL2xpYi9jaGFydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUloRSxNQUFNLE9BQU8sWUFBWTtJQWdCdkIsZ0JBQWdCLENBQUM7SUFkViw2QkFBNkIsQ0FBQyxLQUFhLEVBQUUsVUFBa0I7UUFDcEUsT0FBTztZQUNMLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtpQkFDeEU7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFLGVBQWU7WUFDeEIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUN0QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzswR0FmVSxZQUFZOzhHQUFaLFlBQVksY0FGWCxNQUFNOzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOT19EQVRBX0dSQVBISUMgfSBmcm9tICcuL3RzYy9jb25zdGFudC9jaGFydC5jb25zdGFudCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydFNlcnZpY2Uge1xuXG4gIHB1YmxpYyBjcmVhdGVPcHRpb25XaXRoVGl0bGVBbmRWYWx1ZSh0aXRsZTogc3RyaW5nLCB0aXRsZUNvbG9yOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZToge1xuICAgICAgICB0ZXh0OiB0aXRsZSAhPSBudWxsID8gdGl0bGUgOiAnJyxcbiAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6IHRpdGxlICE9IG51bGwgPyAodGl0bGVDb2xvciAhPSBudWxsID8gdGl0bGVDb2xvciA6ICdCbGFjaycpIDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHBhZGRpbmc6IFs3LCAwLCAwLCAyMF0sXG4gICAgICB9LFxuICAgICAgZ3JhcGhpYzogTk9fREFUQV9HUkFQSElDLFxuICAgICAgeEF4aXM6IHsgc2hvdzogZmFsc2UgfSxcbiAgICAgIHlBeGlzOiB7IHNob3c6IGZhbHNlIH0sXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19