import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumptionRoutingModule } from './consumption-routing.module';
import { ConsumptionComponent } from './consumption.component';
import { MatCardModule } from '@angular/material/card';
// tsc-library
import { SkeletonModule } from '@library/tsc-common';
import { DateFilterTwoModule } from '@library/date';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumptionModule {
}
ConsumptionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, declarations: [ConsumptionComponent], imports: [CommonModule,
        ConsumptionRoutingModule,
        DateFilterTwoModule,
        SkeletonModule,
        MatCardModule] });
ConsumptionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionModule, imports: [[
            CommonModule,
            ConsumptionRoutingModule,
            DateFilterTwoModule,
            SkeletonModule,
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
                        SkeletonModule,
                        MatCardModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2NvbnN1bXB0aW9uL2NvbnN1bXB0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsY0FBYztBQUNkLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBQ3BELGdCQUFnQjtBQWVoQixNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBVnRCLG9CQUFvQixhQUdwQixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsYUFBYTtnSEFHUixpQkFBaUIsWUFSakI7WUFDTCxZQUFZO1lBQ1osd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsYUFBYTtTQUNoQjs0RkFFUSxpQkFBaUI7a0JBWjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsYUFBYTtxQkFDaEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29uc3VtcHRpb25Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jb25zdW1wdGlvbi1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zdW1wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29uc3VtcHRpb24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IERhdGVGaWx0ZXJUd29Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbi8vIC90c2MtbGlicmFyeS9cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb25zdW1wdGlvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIENvbnN1bXB0aW9uUm91dGluZ01vZHVsZSxcbiAgICAgICAgRGF0ZUZpbHRlclR3b01vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnN1bXB0aW9uTW9kdWxlIHsgfVxuIl19