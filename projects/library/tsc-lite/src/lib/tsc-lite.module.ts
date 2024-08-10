import { ModuleWithProviders, NgModule } from '@angular/core';

import { TscLiteComponent } from './tsc-lite.component';

@NgModule({
    declarations: [
        TscLiteComponent,
    ],
    imports: [
    ],
    exports: [
        TscLiteComponent
    ]
})

export class TscLiteModule {
    static forRoot(environment: any): ModuleWithProviders<TscLiteModule> {
        return {
            ngModule: TscLiteModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}