import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAvailabilityReportRoutingModule } from './data-availability-routing.module';
import { DataAvailabilityReportComponent } from './data-availability.component';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class DataAvailabilityReportModule {
}
DataAvailabilityReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataAvailabilityReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, declarations: [DataAvailabilityReportComponent], imports: [CommonModule,
        DataAvailabilityReportRoutingModule,
        DateInputModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
DataAvailabilityReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, imports: [[
            CommonModule,
            DataAvailabilityReportRoutingModule,
            DateInputModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DataAvailabilityReportComponent
                    ],
                    imports: [
                        CommonModule,
                        DataAvailabilityReportRoutingModule,
                        DateInputModule,
                        EntityModule,
                        DeviceModule,
                        ParamMetricModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hdmFpbGFiaWxpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L2RhdGEtYXZhaWxhYmlsaXR5L2RhdGEtYXZhaWxhYmlsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXBGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsY0FBYztBQUNkLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUFtQmhCLE1BQU0sT0FBTyw0QkFBNEI7OzBIQUE1Qiw0QkFBNEI7MkhBQTVCLDRCQUE0QixpQkFmakMsK0JBQStCLGFBRy9CLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7MkhBR1YsNEJBQTRCLFlBYjVCO1lBQ0wsWUFBWTtZQUNaLG1DQUFtQztZQUNuQyxlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtTQUNsQjs0RkFFUSw0QkFBNEI7a0JBakJ4QyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViwrQkFBK0I7cUJBQ2xDO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLG1DQUFtQzt3QkFDbkMsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYXRhQXZhaWxhYmlsaXR5UmVwb3J0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vZGF0YS1hdmFpbGFiaWxpdHktcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0YUF2YWlsYWJpbGl0eVJlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vZGF0YS1hdmFpbGFiaWxpdHkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRW50aXR5TW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vZW50aXR5L2VudGl0eS5tb2R1bGUnO1xuaW1wb3J0IHsgRGV2aWNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vZGV2aWNlL2RldmljZS5tb2R1bGUnO1xuaW1wb3J0IHsgUGFyYW1NZXRyaWNNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9wYXJhbS1tZXRyaWMvcGFyYW0tbWV0cmljLm1vZHVsZSc7XG5cbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRGF0YUF2YWlsYWJpbGl0eVJlcG9ydENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIERhdGFBdmFpbGFiaWxpdHlSZXBvcnRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEVudGl0eU1vZHVsZSxcbiAgICAgICAgRGV2aWNlTW9kdWxlLFxuICAgICAgICBQYXJhbU1ldHJpY01vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VBbGVydE1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFBdmFpbGFiaWxpdHlSZXBvcnRNb2R1bGUgeyB9XG4iXX0=