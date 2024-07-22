import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './assignment.component';

const routes: Routes = [
	{
		path: '',
		component: AssignmentComponent
	},
	{
		path: '',
		children: [
			{
				path: 'workflow',
				loadChildren: () => import('../scheduler-workflow/scheduler-workflow.module').then(m => m.SchedulerWorkflowModule)
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AssignmentRoutingModule { }
