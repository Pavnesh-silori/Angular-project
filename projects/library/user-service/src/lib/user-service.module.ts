import { NgModule, ModuleWithProviders } from '@angular/core';

import { UserServiceComponent } from './user-service.component';

@NgModule({
    declarations: [
        UserServiceComponent
    ],
    imports: [
    ],
    exports: [
        UserServiceComponent
    ]
})
export class UserServiceModule {
    static forRoot(environment: any): ModuleWithProviders<UserServiceModule> {
        return {
            ngModule: UserServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
