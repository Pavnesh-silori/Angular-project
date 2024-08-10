import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationDrawerComponent } from './organization-drawer.component';
import { SearchBarTwoModule } from '../../../search/search-bar-two/search-bar-two.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        OrganizationDrawerComponent,
    ],
    imports: [
        CommonModule,
        PerfectScrollbarModule,
        MatCardModule,
        MatTooltipModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        SearchBarTwoModule
    ],
    exports: [
        OrganizationDrawerComponent,
    ]
})

export class OrganizationDrawerModule {
    static forRoot(environment: any): ModuleWithProviders<OrganizationDrawerModule> {
        return {
            ngModule: OrganizationDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}