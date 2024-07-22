import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportingPreferenceComponent } from './reporting-preference.component';

const routes: Routes = [
	{
		path: '',
		component: ReportingPreferenceComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ReportingPreferenceNewRoutingModule { }
