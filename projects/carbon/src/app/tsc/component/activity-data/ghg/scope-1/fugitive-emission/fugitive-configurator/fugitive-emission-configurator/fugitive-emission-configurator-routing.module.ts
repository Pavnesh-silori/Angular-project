import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FugitiveEmissionConfiguratorComponent } from './fugitive-emission-configurator.component';

const routes: Routes = [
	{
		path: '',
		component: FugitiveEmissionConfiguratorComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FugitiveEmissionConfiguratorRoutingModule { }
