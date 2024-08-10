import { NgModule, ModuleWithProviders } from '@angular/core';

import { TscCommonComponent } from './tsc-common.component';

@NgModule({
    declarations: [
        TscCommonComponent,
    ],
    imports: [
    ],
    exports: [
        TscCommonComponent,
    ]
})

export class TscCommonModule {
    static forRoot(environment: any): ModuleWithProviders<TscCommonModule> {
        return {
            ngModule: TscCommonModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
