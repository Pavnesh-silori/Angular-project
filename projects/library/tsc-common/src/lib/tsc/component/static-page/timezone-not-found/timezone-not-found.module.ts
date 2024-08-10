import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimezoneNotFoundComponent } from './timezone-not-found.component';

@NgModule({
    declarations: [
        TimezoneNotFoundComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TimezoneNotFoundComponent
    ]
})

export class TimezoneNotFoundModule {
    static forRoot(environment: any): ModuleWithProviders<TimezoneNotFoundModule> {
        return {
            ngModule: TimezoneNotFoundModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
