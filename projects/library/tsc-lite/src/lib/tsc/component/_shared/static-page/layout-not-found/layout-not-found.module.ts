import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutNotFoundComponent } from './layout-not-found.component';

@NgModule({
    declarations: [
        LayoutNotFoundComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LayoutNotFoundComponent
    ]
})

export class LayoutNotFoundModule {
    static forRoot(environment: any): ModuleWithProviders<LayoutNotFoundModule> {
        return {
            ngModule: LayoutNotFoundModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
