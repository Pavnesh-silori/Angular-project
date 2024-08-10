import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrgDrawerHeaderComponent } from './org-drawer-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i0 from "@angular/core";
export class OrgDrawerHeaderModule {
}
OrgDrawerHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OrgDrawerHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, declarations: [OrgDrawerHeaderComponent], imports: [NgbModule,
        BrowserModule,
        FontAwesomeModule], exports: [OrgDrawerHeaderComponent] });
OrgDrawerHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, imports: [[
            NgbModule,
            BrowserModule,
            FontAwesomeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrgDrawerHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrgDrawerHeaderComponent,
                    ],
                    imports: [
                        NgbModule,
                        BrowserModule,
                        FontAwesomeModule
                    ],
                    exports: [
                        OrgDrawerHeaderComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnLWRyYXdlci1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvZHJhd2VyL29yZ2FuaXphdGlvbi1kcmF3ZXIvX3NoYXJlZC9vcmctZHJhd2VyLWhlYWRlci9vcmctZHJhd2VyLWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQWdCckUsTUFBTSxPQUFPLHFCQUFxQjs7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQVoxQix3QkFBd0IsYUFHeEIsU0FBUztRQUNULGFBQWE7UUFDYixpQkFBaUIsYUFHakIsd0JBQXdCO29IQUluQixxQkFBcUIsWUFWckI7WUFDTCxTQUFTO1lBQ1QsYUFBYTtZQUNiLGlCQUFpQjtTQUNwQjs0RkFNUSxxQkFBcUI7a0JBZGpDLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFNBQVM7d0JBQ1QsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDTCx3QkFBd0I7cUJBQzNCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBPcmdEcmF3ZXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL29yZy1kcmF3ZXItaGVhZGVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBPcmdEcmF3ZXJIZWFkZXJDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgT3JnRHJhd2VySGVhZGVyQ29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE9yZ0RyYXdlckhlYWRlck1vZHVsZSB7IH1cbiJdfQ==