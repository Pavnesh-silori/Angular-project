import { NgModule } from '@angular/core';
import { TscLiteComponent } from './tsc-lite.component';
import * as i0 from "@angular/core";
export class TscLiteModule {
    static forRoot(environment) {
        return {
            ngModule: TscLiteModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
TscLiteModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TscLiteModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, declarations: [TscLiteComponent], exports: [TscLiteComponent] });
TscLiteModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TscLiteModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TscLiteComponent,
                    ],
                    imports: [],
                    exports: [
                        TscLiteComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNjLWxpdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy1saXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFheEQsTUFBTSxPQUFPLGFBQWE7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFnQjtRQUMzQixPQUFPO1lBQ0gsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQ3BEO1NBQ0osQ0FBQztJQUNOLENBQUM7OzJHQVJRLGFBQWE7NEdBQWIsYUFBYSxpQkFUbEIsZ0JBQWdCLGFBS2hCLGdCQUFnQjs0R0FJWCxhQUFhLFlBUGIsRUFDUjs0RkFNUSxhQUFhO2tCQVh6QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixnQkFBZ0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQkFBZ0I7cUJBQ25CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVHNjTGl0ZUNvbXBvbmVudCB9IGZyb20gJy4vdHNjLWxpdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVHNjTGl0ZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVHNjTGl0ZUNvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUc2NMaXRlTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChlbnZpcm9ubWVudDogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxUc2NMaXRlTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVHNjTGl0ZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2Vudmlyb25tZW50JywgdXNlVmFsdWU6IGVudmlyb25tZW50IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59Il19