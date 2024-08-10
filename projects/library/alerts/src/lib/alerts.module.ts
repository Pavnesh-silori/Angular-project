import { ModuleWithProviders, NgModule } from '@angular/core';
import { AlertsComponent } from './alerts.component';

@NgModule({
    declarations: [
        AlertsComponent,
    ],
    imports: [
    ],
    exports: [
        AlertsComponent
    ]
})

export class AlertsModule {
    static forRoot(environment: any): ModuleWithProviders<AlertsModule> {
        return {
            ngModule: AlertsModule,
            providers: [
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}