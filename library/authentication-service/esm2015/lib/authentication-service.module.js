import { NgModule } from '@angular/core';
import { AuthenticationServiceComponent } from './authentication-service.component';
import * as i0 from "@angular/core";
export class AuthenticationServiceModule {
    static forRoot(environment) {
        return {
            ngModule: AuthenticationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
AuthenticationServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AuthenticationServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, declarations: [AuthenticationServiceComponent], exports: [AuthenticationServiceComponent] });
AuthenticationServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthenticationServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthenticationServiceComponent
                    ],
                    imports: [],
                    exports: [
                        AuthenticationServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tc2VydmljZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2F1dGhlbnRpY2F0aW9uLXNlcnZpY2Uvc3JjL2xpYi9hdXRoZW50aWNhdGlvbi1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0gsUUFBUSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOztBQWFwRixNQUFNLE9BQU8sMkJBQTJCO0lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFO2FBQ3BEO1NBQ0osQ0FBQztJQUNOLENBQUM7O3lIQVJRLDJCQUEyQjswSEFBM0IsMkJBQTJCLGlCQVRoQyw4QkFBOEIsYUFLOUIsOEJBQThCOzBIQUl6QiwyQkFBMkIsWUFQM0IsRUFDUjs0RkFNUSwyQkFBMkI7a0JBWHZDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDhCQUE4QjtxQkFDakM7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLDhCQUE4QjtxQkFDakM7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcbiAgICBOZ01vZHVsZSwgXG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycyBcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0aGVudGljYXRpb24tc2VydmljZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBdXRoZW50aWNhdGlvblNlcnZpY2VDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQXV0aGVudGljYXRpb25TZXJ2aWNlQ29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXV0aGVudGljYXRpb25TZXJ2aWNlTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQXV0aGVudGljYXRpb25TZXJ2aWNlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnZW52aXJvbm1lbnQnLCB1c2VWYWx1ZTogZW52aXJvbm1lbnQgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==