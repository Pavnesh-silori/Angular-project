import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'page',
		loadChildren: () => import('./list/list.module').then(m => m.PGSAverageBasedListModule),
	},
	// {
	// 	path: 'create',
	// 	loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule),
	// 	data: { action: 'create' }
	// },
	// {
	// 	path: 'update',
	// 	loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule),
	// 	data: { action: 'update' }
	// }

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PGSAverageBasedRoutingModule { }
