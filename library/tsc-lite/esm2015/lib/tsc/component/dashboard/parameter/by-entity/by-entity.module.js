import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { ByEntityRoutingModule } from './by-entity-routing.module';
import { ByEntityComponent } from './by-entity.component';
import { AggregationDurationModule } from '../../../dropdown/aggregation-duration/aggregation-duration.module';
import { EntityTypeModule } from '../../../dropdown/entity-type/entity-type.module';
import { EntityDialogModule } from '../../../_shared/dialog/entity/entity.module';
// tsc-library
import { DateInputModule } from '@library/date';
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import { BasicAreaLineBarModule } from '@library/echart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
// /tsc-library/
export class ByEntityModule {
}
ByEntityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ByEntityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, declarations: [ByEntityComponent], imports: [CommonModule,
        ByEntityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DateInputModule,
        AggregationDurationModule,
        EntityTypeModule,
        EntityDialogModule,
        MessageAlertModule,
        SkeletonModule,
        BasicAreaLineBarModule,
        MatCardModule,
        MatRippleModule] });
ByEntityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, imports: [[
            CommonModule,
            ByEntityRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            DateInputModule,
            AggregationDurationModule,
            EntityTypeModule,
            EntityDialogModule,
            MessageAlertModule,
            SkeletonModule,
            BasicAreaLineBarModule,
            MatCardModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ByEntityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ByEntityComponent
                    ],
                    imports: [
                        CommonModule,
                        ByEntityRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        DateInputModule,
                        AggregationDurationModule,
                        EntityTypeModule,
                        EntityDialogModule,
                        MessageAlertModule,
                        SkeletonModule,
                        BasicAreaLineBarModule,
                        MatCardModule,
                        MatRippleModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnktZW50aXR5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9wYXJhbWV0ZXIvYnktZW50aXR5L2J5LWVudGl0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUVsRixjQUFjO0FBQ2QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUNsRSxnQkFBZ0I7QUFzQmhCLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBbEJuQixpQkFBaUIsYUFHakIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZUFBZTs2R0FHVixjQUFjLFlBaEJkO1lBQ0wsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsZUFBZTtTQUNsQjs0RkFFUSxjQUFjO2tCQXBCMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsaUJBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLHlCQUF5Qjt3QkFDekIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2IsZUFBZTtxQkFDbEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEJ5RW50aXR5Um91dGluZ01vZHVsZSB9IGZyb20gJy4vYnktZW50aXR5LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEJ5RW50aXR5Q29tcG9uZW50IH0gZnJvbSAnLi9ieS1lbnRpdHkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQWdncmVnYXRpb25EdXJhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ryb3Bkb3duL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uL2FnZ3JlZ2F0aW9uLWR1cmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBFbnRpdHlUeXBlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZHJvcGRvd24vZW50aXR5LXR5cGUvZW50aXR5LXR5cGUubW9kdWxlJztcbmltcG9ydCB7IEVudGl0eURpYWxvZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL19zaGFyZWQvZGlhbG9nL2VudGl0eS9lbnRpdHkubW9kdWxlJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0TW9kdWxlLCBTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuaW1wb3J0IHsgQmFzaWNBcmVhTGluZUJhck1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2VjaGFydCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnlFbnRpdHlDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBCeUVudGl0eVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIEFnZ3JlZ2F0aW9uRHVyYXRpb25Nb2R1bGUsXG4gICAgICAgIEVudGl0eVR5cGVNb2R1bGUsXG4gICAgICAgIEVudGl0eURpYWxvZ01vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgQmFzaWNBcmVhTGluZUJhck1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCeUVudGl0eU1vZHVsZSB7IH1cbiJdfQ==