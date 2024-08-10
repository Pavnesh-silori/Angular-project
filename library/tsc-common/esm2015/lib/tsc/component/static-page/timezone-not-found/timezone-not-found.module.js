import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneNotFoundComponent } from './timezone-not-found.component';
import * as i0 from "@angular/core";
export class TimezoneNotFoundModule {
    static forRoot(environment) {
        return {
            ngModule: TimezoneNotFoundModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TimezoneNotFoundModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TimezoneNotFoundModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, declarations: [TimezoneNotFoundComponent], imports: [CommonModule], exports: [TimezoneNotFoundComponent] });
TimezoneNotFoundModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TimezoneNotFoundModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TimezoneNotFoundComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TimezoneNotFoundComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXpvbmUtbm90LWZvdW5kLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhdGljLXBhZ2UvdGltZXpvbmUtbm90LWZvdW5kL3RpbWV6b25lLW5vdC1mb3VuZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQWMzRSxNQUFNLE9BQU8sc0JBQXNCO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQ3BEO1NBQ0osQ0FBQztJQUNOLENBQUM7O29IQVJRLHNCQUFzQjtxSEFBdEIsc0JBQXNCLGlCQVYzQix5QkFBeUIsYUFHekIsWUFBWSxhQUdaLHlCQUF5QjtxSEFJcEIsc0JBQXNCLFlBUnRCO1lBQ0wsWUFBWTtTQUNmOzRGQU1RLHNCQUFzQjtrQkFabEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YseUJBQXlCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wseUJBQXlCO3FCQUM1QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUaW1lem9uZU5vdEZvdW5kQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lem9uZS1ub3QtZm91bmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGltZXpvbmVOb3RGb3VuZENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRpbWV6b25lTm90Rm91bmRDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVGltZXpvbmVOb3RGb3VuZE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGltZXpvbmVOb3RGb3VuZE1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRpbWV6b25lTm90Rm91bmRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19