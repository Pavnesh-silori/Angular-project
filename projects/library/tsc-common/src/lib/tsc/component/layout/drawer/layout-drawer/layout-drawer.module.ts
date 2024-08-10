import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTooltipModule } from '@angular/material/tooltip';

import { LayoutDrawerComponent } from './layout-drawer.component';

import { EllipsisPipeModule } from '../../../../service/ellipsis-pipe.service';

@NgModule({
    declarations: [
        LayoutDrawerComponent,
    ],
    imports: [
        CommonModule,
        NgbModule,
        MatTooltipModule,
        EllipsisPipeModule
    ],
    exports: [
        LayoutDrawerComponent,
    ]
})

export class LayoutDrawerModule {
    static forRoot(environment: any): ModuleWithProviders<LayoutDrawerModule> {
        return {
            ngModule: LayoutDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}