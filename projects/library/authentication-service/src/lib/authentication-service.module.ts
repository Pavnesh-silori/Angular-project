import { 
    NgModule, 
    ModuleWithProviders 
} from '@angular/core';

import { AuthenticationServiceComponent } from './authentication-service.component';

@NgModule({
    declarations: [
        AuthenticationServiceComponent
    ],
    imports: [
    ],
    exports: [
        AuthenticationServiceComponent
    ]
})

export class AuthenticationServiceModule {
    static forRoot(environment: any): ModuleWithProviders<AuthenticationServiceModule> {
        return {
            ngModule: AuthenticationServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
