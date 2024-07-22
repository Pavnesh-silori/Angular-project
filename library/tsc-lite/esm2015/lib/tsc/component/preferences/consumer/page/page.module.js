import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsumerPageRoutingModule } from './page-routing.module';
import { ConsumerPageComponent } from './page.component';
// tsc-library
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class ConsumerPageModule {
}
ConsumerPageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ConsumerPageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, declarations: [ConsumerPageComponent], imports: [CommonModule,
        ConsumerPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatPaginatorModule,
        NgbModule,
        FontAwesomeModule,
        SearchBarOneModule,
        FunnelFilterModule] });
ConsumerPageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, imports: [[
            CommonModule,
            ConsumerPageRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            MatRippleModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            MatDialogModule,
            MatPaginatorModule,
            NgbModule,
            FontAwesomeModule,
            SearchBarOneModule,
            FunnelFilterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ConsumerPageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ConsumerPageComponent
                    ],
                    imports: [
                        CommonModule,
                        ConsumerPageRoutingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatRippleModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatPaginatorModule,
                        NgbModule,
                        FontAwesomeModule,
                        SearchBarOneModule,
                        FunnelFilterModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9wcmVmZXJlbmNlcy9jb25zdW1lci9wYWdlL3BhZ2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXpELGNBQWM7QUFDZCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFDN0UsZ0JBQWdCO0FBMkJoQixNQUFNLE9BQU8sa0JBQWtCOztnSEFBbEIsa0JBQWtCO2lIQUFsQixrQkFBa0IsaUJBdkJ2QixxQkFBcUIsYUFHckIsWUFBWTtRQUNaLHlCQUF5QjtRQUV6QixXQUFXO1FBQ1gsbUJBQW1CO1FBRW5CLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Ysa0JBQWtCO1FBRWxCLFNBQVM7UUFDVCxpQkFBaUI7UUFFakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtpSEFHYixrQkFBa0IsWUFyQmxCO1lBQ0wsWUFBWTtZQUNaLHlCQUF5QjtZQUV6QixXQUFXO1lBQ1gsbUJBQW1CO1lBRW5CLGVBQWU7WUFDZixjQUFjO1lBQ2QsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2Ysa0JBQWtCO1lBRWxCLFNBQVM7WUFDVCxpQkFBaUI7WUFFakIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtTQUNyQjs0RkFFUSxrQkFBa0I7a0JBekI5QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixxQkFBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLHlCQUF5Qjt3QkFFekIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBRW5CLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBRWxCLFNBQVM7d0JBQ1QsaUJBQWlCO3dCQUVqQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjtxQkFDckI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0U29ydE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBDb25zdW1lclBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wYWdlLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENvbnN1bWVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU2VhcmNoQmFyT25lTW9kdWxlLCBGdW5uZWxGaWx0ZXJNb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29uc3VtZXJQYWdlQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ29uc3VtZXJQYWdlUm91dGluZ01vZHVsZSxcblxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcblxuICAgICAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRTb3J0TW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcblxuICAgICAgICBOZ2JNb2R1bGUsXG4gICAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuXG4gICAgICAgIFNlYXJjaEJhck9uZU1vZHVsZSxcbiAgICAgICAgRnVubmVsRmlsdGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb25zdW1lclBhZ2VNb2R1bGUgeyB9XG4iXX0=