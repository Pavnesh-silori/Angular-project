import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';
import { EntityDashboardComponent } from './entity.component';
import { EntityDashboardRoutingModule } from './entity-routing.module';
// tsc-library
import { SearchBarTwoModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class EntityDashboardModule {
}
EntityDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EntityDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, declarations: [EntityDashboardComponent], imports: [CommonModule,
        EntityDashboardRoutingModule,
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
        NgxMatSelectSearchModule,
        PerfectScrollbarModule,
        TrendModule,
        SkeletonModule,
        SearchBarTwoModule] });
EntityDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EntityDashboardModule, providers: [TrendService], imports: [[
            CommonModule,
            EntityDashboardRoutingModule,
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
            NgxMatSelectSearchModule,
            PerfectScrollbarModule,
            TrendModule,
            SkeletonModule,
            SearchBarTwoModule
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
                        NgxMatSelectSearchModule,
                        PerfectScrollbarModule,
                        TrendModule,
                        SkeletonModule,
                        SearchBarTwoModule
                    ],
                    providers: [TrendService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9lbnRpdHkvZW50aXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkUsY0FBYztBQUNkLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBMkJoQixNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBdkIxQix3QkFBd0IsYUFHeEIsWUFBWTtRQUNaLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtvSEFJYixxQkFBcUIsYUFGbkIsQ0FBQyxZQUFZLENBQUMsWUFuQmhCO1lBQ0wsWUFBWTtZQUNaLDRCQUE0QjtZQUM1QixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixXQUFXO1lBQ1gsY0FBYztZQUNkLGtCQUFrQjtTQUNyQjs0RkFHUSxxQkFBcUI7a0JBekJqQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVix3QkFBd0I7cUJBQzNCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxjQUFjO3dCQUNkLGtCQUFrQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Ub2dnbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQgeyBNYXRPcHRpb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUgfSBmcm9tICduZ3gtbWF0LXNlbGVjdC1zZWFyY2gnO1xuaW1wb3J0IHsgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSB9IGZyb20gJ25neC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbmltcG9ydCB7IFRyZW5kTW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQubW9kdWxlJztcbmltcG9ydCB7IFRyZW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvdHJlbmQuc2VydmljZSc7XG5cbmltcG9ydCB7IEVudGl0eURhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZW50aXR5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbnRpdHlEYXNoYm9hcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9lbnRpdHktcm91dGluZy5tb2R1bGUnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU2VhcmNoQmFyVHdvTW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBFbnRpdHlEYXNoYm9hcmRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBFbnRpdHlEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgICAgICBNYXRPcHRpb25Nb2R1bGUsXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUsXG4gICAgICAgIFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUsXG4gICAgICAgIFRyZW5kTW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgU2VhcmNoQmFyVHdvTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtUcmVuZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eURhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==