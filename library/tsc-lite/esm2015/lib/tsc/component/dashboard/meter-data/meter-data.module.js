import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';
import { MeterDataRoutingModule } from './meter-data-routing.module';
import { MeterDataDashboardComponent } from './meter-data.component';
// tsc-library
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class MeterDataDashboardModule {
}
MeterDataDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MeterDataDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, declarations: [MeterDataDashboardComponent], imports: [CommonModule,
        MeterDataRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
        TrendModule,
        MessageAlertModule,
        SkeletonModule] });
MeterDataDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            MeterDataRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatTooltipModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            NgxMatSelectSearchModule,
            TrendModule,
            MessageAlertModule,
            SkeletonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MeterDataDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MeterDataDashboardComponent
                    ],
                    imports: [
                        CommonModule,
                        MeterDataRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatTooltipModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        NgxMatSelectSearchModule,
                        TrendModule,
                        MessageAlertModule,
                        SkeletonModule
                    ],
                    providers: [TrendService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0ZXItZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvbWV0ZXItZGF0YS9tZXRlci1kYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVyRSxjQUFjO0FBQ2QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUF3QmhCLE1BQU0sT0FBTyx3QkFBd0I7O3NIQUF4Qix3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFuQjdCLDJCQUEyQixhQUczQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZix3QkFBd0I7UUFDeEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixjQUFjO3VIQUlULHdCQUF3QixhQUZ0QixDQUFDLFlBQVksQ0FBQyxZQWZoQjtZQUNMLFlBQVk7WUFDWixzQkFBc0I7WUFDdEIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsa0JBQWtCO1lBQ2xCLGNBQWM7U0FDakI7NEZBR1Esd0JBQXdCO2tCQXJCcEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsMkJBQTJCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixzQkFBc0I7d0JBQ3RCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDakI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuXG5pbXBvcnQgeyBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUgfSBmcm9tICduZ3gtbWF0LXNlbGVjdC1zZWFyY2gnO1xuXG5pbXBvcnQgeyBUcmVuZE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZGlhbG9nL3RyZW5kL3RyZW5kLm1vZHVsZSc7XG5pbXBvcnQgeyBUcmVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL3RyZW5kLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBNZXRlckRhdGFSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9tZXRlci1kYXRhLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE1ldGVyRGF0YURhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbWV0ZXItZGF0YS5jb21wb25lbnQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE1ldGVyRGF0YURhc2hib2FyZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE1ldGVyRGF0YVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZSxcbiAgICAgICAgVHJlbmRNb2R1bGUsXG4gICAgICAgIE1lc3NhZ2VBbGVydE1vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1RyZW5kU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTWV0ZXJEYXRhRGFzaGJvYXJkTW9kdWxlIHsgfVxuIl19