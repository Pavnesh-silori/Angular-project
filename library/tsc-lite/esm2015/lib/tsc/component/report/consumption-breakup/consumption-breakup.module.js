import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { ConsumptionBreakupRoutingModule } from './consumption-breakup-routing.module';
import { ConsumptionBreakupComponent } from './consumption-breakup.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumptionBreakupModule {
}
ConsumptionBreakupModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, declarations: [ConsumptionBreakupComponent], imports: [CommonModule,
        ConsumptionBreakupRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        EntityModule,
        DownloadReportModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
ConsumptionBreakupModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, imports: [[
            CommonModule,
            ConsumptionBreakupRoutingModule,
            SourceLoadModule,
            DateInputModule,
            AggregationDurationModule,
            EntityModule,
            DownloadReportModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionBreakupComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionBreakupRoutingModule,
                        SourceLoadModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityModule,
                        DownloadReportModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24tYnJlYWt1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9yZXBvcnQvY29uc3VtcHRpb24tYnJlYWt1cC9jb25zdW1wdGlvbi1icmVha3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RSxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBQ3pFLGdCQUFnQjtBQW9CaEIsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQWhCN0IsMkJBQTJCLGFBRzNCLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0IsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO3VIQUdWLHdCQUF3QixZQWR4QjtZQUNMLFlBQVk7WUFDWiwrQkFBK0I7WUFDL0IsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1NBQ2xCOzRGQUVRLHdCQUF3QjtrQkFsQnBDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDJCQUEyQjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osK0JBQStCO3dCQUMvQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YseUJBQXlCO3dCQUN6QixZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTtxQkFDbEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlTG9hZE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZmlsdGVyL3NvdXJjZS1sb2FkL3NvdXJjZS1sb2FkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEVudGl0eU1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2VudGl0eS9lbnRpdHkubW9kdWxlJztcbmltcG9ydCB7IERvd25sb2FkUmVwb3J0TW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kb3dubG9hZC1yZXBvcnQvZG93bmxvYWQtcmVwb3J0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IENvbnN1bXB0aW9uQnJlYWt1cFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NvbnN1bXB0aW9uLWJyZWFrdXAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uc3VtcHRpb25CcmVha3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb25zdW1wdGlvbi1icmVha3VwLmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uc3VtcHRpb25CcmVha3VwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29uc3VtcHRpb25CcmVha3VwUm91dGluZ01vZHVsZSxcbiAgICAgICAgU291cmNlTG9hZE1vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0TW9kdWxlLFxuICAgICAgICBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlLFxuICAgICAgICBFbnRpdHlNb2R1bGUsXG4gICAgICAgIERvd25sb2FkUmVwb3J0TW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25zdW1wdGlvbkJyZWFrdXBNb2R1bGUgeyB9XG4iXX0=