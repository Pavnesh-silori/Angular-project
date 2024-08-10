import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { LayoutTwoComponent } from './layout-two.component';
import { LoaderOneModule } from '../../../loader/loader-one/loader-one.module';

@NgModule({
    declarations: [
        LayoutTwoComponent,
    ],
    imports: [
        RouterModule,
        LoadingBarRouterModule,
        LoaderOneModule
    ],
    exports: [
        LayoutTwoComponent
    ]
})

export class LayoutTwoModule { }
