import { Component, } from '@angular/core';
import { animate, query, style, transition, trigger, } from '@angular/animations';
import * as i0 from "@angular/core";
import * as i1 from "../../../loader/loader-one/loader-one.component";
import * as i2 from "@ngx-loading-bar/core";
import * as i3 from "@angular/router";
export class LayoutTwoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LayoutTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LayoutTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: LayoutTwoComponent, selector: "app-layout-two", ngImport: i0, template: "<app-loader-one></app-loader-one>\n\n<div [@architectUIAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n\n<ngx-loading-bar [color]=\"'#3f6ad8'\"></ngx-loading-bar>\n", components: [{ type: i1.LoaderOneComponent, selector: "app-loader-one" }, { type: i2.LoadingBarComponent, selector: "ngx-loading-bar", inputs: ["includeSpinner", "includeBar", "fixed", "color", "value", "ref", "height", "diameter"] }], directives: [{ type: i3.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }], animations: [
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-layout-two',
                    templateUrl: './layout-two.component.html',
                    styleUrls: [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXR3by5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9sYXlvdXQvbGF5b3V0LXR3by9sYXlvdXQtdHdvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L2xheW91dC9sYXlvdXQtdHdvL2xheW91dC10d28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sR0FDVixNQUFNLHFCQUFxQixDQUFDOzs7OztBQTZCN0IsTUFBTSxPQUFPLGtCQUFrQjtJQUUzQjtJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7Z0hBTlEsa0JBQWtCO29HQUFsQixrQkFBa0Isc0RDeEMvQix3T0FPQSx5WERVZ0I7UUFDUixPQUFPLENBQUMsc0JBQXNCLEVBQUU7WUFDNUIsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsS0FBSyxDQUFDLGdCQUFnQixFQUFFO29CQUNwQixLQUFLLENBQUM7d0JBQ0YsT0FBTyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLE1BQU07d0JBQ2YsSUFBSSxFQUFFLEdBQUc7d0JBQ1QsYUFBYSxFQUFFLFFBQVE7cUJBQzFCLENBQUM7aUJBQ0wsQ0FBQztnQkFDRixLQUFLLENBQUMsUUFBUSxFQUFFO29CQUNaLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFHLENBQUMsQ0FBQztpQkFDNUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFFdEIsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDWixPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFHLENBQUMsQ0FBQztpQkFDaEYsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN6QixDQUFDO1NBQ0wsQ0FBQztLQUNMOzRGQUdRLGtCQUFrQjtrQkEzQjlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtvQkFDMUMsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsVUFBVSxFQUFFO3dCQUNSLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRTs0QkFDNUIsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQ0FDbEIsS0FBSyxDQUFDLGdCQUFnQixFQUFFO29DQUNwQixLQUFLLENBQUM7d0NBQ0YsT0FBTyxFQUFFLENBQUM7d0NBQ1YsT0FBTyxFQUFFLE1BQU07d0NBQ2YsSUFBSSxFQUFFLEdBQUc7d0NBQ1QsYUFBYSxFQUFFLFFBQVE7cUNBQzFCLENBQUM7aUNBQ0wsQ0FBQztnQ0FDRixLQUFLLENBQUMsUUFBUSxFQUFFO29DQUNaLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFHLENBQUMsQ0FBQztpQ0FDNUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQ0FFdEIsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQ0FDWixPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFHLENBQUMsQ0FBQztpQ0FDaEYsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs2QkFDekIsQ0FBQzt5QkFDTCxDQUFDO3FCQUNMO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBhbmltYXRlLFxuICAgIHF1ZXJ5LFxuICAgIHN0eWxlLFxuICAgIHRyYW5zaXRpb24sXG4gICAgdHJpZ2dlcixcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWxheW91dC10d28nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sYXlvdXQtdHdvLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignYXJjaGl0ZWN0VUlBbmltYXRpb24nLCBbXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcqIDw9PiAqJywgW1xuICAgICAgICAgICAgICAgIHF1ZXJ5KCc6ZW50ZXIsIDpsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIHF1ZXJ5KCc6ZW50ZXInLCBbXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoJzEwMG1zIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknICB9KSksXG4gICAgICAgICAgICAgICAgXSwgeyBvcHRpb25hbDogdHJ1ZSB9KSxcblxuICAgICAgICAgICAgICAgIHF1ZXJ5KCc6bGVhdmUnLCBbXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoJzEwMG1zIGVhc2UnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwcHgpJyAgfSkpLFxuICAgICAgICAgICAgICAgIF0sIHsgb3B0aW9uYWw6IHRydWUgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iLCI8YXBwLWxvYWRlci1vbmU+PC9hcHAtbG9hZGVyLW9uZT5cblxuPGRpdiBbQGFyY2hpdGVjdFVJQW5pbWF0aW9uXT1cIm8uaXNBY3RpdmF0ZWQgPyBvLmFjdGl2YXRlZFJvdXRlIDogJydcIj5cbiAgICA8cm91dGVyLW91dGxldCAjbz1cIm91dGxldFwiPjwvcm91dGVyLW91dGxldD5cbjwvZGl2PlxuXG48bmd4LWxvYWRpbmctYmFyIFtjb2xvcl09XCInIzNmNmFkOCdcIj48L25neC1sb2FkaW5nLWJhcj5cbiJdfQ==