import { NgModule, ModuleWithProviders } from '@angular/core';
import { UnitServiceComponent } from './unit-service.component';

@NgModule({
    declarations: [
        UnitServiceComponent
    ],
    imports: [
    ],
    exports: [
        UnitServiceComponent
    ]
})
export class UnitServiceModule {
    static forRoot(environment: any): ModuleWithProviders<UnitServiceModule> {
        return {
            ngModule: UnitServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
