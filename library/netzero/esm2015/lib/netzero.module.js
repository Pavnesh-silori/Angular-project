import { NgModule } from '@angular/core';
import { NetzeroComponent } from './netzero.component';
import * as i0 from "@angular/core";
export class NetzeroModule {
    static forRoot(environment, constant) {
        return {
            ngModule: NetzeroModule,
            providers: [
                { provide: 'environment', useValue: environment },
                { provide: 'constant', useValue: constant }
            ]
        };
    }
}
NetzeroModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NetzeroModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, declarations: [NetzeroComponent], exports: [NetzeroComponent] });
NetzeroModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NetzeroModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NetzeroComponent
                    ],
                    imports: [],
                    exports: [
                        NetzeroComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0emVyby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L25ldHplcm8vc3JjL2xpYi9uZXR6ZXJvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFhdkQsTUFBTSxPQUFPLGFBQWE7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFnQixFQUFFLFFBQWE7UUFDMUMsT0FBTztZQUNILFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDakQsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7YUFDOUM7U0FDSixDQUFDO0lBQ04sQ0FBQzs7MkdBVFEsYUFBYTs0R0FBYixhQUFhLGlCQVRsQixnQkFBZ0IsYUFLaEIsZ0JBQWdCOzRHQUlYLGFBQWEsWUFQYixFQUNSOzRGQU1RLGFBQWE7a0JBWHpCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGdCQUFnQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGdCQUFnQjtxQkFDbkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmV0emVyb0NvbXBvbmVudCB9IGZyb20gJy4vbmV0emVyby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZXR6ZXJvQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5ldHplcm9Db21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmV0emVyb01vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSwgY29uc3RhbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmV0emVyb01vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5ldHplcm9Nb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2NvbnN0YW50JywgdXNlVmFsdWU6IGNvbnN0YW50IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=