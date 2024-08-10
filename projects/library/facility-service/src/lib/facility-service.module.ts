import { NgModule, ModuleWithProviders } from '@angular/core';
import { FacilityServiceComponent } from './facility-service.component';



@NgModule({
    declarations: [
        FacilityServiceComponent
    ],
    imports: [
    ],
    exports: [
        FacilityServiceComponent
    ]
})
export class FacilityServiceModule {
    static forRoot(environment: any): ModuleWithProviders<FacilityServiceModule> {
        return {
            ngModule: FacilityServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
