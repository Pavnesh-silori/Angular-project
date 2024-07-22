import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './tab.component';

import { ProductServiceTabTypeEnum } from '@netzero/enum/product-service-type.enum';

const routes: Routes = [
	{
		path: '',
		component: TabComponent,
		children: [
			{
				path: 'details',
				loadChildren: () => import('../../../view/view.module').then(m => m.ViewModule),
				data: { tabType: ProductServiceTabTypeEnum.SERVICE }
			},
			{
				path: 'emission-factor-database',
				loadChildren: () => import('../../../emission-source/emission-source-view/emission-source-view.module').then(m => m.EmissionSourceViewModule),
				data: { tabType: ProductServiceTabTypeEnum.SERVICE }
			},
			{
				path: 'emission-records',
				loadChildren: () => import('../../../../shared/emission-record/emission-record.module').then(m => m.EmissionRecordModule),
				data: { tabType: ProductServiceTabTypeEnum.SERVICE }
			},
			{
				path: 'audit-trail',
				loadChildren: () => import('../../../../shared/audit-trail/audit-trail.module').then(m => m.AuditTrailModule),
				data: { tabType: ProductServiceTabTypeEnum.SERVICE }
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabRoutingModule { }
