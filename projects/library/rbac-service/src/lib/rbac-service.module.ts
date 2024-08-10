import { NgModule, ModuleWithProviders } from '@angular/core';
import { RbacServiceComponent } from './rbac-service.component';

@NgModule({
    declarations: [
        RbacServiceComponent
    ],
    imports: [
    ],
    exports: [
        RbacServiceComponent
    ]
})

export class RbacServiceModule {
    static forRoot(environment: any): ModuleWithProviders<RbacServiceModule> {
        return {
            ngModule: RbacServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
