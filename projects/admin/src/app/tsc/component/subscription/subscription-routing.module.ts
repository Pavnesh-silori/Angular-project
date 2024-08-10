import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Active Subscriptions',
            status: false
        },
        children: [
            {
                path: 'active',
                loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
            },
            {
                path: 'plan',
                loadChildren: () => import('../plan/plan.module').then(m => m.PlanModule)
            },
            {
                path: 'billing',
                loadChildren: () => import('../billing/billing.module').then(m => m.BillingModule)
            },
            {
                path: 'payment',
                loadChildren: () => import('../payment/payment.module').then(m => m.PaymentModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
