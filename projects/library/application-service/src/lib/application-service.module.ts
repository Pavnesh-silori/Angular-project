import { 
    NgModule, 
    ModuleWithProviders 
} from '@angular/core';

import { ApplicationServiceComponent } from './application-service.component';

@NgModule({
    declarations: [
        ApplicationServiceComponent
    ],
    imports: [
    ],
    exports: [
        ApplicationServiceComponent
    ]
})

export class ApplicationServiceModule {
    static forRoot(environment: any): ModuleWithProviders<ApplicationServiceModule> {
        return {
            ngModule: ApplicationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
