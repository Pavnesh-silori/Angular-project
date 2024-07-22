import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModuleMain } from '@rootProject/app.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { environment } from 'src/environments/environment';
import { CONSTANT } from '@netzero/constant/constant';

// header
import { RightComponent } from '@netzero/layout/header/element/right/right.component'; 
import { HeaderOneComponent } from '@netzero/layout/header/header-one/header-one.component'; 

// layout
import { LeftLayoutComponent } from '@netzero/layout/layout/left-layout/left-layout.component';
import { RightLayoutComponent } from '@netzero/layout/layout/right-layout/right-layout.component'; 

// tsc-library
import {
    UserDrawerModule,
    OrgDrawerHeaderModule,
    OrganizationDrawerModule,
    ApplicationDrawerModule,
    SideNavModule,
    FooterTwoModule,
    LoaderOneModule,
    BackButtonModule,
    TscCommonModule,
    LoaderOneInterceptor,
    InterceptorOneService
} from '@library/tsc-common';

import { AuthenticationServiceModule } from '@library/authentication-service';

import { 
    ExpiryAlertModule, 
    SubscriptionServiceModule 
} from '@library/subscription-service';

import { UserServiceModule } from '@library/user-service';
import { ApplicationServiceModule } from '@library/application-service';
import { NetzeroModule } from '@library/netzero';
// /tsc-library/

@NgModule({
    declarations: [
        AppComponent,
        
        RightComponent,
        HeaderOneComponent,

        LeftLayoutComponent,
        RightLayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppModuleMain.forRoot(),

        NgbModule,
        FontAwesomeModule,
        LoadingBarModule,

        AuthenticationServiceModule.forRoot(environment),
        UserServiceModule.forRoot(environment),
        ApplicationServiceModule.forRoot(environment),
        SubscriptionServiceModule.forRoot(environment),
        TscCommonModule.forRoot(environment),
        NetzeroModule.forRoot(environment, CONSTANT),

        UserDrawerModule,
        OrgDrawerHeaderModule,
        OrganizationDrawerModule,
        ApplicationDrawerModule,
        SideNavModule,
        FooterTwoModule,
        LoaderOneModule,
        BackButtonModule,
        ExpiryAlertModule
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
