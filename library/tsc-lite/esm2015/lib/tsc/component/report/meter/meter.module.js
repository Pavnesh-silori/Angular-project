import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterReportRoutingModule } from './meter-routing.module';
import { MeterReportComponent } from './meter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { ParamMetricModule } from '../../dropdown/param-metric/param-metric.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L21ldGVyL21ldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpFLGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBd0JoQixNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBcEJ0QixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO2dIQUdWLGlCQUFpQixZQWxCakI7WUFDTCxZQUFZO1lBQ1osd0JBQXdCO1lBQ3hCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCx3QkFBd0I7WUFDeEIsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7U0FDbEI7NEZBRVEsaUJBQWlCO2tCQXRCN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2Qsd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7cUJBQ2xCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1ldGVyUmVwb3J0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vbWV0ZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTWV0ZXJSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL21ldGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFBhcmFtTWV0cmljTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vcGFyYW0tbWV0cmljL3BhcmFtLW1ldHJpYy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZSB9IGZyb20gJ25neC1tYXQtc2VsZWN0LXNlYXJjaCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTWV0ZXJSZXBvcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBNZXRlclJlcG9ydFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIFBhcmFtTWV0cmljTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlLFxuICAgICAgICBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTWV0ZXJSZXBvcnRNb2R1bGUgeyB9XG4iXX0=