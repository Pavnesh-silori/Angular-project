import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadChildren: () => import('./target/target.module').then(m => m.TargetModule)
			},
			{
				path: '',
				loadChildren: () => import('./target-benchmark/target-benchmark.module').then(m => m.TargetBenchmarkModule)
			},
			{
				path: 'view',
				loadChildren: () => import('./target/target.module').then(m => m.TargetModule)
			},
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'criteria',
				loadChildren: () => import('./criteria/criteria.module').then(m => m.CriteriaModule)
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SbtiRoutingModule { }
