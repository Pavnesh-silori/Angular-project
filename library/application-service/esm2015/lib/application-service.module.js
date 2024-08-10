import { NgModule } from '@angular/core';
import { ApplicationServiceComponent } from './application-service.component';
import * as i0 from "@angular/core";
export class ApplicationServiceModule {
    static forRoot(environment) {
        return {
            ngModule: ApplicationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
ApplicationServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApplicationServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, declarations: [ApplicationServiceComponent], exports: [ApplicationServiceComponent] });
ApplicationServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ApplicationServiceComponent
                    ],
                    imports: [],
                    exports: [
                        ApplicationServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tc2VydmljZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2FwcGxpY2F0aW9uLXNlcnZpY2Uvc3JjL2xpYi9hcHBsaWNhdGlvbi1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsUUFBUSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQWE5RSxNQUFNLE9BQU8sd0JBQXdCO0lBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQ3BEO1NBQ0osQ0FBQztJQUNOLENBQUM7O3NIQVJRLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQVQ3QiwyQkFBMkIsYUFLM0IsMkJBQTJCO3VIQUl0Qix3QkFBd0IsWUFQeEIsRUFDUjs0RkFNUSx3QkFBd0I7a0JBWHBDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDJCQUEyQjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLDJCQUEyQjtxQkFDOUI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBOZ01vZHVsZSwgXG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycyBcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwbGljYXRpb24tc2VydmljZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBsaWNhdGlvblNlcnZpY2VDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQXBwbGljYXRpb25TZXJ2aWNlQ29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uU2VydmljZU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXBwbGljYXRpb25TZXJ2aWNlTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQXBwbGljYXRpb25TZXJ2aWNlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnZW52aXJvbm1lbnQnLCB1c2VWYWx1ZTogZW52aXJvbm1lbnQgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==