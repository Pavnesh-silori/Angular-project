import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerWorkflowComponent } from './scheduler-workflow.component';

const routes: Routes = [
    {
        path: '',
        component: SchedulerWorkflowComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchedulerWorkflowRoutingModule { }
