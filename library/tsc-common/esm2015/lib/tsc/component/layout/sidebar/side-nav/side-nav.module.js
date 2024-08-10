import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SideNavComponent } from './side-nav.component';
import { EllipsisPipeModule } from '../../../../service/ellipsis-pipe.service';
// tsc-library
import { RBACDirectiveModule2 } from '@library/rbac-service';
import { FeatureDirectiveModule2 } from '@library/feature-service';
import * as i0 from "@angular/core";
// /tsc-library/
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
export class SideNavModule {
}
SideNavModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SideNavModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, declarations: [SideNavComponent], imports: [BrowserModule,
        NgbModule,
        PerfectScrollbarModule,
        MatIconModule,
        MatTooltipModule,
        RBACDirectiveModule2,
        FeatureDirectiveModule2,
        EllipsisPipeModule], exports: [SideNavComponent] });
SideNavModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        }
    ], imports: [[
            BrowserModule,
            NgbModule,
            PerfectScrollbarModule,
            MatIconModule,
            MatTooltipModule,
            RBACDirectiveModule2,
            FeatureDirectiveModule2,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SideNavModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SideNavComponent,
                    ],
                    imports: [
                        BrowserModule,
                        NgbModule,
                        PerfectScrollbarModule,
                        MatIconModule,
                        MatTooltipModule,
                        RBACDirectiveModule2,
                        FeatureDirectiveModule2,
                        EllipsisPipeModule
                    ],
                    exports: [
                        SideNavComponent
                    ],
                    providers: [
                        {
                            provide: PERFECT_SCROLLBAR_CONFIG,
                            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                        }
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvc2lkZWJhci9zaWRlLW5hdi9zaWRlLW5hdi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdqRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxjQUFjO0FBQ2QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBQ25FLGdCQUFnQjtBQUVoQixNQUFNLGdDQUFnQyxHQUFvQztJQUN0RSxlQUFlLEVBQUUsSUFBSTtDQUN4QixDQUFDO0FBNkJGLE1BQU0sT0FBTyxhQUFhOzsyR0FBYixhQUFhOzRHQUFiLGFBQWEsaUJBekJsQixnQkFBZ0IsYUFHaEIsYUFBYTtRQUNiLFNBQVM7UUFDVCxzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQixhQUdsQixnQkFBZ0I7NEdBWVgsYUFBYSxhQVZYO1FBQ1A7WUFDSSxPQUFPLEVBQ0gsd0JBQXdCO1lBQzVCLFFBQVEsRUFDSixnQ0FBZ0M7U0FDdkM7S0FDSixZQXBCUTtZQUNMLGFBQWE7WUFDYixTQUFTO1lBQ1Qsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixrQkFBa0I7U0FDckI7NEZBY1EsYUFBYTtrQkEzQnpCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGdCQUFnQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGFBQWE7d0JBQ2IsU0FBUzt3QkFDVCxzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0JBQWdCO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUNILHdCQUF3Qjs0QkFDNUIsUUFBUSxFQUNKLGdDQUFnQzt5QkFDdkM7cUJBQ0o7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJNb2R1bGUgfSBmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0IHsgUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHIH0gZnJvbSAnbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UgfSBmcm9tICduZ3gtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG5pbXBvcnQgeyBTaWRlTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLW5hdi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFbGxpcHNpc1BpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlL2VsbGlwc2lzLXBpcGUuc2VydmljZSc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBSQkFDRGlyZWN0aXZlTW9kdWxlMiB9IGZyb20gJ0BsaWJyYXJ5L3JiYWMtc2VydmljZSc7XG5pbXBvcnQgeyBGZWF0dXJlRGlyZWN0aXZlTW9kdWxlMiB9IGZyb20gJ0BsaWJyYXJ5L2ZlYXR1cmUtc2VydmljZSc7XG4vLyAvdHNjLWxpYnJhcnkvXG5cbmNvbnN0IERFRkFVTFRfUEVSRkVDVF9TQ1JPTExCQVJfQ09ORklHOiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlID0ge1xuICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZVxufTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lkZU5hdkNvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTmdiTW9kdWxlLFxuICAgICAgICBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBSQkFDRGlyZWN0aXZlTW9kdWxlMixcbiAgICAgICAgRmVhdHVyZURpcmVjdGl2ZU1vZHVsZTIsXG4gICAgICAgIEVsbGlwc2lzUGlwZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTaWRlTmF2Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTpcbiAgICAgICAgICAgICAgICBQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcsXG4gICAgICAgICAgICB1c2VWYWx1ZTpcbiAgICAgICAgICAgICAgICBERUZBVUxUX1BFUkZFQ1RfU0NST0xMQkFSX0NPTkZJRyxcbiAgICAgICAgfVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlTmF2TW9kdWxlIHsgfSJdfQ==