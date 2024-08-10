import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CreateUpdateEscalationModule } from '../create-update/create-update.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, declarations: [ListComponent], imports: [CommonModule,
        ListRoutingModule,
        CreateUpdateEscalationModule,
        MatCardModule,
        MatTableModule,
        MatTooltipModule,
        FlexLayoutModule] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, imports: [[
            CommonModule,
            ListRoutingModule,
            CreateUpdateEscalationModule,
            MatCardModule,
            MatTableModule,
            MatTooltipModule,
            FlexLayoutModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ListComponent
                    ],
                    imports: [
                        CommonModule,
                        ListRoutingModule,
                        CreateUpdateEscalationModule,
                        MatCardModule,
                        MatTableModule,
                        MatTooltipModule,
                        FlexLayoutModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2FsZXJ0cy9zcmMvbGliL3RzYy9jb21wb25lbnQvZXNjYWxhdGlvbi9saXN0L2xpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUVyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQWlCN0QsTUFBTSxPQUFPLFVBQVU7O3dHQUFWLFVBQVU7eUdBQVYsVUFBVSxpQkFaZixhQUFhLGFBR2IsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO3lHQUdYLFVBQVUsWUFWVjtZQUNMLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsNEJBQTRCO1lBQzVCLGFBQWE7WUFDYixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtTQUNuQjs0RkFFUSxVQUFVO2tCQWR0QixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLDRCQUE0Qjt3QkFDNUIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUNuQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMaXN0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vbGlzdC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENyZWF0ZVVwZGF0ZUVzY2FsYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9jcmVhdGUtdXBkYXRlL2NyZWF0ZS11cGRhdGUubW9kdWxlJztcblxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExpc3RDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBMaXN0Um91dGluZ01vZHVsZSxcbiAgICAgICAgQ3JlYXRlVXBkYXRlRXNjYWxhdGlvbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0VGFibGVNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIEZsZXhMYXlvdXRNb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RNb2R1bGUgeyB9XG4iXX0=