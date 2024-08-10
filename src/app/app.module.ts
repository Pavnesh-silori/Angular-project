import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ArchitectUIState, rootReducer } from './ThemeOptions/store';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// BOOTSTRAP COMPONENTS

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { LaddaModule } from 'angular2-ladda';
import { NgxLoadingModule } from 'ngx-loading';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ToastrModule } from 'ngx-toastr';
// import { CountUpModule } from 'countup.js-angular2';
import { AgmCoreModule } from '@agm/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { NouisliderModule } from 'ng2-nouislider';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { TextMaskModule } from 'angular2-text-mask';
import { ChartsModule } from 'ng2-charts';
import { ClipboardModule } from 'ngx-clipboard';
import { ColorPickerModule } from 'ngx-color-picker';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

// ANGULAR MATERIAL COMPONENTS

import { MatCheckboxModule } from '@angular/material/checkbox';

// LAYOUT

import { AppsLayoutComponent } from './Layout/apps-layout/apps-layout.component';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { OptionsDrawerComponent } from './ThemeOptions/options-drawer/options-drawer.component';
import { ThemeOptions } from './theme-options';
// import {PageTitleComponent} from './Layout/Components/page-title/page-title.component';

// HEADER

import { DotsComponent } from './Layout/Components/header/elements/dots/dots.component';
import { DrawerComponent } from './Layout/Components/header/elements/drawer/drawer.component';
import { MegapopoverComponent } from './Layout/Components/header/elements/mega-menu/elements/megapopover/megapopover.component';
import { MegamenuComponent } from './Layout/Components/header/elements/mega-menu/mega-menu.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';
import { HeaderComponent } from './Layout/Components/header/header.component';

// SIDEBAR

import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';

// FOOTER

import { FooterDotsComponent } from './Layout/Components/footer/elements/footer-dots/footer-dots.component';
import { FooterMenuComponent } from './Layout/Components/footer/elements/footer-menu/footer-menu.component';
import { FooterComponent } from './Layout/Components/footer/footer.component';

// Gauges Charts

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { GaugeModule } from 'angular-gauge';
import { TrendModule } from 'ngx-trend';

// Angular Material

// library
import {
    ApplicationDrawerModule,
    BackButtonModule,
    FooterThreeModule,
    LoaderOneModule,
    UserDrawerModule
} from '@library/tsc-common';
// /library

import { environment } from 'src/environments/environment';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
};

@NgModule({
    declarations: [

        // LAYOUT

        AppComponent,
        BaseLayoutComponent,
        AppsLayoutComponent,
        PagesLayoutComponent,
        OptionsDrawerComponent,

        // HEADER

        HeaderComponent,
        DotsComponent,
        SearchBoxComponent,
        MegamenuComponent,
        MegapopoverComponent,
        UserBoxComponent,
        DrawerComponent,

        // SIDEBAR

        SidebarComponent,
        LogoComponent,

        // FOOTER

        FooterComponent,
        FooterDotsComponent,
        FooterMenuComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,
        NgReduxModule,
        CommonModule,
        LoadingBarRouterModule,

        // Angular Bootstrap Components

        PerfectScrollbarModule,
        NgbModule,
        FontAwesomeModule,
        LaddaModule,
        FormsModule,
        ReactiveFormsModule,
        NgBootstrapFormValidationModule.forRoot(),
        NgxLoadingModule.forRoot({}),
        RoundProgressModule,
        ToastrModule.forRoot(),
        SlickCarouselModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        // CountUpModule,
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: ''
        }),
        ImageCropperModule,
        NouisliderModule,
        NgSelectModule,
        // SelectDropDownModule,
        NgMultiSelectDropDownModule.forRoot(),
        JwBootstrapSwitchNg2Module,
        AngularEditorModule,
        HttpClientModule,
        // TextMaskModule,
        ClipboardModule,
        TextareaAutosizeModule,
        ColorPickerModule,
        DropzoneModule,

        // Charts

        ChartsModule,
        GaugeModule.forRoot(),
        TrendModule,

        // Angular Material Components

        MatCheckboxModule,

        ApplicationDrawerModule.forRoot(environment),
        UserDrawerModule.forRoot(environment),
        BackButtonModule,
        LoaderOneModule,
        FooterThreeModule
    ],
    providers: [
        {
            provide:PERFECT_SCROLLBAR_CONFIG,
            // DROPZONE_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            // DEFAULT_DROPZONE_CONFIG,
        },
        ConfigActions,
        ThemeOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private ngRedux: NgRedux<ArchitectUIState>,
        private devTool: DevToolsExtension) {

        this.ngRedux.configureStore(
            rootReducer,
            {} as ArchitectUIState,
            [],
            [this.devTool.isEnabled() ? this.devTool.enhancer() : f => f]
        );
    }
}

@NgModule({})
export class AppModuleMain {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: []
        }
    }
}