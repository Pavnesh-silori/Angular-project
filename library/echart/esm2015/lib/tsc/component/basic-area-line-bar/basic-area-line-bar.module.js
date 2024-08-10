import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAreaLineBarComponent } from './basic-area-line-bar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as i0 from "@angular/core";
import * as i1 from "ngx-echarts";
export class BasicAreaLineBarModule {
}
BasicAreaLineBarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BasicAreaLineBarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, declarations: [BasicAreaLineBarComponent], imports: [CommonModule, i1.NgxEchartsModule], exports: [BasicAreaLineBarComponent] });
BasicAreaLineBarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, imports: [[
            CommonModule,
            NgxEchartsModule.forRoot({
                echarts: () => import('echarts')
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: BasicAreaLineBarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BasicAreaLineBarComponent
                    ],
                    imports: [
                        CommonModule,
                        NgxEchartsModule.forRoot({
                            echarts: () => import('echarts')
                        }),
                    ],
                    exports: [
                        BasicAreaLineBarComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMtYXJlYS1saW5lLWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2VjaGFydC9zcmMvbGliL3RzYy9jb21wb25lbnQvYmFzaWMtYXJlYS1saW5lLWJhci9iYXNpYy1hcmVhLWxpbmUtYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQWlCL0MsTUFBTSxPQUFPLHNCQUFzQjs7b0hBQXRCLHNCQUFzQjtxSEFBdEIsc0JBQXNCLGlCQVozQix5QkFBeUIsYUFHekIsWUFBWSxrQ0FNWix5QkFBeUI7cUhBR3BCLHNCQUFzQixZQVZ0QjtZQUNMLFlBQVk7WUFDWixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ25DLENBQUM7U0FDTDs0RkFLUSxzQkFBc0I7a0JBZGxDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHlCQUF5QjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZ0JBQWdCLENBQUMsT0FBTyxDQUFDOzRCQUNyQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzt5QkFDbkMsQ0FBQztxQkFDTDtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wseUJBQXlCO3FCQUM1QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCYXNpY0FyZWFMaW5lQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNpYy1hcmVhLWxpbmUtYmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5neEVjaGFydHNNb2R1bGUgfSBmcm9tICduZ3gtZWNoYXJ0cyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQmFzaWNBcmVhTGluZUJhckNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5neEVjaGFydHNNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgICBlY2hhcnRzOiAoKSA9PiBpbXBvcnQoJ2VjaGFydHMnKVxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQmFzaWNBcmVhTGluZUJhckNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQmFzaWNBcmVhTGluZUJhck1vZHVsZSB7IH1cbiJdfQ==