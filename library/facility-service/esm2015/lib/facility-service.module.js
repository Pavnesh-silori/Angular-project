import { NgModule } from '@angular/core';
import { FacilityServiceComponent } from './facility-service.component';
import * as i0 from "@angular/core";
export class FacilityServiceModule {
    static forRoot(environment) {
        return {
            ngModule: FacilityServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
FacilityServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, declarations: [FacilityServiceComponent], exports: [FacilityServiceComponent] });
FacilityServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FacilityServiceComponent
                    ],
                    imports: [],
                    exports: [
                        FacilityServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWxpdHktc2VydmljZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2ZhY2lsaXR5LXNlcnZpY2Uvc3JjL2xpYi9mYWNpbGl0eS1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFjeEUsTUFBTSxPQUFPLHFCQUFxQjtJQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzNCLE9BQU87WUFDSCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOzttSEFSUSxxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFSMUIsd0JBQXdCLGFBS3hCLHdCQUF3QjtvSEFHbkIscUJBQXFCLFlBTnJCLEVBQ1I7NEZBS1EscUJBQXFCO2tCQVZqQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVix3QkFBd0I7cUJBQzNCO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDTCx3QkFBd0I7cUJBQzNCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2lsaXR5U2VydmljZUNvbXBvbmVudCB9IGZyb20gJy4vZmFjaWxpdHktc2VydmljZS5jb21wb25lbnQnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmFjaWxpdHlTZXJ2aWNlQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEZhY2lsaXR5U2VydmljZUNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRmFjaWxpdHlTZXJ2aWNlTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChlbnZpcm9ubWVudDogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxGYWNpbGl0eVNlcnZpY2VNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBGYWNpbGl0eVNlcnZpY2VNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19