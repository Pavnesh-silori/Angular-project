import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { CgwaReportRoutingModule } from './cgwa-routing.module';
import { CgwaReportComponent } from './cgwa.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class CgwaReportModule {
}
CgwaReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CgwaReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, declarations: [CgwaReportComponent], imports: [CommonModule,
        CgwaReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
CgwaReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, imports: [[
            CommonModule,
            CgwaReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatSlideToggleModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CgwaReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CgwaReportComponent
                    ],
                    imports: [
                        CommonModule,
                        CgwaReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatSlideToggleModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2d3YS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9yZXBvcnQvY2d3YS9jZ3dhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsV0FBVyxFQUNYLG1CQUFtQixFQUN0QixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXZELGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBMEJoQixNQUFNLE9BQU8sZ0JBQWdCOzs4R0FBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0IsaUJBdEJyQixtQkFBbUIsYUFHbkIsWUFBWTtRQUNaLHVCQUF1QjtRQUV2QixXQUFXO1FBQ1gsbUJBQW1CO1FBRW5CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixvQkFBb0I7UUFFcEIsb0JBQW9CO1FBRXBCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYzsrR0FHVCxnQkFBZ0IsWUFwQmhCO1lBQ0wsWUFBWTtZQUNaLHVCQUF1QjtZQUV2QixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsY0FBYztZQUNkLGVBQWU7WUFDZixvQkFBb0I7WUFFcEIsb0JBQW9CO1lBRXBCLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsY0FBYztTQUNqQjs0RkFFUSxnQkFBZ0I7a0JBeEI1QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixtQkFBbUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHVCQUF1Qjt3QkFFdkIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBRW5CLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUVwQixvQkFBb0I7d0JBRXBCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixjQUFjO3FCQUNqQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0U2xpZGVUb2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuXG5pbXBvcnQgeyBEb3dubG9hZFJlcG9ydE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZG93bmxvYWQtcmVwb3J0L2Rvd25sb2FkLXJlcG9ydC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDZ3dhUmVwb3J0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vY2d3YS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDZ3dhUmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9jZ3dhLmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2d3YVJlcG9ydENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIENnd2FSZXBvcnRSb3V0aW5nTW9kdWxlLFxuXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcblxuICAgICAgICBEb3dubG9hZFJlcG9ydE1vZHVsZSxcblxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VBbGVydE1vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENnd2FSZXBvcnRNb2R1bGUgeyB9XG4iXX0=