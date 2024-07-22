import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ConsumptionBreakupDashboardRoutingModule } from './consumption-breakup-routing.module';
import { ConsumptionBreakupDashboardComponent } from './consumption-breakup.component';
// tsc-library
import { SkeletonModule } from '@library/tsc-common';
import { DateFilterTwoModule } from '@library/date';
import { DoughnutModule } from '@library/echart';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumptionBreakupDashboardModule {
}
ConsumptionBreakupDashboardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumptionBreakupDashboardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, declarations: [ConsumptionBreakupDashboardComponent], imports: [CommonModule,
        ConsumptionBreakupDashboardRoutingModule,
        DateFilterTwoModule,
        SkeletonModule,
        DoughnutModule,
        MatCardModule] });
ConsumptionBreakupDashboardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, imports: [[
            CommonModule,
            ConsumptionBreakupDashboardRoutingModule,
            DateFilterTwoModule,
            SkeletonModule,
            DoughnutModule,
            MatCardModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumptionBreakupDashboardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumptionBreakupDashboardComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumptionBreakupDashboardRoutingModule,
                        DateFilterTwoModule,
                        SkeletonModule,
                        DoughnutModule,
                        MatCardModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24tYnJlYWt1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvY29uc3VtcHRpb24tYnJlYWt1cC9jb25zdW1wdGlvbi1icmVha3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkYsY0FBYztBQUNkLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUNqRCxnQkFBZ0I7QUFnQmhCLE1BQU0sT0FBTyxpQ0FBaUM7OytIQUFqQyxpQ0FBaUM7Z0lBQWpDLGlDQUFpQyxpQkFYdEMsb0NBQW9DLGFBR3BDLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjO1FBQ2QsYUFBYTtnSUFHUixpQ0FBaUMsWUFUakM7WUFDTCxZQUFZO1lBQ1osd0NBQXdDO1lBQ3hDLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsY0FBYztZQUNkLGFBQWE7U0FDaEI7NEZBRVEsaUNBQWlDO2tCQWI3QyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixvQ0FBb0M7cUJBQ3ZDO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHdDQUF3Qzt3QkFDeEMsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsYUFBYTtxQkFDaEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuaW1wb3J0IHsgQ29uc3VtcHRpb25CcmVha3VwRGFzaGJvYXJkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29uc3VtcHRpb24tYnJlYWt1cC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zdW1wdGlvbkJyZWFrdXBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbnN1bXB0aW9uLWJyZWFrdXAuY29tcG9uZW50JztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IFNrZWxldG9uTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBEYXRlRmlsdGVyVHdvTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZGF0ZSc7XG5pbXBvcnQgeyBEb3VnaG51dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2VjaGFydCc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uc3VtcHRpb25CcmVha3VwRGFzaGJvYXJkQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29uc3VtcHRpb25CcmVha3VwRGFzaGJvYXJkUm91dGluZ01vZHVsZSxcbiAgICAgICAgRGF0ZUZpbHRlclR3b01vZHVsZSxcbiAgICAgICAgU2tlbGV0b25Nb2R1bGUsXG4gICAgICAgIERvdWdobnV0TW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25zdW1wdGlvbkJyZWFrdXBEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=