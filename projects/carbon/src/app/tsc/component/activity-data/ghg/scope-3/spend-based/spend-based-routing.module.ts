import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'import-create',
				loadChildren: () => import('./import-create/import-create.module').then(m => m.RecordCreateModule)
			},
			{
				path: 'import-data',
				loadChildren: () => import('./import-data/import-data.module').then(m => m.ImportDataModule)
			},
			{
				path: 'import-history',
				loadChildren: () => import('./import-history/import-history.module').then(m => m.ImportHistoryModule)
			},
			{
				path: 'records',
				loadChildren: () => import('./records/records.module').then(m => m.RecordsModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SpendBasedRoutingModule { }
