import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParameterTabRoutingModule } from './tab-routing.module';
import { ParameterTabComponent } from './tab.component';
import * as i0 from "@angular/core";
export class ParameterTabModule {
}
ParameterTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParameterTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, declarations: [ParameterTabComponent], imports: [CommonModule,
        ParameterTabRoutingModule,
        MatTabsModule,
        NgbModule] });
ParameterTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, imports: [[
            CommonModule,
            ParameterTabRoutingModule,
            MatTabsModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParameterTabModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParameterTabComponent
                    ],
                    imports: [
                        CommonModule,
                        ParameterTabRoutingModule,
                        MatTabsModule,
                        NgbModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2Rhc2hib2FyZC9wYXJhbWV0ZXIvdGFiL3RhYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFjeEQsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQVR2QixxQkFBcUIsYUFHckIsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IsU0FBUztpSEFHSixrQkFBa0IsWUFQbEI7WUFDTCxZQUFZO1lBQ1oseUJBQXlCO1lBQ3pCLGFBQWE7WUFDYixTQUFTO1NBQ1o7NEZBRVEsa0JBQWtCO2tCQVg5QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHlCQUF5Qjt3QkFDekIsYUFBYTt3QkFDYixTQUFTO3FCQUNaO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRUYWJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgUGFyYW1ldGVyVGFiUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFiLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFBhcmFtZXRlclRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGFyYW1ldGVyVGFiQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUGFyYW1ldGVyVGFiUm91dGluZ01vZHVsZSxcbiAgICAgICAgTWF0VGFic01vZHVsZSxcbiAgICAgICAgTmdiTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJUYWJNb2R1bGUgeyB9XG4iXX0=