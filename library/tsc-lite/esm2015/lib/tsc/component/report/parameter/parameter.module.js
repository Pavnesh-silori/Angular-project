import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterReportRoutingModule } from './parameter-routing.module';
import { ParameterReportComponent } from './parameter.component';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { AggregationModule } from '../../dropdown/aggregation/aggregation.module';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
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
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L3JlcG9ydC9wYXJhbWV0ZXIvcGFyYW1ldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsY0FBYztBQUNkLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUFxQmhCLE1BQU0sT0FBTyxxQkFBcUI7O21IQUFyQixxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFqQjFCLHdCQUF3QixhQUd4QixZQUFZO1FBQ1osNEJBQTRCO1FBQzVCLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7b0hBR1YscUJBQXFCLFlBZnJCO1lBQ0wsWUFBWTtZQUNaLDRCQUE0QjtZQUM1QixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1NBQ2xCOzRGQUVRLHFCQUFxQjtrQkFuQmpDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osNEJBQTRCO3dCQUM1QixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBQYXJhbWV0ZXJSZXBvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wYXJhbWV0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGFyYW1ldGVyUmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9wYXJhbWV0ZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25EdXJhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBFbnRpdHlNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9lbnRpdHkvZW50aXR5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEZXZpY2VNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9kZXZpY2UvZGV2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXJhbU1ldHJpY01vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL3BhcmFtLW1ldHJpYy9wYXJhbS1tZXRyaWMubW9kdWxlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vYWdncmVnYXRpb24vYWdncmVnYXRpb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBQYXJhbWV0ZXJSZXBvcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBQYXJhbWV0ZXJSZXBvcnRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIEVudGl0eU1vZHVsZSxcbiAgICAgICAgRGV2aWNlTW9kdWxlLFxuICAgICAgICBQYXJhbU1ldHJpY01vZHVsZSxcbiAgICAgICAgQWdncmVnYXRpb25Nb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRSaXBwbGVNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlclJlcG9ydE1vZHVsZSB7IH1cbiJdfQ==