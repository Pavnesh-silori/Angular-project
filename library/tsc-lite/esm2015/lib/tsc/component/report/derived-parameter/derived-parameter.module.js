import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DerivedParameterRoutingModule } from './derived-parameter-routing.module';
import { DerivedParameterComponent } from './derived-parameter.component';
import { AggregationDurationModule } from '../../dropdown/aggregation-duration/aggregation-duration.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class DerivedParameterModule {
}
DerivedParameterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DerivedParameterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, declarations: [DerivedParameterComponent], imports: [CommonModule,
        DerivedParameterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        SkeletonModule,
        MessageAlertModule,
        MatTableModule,
        MatRippleModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        NgxMatSelectSearchModule] });
DerivedParameterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, imports: [[
            CommonModule,
            DerivedParameterRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            DateInputModule,
            AggregationDurationModule,
            SkeletonModule,
            MessageAlertModule,
            MatTableModule,
            MatRippleModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            NgxMatSelectSearchModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DerivedParameterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DerivedParameterComponent
                    ],
                    imports: [
                        CommonModule,
                        DerivedParameterRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DateInputModule,
                        AggregationDurationModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatTableModule,
                        MatRippleModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        NgxMatSelectSearchModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVyaXZlZC1wYXJhbWV0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvcmVwb3J0L2Rlcml2ZWQtcGFyYW1ldGVyL2Rlcml2ZWQtcGFyYW1ldGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTNELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpFLGNBQWM7QUFDZCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDekUsZ0JBQWdCO0FBdUJoQixNQUFNLE9BQU8sc0JBQXNCOztvSEFBdEIsc0JBQXNCO3FIQUF0QixzQkFBc0IsaUJBbkIzQix5QkFBeUIsYUFHekIsWUFBWTtRQUNaLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLHdCQUF3QjtxSEFHbkIsc0JBQXNCLFlBakJ0QjtZQUNMLFlBQVk7WUFDWiw2QkFBNkI7WUFDN0IsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLGVBQWU7WUFDZixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZix3QkFBd0I7U0FDM0I7NEZBRVEsc0JBQXNCO2tCQXJCbEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YseUJBQXlCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWiw2QkFBNkI7d0JBQzdCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZix3QkFBd0I7cUJBQzNCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERlcml2ZWRQYXJhbWV0ZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kZXJpdmVkLXBhcmFtZXRlci1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBEZXJpdmVkUGFyYW1ldGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kZXJpdmVkLXBhcmFtZXRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGlvbkR1cmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZHJvcGRvd24vYWdncmVnYXRpb24tZHVyYXRpb24vYWdncmVnYXRpb24tZHVyYXRpb24ubW9kdWxlJztcblxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcblxuaW1wb3J0IHsgTmd4TWF0U2VsZWN0U2VhcmNoTW9kdWxlIH0gZnJvbSAnbmd4LW1hdC1zZWxlY3Qtc2VhcmNoJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEZXJpdmVkUGFyYW1ldGVyQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRGVyaXZlZFBhcmFtZXRlclJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIFNrZWxldG9uTW9kdWxlLFxuICAgICAgICBNZXNzYWdlQWxlcnRNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTmd4TWF0U2VsZWN0U2VhcmNoTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEZXJpdmVkUGFyYW1ldGVyTW9kdWxlIHsgfVxuIl19