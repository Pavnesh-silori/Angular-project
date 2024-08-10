import { __awaiter } from "tslib";
import { Inject, Injectable } from "@angular/core";
import * as moment from 'moment';
import { Alert } from "../model/alert.model";
// tsc-library
import { COMMON_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum } from "@library/tsc-common";
import { ReportErrorEnum } from "../enum/error.enum";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@library/date";
import * as i3 from "./alert.service";
// /tsc-library/
export class ReportService {
    constructor(http, dateService, alertService, environment) {
        this.http = http;
        this.dateService = dateService;
        this.alertService = alertService;
        this.environment = environment;
        this.reportAlertObj = new Alert();
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
    downloadReport(orgID, requestData) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.environment.TSC_COMMON_API_URL}public/organizations/${orgID}/report`;
            try {
                const response = yield this.http.post(url, requestData, { observe: 'response', responseType: 'blob' }).toPromise();
                if (response && response.body) {
                    const blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
                    const downloadLink = document.createElement('a');
                    const currentDate = moment().format('DD MMM YYYY HH:mm');
                    downloadLink.href = window.URL.createObjectURL(blob);
                    downloadLink.download = requestData.reportName + "_" + currentDate + "." + requestData.reportFormat;
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);
                }
                else {
                    this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.DATA_NOT_FOUND_LABEL, ReportErrorEnum.DATA_NOT_FOUND_MESSAGE, MessageAlertTypeEnum.WARNING, MessageAlertIconEnum.WARNING_ICON);
                }
            }
            catch (error) {
                this.alertService.setAlertProperties(this.reportAlertObj, ReportErrorEnum.INVALID_ERROR_LABEL, ReportErrorEnum.INVALID_ERROR_MESSAGE, MessageAlertTypeEnum.DANGER, MessageAlertIconEnum.DANGER_ICON);
            }
        });
    }
}
ReportService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, deps: [{ token: i1.HttpClient }, { token: i2.DateService }, { token: i3.AlertService }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
ReportService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ReportService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.DateService }, { type: i3.AlertService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL3NlcnZpY2UvcmVwb3J0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxLQUFLLEVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUlyRCxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFDckQsZ0JBQWdCO0FBTWhCLE1BQU0sT0FBTyxhQUFhO0lBSXRCLFlBQ1ksSUFBZ0IsRUFDaEIsV0FBd0IsRUFDeEIsWUFBMEIsRUFDSCxXQUFnQjtRQUh2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQ0gsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFObkQsbUJBQWMsR0FBVyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBT2pDLENBQUM7SUFFTCxnQkFBZ0IsQ0FBQyxPQUFPO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUMzRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMs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QUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMscUJBQXFCLEVBQUUsb0JBQW9CLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3hNO1FBQ0wsQ0FBQztLQUFBOzsyR0E5RFEsYUFBYSxtR0FRVixhQUFhOytHQVJoQixhQUFhLGNBSFYsTUFBTTs0RkFHVCxhQUFhO2tCQUp6QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7MEJBVVEsTUFBTTsyQkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBBbGVydCwgQWxlcnRNIH0gZnJvbSBcIi4uL21vZGVsL2FsZXJ0Lm1vZGVsXCI7XG5cbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gXCIuL2FsZXJ0LnNlcnZpY2VcIjtcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IENPTU1PTl9DT05TVEFOVCwgTWVzc2FnZUFsZXJ0SWNvbkVudW0sIE1lc3NhZ2VBbGVydFR5cGVFbnVtIH0gZnJvbSBcIkBsaWJyYXJ5L3RzYy1jb21tb25cIjtcbmltcG9ydCB7IERhdGVTZXJ2aWNlIH0gZnJvbSBcIkBsaWJyYXJ5L2RhdGVcIjtcbmltcG9ydCB7IFJlcG9ydEVycm9yRW51bSB9IGZyb20gXCIuLi9lbnVtL2Vycm9yLmVudW1cIjtcbi8vIC90c2MtbGlicmFyeS9cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFJlcG9ydFNlcnZpY2Uge1xuXG4gICAgcmVwb3J0QWxlcnRPYmo6IEFsZXJ0TSA9IG5ldyBBbGVydCgpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJpdmF0ZSBkYXRlU2VydmljZTogRGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGV4dHJhY3RUaW1lc3RhbXAoZGF0YUlucCkge1xuICAgICAgICBpZiAoIWRhdGFJbnApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFsbFRpbWVzdGFtcCA9IGRhdGFJbnAucmVkdWNlKCh0aW1lc3RhbXBzLCBkYXRhVmFsdWVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVZhbHVlcyAmJiBkYXRhVmFsdWVzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBkYXRhVmFsdWVzLmRhdGEuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeSAmJiBlbnRyeS5kYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXBzLmFkZChlbnRyeS5kYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRpbWVzdGFtcHM7XG4gICAgICAgIH0sIG5ldyBTZXQ8c3RyaW5nPigpKTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxUaW1lc3RhbXApLnNvcnQoKTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZVRhYmxlKHRpbWVzdGFtcCwgZGF0YUlucCwgZm9ybWF0KTogYW55W10ge1xuICAgICAgICByZXR1cm4gdGltZXN0YW1wLm1hcCgodGltZSwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICBpbmRleDogaW5kZXggKyAxLFxuICAgICAgICAgICAgdGltZTogdGhpcy5kYXRlU2VydmljZS5mb3JtYXREYXRlKHRpbWUsIGZvcm1hdCksXG4gICAgICAgICAgICBkYXRhOiBkYXRhSW5wLm1hcChhZ2dyZWdhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdFbnRyeSA9IGFnZ3JlZ2F0aW9uLmRhdGEuZmluZChlbnRyeSA9PiBlbnRyeS5kYXRlID09IHRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGluZ0VudHJ5ID8gbWF0Y2hpbmdFbnRyeS52YWx1ZSA6IENPTU1PTl9DT05TVEFOVC5IWVBIRU47XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZG93bmxvYWRSZXBvcnQob3JnSUQsIHJlcXVlc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfXB1YmxpYy9vcmdhbml6YXRpb25zLyR7b3JnSUR9L3JlcG9ydGA7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8QmxvYj4gPSBhd2FpdCB0aGlzLmh0dHAucG9zdCh1cmwsIHJlcXVlc3REYXRhLCB7IG9ic2VydmU6ICdyZXNwb25zZScsIHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuYm9keSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbcmVzcG9uc2UuYm9keV0sIHsgdHlwZTogcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQgTU1NIFlZWVkgSEg6bW0nKTtcbiAgICAgICAgICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IHJlcXVlc3REYXRhLnJlcG9ydE5hbWUgKyBcIl9cIiArIGN1cnJlbnREYXRlICsgXCIuXCIgKyByZXF1ZXN0RGF0YS5yZXBvcnRGb3JtYXQ7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgICAgICAgICAgICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2V0QWxlcnRQcm9wZXJ0aWVzKHRoaXMucmVwb3J0QWxlcnRPYmosIFJlcG9ydEVycm9yRW51bS5EQVRBX05PVF9GT1VORF9MQUJFTCwgUmVwb3J0RXJyb3JFbnVtLkRBVEFfTk9UX0ZPVU5EX01FU1NBR0UsIE1lc3NhZ2VBbGVydFR5cGVFbnVtLldBUk5JTkcsIE1lc3NhZ2VBbGVydEljb25FbnVtLldBUk5JTkdfSUNPTik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zZXRBbGVydFByb3BlcnRpZXModGhpcy5yZXBvcnRBbGVydE9iaiwgUmVwb3J0RXJyb3JFbnVtLklOVkFMSURfRVJST1JfTEFCRUwsIFJlcG9ydEVycm9yRW51bS5JTlZBTElEX0VSUk9SX01FU1NBR0UsIE1lc3NhZ2VBbGVydFR5cGVFbnVtLkRBTkdFUiwgTWVzc2FnZUFsZXJ0SWNvbkVudW0uREFOR0VSX0lDT04pO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19