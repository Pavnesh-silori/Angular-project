import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityModule } from '../../dropdown/entity/entity.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { BreakupReportRoutingModule } from './breakup-routing.module';
import { BreakupReportComponent } from './breakup.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class BreakupReportModule {
}
BreakupReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreakupReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, declarations: [BreakupReportComponent], imports: [CommonModule,
        BreakupReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,
        SourceLoadModule,
        AggregationDurationModule,
        EntityModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
BreakupReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, imports: [[
            CommonModule,
            BreakupReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatSlideToggleModule,
            SourceLoadModule,
            AggregationDurationModule,
            EntityModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BreakupReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BreakupReportComponent
                    ],
                    imports: [
                        CommonModule,
                        BreakupReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatSlideToggleModule,
                        SourceLoadModule,
                        AggregationDurationModule,
                        EntityModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWt1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9yZXBvcnQvYnJlYWt1cC9icmVha3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsV0FBVyxFQUNYLG1CQUFtQixFQUN0QixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3RCxjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBQ3pFLGdCQUFnQjtBQThCaEIsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQXpCeEIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWiwwQkFBMEI7UUFFMUIsV0FBVztRQUNYLG1CQUFtQjtRQUVuQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysb0JBQW9CO1FBRXBCLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLG9CQUFvQjtRQUVwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7a0hBR1QsbUJBQW1CLFlBdkJuQjtZQUNMLFlBQVk7WUFDWiwwQkFBMEI7WUFFMUIsV0FBVztZQUNYLG1CQUFtQjtZQUVuQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxlQUFlO1lBQ2Ysb0JBQW9CO1lBRXBCLGdCQUFnQjtZQUNoQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLG9CQUFvQjtZQUVwQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGNBQWM7U0FDakI7NEZBRVEsbUJBQW1CO2tCQTNCL0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysc0JBQXNCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWiwwQkFBMEI7d0JBRTFCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUVuQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG9CQUFvQjt3QkFFcEIsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUVwQixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDakI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcblxuaW1wb3J0IHsgU291cmNlTG9hZE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZmlsdGVyL3NvdXJjZS1sb2FkL3NvdXJjZS1sb2FkLm1vZHVsZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEVudGl0eU1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2VudGl0eS9lbnRpdHkubW9kdWxlJztcbmltcG9ydCB7IERvd25sb2FkUmVwb3J0TW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kb3dubG9hZC1yZXBvcnQvZG93bmxvYWQtcmVwb3J0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEJyZWFrdXBSZXBvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9icmVha3VwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEJyZWFrdXBSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL2JyZWFrdXAuY29tcG9uZW50JztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJyZWFrdXBSZXBvcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBCcmVha3VwUmVwb3J0Um91dGluZ01vZHVsZSxcblxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG5cbiAgICAgICAgU291cmNlTG9hZE1vZHVsZSxcbiAgICAgICAgQWdncmVnYXRpb25EdXJhdGlvbk1vZHVsZSxcbiAgICAgICAgRW50aXR5TW9kdWxlLFxuICAgICAgICBEb3dubG9hZFJlcG9ydE1vZHVsZSxcblxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VBbGVydE1vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFrdXBSZXBvcnRNb2R1bGUgeyB9XG4iXX0=