import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';

const routes: Routes = [
	{
		path: 'page',
		component: ServiceComponent
	},
	{
		path: ':productID',
		component: ServiceComponent,
		data: { view: 'twoPane' },
		loadChildren: () => import('./tab/tab.module').then(m => m.TabModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ServiceRoutingModule { }
