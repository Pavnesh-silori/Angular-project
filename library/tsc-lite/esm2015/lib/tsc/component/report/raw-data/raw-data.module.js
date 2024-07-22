import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { RawDataReportRoutingModule } from './raw-data-routing.module';
import { RawDataReportComponent } from './raw-data.component';
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
        DownloadReportModule,
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
            DownloadReportModule,
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
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LWRhdGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L3Jhdy1kYXRhL3Jhdy1kYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFNUYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFOUQsY0FBYztBQUNkLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUFtQmhCLE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFmeEIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7a0hBR1YsbUJBQW1CLFlBYm5CO1lBQ0wsWUFBWTtZQUNaLDBCQUEwQjtZQUMxQixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtTQUNsQjs0RkFFUSxtQkFBbUI7a0JBakIvQixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixzQkFBc0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLDBCQUEwQjt3QkFDMUIsZUFBZTt3QkFDZixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBFbnRpdHlNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9lbnRpdHkvZW50aXR5Lm1vZHVsZSc7XG5pbXBvcnQgeyBEZXZpY2VNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9kZXZpY2UvZGV2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBEb3dubG9hZFJlcG9ydE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZG93bmxvYWQtcmVwb3J0L2Rvd25sb2FkLXJlcG9ydC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBSYXdEYXRhUmVwb3J0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vcmF3LWRhdGEtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUmF3RGF0YVJlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vcmF3LWRhdGEuY29tcG9uZW50JztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBSYXdEYXRhUmVwb3J0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmF3RGF0YVJlcG9ydFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIERhdGVJbnB1dE1vZHVsZSxcbiAgICAgICAgRW50aXR5TW9kdWxlLFxuICAgICAgICBEZXZpY2VNb2R1bGUsXG4gICAgICAgIERvd25sb2FkUmVwb3J0TW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBSYXdEYXRhUmVwb3J0TW9kdWxlIHsgfVxuIl19