import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawDataReportRoutingModule } from './raw-data-routing.module';
import { RawDataReportComponent } from './raw-data.component';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class RawDataReportModule {
}
RawDataReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RawDataReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, declarations: [RawDataReportComponent], imports: [CommonModule,
        RawDataReportRoutingModule,
        DateInputModule,
        EntityModule,
        DeviceModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
RawDataReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, imports: [[
            CommonModule,
            RawDataReportRoutingModule,
            DateInputModule,
            EntityModule,
            DeviceModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RawDataReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RawDataReportComponent
                    ],
                    imports: [
                        CommonModule,
                        RawDataReportRoutingModule,
                        DateInputModule,
                        EntityModule,
                        DeviceModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LWRhdGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L3Jhdy1kYXRhL3Jhdy1kYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsY0FBYztBQUNkLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUFrQmhCLE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFkeEIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtrSEFHVixtQkFBbUIsWUFabkI7WUFDTCxZQUFZO1lBQ1osMEJBQTBCO1lBQzFCLGVBQWU7WUFDZixZQUFZO1lBQ1osWUFBWTtZQUNaLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7U0FDbEI7NEZBRVEsbUJBQW1CO2tCQWhCL0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysc0JBQXNCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWiwwQkFBMEI7d0JBQzFCLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7cUJBQ2xCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFJhd0RhdGFSZXBvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9yYXctZGF0YS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBSYXdEYXRhUmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9yYXctZGF0YS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFbnRpdHlNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9lbnRpdHkvZW50aXR5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEZXZpY2VNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9kZXZpY2UvZGV2aWNlLm1vZHVsZSc7XG5cbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUmF3RGF0YVJlcG9ydENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFJhd0RhdGFSZXBvcnRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEVudGl0eU1vZHVsZSxcbiAgICAgICAgRGV2aWNlTW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBSYXdEYXRhUmVwb3J0TW9kdWxlIHsgfVxuIl19