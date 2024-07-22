import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackBarComponent } from './stack-bar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class StackBarModule {
}
StackBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StackBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackBarModule, declarations: [StackBarComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [StackBarComponent] });
StackBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackBarModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: StackBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        StackBarComponent
                    ],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [
                        StackBarComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2stYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9zdGFjay1iYXIvc3RhY2stYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQWdCL0MsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxpQkFabkIsaUJBQWlCLGFBR2pCLFlBQVksa0NBTVosaUJBQWlCOzZHQUdaLGNBQWMsWUFWZDtZQUNMLFlBQVk7WUFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUM7U0FDTDs0RkFLUSxjQUFjO2tCQWQxQixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixpQkFBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7eUJBQ25DLENBQUM7cUJBQ0w7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGlCQUFpQjtxQkFDcEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3RhY2tCYXJDb21wb25lbnQgfSBmcm9tICcuL3N0YWNrLWJhci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOZ3hFY2hhcnRzTW9kdWxlIH0gZnJvbSAnbmd4LWVjaGFydHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTdGFja0JhckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5neEVjaGFydHNNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBlY2hhcnRzOiAoKSA9PiBpbXBvcnQoJ2VjaGFydHMnKVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3RhY2tCYXJDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0YWNrQmFyTW9kdWxlIHsgfVxuIl19