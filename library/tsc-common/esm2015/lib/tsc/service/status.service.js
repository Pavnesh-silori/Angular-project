import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class StatusService {
    constructor() { }
    getStatusClass(status) {
        let className;
        switch (status) {
            case 'ACTIVE':
            case 'ONLINE':
                className = 'text-success';
                break;
            case 'INACTIVE':
            case 'OFFLINE':
                className = 'text-danger';
                break;
            case 'PENDING':
                className = 'text-warning';
                break;
            case 'DELETED':
                className = 'text-danger';
                break;
            default:
                className = '';
                break;
        }
        return className;
    }
    getStatusValue(status) {
        let value;
        switch (status) {
            case 'ACTIVE':
                value = 'Active';
                break;
            case 'INACTIVE':
                value = 'Inactive';
                break;
            case 'PENDING':
                value = 'Pending';
                break;
            case 'DELETED':
                value = 'Deleted';
                break;
            case 'ONLINE':
                value = 'Online';
                break;
            case 'OFFLINE':
                value = 'Offline';
                break;
            case 'DELAYED':
                value = 'Delayed';
                break;
            case 'PARTIAL_LIVE':
                value = 'Partial Live';
                break;
            default:
                value = status;
                break;
        }
        return value;
    }
    getYesByBoolean(value) {
        let label;
        switch (value) {
            case true:
                label = 'Yes';
                break;
            case false:
                label = 'No';
                break;
            default:
                label = value;
                break;
        }
        return label;
    }
    getActiveByBoolean(value) {
        let label;
        switch (value) {
            case true:
                label = 'Active';
                break;
            case false:
                label = 'Inactive';
                break;
            default:
                label = value;
                break;
        }
        return label;
    }
    getEnableByBoolean(value) {
        let label;
        switch (value) {
            case true:
                label = 'Enabled';
                break;
            case false:
                label = 'Disabled';
                break;
            default:
                label = value;
                break;
        }
        return label;
    }
    getYesActiveClassByBoolean(value) {
        let className;
        switch (value) {
            case true:
                className = 'text-success';
                break;
            case false:
                className = 'text-danger';
                break;
            default:
                className = '';
                break;
        }
        return className;
    }
}
StatusService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StatusService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
StatusService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StatusService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StatusService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2Mvc2VydmljZS9zdGF0dXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sYUFBYTtJQUN0QixnQkFDSSxDQUFDO0lBRUwsY0FBYyxDQUFDLE1BQWM7UUFDekIsSUFBSSxTQUFpQixDQUFDO1FBRXRCLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1QsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssU0FBUztnQkFDVixTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUMxQixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLFNBQVMsR0FBRyxjQUFjLENBQUM7Z0JBQzNCLE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsU0FBUyxHQUFHLGFBQWEsQ0FBQztnQkFDMUIsTUFBTTtZQUNWO2dCQUNJLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsTUFBTTtTQUNiO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjO1FBQ3pCLElBQUksS0FBYSxDQUFDO1FBRWxCLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxRQUFRO2dCQUNULEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLFFBQVE7Z0JBQ1QsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLGNBQWM7Z0JBQ2YsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDdkIsTUFBTTtZQUNWO2dCQUNJLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ2YsTUFBTTtTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFjO1FBQzFCLElBQUksS0FBYSxDQUFDO1FBRWxCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxJQUFJO2dCQUNMLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNiLE1BQU07WUFDVjtnQkFDSSxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNkLE1BQU07U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksS0FBYSxDQUFDO1FBRWxCLFFBQVEsS0FBSyxFQUFFO1lBQ1gsS0FBSyxJQUFJO2dCQUNMLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ2pCLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sS0FBSyxHQUFHLFVBQVUsQ0FBQztnQkFDbkIsTUFBTTtZQUNWO2dCQUNJLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsTUFBTTtTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWM7UUFDN0IsSUFBSSxLQUFhLENBQUM7UUFFbEIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLElBQUk7Z0JBQ0wsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDbEIsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUNuQixNQUFNO1lBQ1Y7Z0JBQ0ksS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDZCxNQUFNO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsMEJBQTBCLENBQUMsS0FBYztRQUNyQyxJQUFJLFNBQWlCLENBQUM7UUFFdEIsUUFBUSxLQUFLLEVBQUU7WUFDWCxLQUFLLElBQUk7Z0JBQ0wsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUMxQixNQUFNO1lBQ1Y7Z0JBQ0ksU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDZixNQUFNO1NBQ2I7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDOzsyR0F4SVEsYUFBYTsrR0FBYixhQUFhLGNBSFYsTUFBTTs0RkFHVCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgU3RhdHVzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7IH1cblxuICAgIGdldFN0YXR1c0NsYXNzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZztcblxuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSAnQUNUSVZFJzpcbiAgICAgICAgICAgIGNhc2UgJ09OTElORSc6XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3RleHQtc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdJTkFDVElWRSc6XG4gICAgICAgICAgICBjYXNlICdPRkZMSU5FJzpcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAndGV4dC1kYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUEVORElORyc6XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3RleHQtd2FybmluZyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdERUxFVEVEJzpcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAndGV4dC1kYW5nZXInO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzVmFsdWUoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmc7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FDVElWRSc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnQWN0aXZlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0lOQUNUSVZFJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICdJbmFjdGl2ZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICdQZW5kaW5nJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0RFTEVURUQnOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gJ0RlbGV0ZWQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnT05MSU5FJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICdPbmxpbmUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnT0ZGTElORSc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnT2ZmbGluZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdERUxBWUVEJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICdEZWxheWVkJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1BBUlRJQUxfTElWRSc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAnUGFydGlhbCBMaXZlJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBzdGF0dXM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0WWVzQnlCb29sZWFuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICdZZXMnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICdObyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxhYmVsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlQnlCb29sZWFuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICdBY3RpdmUnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICdJbmFjdGl2ZSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGxhYmVsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgZ2V0RW5hYmxlQnlCb29sZWFuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBsYWJlbDogc3RyaW5nO1xuXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICBsYWJlbCA9ICdFbmFibGVkJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgbGFiZWwgPSAnRGlzYWJsZWQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsYWJlbCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cblxuICAgIGdldFllc0FjdGl2ZUNsYXNzQnlCb29sZWFuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWU6IHN0cmluZztcblxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ3RleHQtc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICd0ZXh0LWRhbmdlcic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59XG4iXX0=