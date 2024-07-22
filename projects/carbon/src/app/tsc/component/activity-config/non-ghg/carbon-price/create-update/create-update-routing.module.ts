import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarbonPriceActivityConfigCreateUpdateComponent } from './create-update.component';

const routes: Routes = [
	{
		path: '',
		component: CarbonPriceActivityConfigCreateUpdateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CarbonPriceActivityConfigCreateUpdateRoutingModule { }
