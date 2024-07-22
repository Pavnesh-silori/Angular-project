import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchingMetricComponent } from './matching-metric.component';

const routes: Routes = [
	{
		path: '',
		component: MatchingMetricComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MatchingMetricRoutingModule { }
