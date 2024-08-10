import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { ConsumptionReportRoutingModule } from './consumption-routing.module';
import { ConsumptionReportComponent } from './consumption.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumptionReportModule {
}
ConsumptionReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, declarations: [ConsumptionReportComponent], imports: [CommonModule,
        ConsumptionReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        NgxMatSelectSearchModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
ConsumptionReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, imports: [[
            CommonModule,
            ConsumptionReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatButtonToggleModule,
            MatSlideToggleModule,
            NgxMatSelectSearchModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionReportComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatButtonToggleModule,
                        MatSlideToggleModule,
                        NgxMatSelectSearchModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsV0FBVyxFQUNYLG1CQUFtQixFQUN0QixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJFLGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBNkJoQixNQUFNLE9BQU8sdUJBQXVCOztxSEFBdkIsdUJBQXVCO3NIQUF2Qix1QkFBdUIsaUJBekI1QiwwQkFBMEIsYUFHMUIsWUFBWTtRQUNaLDhCQUE4QjtRQUU5QixXQUFXO1FBQ1gsbUJBQW1CO1FBRW5CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsb0JBQW9CO1FBRXBCLHdCQUF3QjtRQUV4QixvQkFBb0I7UUFFcEIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO3NIQUdULHVCQUF1QixZQXZCdkI7WUFDTCxZQUFZO1lBQ1osOEJBQThCO1lBRTlCLFdBQVc7WUFDWCxtQkFBbUI7WUFFbkIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixjQUFjO1lBQ2QsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFFcEIsd0JBQXdCO1lBRXhCLG9CQUFvQjtZQUVwQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLGNBQWM7U0FDakI7NEZBRVEsdUJBQXVCO2tCQTNCbkMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsMEJBQTBCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWiw4QkFBOEI7d0JBRTlCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUVuQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUVwQix3QkFBd0I7d0JBRXhCLG9CQUFvQjt3QkFFcEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGNBQWM7cUJBQ2pCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcblxuaW1wb3J0IHsgTmd4TWF0U2VsZWN0U2VhcmNoTW9kdWxlIH0gZnJvbSAnbmd4LW1hdC1zZWxlY3Qtc2VhcmNoJztcblxuaW1wb3J0IHsgRG93bmxvYWRSZXBvcnRNb2R1bGUgfSBmcm9tICcuLi8uLi9fc2hhcmVkL2Rvd25sb2FkLXJlcG9ydC9kb3dubG9hZC1yZXBvcnQubW9kdWxlJztcblxuaW1wb3J0IHsgQ29uc3VtcHRpb25SZXBvcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb25zdW1wdGlvbi1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zdW1wdGlvblJlcG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29uc3VtcHRpb24uY29tcG9uZW50JztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb25zdW1wdGlvblJlcG9ydENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIENvbnN1bXB0aW9uUmVwb3J0Um91dGluZ01vZHVsZSxcblxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcblxuICAgICAgICBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUsXG5cbiAgICAgICAgRG93bmxvYWRSZXBvcnRNb2R1bGUsXG5cbiAgICAgICAgRGF0ZUlucHV0TW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25zdW1wdGlvblJlcG9ydE1vZHVsZSB7IH1cbiJdfQ==