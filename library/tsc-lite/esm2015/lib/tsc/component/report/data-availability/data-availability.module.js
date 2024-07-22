import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DeviceModule } from '../../dropdown/device/device.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { DataAvailabilityReportRoutingModule } from './data-availability-routing.module';
import { DataAvailabilityReportComponent } from './data-availability.component';
// tsc-library
import { DateFilterTwoModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class DataAvailabilityReportModule {
}
DataAvailabilityReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataAvailabilityReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, declarations: [DataAvailabilityReportComponent], imports: [CommonModule,
        DataAvailabilityReportRoutingModule,
        DateFilterTwoModule,
        FormsModule,
        ReactiveFormsModule,
        EntityModule,
        DeviceModule,
        ParamMetricModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRippleModule] });
DataAvailabilityReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataAvailabilityReportModule, imports: [[
            CommonModule,
            DataAvailabilityReportRoutingModule,
            DateFilterTwoModule,
            FormsModule,
            ReactiveFormsModule,
            EntityModule,
            DeviceModule,
            ParamMetricModule,
            DownloadReportModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
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
                        DateFilterTwoModule,
                        FormsModule,
                        ReactiveFormsModule,
                        EntityModule,
                        DeviceModule,
                        ParamMetricModule,
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatRippleModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hdmFpbGFiaWxpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L2RhdGEtYXZhaWxhYmlsaXR5L2RhdGEtYXZhaWxhYmlsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFNUYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDekYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFaEYsY0FBYztBQUNkLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBQ3pFLGdCQUFnQjtBQXlCaEIsTUFBTSxPQUFPLDRCQUE0Qjs7MEhBQTVCLDRCQUE0QjsySEFBNUIsNEJBQTRCLGlCQXJCakMsK0JBQStCLGFBRy9CLFlBQVk7UUFDWixtQ0FBbUM7UUFDbkMsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGVBQWU7MkhBR1YsNEJBQTRCLFlBbkI1QjtZQUNMLFlBQVk7WUFDWixtQ0FBbUM7WUFDbkMsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7U0FDbEI7NEZBRVEsNEJBQTRCO2tCQXZCeEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsK0JBQStCO3FCQUNsQztvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixtQ0FBbUM7d0JBQ25DLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZUFBZTtxQkFDbEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmltcG9ydCB7IEVudGl0eU1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2VudGl0eS9lbnRpdHkubW9kdWxlJztcbmltcG9ydCB7IERldmljZU1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2RldmljZS9kZXZpY2UubW9kdWxlJztcbmltcG9ydCB7IFBhcmFtTWV0cmljTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vcGFyYW0tbWV0cmljL3BhcmFtLW1ldHJpYy5tb2R1bGUnO1xuaW1wb3J0IHsgRG93bmxvYWRSZXBvcnRNb2R1bGUgfSBmcm9tICcuLi8uLi9fc2hhcmVkL2Rvd25sb2FkLXJlcG9ydC9kb3dubG9hZC1yZXBvcnQubW9kdWxlJztcblxuaW1wb3J0IHsgRGF0YUF2YWlsYWJpbGl0eVJlcG9ydFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2RhdGEtYXZhaWxhYmlsaXR5LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IERhdGFBdmFpbGFiaWxpdHlSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtYXZhaWxhYmlsaXR5LmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlRmlsdGVyVHdvTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBNZXNzYWdlQWxlcnRNb2R1bGUsIFNrZWxldG9uTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERhdGFBdmFpbGFiaWxpdHlSZXBvcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBEYXRhQXZhaWxhYmlsaXR5UmVwb3J0Um91dGluZ01vZHVsZSxcbiAgICAgICAgRGF0ZUZpbHRlclR3b01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIEVudGl0eU1vZHVsZSxcbiAgICAgICAgRGV2aWNlTW9kdWxlLFxuICAgICAgICBQYXJhbU1ldHJpY01vZHVsZSxcbiAgICAgICAgRG93bmxvYWRSZXBvcnRNb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFBdmFpbGFiaWxpdHlSZXBvcnRNb2R1bGUgeyB9XG4iXX0=