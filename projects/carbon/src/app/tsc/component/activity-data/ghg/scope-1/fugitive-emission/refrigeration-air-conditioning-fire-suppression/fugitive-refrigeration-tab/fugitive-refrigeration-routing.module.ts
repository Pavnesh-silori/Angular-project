import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FugitiveRefrigerationComponent } from './fugitive-refrigeration.component';

const routes: Routes = [
	{
		path: '',
		component: FugitiveRefrigerationComponent,
		children: [
			{
				path: 'service-myself',
				loadChildren: () => import('../service-myself/service-myself.module').then(m => m.ServiceMyselfModule)
			},
			{
				path: 'service-by-contractor',
				loadChildren: () => import('../service-by-contractor/service-by-contractor.module').then(m => m.ServiceByContractorModule)
			},
			{
				path: 'screening',
				loadChildren: () => import('../screening/screening.module').then(m => m.ScreeningModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes),],
	exports: [RouterModule]
})
export class FugitiveRefrigerationRoutingModule { }
