import { NgModule } from '@angular/core';
import { UserServiceComponent } from './user-service.component';
import * as i0 from "@angular/core";
export class UserServiceModule {
    static forRoot(environment) {
        return {
            ngModule: UserServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
UserServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, declarations: [UserServiceComponent], exports: [UserServiceComponent] });
UserServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UserServiceComponent
                    ],
                    imports: [],
                    exports: [
                        UserServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1zZXJ2aWNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdXNlci1zZXJ2aWNlL3NyYy9saWIvdXNlci1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFZaEUsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzNCLE9BQU87WUFDSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOzsrR0FSUSxpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFSdEIsb0JBQW9CLGFBS3BCLG9CQUFvQjtnSEFHZixpQkFBaUIsWUFOakIsRUFDUjs0RkFLUSxpQkFBaUI7a0JBVjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjtxQkFDdkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4vdXNlci1zZXJ2aWNlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VXNlclNlcnZpY2VNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBVc2VyU2VydmljZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2Vudmlyb25tZW50JywgdXNlVmFsdWU6IGVudmlyb25tZW50IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=