import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { MeterData } from '../model/aggregate-data.model';
import * as i0 from "@angular/core";
import * as i1 from "../controller/aggregate-data.controller";
export class AggregateDataService {
    constructor(aggregateDataController) {
        this.aggregateDataController = aggregateDataController;
    }
    getAggregateData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let aggregatedData;
            try {
                aggregatedData = yield this.aggregateDataController.getAggregateData(orgID, requestBody).toPromise();
                if (aggregatedData) {
                    return aggregatedData;
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
    getMeterAggregateDataForReport(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let meterReportData;
            try {
                meterReportData = yield this.aggregateDataController.getMeterAggregateDataForReport(orgID, requestBody).toPromise();
                if (meterReportData) {
                    return [new MeterData()];
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
    getDeviceAggregateData(orgID, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceAggregateData;
            try {
                deviceAggregateData = yield this.aggregateDataController.getDeviceAggregateData(orgID, requestBody).toPromise();
                if (deviceAggregateData) {
                    return deviceAggregateData;
                }
            }
            catch (error) {
                console.error('Error -', error);
                throw error;
            }
        });
    }
}
AggregateDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, deps: [{ token: i1.AggregateDataController }], target: i0.ɵɵFactoryTarget.Injectable });
AggregateDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AggregateDataController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9hZ2dyZWdhdGUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBUXRFLE1BQU0sT0FBTyxvQkFBb0I7SUFFN0IsWUFDWSx1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUN4RCxDQUFDO0lBRUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVc7O1lBQ3JDLElBQUksY0FBYyxDQUFDO1lBQ25CLElBQUk7Z0JBQ0EsY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFckcsSUFBSSxjQUFjLEVBQUU7b0JBQ2hCLE9BQU8sY0FBYyxDQUFDO2lCQUN6QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sS0FBSyxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7SUFFSyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDbkQsSUFBSSxlQUE2QixDQUFDO1lBQ2xDLElBQUk7Z0JBQ0EsZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFFcEgsSUFBSSxlQUFlLEVBQUU7b0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxLQUFLLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTtJQUdLLHNCQUFzQixDQUFDLEtBQUssRUFBRSxXQUFXOztZQUMzQyxJQUFJLG1CQUFtQixDQUFDO1lBQ3hCLElBQUk7Z0JBQ0EsbUJBQW1CLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVoSCxJQUFJLG1CQUFtQixFQUFFO29CQUNyQixPQUFPLG1CQUFtQixDQUFDO2lCQUM5QjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU0sS0FBSyxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7O2tIQS9DUSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUhqQixNQUFNOzRGQUdULG9CQUFvQjtrQkFKaEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1ldGVyRGF0YSwgTWV0ZXJEYXRhSSB9IGZyb20gJy4uL21vZGVsL2FnZ3JlZ2F0ZS1kYXRhLm1vZGVsJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2FnZ3JlZ2F0ZS1kYXRhLmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRGF0YVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YUNvbnRyb2xsZXI6IEFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldEFnZ3JlZ2F0ZURhdGEob3JnSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIGxldCBhZ2dyZWdhdGVkRGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZWREYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVEYXRhQ29udHJvbGxlci5nZXRBZ2dyZWdhdGVEYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChhZ2dyZWdhdGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhZ2dyZWdhdGVkRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGdldE1ldGVyQWdncmVnYXRlRGF0YUZvclJlcG9ydChvcmdJRCwgcmVxdWVzdEJvZHkpOiBQcm9taXNlPE1ldGVyRGF0YUlbXT4ge1xuICAgICAgICBsZXQgbWV0ZXJSZXBvcnREYXRhOiBNZXRlckRhdGFJW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtZXRlclJlcG9ydERhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyLmdldE1ldGVyQWdncmVnYXRlRGF0YUZvclJlcG9ydChvcmdJRCwgcmVxdWVzdEJvZHkpLnRvUHJvbWlzZSgpO1xuXG4gICAgICAgICAgICBpZiAobWV0ZXJSZXBvcnREYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgTWV0ZXJEYXRhKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgLScsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBnZXREZXZpY2VBZ2dyZWdhdGVEYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSkge1xuICAgICAgICBsZXQgZGV2aWNlQWdncmVnYXRlRGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRldmljZUFnZ3JlZ2F0ZURhdGEgPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyLmdldERldmljZUFnZ3JlZ2F0ZURhdGEob3JnSUQsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgaWYgKGRldmljZUFnZ3JlZ2F0ZURhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV2aWNlQWdncmVnYXRlRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==