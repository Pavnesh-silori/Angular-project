import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { StackedBarChartComponent } from './stacked-bar-chart.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class StackedBarChartModule {
}
StackedBarChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StackedBarChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, declarations: [StackedBarChartComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [StackedBarChartComponent] });
StackedBarChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackedBarChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [StackedBarChartComponent],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [StackedBarChartComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tlZC1iYXItY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvc3RhY2tlZC1iYXItY2hhcnQvc3RhY2tlZC1iYXItY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7O0FBWXpFLE1BQU0sT0FBTyxxQkFBcUI7O21IQUFyQixxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFUZix3QkFBd0IsYUFFbkMsWUFBWSxrQ0FLTix3QkFBd0I7b0hBRXpCLHFCQUFxQixZQVJyQjtZQUNMLFlBQVk7WUFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUM7U0FDTDs0RkFHUSxxQkFBcUI7a0JBVmpDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3hDLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7eUJBQ25DLENBQUM7cUJBQ0w7b0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5neEVjaGFydHNNb2R1bGUgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XG5cbmltcG9ydCB7IFN0YWNrZWRCYXJDaGFydENvbXBvbmVudCB9IGZyb20gJy4vc3RhY2tlZC1iYXItY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtTdGFja2VkQmFyQ2hhcnRDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ3hFY2hhcnRzTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgICAgZWNoYXJ0czogKCkgPT4gaW1wb3J0KCdlY2hhcnRzJylcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBleHBvcnRzOiBbU3RhY2tlZEJhckNoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdGFja2VkQmFyQ2hhcnRNb2R1bGUgeyB9XG4iXX0=