import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { ToastrTitle, ToastrColor } from '../enum/toastr.enum';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class ToastrService {
    constructor(ngxToastrService) {
        this.ngxToastrService = ngxToastrService;
        this.success = (message) => {
            this.openToast(ToastrTitle.SUCCESS, message, ToastrColor.SUCCESS);
        };
        this.error = (message) => {
            this.openToast(ToastrTitle.ERROR, message, ToastrColor.ERROR);
        };
        this.warn = (message) => {
            this.openToast(ToastrTitle.WARNING, message, ToastrColor.WARNING);
        };
        this.info = (message) => {
            this.openToast(ToastrTitle.INFO, message, ToastrColor.INFO);
        };
    }
    openToast(title, message, notiType) {
        // Clone current config so it doesn't change when ngModel updates
        const opt = cloneDeep(this.ngxToastrService.toastrConfig);
        const inserted = this.ngxToastrService.show(message, title, opt, this.ngxToastrService.toastrConfig.iconClasses[notiType]);
        return inserted;
    }
    getToastStatus(status) {
        let toast = {
            title: '',
            color: '',
        };
        switch (status) {
            case "error":
                toast.title = ToastrTitle.ERROR;
                toast.color = ToastrColor.ERROR;
                break;
            case 'warning':
                toast.title = ToastrTitle.WARNING;
                toast.color = ToastrColor.WARNING;
                break;
            case 'info':
                toast.title = ToastrTitle.INFO;
                toast.color = ToastrColor.INFO;
                break;
            case 'success':
                toast.title = ToastrTitle.SUCCESS;
                toast.color = ToastrColor.SUCCESS;
                break;
            default:
                toast.title = ToastrTitle.ERROR;
                toast.color = ToastrColor.ERROR;
        }
        return toast;
    }
}
ToastrService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrService, deps: [{ token: i1.ToastrService }], target: i0.ɵɵFactoryTarget.Injectable });
ToastrService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ToastrService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.ToastrService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RvYXN0ci1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2UvdG9hc3RyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQU0vRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBOEM5QyxZQUFPLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUE7UUFFRCxVQUFLLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUE7UUFFRCxTQUFJLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUE7SUEzREcsQ0FBQztJQUVMLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVE7UUFDOUIsaUVBQWlFO1FBQ2pFLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFMUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FDdkMsT0FBTyxFQUNQLEtBQUssRUFDTCxHQUFHLEVBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQzNELENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQU07UUFDakIsSUFBSSxLQUFLLEdBQUc7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVGLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxPQUFPO2dCQUNSLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDaEMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDL0IsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxNQUFNO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDdkM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzsyR0EvQ1EsYUFBYTsrR0FBYixhQUFhLGNBSFYsTUFBTTs0RkFHVCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoLWVzJztcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgYXMgTmd4VG9hc3RyU2VydmljZSB9IGZyb20gJ25neC10b2FzdHInO1xuXG5pbXBvcnQgeyBUb2FzdHJUaXRsZSwgVG9hc3RyQ29sb3IgfSBmcm9tICcuLi9lbnVtL3RvYXN0ci5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFRvYXN0clNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbmd4VG9hc3RyU2VydmljZTogTmd4VG9hc3RyU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBvcGVuVG9hc3QodGl0bGUsIG1lc3NhZ2UsIG5vdGlUeXBlKSB7XG4gICAgICAgIC8vIENsb25lIGN1cnJlbnQgY29uZmlnIHNvIGl0IGRvZXNuJ3QgY2hhbmdlIHdoZW4gbmdNb2RlbCB1cGRhdGVzXG4gICAgICAgIGNvbnN0IG9wdCA9IGNsb25lRGVlcCh0aGlzLm5neFRvYXN0clNlcnZpY2UudG9hc3RyQ29uZmlnKTtcblxuICAgICAgICBjb25zdCBpbnNlcnRlZCA9IHRoaXMubmd4VG9hc3RyU2VydmljZS5zaG93KFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgb3B0LFxuICAgICAgICAgICAgdGhpcy5uZ3hUb2FzdHJTZXJ2aWNlLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3Nlc1tub3RpVHlwZV0sXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBpbnNlcnRlZDtcbiAgICB9XG5cbiAgICBnZXRUb2FzdFN0YXR1cyhzdGF0dXMpIHtcbiAgICAgICAgbGV0IHRvYXN0ID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgY29sb3I6ICcnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICAgICAgICB0b2FzdC50aXRsZSA9IFRvYXN0clRpdGxlLkVSUk9SO1xuICAgICAgICAgICAgICAgIHRvYXN0LmNvbG9yID0gVG9hc3RyQ29sb3IuRVJST1I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICB0b2FzdC50aXRsZSA9IFRvYXN0clRpdGxlLldBUk5JTkc7XG4gICAgICAgICAgICAgICAgdG9hc3QuY29sb3IgPSBUb2FzdHJDb2xvci5XQVJOSU5HO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgdG9hc3QudGl0bGUgPSBUb2FzdHJUaXRsZS5JTkZPO1xuICAgICAgICAgICAgICAgIHRvYXN0LmNvbG9yID0gVG9hc3RyQ29sb3IuSU5GTztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIHRvYXN0LnRpdGxlID0gVG9hc3RyVGl0bGUuU1VDQ0VTUztcbiAgICAgICAgICAgICAgICB0b2FzdC5jb2xvciA9IFRvYXN0ckNvbG9yLlNVQ0NFU1M7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRvYXN0LnRpdGxlID0gVG9hc3RyVGl0bGUuRVJST1I7XG4gICAgICAgICAgICAgICAgdG9hc3QuY29sb3IgPSBUb2FzdHJDb2xvci5FUlJPUjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9hc3Q7XG4gICAgfVxuXG4gICAgc3VjY2VzcyA9IChtZXNzYWdlOiBTdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5vcGVuVG9hc3QoVG9hc3RyVGl0bGUuU1VDQ0VTUywgbWVzc2FnZSwgVG9hc3RyQ29sb3IuU1VDQ0VTUyk7XG4gICAgfVxuXG4gICAgZXJyb3IgPSAobWVzc2FnZTogU3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMub3BlblRvYXN0KFRvYXN0clRpdGxlLkVSUk9SLCBtZXNzYWdlLCBUb2FzdHJDb2xvci5FUlJPUik7XG4gICAgfVxuXG4gICAgd2FybiA9IChtZXNzYWdlOiBTdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5vcGVuVG9hc3QoVG9hc3RyVGl0bGUuV0FSTklORywgbWVzc2FnZSwgVG9hc3RyQ29sb3IuV0FSTklORyk7XG4gICAgfVxuXG4gICAgaW5mbyA9IChtZXNzYWdlOiBTdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5vcGVuVG9hc3QoVG9hc3RyVGl0bGUuSU5GTywgbWVzc2FnZSwgVG9hc3RyQ29sb3IuSU5GTyk7XG4gICAgfVxufVxuIl19