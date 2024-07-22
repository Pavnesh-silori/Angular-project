import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
	{
		path: 'page',
		component: ProductComponent
	},
	{
		path: ':productID',
		component: ProductComponent,
		data: { view: 'twoPane' },
		loadChildren: () => import('./tab/tab.module').then(m => m.TabModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
