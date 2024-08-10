import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationDrawerComponent } from './application-drawer.component';

@NgModule({
    declarations: [
        ApplicationDrawerComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatTooltipModule,
        NgbModule
    ],
    exports: [
        ApplicationDrawerComponent
    ]
})

export class ApplicationDrawerModule {
    static forRoot(environment: any): ModuleWithProviders<ApplicationDrawerModule> {
        return {
            ngModule: ApplicationDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}