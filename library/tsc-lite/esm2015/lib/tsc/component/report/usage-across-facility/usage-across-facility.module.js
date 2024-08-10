import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageAcrossFacilityRoutingModule } from './usage-across-facility-routing.module';
import { UsageAcrossFacilityComponent } from './usage-across-facility.component';
import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class UsageAcrossFacilityModule {
}
UsageAcrossFacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsageAcrossFacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, declarations: [UsageAcrossFacilityComponent], imports: [CommonModule,
        UsageAcrossFacilityRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
UsageAcrossFacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, imports: [[
            CommonModule,
            UsageAcrossFacilityRoutingModule,
            SourceLoadModule,
            DateInputModule,
            AggregationDurationModule,
            DownloadReportModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UsageAcrossFacilityComponent
                    ],
                    imports: [
                        CommonModule,
                        UsageAcrossFacilityRoutingModule,
                        SourceLoadModule,
                        DateInputModule,
                        AggregationDurationModule,
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNhZ2UtYWNyb3NzLWZhY2lsaXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L3JlcG9ydC91c2FnZS1hY3Jvc3MtZmFjaWxpdHkvdXNhZ2UtYWNyb3NzLWZhY2lsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBbUJoQixNQUFNLE9BQU8seUJBQXlCOzt1SEFBekIseUJBQXlCO3dIQUF6Qix5QkFBeUIsaUJBZjlCLDRCQUE0QixhQUc1QixZQUFZO1FBQ1osZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO3dIQUdWLHlCQUF5QixZQWJ6QjtZQUNMLFlBQVk7WUFDWixnQ0FBZ0M7WUFDaEMsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7U0FDbEI7NEZBRVEseUJBQXlCO2tCQWpCckMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsNEJBQTRCO3FCQUMvQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixnQ0FBZ0M7d0JBQ2hDLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTtxQkFDbEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVXNhZ2VBY3Jvc3NGYWNpbGl0eVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3VzYWdlLWFjcm9zcy1mYWNpbGl0eS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2FnZUFjcm9zc0ZhY2lsaXR5Q29tcG9uZW50IH0gZnJvbSAnLi91c2FnZS1hY3Jvc3MtZmFjaWxpdHkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU291cmNlTG9hZE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZmlsdGVyL3NvdXJjZS1sb2FkL3NvdXJjZS1sb2FkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IERvd25sb2FkUmVwb3J0TW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kb3dubG9hZC1yZXBvcnQvZG93bmxvYWQtcmVwb3J0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVXNhZ2VBY3Jvc3NGYWNpbGl0eUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFVzYWdlQWNyb3NzRmFjaWxpdHlSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTb3VyY2VMb2FkTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIERvd25sb2FkUmVwb3J0TW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVc2FnZUFjcm9zc0ZhY2lsaXR5TW9kdWxlIHsgfVxuIl19