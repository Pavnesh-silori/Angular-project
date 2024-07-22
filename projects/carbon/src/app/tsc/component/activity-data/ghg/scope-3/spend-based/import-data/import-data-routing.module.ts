import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportDataComponent } from './import-data.component';

const routes: Routes = [
    {
        path: '',
        component: ImportDataComponent,
        data: {
            title: 'Import Record Data'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImportDataRoutingModule { }
