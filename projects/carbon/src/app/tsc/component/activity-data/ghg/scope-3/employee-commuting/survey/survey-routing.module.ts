import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'view/:surveyID',
				loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
			},
	// check a employee survey from 
			// {
			// 	path: 'data',
			// 	loadChildren: () => import('../survey-data/create/create.module').then(m => m.CreateModule)
			// },
			{
				path: 'page',
				loadChildren: () => import('./page/page.module').then(m => m.PageModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
