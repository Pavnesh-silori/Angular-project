import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityKeyIDEnum, MethodKeyIDEnum } from '@carbon/enum/activity.enum';
import { TabComponent } from '../activity-tab/tab.component';

const routes: Routes = [
	{
		path: 'method',
		component: TabComponent,
		data: { ActivityKeyID: ActivityKeyIDEnum.PURCHASED_GOODS_AND_SERVICES },
		children: [
			{
				path: `${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/page`,
				data: { MethodKeyID: MethodKeyIDEnum.AVERAGE_BASED_METHOD },
				loadChildren: () => import('./average-based-method/list/list.module').then(m => m.PGSAverageBasedListModule),
			},
			{
				path:`${MethodKeyIDEnum.SPEND_BASED_METHOD}/page`,
				data: { MethodKeyID: MethodKeyIDEnum.SPEND_BASED_METHOD },
				loadChildren: () => import('./average-based-method/list/list.module').then(m => m.PGSAverageBasedListModule),
			}
		]
	},
	{
		path: `method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/create`,
		loadChildren: () => import('./average-based-method/create-update/create-update.module').then(m => m.CreateUpdateModule),
		data: { action: 'create' }
	},
	{
		path: `method/${MethodKeyIDEnum.AVERAGE_BASED_METHOD}/update`,
		loadChildren: () => import('./average-based-method/create-update/create-update.module').then(m => m.CreateUpdateModule),
		data: { action: 'update' }
	},
	{
		path:  `method/${MethodKeyIDEnum.SPEND_BASED_METHOD}/create`,
		loadChildren: () => import('./average-based-method/create-update/create-update.module').then(m => m.CreateUpdateModule),
		data: { action: 'create' }
	},
	{
		path:  `method/${MethodKeyIDEnum.SPEND_BASED_METHOD}/update`,
		loadChildren: () => import('./average-based-method/create-update/create-update.module').then(m => m.CreateUpdateModule),
		data: { action: 'update' }
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PurchasedGoodsServicesRoutingModule { }
