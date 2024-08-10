import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TscRestrictComponent } from './tsc-restrict.component';

@NgModule({
    declarations: [
        TscRestrictComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TscRestrictComponent
    ]
})

export class TscRestrictModule {
    static forRoot(environment: any): ModuleWithProviders<TscRestrictModule> {
        return {
            ngModule: TscRestrictModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
