import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';
import { FacilityComponent } from './facility.component';
import { FacilityRoutingModule } from './facility-routing.module';
// tsc-library
import { MessageAlertModule, SearchBarTwoModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class FacilityModule {
}
FacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, declarations: [FacilityComponent], imports: [CommonModule,
        FacilityRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        NgxMatSelectSearchModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule,
        MessageAlertModule] });
FacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, providers: [TrendService], imports: [[
            CommonModule,
            FacilityRoutingModule,
            ReactiveFormsModule,
            MatCardModule,
            MatTooltipModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatOptionModule,
            NgxMatSelectSearchModule,
            TrendModule,
            SkeletonModule,
            SearchBarTwoModule,
            MessageAlertModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FacilityComponent
                    ],
                    imports: [
                        CommonModule,
                        FacilityRoutingModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatTooltipModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatOptionModule,
                        NgxMatSelectSearchModule,
                        TrendModule,
                        SkeletonModule,
                        SearchBarTwoModule,
                        MessageAlertModule
                    ],
                    providers: [TrendService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWxpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2ZhY2lsaXR5L2ZhY2lsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRSxjQUFjO0FBQ2QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUM3RixnQkFBZ0I7QUF3QmhCLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBcEJuQixpQkFBaUIsYUFHakIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGtCQUFrQjs2R0FJYixjQUFjLGFBRlosQ0FBQyxZQUFZLENBQUMsWUFoQmhCO1lBQ0wsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7WUFDZixlQUFlO1lBQ2Ysd0JBQXdCO1lBQ3hCLFdBQVc7WUFDWCxjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGtCQUFrQjtTQUNyQjs0RkFHUSxjQUFjO2tCQXRCMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsaUJBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysd0JBQXdCO3dCQUN4QixXQUFXO3dCQUNYLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixrQkFBa0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0T3B0aW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZSB9IGZyb20gJ25neC1tYXQtc2VsZWN0LXNlYXJjaCc7XG5cbmltcG9ydCB7IFRyZW5kTW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQubW9kdWxlJztcbmltcG9ydCB7IFRyZW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvdHJlbmQuc2VydmljZSc7XG5cbmltcG9ydCB7IEZhY2lsaXR5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWNpbGl0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFjaWxpdHlSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9mYWNpbGl0eS1yb3V0aW5nLm1vZHVsZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBNZXNzYWdlQWxlcnRNb2R1bGUsIFNlYXJjaEJhclR3b01vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmFjaWxpdHlDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGYWNpbGl0eVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgICAgICBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUsXG4gICAgICAgIFRyZW5kTW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgU2VhcmNoQmFyVHdvTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1RyZW5kU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRmFjaWxpdHlNb2R1bGUgeyB9XG4iXX0=