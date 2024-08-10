import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutServiceComponent } from './layout-service.component';

@NgModule({
    declarations: [
        LayoutServiceComponent
    ],
    imports: [
    ],
    exports: [
        LayoutServiceComponent
    ]
})

export class LayoutServiceModule {
    static forRoot(environment: any): ModuleWithProviders<LayoutServiceModule> {
        return {
            ngModule: LayoutServiceModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
