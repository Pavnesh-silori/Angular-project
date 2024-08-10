import { NgModule } from '@angular/core';
import { UnitServiceComponent } from './unit-service.component';
import * as i0 from "@angular/core";
export class UnitServiceModule {
    static forRoot(environment) {
        return {
            ngModule: UnitServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
UnitServiceModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UnitServiceModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, declarations: [UnitServiceComponent], exports: [UnitServiceComponent] });
UnitServiceModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UnitServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UnitServiceComponent
                    ],
                    imports: [],
                    exports: [
                        UnitServiceComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1zZXJ2aWNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdW5pdC1zZXJ2aWNlL3NyYy9saWIvdW5pdC1zZXJ2aWNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFZaEUsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzNCLE9BQU87WUFDSCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOzsrR0FSUSxpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFSdEIsb0JBQW9CLGFBS3BCLG9CQUFvQjtnSEFHZixpQkFBaUIsWUFOakIsRUFDUjs0RkFLUSxpQkFBaUI7a0JBVjdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjtxQkFDdkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW5pdFNlcnZpY2VDb21wb25lbnQgfSBmcm9tICcuL3VuaXQtc2VydmljZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVbml0U2VydmljZUNvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBVbml0U2VydmljZUNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVW5pdFNlcnZpY2VNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVuaXRTZXJ2aWNlTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVW5pdFNlcnZpY2VNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19