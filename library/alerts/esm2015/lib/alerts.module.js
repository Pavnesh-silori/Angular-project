import { NgModule } from '@angular/core';
import { AlertsComponent } from './alerts.component';
import * as i0 from "@angular/core";
export class AlertsModule {
    static forRoot(environment) {
        return {
            ngModule: AlertsModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
AlertsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, declarations: [AlertsComponent], exports: [AlertsComponent] });
AlertsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AlertsComponent,
                    ],
                    imports: [],
                    exports: [
                        AlertsComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvYWxlcnRzL3NyYy9saWIvYWxlcnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBYXJELE1BQU0sT0FBTyxZQUFZO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOzswR0FSUSxZQUFZOzJHQUFaLFlBQVksaUJBVGpCLGVBQWUsYUFLZixlQUFlOzJHQUlWLFlBQVksWUFQWixFQUNSOzRGQU1RLFlBQVk7a0JBWHhCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGVBQWU7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRTt3QkFDTCxlQUFlO3FCQUNsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydHNDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBbGVydHNDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFsZXJ0c0NvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBbGVydHNNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFsZXJ0c01vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFsZXJ0c01vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2Vudmlyb25tZW50JywgdXNlVmFsdWU6IGVudmlyb25tZW50IH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59Il19