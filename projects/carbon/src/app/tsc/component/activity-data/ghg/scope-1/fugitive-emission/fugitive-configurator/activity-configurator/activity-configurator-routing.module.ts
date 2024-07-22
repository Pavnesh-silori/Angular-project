import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityConfiguratorComponent } from './activity-configurator.component';

const routes: Routes = [
	{
		path: '',
		component: ActivityConfiguratorComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ActivityConfiguratorRoutingModule { }
