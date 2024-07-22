import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { DownloadReportModule } from '../../_shared/download-report/download-report.module';
import { SourcingReportRoutingModule } from './sourcing-routing.module';
import { SourcingReportComponent } from './sourcing.component';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class SourcingReportModule {
}
SourcingReportModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SourcingReportModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, declarations: [SourcingReportComponent], imports: [CommonModule,
        SourcingReportRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatRippleModule,
        MatSlideToggleModule,
        AggregationDurationModule,
        DownloadReportModule,
        DateInputModule,
        MessageAlertModule,
        SkeletonModule] });
SourcingReportModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, imports: [[
            CommonModule,
            SourcingReportRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTableModule,
            MatRippleModule,
            MatSlideToggleModule,
            AggregationDurationModule,
            DownloadReportModule,
            DateInputModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SourcingReportModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SourcingReportComponent
                    ],
                    imports: [
                        CommonModule,
                        SourcingReportRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTableModule,
                        MatRippleModule,
                        MatSlideToggleModule,
                        AggregationDurationModule,
                        DownloadReportModule,
                        DateInputModule,
                        MessageAlertModule,
                        SkeletonModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L3NvdXJjaW5nL3NvdXJjaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0gsV0FBVyxFQUNYLG1CQUFtQixFQUN0QixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9ELGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBMkJoQixNQUFNLE9BQU8sb0JBQW9COztrSEFBcEIsb0JBQW9CO21IQUFwQixvQkFBb0IsaUJBdkJ6Qix1QkFBdUIsYUFHdkIsWUFBWTtRQUNaLDJCQUEyQjtRQUUzQixXQUFXO1FBQ1gsbUJBQW1CO1FBRW5CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixvQkFBb0I7UUFFcEIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUVwQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7bUhBR1Qsb0JBQW9CLFlBckJwQjtZQUNMLFlBQVk7WUFDWiwyQkFBMkI7WUFFM0IsV0FBVztZQUNYLG1CQUFtQjtZQUVuQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxlQUFlO1lBQ2Ysb0JBQW9CO1lBRXBCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFFcEIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixjQUFjO1NBQ2pCOzRGQUVRLG9CQUFvQjtrQkF6QmhDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHVCQUF1QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osMkJBQTJCO3dCQUUzQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFFbkIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixvQkFBb0I7d0JBRXBCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUVwQixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDakI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdFNsaWRlVG9nZ2xlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25EdXJhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3duL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBEb3dubG9hZFJlcG9ydE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZG93bmxvYWQtcmVwb3J0L2Rvd25sb2FkLXJlcG9ydC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTb3VyY2luZ1JlcG9ydFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NvdXJjaW5nLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNvdXJjaW5nUmVwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2luZy5jb21wb25lbnQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgRGF0ZUlucHV0TW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBNZXNzYWdlQWxlcnRNb2R1bGUsIFNrZWxldG9uTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNvdXJjaW5nUmVwb3J0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgU291cmNpbmdSZXBvcnRSb3V0aW5nTW9kdWxlLFxuXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcblxuICAgICAgICBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlLFxuICAgICAgICBEb3dubG9hZFJlcG9ydE1vZHVsZSxcblxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VBbGVydE1vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjaW5nUmVwb3J0TW9kdWxlIHsgfVxuIl19