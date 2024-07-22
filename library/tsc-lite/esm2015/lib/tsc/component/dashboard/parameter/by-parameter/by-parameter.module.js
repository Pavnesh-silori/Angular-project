import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ByParameterRoutingModule } from './by-parameter-routing.module';
import { ByParameterComponent } from './by-parameter.component';
import { AggregationDurationModule } from '../../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityTypeModule } from '../../../dropdown/entity-type/entity-type.module';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import { BasicAreaLineBarModule } from '@library/echart';
import * as i0 from "@angular/core";
// /tsc-library/
export class ByParameterModule {
}
ByParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ByParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, declarations: [ByParameterComponent], imports: [CommonModule,
        ByParameterRoutingModule,
        DateInputModule,
        AggregationDurationModule,
        EntityTypeModule,
        MessageAlertModule,
        SkeletonModule,
        BasicAreaLineBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRippleModule,
        NgxMatSelectSearchModule] });
ByParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, imports: [[
            CommonModule,
            ByParameterRoutingModule,
            DateInputModule,
            AggregationDurationModule,
            EntityTypeModule,
            MessageAlertModule,
            SkeletonModule,
            BasicAreaLineBarModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatRippleModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByParameterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ByParameterComponent
                    ],
                    imports: [
                        CommonModule,
                        ByParameterRoutingModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityTypeModule,
                        MessageAlertModule,
                        SkeletonModule,
                        BasicAreaLineBarModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatRippleModule,
                        NgxMatSelectSearchModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnktcGFyYW1ldGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9wYXJhbWV0ZXIvYnktcGFyYW1ldGVyL2J5LXBhcmFtZXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUVwRixjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBQ3pELGdCQUFnQjtBQXlCaEIsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQXJCdEIsb0JBQW9CLGFBR3BCLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLHdCQUF3QjtnSEFHbkIsaUJBQWlCLFlBbkJqQjtZQUNMLFlBQVk7WUFDWix3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZUFBZTtZQUNmLHdCQUF3QjtTQUMzQjs0RkFFUSxpQkFBaUI7a0JBdkI3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixvQkFBb0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZix5QkFBeUI7d0JBQ3pCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZix3QkFBd0I7cUJBQzNCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ3hNYXRTZWxlY3RTZWFyY2hNb2R1bGUgfSBmcm9tICduZ3gtbWF0LXNlbGVjdC1zZWFyY2gnO1xuXG5pbXBvcnQgeyBCeVBhcmFtZXRlclJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2J5LXBhcmFtZXRlci1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBCeVBhcmFtZXRlckNvbXBvbmVudCB9IGZyb20gJy4vYnktcGFyYW1ldGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kcm9wZG93bi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRW50aXR5VHlwZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ryb3Bkb3duL2VudGl0eS10eXBlL2VudGl0eS10eXBlLm1vZHVsZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlSW5wdXRNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IEJhc2ljQXJlYUxpbmVCYXJNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9lY2hhcnQnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCeVBhcmFtZXRlckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJ5UGFyYW1ldGVyUm91dGluZ01vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0TW9kdWxlLFxuICAgICAgICBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlLFxuICAgICAgICBFbnRpdHlUeXBlTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlLFxuICAgICAgICBCYXNpY0FyZWFMaW5lQmFyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgICAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgICAgIE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnlQYXJhbWV0ZXJNb2R1bGUgeyB9XG4iXX0=