import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumptionBreakupRoutingModule } from './consumption-breakup-routing.module';
import { ConsumptionBreakupComponent } from './consumption-breakup.component';
import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
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
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24tYnJlYWt1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9yZXBvcnQvY29uc3VtcHRpb24tYnJlYWt1cC9jb25zdW1wdGlvbi1icmVha3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBQ3pFLGdCQUFnQjtBQW9CaEIsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQWY3QiwyQkFBMkIsYUFHM0IsWUFBWTtRQUNaLCtCQUErQjtRQUMvQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osY0FBYztRQUNkLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTt1SEFHVix3QkFBd0IsWUFieEI7WUFDTCxZQUFZO1lBQ1osK0JBQStCO1lBQy9CLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1NBQ2xCOzRGQUVRLHdCQUF3QjtrQkFqQnBDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDJCQUEyQjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osK0JBQStCO3dCQUMvQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YseUJBQXlCO3dCQUN6QixZQUFZO3dCQUNaLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7cUJBQ2xCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbnN1bXB0aW9uQnJlYWt1cFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NvbnN1bXB0aW9uLWJyZWFrdXAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uc3VtcHRpb25CcmVha3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb25zdW1wdGlvbi1icmVha3VwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZUxvYWRNb2R1bGUgfSBmcm9tICcuLi8uLi9fc2hhcmVkL2ZpbHRlci9zb3VyY2UtbG9hZC9zb3VyY2UtbG9hZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25EdXJhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBFbnRpdHlNb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9lbnRpdHkvZW50aXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb25zdW1wdGlvbkJyZWFrdXBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBDb25zdW1wdGlvbkJyZWFrdXBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTb3VyY2VMb2FkTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIEVudGl0eU1vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VBbGVydE1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uc3VtcHRpb25CcmVha3VwTW9kdWxlIHsgfVxuIl19