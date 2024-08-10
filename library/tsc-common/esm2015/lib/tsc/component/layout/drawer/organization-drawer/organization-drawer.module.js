import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationDrawerComponent } from './organization-drawer.component';
import { SearchBarTwoModule } from '../../../search/search-bar-two/search-bar-two.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as i0 from "@angular/core";
export class OrganizationDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: OrganizationDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
OrganizationDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OrganizationDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, declarations: [OrganizationDrawerComponent], imports: [CommonModule,
        PerfectScrollbarModule,
        MatCardModule,
        MatTooltipModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        SearchBarTwoModule], exports: [OrganizationDrawerComponent] });
OrganizationDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, imports: [[
            CommonModule,
            PerfectScrollbarModule,
            MatCardModule,
            MatTooltipModule,
            FontAwesomeModule,
            FormsModule,
            ReactiveFormsModule,
            SearchBarTwoModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OrganizationDrawerComponent,
                    ],
                    imports: [
                        CommonModule,
                        PerfectScrollbarModule,
                        MatCardModule,
                        MatTooltipModule,
                        FontAwesomeModule,
                        FormsModule,
                        ReactiveFormsModule,
                        SearchBarTwoModule
                    ],
                    exports: [
                        OrganizationDrawerComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9kcmF3ZXIvb3JnYW5pemF0aW9uLWRyYXdlci9vcmdhbml6YXRpb24tZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFxQnJFLE1BQU0sT0FBTyx3QkFBd0I7SUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFnQjtRQUMzQixPQUFPO1lBQ0gsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7YUFDcEQ7U0FDSixDQUFDO0lBQ04sQ0FBQzs7c0hBUlEsd0JBQXdCO3VIQUF4Qix3QkFBd0IsaUJBakI3QiwyQkFBMkIsYUFHM0IsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGtCQUFrQixhQUdsQiwyQkFBMkI7dUhBSXRCLHdCQUF3QixZQWZ4QjtZQUNMLFlBQVk7WUFDWixzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7U0FDckI7NEZBTVEsd0JBQXdCO2tCQW5CcEMsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsMkJBQTJCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDTCwyQkFBMkI7cUJBQzlCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE9yZ2FuaXphdGlvbkRyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vb3JnYW5pemF0aW9uLWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQmFyVHdvTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL3NlYXJjaC1iYXItdHdvL3NlYXJjaC1iYXItdHdvLm1vZHVsZSc7XG5cbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyTW9kdWxlIH0gZnJvbSAnbmd4LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBPcmdhbml6YXRpb25EcmF3ZXJDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUGVyZmVjdFNjcm9sbGJhck1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBTZWFyY2hCYXJUd29Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgT3JnYW5pemF0aW9uRHJhd2VyQ29tcG9uZW50LFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb25EcmF3ZXJNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9yZ2FuaXphdGlvbkRyYXdlck1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE9yZ2FuaXphdGlvbkRyYXdlck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2Vudmlyb25tZW50JywgdXNlVmFsdWU6IGVudmlyb25tZW50IH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==