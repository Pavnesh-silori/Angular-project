import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './page.component';
import { TabComponent } from '../../product-and-service/page/service/tab/tab.component';

const routes: Routes = [
    {
        path: 'page',
        component: SupplierComponent
    },
    // {
	// 	path: ':id',
	// 	component: SupplierComponent,
	// 	data: { view: 'twoPane'},
	// 	loadChildren: () => import('../../product-and-service/page/service/tab/tab.module').then(m => m.TabModule)
	// }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PageRoutingModule { }
