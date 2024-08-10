import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumptionRoutingModule } from './consumption-routing.module';
import { ConsumptionComponent } from './consumption.component';
import { MatCardModule } from '@angular/material/card';
// tsc-library
import { DateFilterTwoModule } from '@library/date';
import { BasicAreaLineBarModule } from '@library/echart';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumptionModule {
}
ConsumptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [CommonModule,
        ConsumptionRoutingModule,
        DateFilterTwoModule,
        BasicAreaLineBarModule,
        MatCardModule] });
ConsumptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, imports: [[
            CommonModule,
            ConsumptionRoutingModule,
            DateFilterTwoModule,
            BasicAreaLineBarModule,
            MatCardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionRoutingModule,
                        DateFilterTwoModule,
                        BasicAreaLineBarModule,
                        MatCardModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsY0FBYztBQUNkLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFDekQsZ0JBQWdCO0FBZWhCLE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFWdEIsb0JBQW9CLGFBR3BCLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixhQUFhO2dIQUdSLGlCQUFpQixZQVJqQjtZQUNMLFlBQVk7WUFDWix3QkFBd0I7WUFDeEIsbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixhQUFhO1NBQ2hCOzRGQUVRLGlCQUFpQjtrQkFaN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0QixhQUFhO3FCQUNoQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb25zdW1wdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NvbnN1bXB0aW9uLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENvbnN1bXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb25zdW1wdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlRmlsdGVyVHdvTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBCYXNpY0FyZWFMaW5lQmFyTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZWNoYXJ0Jztcbi8vIC90c2MtbGlicmFyeS9cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb25zdW1wdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIENvbnN1bXB0aW9uUm91dGluZ01vZHVsZSxcbiAgICAgICAgRGF0ZUZpbHRlclR3b01vZHVsZSxcbiAgICAgICAgQmFzaWNBcmVhTGluZUJhck1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29uc3VtcHRpb25Nb2R1bGUgeyB9XG4iXX0=