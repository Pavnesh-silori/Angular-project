import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';
import * as i0 from "@angular/core";
export class TabModule {
}
TabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, declarations: [TabComponent], imports: [CommonModule,
        TabRoutingModule,
        NgbModule,
        MatTabsModule] });
TabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, imports: [[
            CommonModule,
            TabRoutingModule,
            NgbModule,
            MatTabsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TabComponent
                    ],
                    imports: [
                        CommonModule,
                        TabRoutingModule,
                        NgbModule,
                        MatTabsModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC90YWIvdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFhL0MsTUFBTSxPQUFPLFNBQVM7O3VHQUFULFNBQVM7d0dBQVQsU0FBUyxpQkFUZCxZQUFZLGFBR1osWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsYUFBYTt3R0FHUixTQUFTLFlBUFQ7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFNBQVM7WUFDVCxhQUFhO1NBQ2hCOzRGQUVRLFNBQVM7a0JBWHJCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixTQUFTO3dCQUNULGFBQWE7cUJBQ2hCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRUYWJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgVGFiUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFiLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFRhYkNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFRhYlJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYk1vZHVsZSB7IH1cbiJdfQ==