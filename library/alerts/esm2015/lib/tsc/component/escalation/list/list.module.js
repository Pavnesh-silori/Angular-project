import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateUpdateEscalationModule } from '../create-update/create-update.module';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import * as i0 from "@angular/core";
export class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, declarations: [ListComponent], imports: [CommonModule,
        ListRoutingModule,
        MatCardModule,
        MatTableModule,
        MatTooltipModule,
        FlexLayoutModule,
        CreateUpdateEscalationModule] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, imports: [[
            CommonModule,
            ListRoutingModule,
            MatCardModule,
            MatTableModule,
            MatTooltipModule,
            FlexLayoutModule,
            CreateUpdateEscalationModule,
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
                        MatCardModule,
                        MatTableModule,
                        MatTooltipModule,
                        FlexLayoutModule,
                        CreateUpdateEscalationModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2FsZXJ0cy9zcmMvbGliL3RzYy9jb21wb25lbnQvZXNjYWxhdGlvbi9saXN0L2xpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQW9CakQsTUFBTSxPQUFPLFVBQVU7O3dHQUFWLFVBQVU7eUdBQVYsVUFBVSxpQkFmZixhQUFhLGFBR2IsWUFBWTtRQUNaLGlCQUFpQjtRQUVqQixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUVoQixnQkFBZ0I7UUFFaEIsNEJBQTRCO3lHQUd2QixVQUFVLFlBYlY7WUFDTCxZQUFZO1lBQ1osaUJBQWlCO1lBRWpCLGFBQWE7WUFDYixjQUFjO1lBQ2QsZ0JBQWdCO1lBRWhCLGdCQUFnQjtZQUVoQiw0QkFBNEI7U0FDL0I7NEZBRVEsVUFBVTtrQkFqQnRCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGFBQWE7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFFakIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFFaEIsZ0JBQWdCO3dCQUVoQiw0QkFBNEI7cUJBQy9CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcblxuaW1wb3J0IHsgQ3JlYXRlVXBkYXRlRXNjYWxhdGlvbk1vZHVsZSB9IGZyb20gJy4uL2NyZWF0ZS11cGRhdGUvY3JlYXRlLXVwZGF0ZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMaXN0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vbGlzdC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIExpc3RSb3V0aW5nTW9kdWxlLFxuXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuXG4gICAgICAgIEZsZXhMYXlvdXRNb2R1bGUsXG5cbiAgICAgICAgQ3JlYXRlVXBkYXRlRXNjYWxhdGlvbk1vZHVsZSxcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RNb2R1bGUgeyB9XG4iXX0=