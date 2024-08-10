import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppModuleMain } from '@rootProject/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// component
import { AdminSidebarComponent } from '@Admin/layout/sidebar/admin-sidebar/admin-sidebar.component';
import { NotificationDrawerComponent } from '@Admin/layout/header/_element/notification-drawer/notification-drawer.component';
import { AppLayoutComponent } from '@Admin/layout/layout/app-layout/app-layout.component';
import { RightComponent } from '@Admin/layout/header/_element/right/right.component';
import { AppHeaderComponent } from '@Admin/layout/header/app-header/app-header.component';

// library
import { ApplicationDrawerModule, InterceptorOneService, LoaderOneInterceptor, OrgDrawerHeaderModule, OrganizationDrawerModule, TscCommonModule, UserDrawerModule, BackButtonModule, FooterThreeModule, LoaderOneModule } from '@library/tsc-common';
import { ApplicationServiceModule } from '@library/application-service';
import { SubscriptionServiceModule, ExpiryAlertModule } from '@library/subscription-service';
import { AuthenticationServiceModule } from '@library/authentication-service';
// /library/

@NgModule({
    declarations: [
        AppComponent,

        //header
        AppHeaderComponent,
        NotificationDrawerComponent,
        RightComponent,

        // layout 
        AppLayoutComponent,

        //sidebar
        AdminSidebarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        NgbModule,
        MatIconModule,
        MatTooltipModule,
        FontAwesomeModule,
        LoadingBarModule,

        // library
        AppModuleMain.forRoot(),
        AuthenticationServiceModule.forRoot(environment),
        ApplicationServiceModule.forRoot(environment),
        TscCommonModule.forRoot(environment),
        SubscriptionServiceModule.forRoot(environment),
        ExpiryAlertModule,
        UserDrawerModule,
        ApplicationDrawerModule,
        OrgDrawerHeaderModule,
        OrganizationDrawerModule,
        BackButtonModule,
        FooterThreeModule,
        LoaderOneModule
        // / library
        
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
