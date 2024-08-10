import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
//tsc-library
import { SearchBarOneModule, FunnelFilterModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class PageModule {
}
PageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, declarations: [PageComponent], imports: [CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        NgbModule,
        FontAwesomeModule,
        PageRoutingModule,
        SearchBarOneModule,
        FunnelFilterModule] });
PageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, imports: [[
            CommonModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatDialogModule,
            NgbModule,
            FontAwesomeModule,
            PageRoutingModule,
            SearchBarOneModule,
            FunnelFilterModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatButtonModule,
                        MatDialogModule,
                        NgbModule,
                        FontAwesomeModule,
                        PageRoutingModule,
                        SearchBarOneModule,
                        FunnelFilterModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L25ldHplcm8vc3JjL2xpYi90c2MvY29tcG9uZW50L3ZlaGljbGUvcGFnZS9wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELGFBQWE7QUFDYixPQUFPLEVBQ0gsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNyQixNQUFNLHFCQUFxQixDQUFDOztBQUM3QixnQkFBZ0I7QUF3QmhCLE1BQU0sT0FBTyxVQUFVOzt3R0FBVixVQUFVO3lHQUFWLFVBQVUsaUJBcEJmLGFBQWEsYUFHYixZQUFZO1FBRVosY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUVmLFNBQVM7UUFDVCxpQkFBaUI7UUFFakIsaUJBQWlCO1FBRWpCLGtCQUFrQjtRQUNsQixrQkFBa0I7eUdBSWIsVUFBVSxZQWxCVjtZQUNMLFlBQVk7WUFFWixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixlQUFlO1lBRWYsU0FBUztZQUNULGlCQUFpQjtZQUVqQixpQkFBaUI7WUFFakIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtTQUNyQjs0RkFHUSxVQUFVO2tCQXRCdEIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBRVosY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZUFBZTt3QkFFZixTQUFTO3dCQUNULGlCQUFpQjt3QkFFakIsaUJBQWlCO3dCQUVqQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjtxQkFDckI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcGFnZS1yb3V0aW5nLm1vZHVsZSc7XG5cbi8vdHNjLWxpYnJhcnlcbmltcG9ydCB7XG4gICAgU2VhcmNoQmFyT25lTW9kdWxlLFxuICAgIEZ1bm5lbEZpbHRlck1vZHVsZVxufSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUGFnZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXG5cbiAgICAgICAgUGFnZVJvdXRpbmdNb2R1bGUsXG5cbiAgICAgICAgU2VhcmNoQmFyT25lTW9kdWxlLFxuICAgICAgICBGdW5uZWxGaWx0ZXJNb2R1bGUsXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4iXX0=