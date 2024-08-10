import { ModuleWithProviders, NgModule } from '@angular/core';
import { SubscriptionServiceComponent } from './subscription-service.component';

@NgModule({
    declarations: [
        SubscriptionServiceComponent
    ],
    imports: [
    ],
    exports: [
        SubscriptionServiceComponent
    ]
})

export class SubscriptionServiceModule {
    static forRoot(environment: any): ModuleWithProviders<SubscriptionServiceModule> {
        return {
            ngModule: SubscriptionServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
