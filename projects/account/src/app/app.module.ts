import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppModuleMain } from '@rootProject/app.module';
import { environment } from 'src/environments/environment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// component
import { AccountSidebarComponent } from '@Account/layout/sidebar/account-sidebar/account-sidebar.component';

import { AppLayoutComponent } from '@Account/layout/layout/app-layout/app-layout.component';
import { PageLayoutComponent } from '@Account/layout/layout/page-layout/page-layout.component';

import { RightComponent } from '@Account/layout/header/_element/right/right.component';
import { AppHeaderComponent } from '@Account/layout/header/app-header/app-header.component';
import { PageHeaderComponent } from '@Account/layout/header/page-header/page-header.component';

import { PageFooterComponent } from '@Account/layout/footer/page-footer/page-footer.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// tsc-library
import { AuthenticationServiceModule } from '@library/authentication-service';
import { ApplicationServiceModule } from '@library/application-service';

import {
    TscCommonModule,
    BackButtonModule,
    FooterThreeModule,
    UserDrawerModule,
    LoaderOneInterceptor,
    InterceptorOneService,
    ApplicationDrawerModule,
    LoaderOneModule
} from '@library/tsc-common';
// tsc-library

@NgModule({
    declarations: [
        AppComponent,

        // layout
        AppLayoutComponent,
        PageLayoutComponent,
        
        // header
        AppHeaderComponent,
        PageHeaderComponent,
        RightComponent,

        // footer
        PageFooterComponent,

        // sidebar
        AccountSidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        AppModuleMain.forRoot(),

        FontAwesomeModule,
        PerfectScrollbarModule,

        MatTooltipModule,

        // library
        AuthenticationServiceModule.forRoot(environment),
        ApplicationServiceModule.forRoot(environment),
        TscCommonModule.forRoot(environment),
        BackButtonModule,
        FooterThreeModule,
        UserDrawerModule,
        ApplicationDrawerModule,
        LoaderOneModule,
        // /library
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorOneService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderOneInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


