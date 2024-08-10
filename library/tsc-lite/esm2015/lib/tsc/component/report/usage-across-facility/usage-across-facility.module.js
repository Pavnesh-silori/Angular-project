import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageAcrossFacilityRoutingModule } from './usage-across-facility-routing.module';
import { UsageAcrossFacilityComponent } from './usage-across-facility.component';
import { SourceLoadModule } from '../../_shared/filter/source-load/source-load.module';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class UsageAcrossFacilityModule {
}
UsageAcrossFacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsageAcrossFacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, declarations: [UsageAcrossFacilityComponent], imports: [CommonModule,
        UsageAcrossFacilityRoutingModule,
        SourceLoadModule,
        DateInputModule,
        AggregationDurationModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule] });
UsageAcrossFacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, imports: [[
            CommonModule,
            UsageAcrossFacilityRoutingModule,
            SourceLoadModule,
            DateInputModule,
            AggregationDurationModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsageAcrossFacilityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UsageAcrossFacilityComponent
                    ],
                    imports: [
                        CommonModule,
                        UsageAcrossFacilityRoutingModule,
                        SourceLoadModule,
                        DateInputModule,
                        AggregationDurationModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNhZ2UtYWNyb3NzLWZhY2lsaXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L3JlcG9ydC91c2FnZS1hY3Jvc3MtZmFjaWxpdHkvdXNhZ2UtYWNyb3NzLWZhY2lsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBa0JoQixNQUFNLE9BQU8seUJBQXlCOzt1SEFBekIseUJBQXlCO3dIQUF6Qix5QkFBeUIsaUJBZDlCLDRCQUE0QixhQUc1QixZQUFZO1FBQ1osZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7d0hBR1YseUJBQXlCLFlBWnpCO1lBQ0wsWUFBWTtZQUNaLGdDQUFnQztZQUNoQyxnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxlQUFlO1NBQ2xCOzRGQUVRLHlCQUF5QjtrQkFoQnJDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDRCQUE0QjtxQkFDL0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZ0NBQWdDO3dCQUNoQyxnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YseUJBQXlCO3dCQUN6QixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBVc2FnZUFjcm9zc0ZhY2lsaXR5Um91dGluZ01vZHVsZSB9IGZyb20gJy4vdXNhZ2UtYWNyb3NzLWZhY2lsaXR5LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFVzYWdlQWNyb3NzRmFjaWxpdHlDb21wb25lbnQgfSBmcm9tICcuL3VzYWdlLWFjcm9zcy1mYWNpbGl0eS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTb3VyY2VMb2FkTW9kdWxlIH0gZnJvbSAnLi4vLi4vX3NoYXJlZC9maWx0ZXIvc291cmNlLWxvYWQvc291cmNlLWxvYWQubW9kdWxlJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9kcm9wZG93bi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi9hZ2dyZWdhdGlvbi1kdXJhdGlvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgRGF0ZUlucHV0TW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBNZXNzYWdlQWxlcnRNb2R1bGUsIFNrZWxldG9uTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFVzYWdlQWNyb3NzRmFjaWxpdHlDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBVc2FnZUFjcm9zc0ZhY2lsaXR5Um91dGluZ01vZHVsZSxcbiAgICAgICAgU291cmNlTG9hZE1vZHVsZSxcbiAgICAgICAgRGF0ZUlucHV0TW9kdWxlLFxuICAgICAgICBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVc2FnZUFjcm9zc0ZhY2lsaXR5TW9kdWxlIHsgfVxuIl19