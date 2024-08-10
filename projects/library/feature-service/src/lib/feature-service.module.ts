import { NgModule, ModuleWithProviders } from '@angular/core';
import { FeatureServiceComponent } from './feature-service.component';

@NgModule({
    declarations: [
        FeatureServiceComponent
    ],
    imports: [
    ],
    exports: [
        FeatureServiceComponent
    ]
})

export class FeatureServiceModule {
    static forRoot(environment: any): ModuleWithProviders<FeatureServiceModule> {
        return {
            ngModule: FeatureServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
