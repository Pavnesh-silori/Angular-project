import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tab/tab.module').then(m => m.TabModule)
	},
	// {
	// 	path: 'service/:id',
	// 	loadChildren: () => import('./view/view.module').then(m => m.ViewModule),
	// 	data: { tabType: ProductServiceTabTypeEnum.SERVICE }
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductAndServiceRoutingModule { }
