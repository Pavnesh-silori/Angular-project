import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SourceLoadModule } from '../../_dialog/create-update/source-load/source-load.module';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
// tsc-library
import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class ViewModule {
}
ViewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ViewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, declarations: [ViewComponent], imports: [NgbModule,
        CommonModule,
        ViewRoutingModule,
        SourceLoadModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
        SearchBarOneModule,
        EllipsisPipeModule] });
ViewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, imports: [[
            NgbModule,
            CommonModule,
            ViewRoutingModule,
            SourceLoadModule,
            MatCardModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatTableModule,
            MatPaginatorModule,
            MatDialogModule,
            MatTooltipModule,
            MatCheckboxModule,
            SearchBarOneModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ViewModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ViewComponent
                    ],
                    imports: [
                        NgbModule,
                        CommonModule,
                        ViewRoutingModule,
                        SourceLoadModule,
                        MatCardModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatCheckboxModule,
                        SearchBarOneModule,
                        EllipsisPipeModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvbWFwLWRldmljZS92aWV3L3ZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU5RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsY0FBYztBQUNkLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RCxnQkFBZ0I7QUF3QmhCLE1BQU0sT0FBTyxVQUFVOzt3R0FBVixVQUFVO3lHQUFWLFVBQVUsaUJBcEJmLGFBQWEsYUFHYixTQUFTO1FBQ1QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGFBQWE7UUFDYixlQUFlO1FBQ2YsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjt5R0FHYixVQUFVLFlBbEJWO1lBQ0wsU0FBUztZQUNULFlBQVk7WUFDWixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixrQkFBa0I7U0FDckI7NEZBRVEsVUFBVTtrQkF0QnRCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGFBQWE7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxTQUFTO3dCQUNULFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3FCQUNyQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRUYWJsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7IE1hdFBhZ2luYXRvck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgU291cmNlTG9hZE1vZHVsZSB9IGZyb20gJy4uLy4uL19kaWFsb2cvY3JlYXRlLXVwZGF0ZS9zb3VyY2UtbG9hZC9zb3VyY2UtbG9hZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBWaWV3Um91dGluZ01vZHVsZSB9IGZyb20gJy4vdmlldy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3LmNvbXBvbmVudCc7XG5cbi8vIHRzYy1saWJyYXJ5XG5pbXBvcnQgeyBTZWFyY2hCYXJPbmVNb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbmltcG9ydCB7IEVsbGlwc2lzUGlwZU1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L3RzYy1jb21tb24nO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBWaWV3Um91dGluZ01vZHVsZSxcbiAgICAgICAgU291cmNlTG9hZE1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIFNlYXJjaEJhck9uZU1vZHVsZSxcbiAgICAgICAgRWxsaXBzaXNQaXBlTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBWaWV3TW9kdWxlIHsgfVxuIl19