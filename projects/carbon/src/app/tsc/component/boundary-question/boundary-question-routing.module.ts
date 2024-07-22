import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoundaryQuestionComponent } from './boundary-question.component';

const routes: Routes = [
	{
		path: '',
		component: BoundaryQuestionComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class BoundaryQuestionRoutingModule { }
