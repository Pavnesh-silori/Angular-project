import { NgModule } from '@angular/core';
import { OrganizationServiceComponent } from './organization-service.component';
import * as i0 from "@angular/core";
export class OrganizationServiceModule {
    static forRoot(environment) {
        return {
            ngModule: OrganizationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
OrganizationServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OrganizationServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, declarations: [OrganizationServiceComponent], exports: [OrganizationServiceComponent] });
OrganizationServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrganizationServiceComponent
                    ],
                    imports: [],
                    exports: [
                        OrganizationServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLXNlcnZpY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9vcmdhbml6YXRpb24tc2VydmljZS9zcmMvbGliL29yZ2FuaXphdGlvbi1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFjaEYsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNsRDtTQUNGLENBQUM7SUFDSixDQUFDOzt1SEFSVSx5QkFBeUI7d0hBQXpCLHlCQUF5QixpQkFSbEMsNEJBQTRCLGFBSzVCLDRCQUE0Qjt3SEFHbkIseUJBQXlCLFlBTjNCLEVBQ1I7NEZBS1UseUJBQXlCO2tCQVZyQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiw0QkFBNEI7cUJBQzdCO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDUCw0QkFBNEI7cUJBQzdCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZ2FuaXphdGlvblNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuL29yZ2FuaXphdGlvbi1zZXJ2aWNlLmNvbXBvbmVudCc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBPcmdhbml6YXRpb25TZXJ2aWNlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE9yZ2FuaXphdGlvblNlcnZpY2VDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb25TZXJ2aWNlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T3JnYW5pemF0aW9uU2VydmljZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT3JnYW5pemF0aW9uU2VydmljZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19