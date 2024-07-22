import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAction, VIEW_TYPE_ENUM } from '@library/tsc-common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [
    {
        path: 'create',
        loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule),
        data: { action: FormAction.CREATE, source: VIEW_TYPE_ENUM.PAGE }
    },
    {
        path: ':vehicleID/update',
        loadChildren: () => import('./create-update/create-update.module').then(m => m.CreateUpdateModule),
        data: { action: FormAction.UPDATE, source: VIEW_TYPE_ENUM.PAGE }
    },
    {
        path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
    }
];
export class VehicleRoutingModule {
}
VehicleRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VehicleRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
VehicleRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: VehicleRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVoaWNsZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvbmV0emVyby9zcmMvbGliL3RzYy9jb21wb25lbnQvdmVoaWNsZS92ZWhpY2xlLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUVqRSxNQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztRQUNsRyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLElBQUksRUFBRTtLQUNuRTtJQUNEO1FBQ0ksSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1FBQ2xHLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsSUFBSSxFQUFFO0tBQ25FO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0tBQzNFO0NBQ0osQ0FBQztBQU9GLE1BQU0sT0FBTyxvQkFBb0I7O2tIQUFwQixvQkFBb0I7bUhBQXBCLG9CQUFvQix3Q0FIbkIsWUFBWTttSEFHYixvQkFBb0IsWUFKcEIsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLFlBQVk7NEZBR2Isb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGb3JtQWN0aW9uLCBWSUVXX1RZUEVfRU5VTSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICdjcmVhdGUnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9jcmVhdGUtdXBkYXRlL2NyZWF0ZS11cGRhdGUubW9kdWxlJykudGhlbihtID0+IG0uQ3JlYXRlVXBkYXRlTW9kdWxlKSxcbiAgICAgICAgZGF0YTogeyBhY3Rpb246IEZvcm1BY3Rpb24uQ1JFQVRFLCBzb3VyY2U6IFZJRVdfVFlQRV9FTlVNLlBBR0UgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnOnZlaGljbGVJRC91cGRhdGUnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9jcmVhdGUtdXBkYXRlL2NyZWF0ZS11cGRhdGUubW9kdWxlJykudGhlbihtID0+IG0uQ3JlYXRlVXBkYXRlTW9kdWxlKSxcbiAgICAgICAgZGF0YTogeyBhY3Rpb246IEZvcm1BY3Rpb24uVVBEQVRFLCBzb3VyY2U6IFZJRVdfVFlQRV9FTlVNLlBBR0UgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAncGFnZScsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BhZ2UvcGFnZS5tb2R1bGUnKS50aGVuKG0gPT4gbS5QYWdlTW9kdWxlKVxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIFZlaGljbGVSb3V0aW5nTW9kdWxlIHsgfVxuIl19