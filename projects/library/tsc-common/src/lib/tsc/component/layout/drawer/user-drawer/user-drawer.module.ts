import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDrawerComponent } from './user-drawer.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
    declarations: [
        UserDrawerComponent,
    ],
    imports: [
        CommonModule,
        NgbModule,
        MatTooltipModule,
        MatButtonToggleModule
    ],
    exports: [
        UserDrawerComponent,
    ]
})

export class UserDrawerModule {
    static forRoot(environment: any): ModuleWithProviders<UserDrawerModule> {
        return {
            ngModule: UserDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}