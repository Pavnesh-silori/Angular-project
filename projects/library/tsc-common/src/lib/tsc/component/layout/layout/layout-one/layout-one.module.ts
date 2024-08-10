import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { LayoutOneComponent } from './layout-one.component';
import { HeaderOneModule } from '../../header/header-one/header-one.module';
import { FooterOneModule } from '../../footer/footer-one/footer-one.module';
import { LoaderOneModule } from '../../../loader/loader-one/loader-one.module';

@NgModule({
    declarations: [
        LayoutOneComponent,
    ],
    imports: [
        RouterModule,
        LoadingBarRouterModule,
        HeaderOneModule,
        FooterOneModule,
        LoaderOneModule
    ],
    exports: [
        LayoutOneComponent
    ]
})

export class LayoutOneModule { }
