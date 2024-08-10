import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class BarChartModule {
}
BarChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BarChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, declarations: [BarChartComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [BarChartComponent] });
BarChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BarChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [BarChartComponent],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [BarChartComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvY2hhcnQvc3JjL2xpYi90c2MvY29tcG9uZW50L2Jhci1jaGFydC9iYXItY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBWS9DLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBVFIsaUJBQWlCLGFBRTVCLFlBQVksa0NBS04saUJBQWlCOzZHQUVsQixjQUFjLFlBUmQ7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2dCQUNyQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNuQyxDQUFDO1NBQ0w7NEZBR1EsY0FBYztrQkFWMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZ0JBQWdCLENBQUMsT0FBTyxDQUFDOzRCQUNyQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt5QkFDbkMsQ0FBQztxQkFDTDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQmFyQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhci1jaGFydC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0JhckNoYXJ0Q29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmd4RWNoYXJ0c01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGVjaGFydHM6ICgpID0+IGltcG9ydCgnZWNoYXJ0cycpXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgZXhwb3J0czogW0JhckNoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCYXJDaGFydE1vZHVsZSB7IH1cbiJdfQ==