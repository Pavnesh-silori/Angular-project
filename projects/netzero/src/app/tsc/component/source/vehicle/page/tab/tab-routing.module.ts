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
				loadChildren: () => import('../../view/view.module').then(m => m.ViewModule),
			},
			{
				path: 'emission-factor-database',
				loadChildren: () => import('../../emission-source/emission-source.module').then(m => m.EmissionSourceModule),
			},
			{
				path: 'emission-records',
				loadChildren: () => import('../../../shared/emission-record/emission-record.module').then(m => m.EmissionRecordModule),
			},
			{
				path: 'audit-trail',
				loadChildren: () => import('../../../shared/audit-trail/audit-trail.module').then(m => m.AuditTrailModule),
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabRoutingModule { }
