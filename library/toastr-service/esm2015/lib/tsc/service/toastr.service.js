import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { ToastrTitle, ToastrColor } from '../enum/toastr.enum';
import * as i0 from "@angular/core";
import * as i1 from "ngx-toastr";
export class ToastrService {
    constructor(ngxToastrService) {
        this.ngxToastrService = ngxToastrService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RvYXN0ci1zZXJ2aWNlL3NyYy9saWIvdHNjL3NlcnZpY2UvdG9hc3RyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBR3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQU0vRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixZQUNZLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzFDLENBQUM7SUFFTCxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRO1FBQzlCLGlFQUFpRTtRQUNqRSxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ3ZDLE9BQU8sRUFDUCxLQUFLLEVBQ0wsR0FBRyxFQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUMzRCxDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFNO1FBQ2pCLElBQUksS0FBSyxHQUFHO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7UUFFRixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssT0FBTztnQkFDUixLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDbEMsTUFBTTtZQUNWO2dCQUNJLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDaEMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7MkdBL0NRLGFBQWE7K0dBQWIsYUFBYSxjQUhWLE1BQU07NEZBR1QsYUFBYTtrQkFKekIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaC1lcyc7XG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIGFzIE5neFRvYXN0clNlcnZpY2UgfSBmcm9tICduZ3gtdG9hc3RyJztcblxuaW1wb3J0IHsgVG9hc3RyVGl0bGUsIFRvYXN0ckNvbG9yIH0gZnJvbSAnLi4vZW51bS90b2FzdHIuZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb2FzdHJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG5neFRvYXN0clNlcnZpY2U6IE5neFRvYXN0clNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgb3BlblRvYXN0KHRpdGxlLCBtZXNzYWdlLCBub3RpVHlwZSkge1xuICAgICAgICAvLyBDbG9uZSBjdXJyZW50IGNvbmZpZyBzbyBpdCBkb2Vzbid0IGNoYW5nZSB3aGVuIG5nTW9kZWwgdXBkYXRlc1xuICAgICAgICBjb25zdCBvcHQgPSBjbG9uZURlZXAodGhpcy5uZ3hUb2FzdHJTZXJ2aWNlLnRvYXN0ckNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgaW5zZXJ0ZWQgPSB0aGlzLm5neFRvYXN0clNlcnZpY2Uuc2hvdyhcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIG9wdCxcbiAgICAgICAgICAgIHRoaXMubmd4VG9hc3RyU2VydmljZS50b2FzdHJDb25maWcuaWNvbkNsYXNzZXNbbm90aVR5cGVdLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gaW5zZXJ0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0VG9hc3RTdGF0dXMoc3RhdHVzKSB7XG4gICAgICAgIGxldCB0b2FzdCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGNvbG9yOiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgICAgICAgdG9hc3QudGl0bGUgPSBUb2FzdHJUaXRsZS5FUlJPUjtcbiAgICAgICAgICAgICAgICB0b2FzdC5jb2xvciA9IFRvYXN0ckNvbG9yLkVSUk9SO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgICAgICAgdG9hc3QudGl0bGUgPSBUb2FzdHJUaXRsZS5XQVJOSU5HO1xuICAgICAgICAgICAgICAgIHRvYXN0LmNvbG9yID0gVG9hc3RyQ29sb3IuV0FSTklORztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIHRvYXN0LnRpdGxlID0gVG9hc3RyVGl0bGUuSU5GTztcbiAgICAgICAgICAgICAgICB0b2FzdC5jb2xvciA9IFRvYXN0ckNvbG9yLklORk87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0b2FzdC50aXRsZSA9IFRvYXN0clRpdGxlLlNVQ0NFU1M7XG4gICAgICAgICAgICAgICAgdG9hc3QuY29sb3IgPSBUb2FzdHJDb2xvci5TVUNDRVNTO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0b2FzdC50aXRsZSA9IFRvYXN0clRpdGxlLkVSUk9SO1xuICAgICAgICAgICAgICAgIHRvYXN0LmNvbG9yID0gVG9hc3RyQ29sb3IuRVJST1I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvYXN0O1xuICAgIH1cbn1cbiJdfQ==