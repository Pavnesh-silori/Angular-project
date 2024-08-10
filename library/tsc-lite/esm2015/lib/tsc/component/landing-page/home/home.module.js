import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-circle-progress";
export class HomeModule {
}
HomeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HomeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, declarations: [HomeComponent], imports: [CommonModule,
        HomeRoutingModule,
        MatCardModule,
        MatTooltipModule,
        PerfectScrollbarModule, i1.NgCircleProgressModule] });
HomeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, imports: [[
            CommonModule,
            HomeRoutingModule,
            MatCardModule,
            MatTooltipModule,
            PerfectScrollbarModule,
            NgCircleProgressModule.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HomeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HomeComponent
                    ],
                    imports: [
                        CommonModule,
                        HomeRoutingModule,
                        MatCardModule,
                        MatTooltipModule,
                        PerfectScrollbarModule,
                        NgCircleProgressModule.forRoot(),
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYW5kaW5nLXBhZ2UvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFlakQsTUFBTSxPQUFPLFVBQVU7O3dHQUFWLFVBQVU7eUdBQVYsVUFBVSxpQkFYZixhQUFhLGFBR2IsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLHNCQUFzQjt5R0FJakIsVUFBVSxZQVRWO1lBQ0wsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLHNCQUFzQjtZQUN0QixzQkFBc0IsQ0FBQyxPQUFPLEVBQUU7U0FDbkM7NEZBRVEsVUFBVTtrQkFidEIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0QixzQkFBc0IsQ0FBQyxPQUFPLEVBQUU7cUJBQ25DO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUgfSBmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG5pbXBvcnQgeyBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnbmctY2lyY2xlLXByb2dyZXNzJztcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUsXG4gICAgICAgIE5nQ2lyY2xlUHJvZ3Jlc3NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==