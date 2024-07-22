import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordCreateComponent } from './import-create.component';

const routes: Routes = [
    {
        path: '',
        component: RecordCreateComponent,
        data: {
            title: 'Import Record'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordCreateRoutingModule { }
