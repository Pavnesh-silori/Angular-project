import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportConfigComponent } from './report-config.component';

const routes: Routes = [
	{
		path: '',
		component: ReportConfigComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ReportConfigRoutingModule { }
