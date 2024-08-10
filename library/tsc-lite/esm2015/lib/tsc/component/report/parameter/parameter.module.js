import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { AggregationModule } from '../../dropdown/aggregation/aggregation.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { ParameterReportRoutingModule } from './parameter-routing.module';
import { ParameterReportComponent } from './parameter.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class ParameterReportModule {
}
ParameterReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, declarations: [ParameterReportComponent], imports: [CommonModule,
        ParameterReportRoutingModule,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        AggregationModule,
        SkeletonModule,
        MessageAlertModule,
        DownloadReportModule,
        MatTableModule,
        MatRippleModule] });
ParameterReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, imports: [[
            CommonModule,
            ParameterReportRoutingModule,
            DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            AggregationModule,
            SkeletonModule,
            MessageAlertModule,
            DownloadReportModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParameterReportComponent
                    ],
                    imports: [
                        CommonModule,
                        ParameterReportRoutingModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityModule,
                        DeviceModule,
                        ParamMetricModule,
                        AggregationModule,
                        SkeletonModule,
                        MessageAlertModule,
                        DownloadReportModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L3JlcG9ydC9wYXJhbWV0ZXIvcGFyYW1ldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFNUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakUsY0FBYztBQUNkLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUFzQmhCLE1BQU0sT0FBTyxxQkFBcUI7O21IQUFyQixxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFsQjFCLHdCQUF3QixhQUd4QixZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO29IQUdWLHFCQUFxQixZQWhCckI7WUFDTCxZQUFZO1lBQ1osNEJBQTRCO1lBQzVCLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxlQUFlO1NBQ2xCOzRGQUVRLHFCQUFxQjtrQkFwQmpDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osNEJBQTRCO3dCQUM1QixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGVBQWU7cUJBQ2xCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRW50aXR5TW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vZW50aXR5L2VudGl0eS5tb2R1bGUnO1xuaW1wb3J0IHsgRGV2aWNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vZGV2aWNlL2RldmljZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGFyYW1NZXRyaWNNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9wYXJhbS1tZXRyaWMvcGFyYW0tbWV0cmljLm1vZHVsZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBEb3dubG9hZFJlcG9ydE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZG93bmxvYWQtcmVwb3J0L2Rvd25sb2FkLXJlcG9ydC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJSZXBvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyUmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9wYXJhbWV0ZXIuY29tcG9uZW50JztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQYXJhbWV0ZXJSZXBvcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBQYXJhbWV0ZXJSZXBvcnRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIEVudGl0eU1vZHVsZSxcbiAgICAgICAgRGV2aWNlTW9kdWxlLFxuICAgICAgICBQYXJhbU1ldHJpY01vZHVsZSxcbiAgICAgICAgQWdncmVnYXRpb25Nb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIERvd25sb2FkUmVwb3J0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJSZXBvcnRNb2R1bGUgeyB9XG4iXX0=