import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAreaLineComponent } from './basic-area-line.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class BasicAreaLineModule {
}
BasicAreaLineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BasicAreaLineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineModule, declarations: [BasicAreaLineComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [BasicAreaLineComponent] });
BasicAreaLineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BasicAreaLineComponent
                    ],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [
                        BasicAreaLineComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtYXJlYS1saW5lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZWNoYXJ0L3NyYy9saWIvdHNjL2NvbXBvbmVudC9iYXNpYy1hcmVhLWxpbmUvYmFzaWMtYXJlYS1saW5lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQWlCL0MsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQVp4QixzQkFBc0IsYUFHdEIsWUFBWSxrQ0FNWixzQkFBc0I7a0hBR2pCLG1CQUFtQixZQVZuQjtZQUNMLFlBQVk7WUFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUM7U0FDTDs0RkFLUSxtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHNCQUFzQjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZ0JBQWdCLENBQUMsT0FBTyxDQUFDOzRCQUNyQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt5QkFDbkMsQ0FBQztxQkFDTDtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsc0JBQXNCO3FCQUN6QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCYXNpY0FyZWFMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy1hcmVhLWxpbmUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTmd4RWNoYXJ0c01vZHVsZSB9IGZyb20gJ25neC1lY2hhcnRzJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCYXNpY0FyZWFMaW5lQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTmd4RWNoYXJ0c01vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGVjaGFydHM6ICgpID0+IGltcG9ydCgnZWNoYXJ0cycpXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCYXNpY0FyZWFMaW5lQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNpY0FyZWFMaW5lTW9kdWxlIHsgfVxuIl19