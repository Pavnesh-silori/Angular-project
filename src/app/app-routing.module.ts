import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboards/analytics',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        component: PagesLayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            relativeLinkResolution: 'legacy'
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
