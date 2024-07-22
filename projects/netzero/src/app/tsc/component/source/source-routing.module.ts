import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'asset',
        loadChildren: () => import('./combustion-equipment/page/page.module').then(m => m.PageModule)
    },
    {
        path: 'supplier',
        loadChildren: () => import('./supplier/page/page.module').then(m => m.PageModule)
    },
    {
        path: 'fuel',
        loadChildren: () => import('./fuel/fuel.module').then(m => m.FuelModule)
    },
    {
        path: 'employee',
        loadChildren: () => import('./employee/page/page.module').then(m => m.PageModule)
    },
    // {
    //     path: 'vehicle',
    //     loadChildren: () => import('@library/netzero').then(m => m.VehicleModule)
    // },
    {
        path: 'sector-specific',
        loadChildren: () => import('./fugitive-sector-specific/fugitive-sector-specific.module').then(m => m.FugitiveSectorSpecificModule)
    },
    // {
    //     path: 'refrigeration-fire-suppressiong-equipments',
    //     loadChildren: () => import('./refrigeration-and-fire-suppression-equipments/refrigeration-and-fire-suppression-equipments.module').then(m => m.RefrigerationAndFireSuppressionEquipmentsModule)
    // },
    {
        path: 'product-service',
        loadChildren: () => import('./product-and-service/product-and-service.module').then(m => m.ProductAndServiceModule)
    },
    {
        path: 'product-service/import-records',
        loadChildren: () => import('./shared/bulk-import/import-records/import-records.module').then(m => m.ImportRecordsModule),
    },
    {
        path: 'process',
        loadChildren: () => import('./process/process.module').then(m => m.ProcessModule)
    },
    {
        path: 'production-route',
        loadChildren: () => import('./production-route/production-route.module').then(m => m.ProductionRouteModule)
    },
    {
        path: 'refrigeration-fire-suppressiong-equipments',
        loadChildren: () => import('./refrigeration-and-fire-suppression-equipments/refrigeration-and-fire-suppression-equipments.module').then(m => m.RefrigerationAndFireSuppressionEquipmentsModule)
    },
    // {
    //     path: 'vehicle-new',
    //     loadChildren: () => import('./vehicle/page/page.module').then(m => m.PageModule)
    // },
    {
        path: 'vehicle',
        loadChildren: () => import('@library/netzero').then(m => m.VehicleModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SourceRoutingModule { }
