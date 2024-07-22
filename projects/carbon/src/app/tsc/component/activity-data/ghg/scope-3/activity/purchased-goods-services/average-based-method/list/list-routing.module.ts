import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as PGSAverageBasedListComponent  } from './list.component';

const routes: Routes = [
	{
		path: '',
		component: PGSAverageBasedListComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PGSAverageBasedListRoutingModule { }
