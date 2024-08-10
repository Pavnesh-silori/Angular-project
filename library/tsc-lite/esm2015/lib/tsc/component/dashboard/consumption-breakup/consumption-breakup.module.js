import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumptionBreakupDashboardRoutingModule } from './consumption-breakup-routing.module';
import { ConsumptionBreakupDashboardComponent } from './consumption-breakup.component';
import { MatCardModule } from '@angular/material/card';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3VtcHRpb24tYnJlYWt1cC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXNoYm9hcmQvY29uc3VtcHRpb24tYnJlYWt1cC9jb25zdW1wdGlvbi1icmVha3VwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsY0FBYztBQUNkLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUNqRCxnQkFBZ0I7QUFnQmhCLE1BQU0sT0FBTyxpQ0FBaUM7OytIQUFqQyxpQ0FBaUM7Z0lBQWpDLGlDQUFpQyxpQkFYdEMsb0NBQW9DLGFBR3BDLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjO1FBQ2QsYUFBYTtnSUFHUixpQ0FBaUMsWUFUakM7WUFDTCxZQUFZO1lBQ1osd0NBQXdDO1lBQ3hDLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsY0FBYztZQUNkLGFBQWE7U0FDaEI7NEZBRVEsaUNBQWlDO2tCQWI3QyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixvQ0FBb0M7cUJBQ3ZDO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHdDQUF3Qzt3QkFDeEMsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsYUFBYTtxQkFDaEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29uc3VtcHRpb25CcmVha3VwRGFzaGJvYXJkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vY29uc3VtcHRpb24tYnJlYWt1cC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25zdW1wdGlvbkJyZWFrdXBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbnN1bXB0aW9uLWJyZWFrdXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IERhdGVGaWx0ZXJUd29Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS9kYXRlJztcbmltcG9ydCB7IERvdWdobnV0TW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvZWNoYXJ0Jztcbi8vIC90c2MtbGlicmFyeS9cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb25zdW1wdGlvbkJyZWFrdXBEYXNoYm9hcmRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBDb25zdW1wdGlvbkJyZWFrdXBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlLFxuICAgICAgICBEYXRlRmlsdGVyVHdvTW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgRG91Z2hudXRNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnN1bXB0aW9uQnJlYWt1cERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==