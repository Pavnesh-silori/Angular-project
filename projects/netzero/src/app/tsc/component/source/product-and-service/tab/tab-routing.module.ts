import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';

import { ProductServiceTabTypeEnum } from '@netzero/enum/product-service-type.enum';
// import { ProductComponent } from '../page/product/product.component';

const routes: Routes = [
	{
		path: '',
		component: TabComponent,
		children: [
			{
				path: 'product',
				loadChildren: () => import('../page/product/product.module').then(m => m.ProductModule),
				data: { tabType: ProductServiceTabTypeEnum.PRODUCT },
				// component: ProductComponent,
			},
			{
				path: 'service',
				loadChildren: () => import('../page/service/service.module').then(m => m.ServiceModule),
				data: { tabType: ProductServiceTabTypeEnum.SERVICE }
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabRoutingModule { }
