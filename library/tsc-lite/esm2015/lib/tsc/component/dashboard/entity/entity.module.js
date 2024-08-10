import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDashboardRoutingModule } from './entity-routing.module';
import { EntityDashboardComponent } from './entity.component';
import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// tsc-library
import { SearchBarTwoModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class EntityDashboardModule {
}
EntityDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, declarations: [EntityDashboardComponent], imports: [CommonModule,
        EntityDashboardRoutingModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatOptionModule,
        MatRadioModule,
        MatTooltipModule,
        PerfectScrollbarModule] });
EntityDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            EntityDashboardRoutingModule,
            TrendModule,
            SkeletonModule,
            SearchBarTwoModule,
            ReactiveFormsModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatButtonToggleModule,
            MatExpansionModule,
            MatOptionModule,
            MatRadioModule,
            MatTooltipModule,
            PerfectScrollbarModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        EntityDashboardComponent
                    ],
                    imports: [
                        CommonModule,
                        EntityDashboardRoutingModule,
                        TrendModule,
                        SkeletonModule,
                        SearchBarTwoModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatButtonToggleModule,
                        MatExpansionModule,
                        MatOptionModule,
                        MatRadioModule,
                        MatTooltipModule,
                        PerfectScrollbarModule
                    ],
                    providers: [TrendService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9lbnRpdHkvZW50aXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0QsY0FBYztBQUNkLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBMEJoQixNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBdEIxQix3QkFBd0IsYUFHeEIsWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsc0JBQXNCO29IQUlqQixxQkFBcUIsYUFGbkIsQ0FBQyxZQUFZLENBQUMsWUFsQmhCO1lBQ0wsWUFBWTtZQUNaLDRCQUE0QjtZQUM1QixXQUFXO1lBQ1gsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsc0JBQXNCO1NBQ3pCOzRGQUdRLHFCQUFxQjtrQkF4QmpDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osNEJBQTRCO3dCQUM1QixXQUFXO3dCQUNYLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLHNCQUFzQjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBFbnRpdHlEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9lbnRpdHktcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRW50aXR5RGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9lbnRpdHkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVHJlbmRNb2R1bGUgfSBmcm9tICcuLi8uLi9fc2hhcmVkL2RpYWxvZy90cmVuZC90cmVuZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUcmVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL3RyZW5kLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0RXhwYW5zaW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7IE1hdE9wdGlvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUgfSBmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU2VhcmNoQmFyVHdvTW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBFbnRpdHlEYXNoYm9hcmRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBFbnRpdHlEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBUcmVuZE1vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGUsXG4gICAgICAgIFNlYXJjaEJhclR3b01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICAgICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgICAgICBNYXRSYWRpb01vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgUGVyZmVjdFNjcm9sbGJhck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbVHJlbmRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=