import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./fugitive-refrigeration-tab/fugitive-refrigeration.module').then(m => m.FugitiveRefrigerationModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class RefrigerationAirConditioningFireSuppressionRoutingModule { }
