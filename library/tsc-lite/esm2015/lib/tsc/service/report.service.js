import { Injectable } from "@angular/core";
// tsc-library
import { COMMON_CONSTANT } from "@library/tsc-common";
import * as i0 from "@angular/core";
import * as i1 from "@library/date";
// /tsc-library/
export class ReportService {
    constructor(dateService) {
        this.dateService = dateService;
    }
    extractTimestamp(dataInp) {
        if (!dataInp) {
            return [];
        }
        const allTimestamp = dataInp.reduce((timestamps, dataValues) => {
            if (dataValues && dataValues.data) {
                dataValues.data.forEach(entry => {
                    if (entry && entry.date) {
                        timestamps.add(entry.date);
                    }
                });
            }
            return timestamps;
        }, new Set());
        return Array.from(allTimestamp).sort();
    }
    populateTable(timestamp, dataInp, format) {
        return timestamp.map((time, index) => ({
            index: index + 1,
            time: this.dateService.formatDate(time, format),
            data: dataInp.map(aggregation => {
                const matchingEntry = aggregation.data.find(entry => entry.date == time);
                return matchingEntry ? matchingEntry.value : COMMON_CONSTANT.HYPHEN;
            })
        }));
    }
}
ReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, deps: [{ token: i1.DateService }], target: i0.ɵɵFactoryTarget.Injectable });
ReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvcmVwb3J0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdEQsZ0JBQWdCO0FBTWhCLE1BQU0sT0FBTyxhQUFhO0lBRXRCLFlBQ1ksV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFDaEMsQ0FBQztJQUVMLGdCQUFnQixDQUFDLE9BQU87UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFO1lBQzNELElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNyQixVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDOUI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBVSxDQUFDLENBQUM7UUFFdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNO1FBQ3BDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1lBQy9DLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7Z0JBQ3pFLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3hFLENBQUMsQ0FBQztTQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7MkdBbENRLGFBQWE7K0dBQWIsYUFBYSxjQUhWLE1BQU07NEZBR1QsYUFBYTtrQkFKekIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IENPTU1PTl9DT05TVEFOVCB9IGZyb20gXCJAbGlicmFyeS90c2MtY29tbW9uXCI7XG5pbXBvcnQgeyBEYXRlU2VydmljZSB9IGZyb20gXCJAbGlicmFyeS9kYXRlXCI7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRhdGVTZXJ2aWNlOiBEYXRlU2VydmljZVxuICAgICkgeyB9XG5cbiAgICBleHRyYWN0VGltZXN0YW1wKGRhdGFJbnApIHtcbiAgICAgICAgaWYgKCFkYXRhSW5wKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhbGxUaW1lc3RhbXAgPSBkYXRhSW5wLnJlZHVjZSgodGltZXN0YW1wcywgZGF0YVZhbHVlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFWYWx1ZXMgJiYgZGF0YVZhbHVlcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YVZhbHVlcy5kYXRhLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgJiYgZW50cnkuZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wcy5hZGQoZW50cnkuZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aW1lc3RhbXBzO1xuICAgICAgICB9LCBuZXcgU2V0PHN0cmluZz4oKSk7XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsVGltZXN0YW1wKS5zb3J0KCk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVUYWJsZSh0aW1lc3RhbXAsIGRhdGFJbnAsIGZvcm1hdCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRpbWVzdGFtcC5tYXAoKHRpbWUsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4ICsgMSxcbiAgICAgICAgICAgIHRpbWU6IHRoaXMuZGF0ZVNlcnZpY2UuZm9ybWF0RGF0ZSh0aW1lLCBmb3JtYXQpLFxuICAgICAgICAgICAgZGF0YTogZGF0YUlucC5tYXAoYWdncmVnYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nRW50cnkgPSBhZ2dyZWdhdGlvbi5kYXRhLmZpbmQoZW50cnkgPT4gZW50cnkuZGF0ZSA9PSB0aW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hpbmdFbnRyeSA/IG1hdGNoaW5nRW50cnkudmFsdWUgOiBDT01NT05fQ09OU1RBTlQuSFlQSEVOO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxufSJdfQ==