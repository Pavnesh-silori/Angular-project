import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
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
// import { CreateUpdateModule } from '../create-update/create-update.module';
import { DateInputModule } from '@library/date';
import * as i0 from "@angular/core";
// /tsc-library/
export class PageModule {
}
PageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, declarations: [PageComponent], imports: [CommonModule,
        MatRippleModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatDialogModule,
        // CreateUpdateModule,
        NgbModule,
        FontAwesomeModule,
        PageRoutingModule,
        SearchBarOneModule,
        FunnelFilterModule,
        DateInputModule] });
PageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, imports: [[
            CommonModule,
            MatRippleModule,
            MatTooltipModule,
            MatTableModule,
            MatPaginatorModule,
            MatButtonModule,
            MatDialogModule,
            // CreateUpdateModule,
            NgbModule,
            FontAwesomeModule,
            PageRoutingModule,
            SearchBarOneModule,
            FunnelFilterModule,
            DateInputModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PageComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatRippleModule,
                        MatTooltipModule,
                        MatTableModule,
                        MatPaginatorModule,
                        MatButtonModule,
                        MatDialogModule,
                        // CreateUpdateModule,
                        NgbModule,
                        FontAwesomeModule,
                        PageRoutingModule,
                        SearchBarOneModule,
                        FunnelFilterModule,
                        DateInputModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L25ldHplcm8vc3JjL2xpYi90c2MvY29tcG9uZW50L3ZlaGljbGUvcGFnZS9wYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxhQUFhO0FBQ2IsT0FBTyxFQUNILGtCQUFrQixFQUNsQixrQkFBa0IsRUFDckIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3Qiw4RUFBOEU7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFaEQsZ0JBQWdCO0FBNEJoQixNQUFNLE9BQU8sVUFBVTs7d0dBQVYsVUFBVTt5R0FBVixVQUFVLGlCQXhCZixhQUFhLGFBR2IsWUFBWTtRQUVaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixTQUFTO1FBQ1QsaUJBQWlCO1FBRWpCLGlCQUFpQjtRQUVqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7eUdBS1YsVUFBVSxZQXRCVjtZQUNMLFlBQVk7WUFFWixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7WUFDZixzQkFBc0I7WUFDdEIsU0FBUztZQUNULGlCQUFpQjtZQUVqQixpQkFBaUI7WUFFakIsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixlQUFlO1NBRWxCOzRGQUdRLFVBQVU7a0JBMUJ0QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFFWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLFNBQVM7d0JBQ1QsaUJBQWlCO3dCQUVqQixpQkFBaUI7d0JBRWpCLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixlQUFlO3FCQUVsQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3BhZ2Utcm91dGluZy5tb2R1bGUnO1xuXG4vL3RzYy1saWJyYXJ5XG5pbXBvcnQge1xuICAgIFNlYXJjaEJhck9uZU1vZHVsZSxcbiAgICBGdW5uZWxGaWx0ZXJNb2R1bGVcbn0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG4vLyBpbXBvcnQgeyBDcmVhdGVVcGRhdGVNb2R1bGUgfSBmcm9tICcuLi9jcmVhdGUtdXBkYXRlL2NyZWF0ZS11cGRhdGUubW9kdWxlJztcbmltcG9ydCB7IERhdGVJbnB1dE1vZHVsZSB9IGZyb20gJ0BsaWJyYXJ5L2RhdGUnO1xuXG4vLyAvdHNjLWxpYnJhcnkvXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFBhZ2VDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcblxuICAgICAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICAvLyBDcmVhdGVVcGRhdGVNb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXG5cbiAgICAgICAgUGFnZVJvdXRpbmdNb2R1bGUsXG5cbiAgICAgICAgU2VhcmNoQmFyT25lTW9kdWxlLFxuICAgICAgICBGdW5uZWxGaWx0ZXJNb2R1bGUsXG4gICAgICAgIERhdGVJbnB1dE1vZHVsZSxcbiAgICAgICAgXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2VNb2R1bGUgeyB9XG4iXX0=