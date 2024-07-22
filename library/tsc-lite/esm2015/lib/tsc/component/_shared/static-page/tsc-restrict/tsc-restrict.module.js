import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TscRestrictComponent } from './tsc-restrict.component';
import * as i0 from "@angular/core";
export class TscRestrictModule {
    static forRoot(environment) {
        return {
            ngModule: TscRestrictModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TscRestrictModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TscRestrictModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, declarations: [TscRestrictComponent], imports: [CommonModule], exports: [TscRestrictComponent] });
TscRestrictModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscRestrictModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TscRestrictComponent,
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TscRestrictComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNjLXJlc3RyaWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L19zaGFyZWQvc3RhdGljLXBhZ2UvdHNjLXJlc3RyaWN0L3RzYy1yZXN0cmljdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQWNoRSxNQUFNLE9BQU8saUJBQWlCO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQ3BEO1NBQ0osQ0FBQztJQUNOLENBQUM7OytHQVJRLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQVZ0QixvQkFBb0IsYUFHcEIsWUFBWSxhQUdaLG9CQUFvQjtnSEFJZixpQkFBaUIsWUFSakI7WUFDTCxZQUFZO1NBQ2Y7NEZBTVEsaUJBQWlCO2tCQVo3QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixvQkFBb0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDTCxvQkFBb0I7cUJBQ3ZCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRzY1Jlc3RyaWN0Q29tcG9uZW50IH0gZnJvbSAnLi90c2MtcmVzdHJpY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVHNjUmVzdHJpY3RDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUc2NSZXN0cmljdENvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUc2NSZXN0cmljdE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VHNjUmVzdHJpY3RNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUc2NSZXN0cmljdE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2Vudmlyb25tZW50JywgdXNlVmFsdWU6IGVudmlyb25tZW50IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=