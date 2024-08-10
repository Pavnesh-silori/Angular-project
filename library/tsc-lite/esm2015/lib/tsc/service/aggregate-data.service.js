import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
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
}
AggregateDataService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, deps: [{ token: i1.AggregateDataController }], target: i0.ɵɵFactoryTarget.Injectable });
AggregateDataService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AggregateDataService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.AggregateDataController }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS9hZ2dyZWdhdGUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRM0MsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUNZLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3hELENBQUM7SUFFQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsV0FBVzs7WUFDckMsSUFBSSxjQUFjLENBQUM7WUFDbkIsSUFBSTtnQkFDQSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUVyRyxJQUFJLGNBQWMsRUFBRTtvQkFDaEIsT0FBTyxjQUFjLENBQUM7aUJBQ3pCO2FBQ0o7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxLQUFLLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTs7a0hBbEJRLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBSGpCLE1BQU07NEZBR1Qsb0JBQW9CO2tCQUpoQyxVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlRGF0YUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVyL2FnZ3JlZ2F0ZS1kYXRhLmNvbnRyb2xsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRGF0YVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWdncmVnYXRlRGF0YUNvbnRyb2xsZXI6IEFnZ3JlZ2F0ZURhdGFDb250cm9sbGVyXG4gICAgKSB7IH1cblxuICAgIGFzeW5jIGdldEFnZ3JlZ2F0ZURhdGEob3JnSUQsIHJlcXVlc3RCb2R5KSB7XG4gICAgICAgIGxldCBhZ2dyZWdhdGVkRGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGFnZ3JlZ2F0ZWREYXRhID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVEYXRhQ29udHJvbGxlci5nZXRBZ2dyZWdhdGVEYXRhKG9yZ0lELCByZXF1ZXN0Qm9keSkudG9Qcm9taXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChhZ2dyZWdhdGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhZ2dyZWdhdGVkRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIC0nLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==