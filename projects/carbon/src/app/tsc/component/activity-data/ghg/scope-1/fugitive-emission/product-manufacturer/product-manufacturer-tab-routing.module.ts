import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManufacturerTabComponent } from './product-manufacturer-tab.component';

const routes: Routes = [
	{
		path: '',
		component: ProductManufacturerTabComponent,
		children: [
			{
				path: 'inventory',
				loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
			},
			{
				path: 'purchase-acquisition',
				loadChildren: () => import('./purchase-acquisition/purchase-acquisition.module').then(m => m.PurchaseAcquisitionModule)
			},
			{
				path: 'sales-disbursement',
				loadChildren: () => import('./sales-disbursements/sales-disbursements.module').then(m => m.SalesDisbursementsModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductManufacturerTabRoutingModule { }
