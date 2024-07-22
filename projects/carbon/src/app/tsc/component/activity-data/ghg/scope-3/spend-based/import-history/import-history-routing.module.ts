import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ImportHistoryComponent } from './import-history.component';

const routes: Routes = [
    {
        path: '',
        component: ImportHistoryComponent,
        data: {
            title: 'Import History'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImportHistoryRoutingModule { }
