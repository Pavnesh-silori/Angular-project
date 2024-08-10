import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import { AuthorizationComponent } from './tsc/component/authorization/authorization.component';

@NgModule({
    declarations: [
        AuthorizationComponent
    ],
    imports: [
    ],
    exports: [
        AuthorizationComponent
    ]
})

export class AuthorizationModule {
    static forRoot(environment: any): ModuleWithProviders<AuthorizationModule> {
        return {
            ngModule: AuthorizationModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
