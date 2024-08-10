import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'page',
		loadChildren: () => import('./page/page.module').then(m => m.PageModule)
	},
	{
		path: ':subsidiaryID/view',
		loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
	},
	{
		path: 'create',
		loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
	},
	{
		path: 'edit',
		loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
	},
	
	{
		path: ':subsidiaryID/update',
		loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SubsidiaryRoutingModule { }