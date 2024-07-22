import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionListComponent } from './version-list.component';

const routes: Routes = [
    {
        path: '',
        component: VersionListComponent,
        data: {
            title: "Standard emission factor's version list"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VersionListRoutingModule { }
