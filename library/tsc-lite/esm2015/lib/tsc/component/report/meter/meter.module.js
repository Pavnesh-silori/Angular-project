import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { MeterReportRoutingModule } from './meter-routing.module';
import { MeterReportComponent } from './meter.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class MeterReportModule {
}
MeterReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, declarations: [MeterReportComponent], imports: [CommonModule,
        MeterReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        ParamMetricModule,
        DownloadReportModule,
        MessageAlertModule,
        SkeletonModule,
        NgxMatSelectSearchModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule] });
MeterReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, imports: [[
            CommonModule,
            MeterReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            DateInputModule,
            AggregationDurationModule,
            ParamMetricModule,
            DownloadReportModule,
            MessageAlertModule,
            SkeletonModule,
            NgxMatSelectSearchModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MeterReportComponent
                    ],
                    imports: [
                        CommonModule,
                        MeterReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DateInputModule,
                        AggregationDurationModule,
                        ParamMetricModule,
                        DownloadReportModule,
                        MessageAlertModule,
                        SkeletonModule,
                        NgxMatSelectSearchModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L21ldGVyL21ldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpELGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBeUJoQixNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBckJ0QixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtnSEFHVixpQkFBaUIsWUFuQmpCO1lBQ0wsWUFBWTtZQUNaLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLHdCQUF3QjtZQUN4QixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtTQUNsQjs0RkFFUSxpQkFBaUI7a0JBdkI3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixvQkFBb0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YseUJBQXlCO3dCQUN6QixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgTmd4TWF0U2VsZWN0U2VhcmNoTW9kdWxlIH0gZnJvbSAnbmd4LW1hdC1zZWxlY3Qtc2VhcmNoJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25EdXJhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQYXJhbU1ldHJpY01vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL3BhcmFtLW1ldHJpYy9wYXJhbS1tZXRyaWMubW9kdWxlJztcbmltcG9ydCB7IERvd25sb2FkUmVwb3J0TW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kb3dubG9hZC1yZXBvcnQvZG93bmxvYWQtcmVwb3J0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE1ldGVyUmVwb3J0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vbWV0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTWV0ZXJSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL21ldGVyLmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTWV0ZXJSZXBvcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBNZXRlclJlcG9ydFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIFBhcmFtTWV0cmljTW9kdWxlLFxuICAgICAgICBEb3dubG9hZFJlcG9ydE1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTmd4TWF0U2VsZWN0U2VhcmNoTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRSaXBwbGVNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE1ldGVyUmVwb3J0TW9kdWxlIHsgfVxuIl19