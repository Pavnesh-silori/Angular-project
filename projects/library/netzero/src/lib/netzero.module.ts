import { NgModule, ModuleWithProviders } from '@angular/core';
import { NetzeroComponent } from './netzero.component';

@NgModule({
    declarations: [
        NetzeroComponent
    ],
    imports: [
    ],
    exports: [
        NetzeroComponent
    ]
})

export class NetzeroModule {
    static forRoot(environment: any, constant: any): ModuleWithProviders<NetzeroModule> {
        return {
            ngModule: NetzeroModule,
            providers: [
                { provide: 'environment', useValue: environment },
                { provide: 'constant', useValue: constant }
            ]
        };
    }
}
