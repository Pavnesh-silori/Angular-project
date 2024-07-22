import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class ChartModule {
}
ChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, declarations: [ChartComponent], imports: [CommonModule,
        ChartRoutingModule, i1.NgxEchartsModule] });
ChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, imports: [[
            CommonModule,
            ChartRoutingModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            })
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChartModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ChartComponent
                    ],
                    imports: [
                        CommonModule,
                        ChartRoutingModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        })
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L2NoYXJ0L2NoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFjbkQsTUFBTSxPQUFPLFdBQVc7O3lHQUFYLFdBQVc7MEdBQVgsV0FBVyxpQkFWaEIsY0FBYyxhQUdkLFlBQVk7UUFDWixrQkFBa0I7MEdBTWIsV0FBVyxZQVJYO1lBQ0wsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUM7U0FDTDs0RkFFUSxXQUFXO2tCQVp2QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixjQUFjO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7eUJBQ25DLENBQUM7cUJBQ0w7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcblxuaW1wb3J0IHsgQ2hhcnRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9jaGFydC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2hhcnRDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBDaGFydFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5neEVjaGFydHNNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBlY2hhcnRzOiAoKSA9PiBpbXBvcnQoJ2VjaGFydHMnKVxuICAgICAgICB9KVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUgeyB9Il19