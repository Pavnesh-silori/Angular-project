import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EntityDialogModule } from '../../_shared/dialog/entity/entity.module';
import { ConsumptionRoutingModule } from './consumption-routing.module';
import { ConsumptionComponent } from './consumption.component';
// tsc-library
import { DateFilterTwoModule } from '@library/date';
import { StackBarModule } from '@library/echart';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumptionModule {
}
ConsumptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [CommonModule,
        ConsumptionRoutingModule,
        EntityDialogModule,
        DateFilterTwoModule,
        StackBarModule,
        MatCardModule] });
ConsumptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, imports: [[
            CommonModule,
            ConsumptionRoutingModule,
            EntityDialogModule,
            DateFilterTwoModule,
            StackBarModule,
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
                        EntityDialogModule,
                        DateFilterTwoModule,
                        StackBarModule,
                        MatCardModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0QsY0FBYztBQUNkLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBQ2pELGdCQUFnQjtBQWdCaEIsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQVh0QixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxhQUFhO2dIQUdSLGlCQUFpQixZQVRqQjtZQUNMLFlBQVk7WUFDWix3QkFBd0I7WUFDeEIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsYUFBYTtTQUNoQjs0RkFFUSxpQkFBaUI7a0JBYjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxhQUFhO3FCQUNoQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG5pbXBvcnQgeyBFbnRpdHlEaWFsb2dNb2R1bGUgfSBmcm9tICcuLi8uLi9fc2hhcmVkL2RpYWxvZy9lbnRpdHkvZW50aXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IENvbnN1bXB0aW9uUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29uc3VtcHRpb24tcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29uc3VtcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbnN1bXB0aW9uLmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBEYXRlRmlsdGVyVHdvTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBTdGFja0Jhck1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2VjaGFydCc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uc3VtcHRpb25Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBDb25zdW1wdGlvblJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEVudGl0eURpYWxvZ01vZHVsZSxcbiAgICAgICAgRGF0ZUZpbHRlclR3b01vZHVsZSxcbiAgICAgICAgU3RhY2tCYXJNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnN1bXB0aW9uTW9kdWxlIHsgfVxuIl19