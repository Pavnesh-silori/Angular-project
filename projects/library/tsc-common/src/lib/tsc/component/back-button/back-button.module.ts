import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BackButtonComponent } from './back-button.component';

@NgModule({
    declarations: [
        BackButtonComponent,
    ],
    imports: [
        FontAwesomeModule
    ],
    exports: [
        BackButtonComponent
    ]
})

export class BackButtonModule { }
