import { NgModule } from '@angular/core';
import { FeatureServiceComponent } from './feature-service.component';
import * as i0 from "@angular/core";
export class FeatureServiceModule {
    static forRoot(environment) {
        return {
            ngModule: FeatureServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
FeatureServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FeatureServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, declarations: [FeatureServiceComponent], exports: [FeatureServiceComponent] });
FeatureServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FeatureServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FeatureServiceComponent
                    ],
                    imports: [],
                    exports: [
                        FeatureServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1zZXJ2aWNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZmVhdHVyZS1zZXJ2aWNlL3NyYy9saWIvZmVhdHVyZS1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFhdEUsTUFBTSxPQUFPLG9CQUFvQjtJQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzNCLE9BQU87WUFDSCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOztrSEFSUSxvQkFBb0I7bUhBQXBCLG9CQUFvQixpQkFUekIsdUJBQXVCLGFBS3ZCLHVCQUF1QjttSEFJbEIsb0JBQW9CLFlBUHBCLEVBQ1I7NEZBTVEsb0JBQW9CO2tCQVhoQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVix1QkFBdUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDTCx1QkFBdUI7cUJBQzFCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVTZXJ2aWNlQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLXNlcnZpY2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmVhdHVyZVNlcnZpY2VDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRmVhdHVyZVNlcnZpY2VDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRmVhdHVyZVNlcnZpY2VNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEZlYXR1cmVTZXJ2aWNlTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogRmVhdHVyZVNlcnZpY2VNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19