import { Component, } from '@angular/core';
import { animate, query, style, transition, trigger, } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "../../../loader/loader-one/loader-one.component";
import * as i2 from "../../header/header-one/header-one.component";
import * as i3 from "../../footer/footer-one/footer-one.component";
import * as i4 from "@ngx-loading-bar/core";
import * as i5 from "@angular/router";
// import { LoaderService } from '@loginCommon/service/loader.service';
export class LayoutOneComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LayoutOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutOneComponent, selector: "app-layout-one", ngImport: i0, template: "<app-loader-one></app-loader-one>\n<app-header-one></app-header-one>\n\n<div class=\"layoutOneWrapper\">\n    <div class=\"layoutOneContainer\">\n        <div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n            <router-outlet #o=\"outlet\"></router-outlet>\n        </div>\n    </div>\n    <app-footer-one></app-footer-one>\n</div>\n\n<ngx-loading-bar [color]=\"'#3f6ad8'\"></ngx-loading-bar>\n", styles: [".layoutOneWrapper{background-color:#f1f3f6;position:relative;min-height:calc(100vh - 60px)}.layoutOneContainer{padding-top:40px;padding-bottom:calc(60px + 40px)}\n"], components: [{ type: i1.LoaderOneComponent, selector: "app-loader-one" }, { type: i2.HeaderOneComponent, selector: "app-header-one" }, { type: i3.FooterOneComponent, selector: "app-footer-one" }, { type: i4.LoadingBarComponent, selector: "ngx-loading-bar", inputs: ["includeSpinner", "includeBar", "fixed", "color", "value", "ref", "height", "diameter"] }], directives: [{ type: i5.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], animations: [
        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column'
                    }),
                ]),
                query(':enter', [
                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                ], { optional: true }),
                query(':leave', [
                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                ], { optional: true })
            ]),
        ])
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-layout-one',
                    templateUrl: './layout-one.component.html',
                    styleUrls: ['./layout-one.component.scss'],
                    animations: [
                        trigger('architectUIAnimation', [
                            transition('* <=> *', [
                                query(':enter, :leave', [
                                    style({
                                        opacity: 0,
                                        display: 'flex',
                                        flex: '1',
                                        flexDirection: 'column'
                                    }),
                                ]),
                                query(':enter', [
                                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
                                ], { optional: true }),
                                query(':leave', [
                                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' })),
                                ], { optional: true })
                            ]),
                        ])
                    ]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9sYXlvdXQvbGF5b3V0LW9uZS9sYXlvdXQtb25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L2xheW91dC9sYXlvdXQtb25lL2xheW91dC1vbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FDVixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBRTdCLHVFQUF1RTtBQTZCdkUsTUFBTSxPQUFPLGtCQUFrQjtJQUUzQjtJQUdBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Z0hBUlEsa0JBQWtCO29HQUFsQixrQkFBa0Isc0RDMUMvQix3YUFhQSxvcUJETWdCO1FBQ1IsT0FBTyxDQUFDLHNCQUFzQixFQUFFO1lBQzVCLFVBQVUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDcEIsS0FBSyxDQUFDO3dCQUNGLE9BQU8sRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxNQUFNO3dCQUNmLElBQUksRUFBRSxHQUFHO3dCQUNULGFBQWEsRUFBRSxRQUFRO3FCQUMxQixDQUFDO2lCQUNMLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDWixPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRyxDQUFDLENBQUM7aUJBQzVFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBRXRCLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ1osT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRyxDQUFDLENBQUM7aUJBQ2hGLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDekIsQ0FBQztTQUNMLENBQUM7S0FDTDs0RkFHUSxrQkFBa0I7a0JBM0I5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSw2QkFBNkI7b0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUMxQyxVQUFVLEVBQUU7d0JBQ1IsT0FBTyxDQUFDLHNCQUFzQixFQUFFOzRCQUM1QixVQUFVLENBQUMsU0FBUyxFQUFFO2dDQUNsQixLQUFLLENBQUMsZ0JBQWdCLEVBQUU7b0NBQ3BCLEtBQUssQ0FBQzt3Q0FDRixPQUFPLEVBQUUsQ0FBQzt3Q0FDVixPQUFPLEVBQUUsTUFBTTt3Q0FDZixJQUFJLEVBQUUsR0FBRzt3Q0FDVCxhQUFhLEVBQUUsUUFBUTtxQ0FDMUIsQ0FBQztpQ0FDTCxDQUFDO2dDQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0NBQ1osT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUcsQ0FBQyxDQUFDO2lDQUM1RSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2dDQUV0QixLQUFLLENBQUMsUUFBUSxFQUFFO29DQUNaLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUcsQ0FBQyxDQUFDO2lDQUNoRixFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzZCQUN6QixDQUFDO3lCQUNMLENBQUM7cUJBQ0w7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIGFuaW1hdGUsXG4gICAgcXVlcnksXG4gICAgc3R5bGUsXG4gICAgdHJhbnNpdGlvbixcbiAgICB0cmlnZ2VyLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuLy8gaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJ0Bsb2dpbkNvbW1vbi9zZXJ2aWNlL2xvYWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbGF5b3V0LW9uZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC1vbmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xheW91dC1vbmUuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2FyY2hpdGVjdFVJQW5pbWF0aW9uJywgW1xuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA8PT4gKicsIFtcbiAgICAgICAgICAgICAgICBxdWVyeSgnOmVudGVyLCA6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBxdWVyeSgnOmVudGVyJywgW1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCcxMDBtcyBlYXNlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyAgfSkpLFxuICAgICAgICAgICAgICAgIF0sIHsgb3B0aW9uYWw6IHRydWUgfSksXG5cbiAgICAgICAgICAgICAgICBxdWVyeSgnOmxlYXZlJywgW1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCcxMDBtcyBlYXNlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMHB4KScgIH0pKSxcbiAgICAgICAgICAgICAgICBdLCB7IG9wdGlvbmFsOiB0cnVlIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgXSlcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTGF5b3V0T25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAvLyBwdWJsaWMgbG9hZGVyU2VydmljZTogTG9hZGVyU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIiwiPGFwcC1sb2FkZXItb25lPjwvYXBwLWxvYWRlci1vbmU+XG48YXBwLWhlYWRlci1vbmU+PC9hcHAtaGVhZGVyLW9uZT5cblxuPGRpdiBjbGFzcz1cImxheW91dE9uZVdyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0T25lQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgW0BhcmNoaXRlY3RVSUFuaW1hdGlvbl09XCJvLmlzQWN0aXZhdGVkID8gby5hY3RpdmF0ZWRSb3V0ZSA6ICcnXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldCAjbz1cIm91dGxldFwiPjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGFwcC1mb290ZXItb25lPjwvYXBwLWZvb3Rlci1vbmU+XG48L2Rpdj5cblxuPG5neC1sb2FkaW5nLWJhciBbY29sb3JdPVwiJyMzZjZhZDgnXCI+PC9uZ3gtbG9hZGluZy1iYXI+XG4iXX0=