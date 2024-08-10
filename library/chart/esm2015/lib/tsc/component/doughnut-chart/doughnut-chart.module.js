import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutChartComponent } from './doughnut-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class DoughnutChartModule {
}
DoughnutChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoughnutChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, declarations: [DoughnutChartComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [DoughnutChartComponent] });
DoughnutChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DoughnutChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DoughnutChartComponent],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [DoughnutChartComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQtY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9jaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvZG91Z2hudXQtY2hhcnQvZG91Z2hudXQtY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBWS9DLE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFUYixzQkFBc0IsYUFFakMsWUFBWSxrQ0FLTixzQkFBc0I7a0hBRXZCLG1CQUFtQixZQVJuQjtZQUNMLFlBQVk7WUFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUM7U0FDTDs0RkFHUSxtQkFBbUI7a0JBVi9CLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7eUJBQ25DLENBQUM7cUJBQ0w7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvdWdobnV0Q2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2RvdWdobnV0LWNoYXJ0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5neEVjaGFydHNNb2R1bGUgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbRG91Z2hudXRDaGFydENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5neEVjaGFydHNNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBlY2hhcnRzOiAoKSA9PiBpbXBvcnQoJ2VjaGFydHMnKVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtEb3VnaG51dENoYXJ0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEb3VnaG51dENoYXJ0TW9kdWxlIHsgfVxuIl19