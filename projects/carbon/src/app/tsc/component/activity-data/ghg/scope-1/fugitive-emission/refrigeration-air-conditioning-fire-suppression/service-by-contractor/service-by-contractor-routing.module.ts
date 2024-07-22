import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceByContractorComponent } from './service-by-contractor.component';

const routes: Routes = [
	{
		path: '',
		component: ServiceByContractorComponent,
		children: [
			{
				path: 'purchase-acquisition',
				loadChildren: () => import('./purchase-acquisition/purchase-acquisition.module').then(m => m.PurchaseAcquisitionModule)
			},
			{
				path: 'equipment-servicing',
				loadChildren: () => import('./equipment-servicing/equipment-servicing.module').then(m => m.EquipmentServicingModule)
			},
			{
				path: 'sales-disbursement',
				loadChildren: () => import('./sales-disbursements/sales-disbursements.module').then(m => m.SalesDisbursementsModule)
			},

			{
				path: 'retrofitting',
				loadChildren: () => import('./retrofitting/retrofitting-routing.module').then(m => m.RetrofittingRoutingModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ServiceByContractorRoutingModule { }
