import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';

const routes: Routes = [
    {
        path: 'page',
        component: PageComponent,
    },
    {
		path: ':employeeID',
		component: PageComponent,
		data: { view: 'twoPane'},
		loadChildren: () => import('./tab/tab.module').then(m => m.TabModule)
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PageRoutingModule { }
