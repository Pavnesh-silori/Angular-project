import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateUpdateEntityModule } from '../_dialog/create-update/entity/entity.module';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import * as i0 from "@angular/core";
export class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, declarations: [ListComponent], imports: [CommonModule,
        ListRoutingModule,
        CreateUpdateEntityModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        MatExpansionModule] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ListModule, imports: [[
            CommonModule,
            ListRoutingModule,
            CreateUpdateEntityModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatIconModule,
            MatFormFieldModule,
            MatButtonModule,
            MatTooltipModule,
            MatDialogModule,
            MatExpansionModule
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
                        CreateUpdateEntityModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatIconModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        MatTooltipModule,
                        MatDialogModule,
                        MatExpansionModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1saXRlL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvbGlzdC9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWpFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXpGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFxQmpELE1BQU0sT0FBTyxVQUFVOzt3R0FBVixVQUFVO3lHQUFWLFVBQVUsaUJBakJmLGFBQWEsYUFHYixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGtCQUFrQjt5R0FHYixVQUFVLFlBZlY7WUFDTCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGtCQUFrQjtTQUNyQjs0RkFFUSxVQUFVO2tCQW5CdEIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQix3QkFBd0I7d0JBQ3hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixrQkFBa0I7cUJBQ3JCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5cbmltcG9ydCB7IENyZWF0ZVVwZGF0ZUVudGl0eU1vZHVsZSB9IGZyb20gJy4uL19kaWFsb2cvY3JlYXRlLXVwZGF0ZS9lbnRpdHkvZW50aXR5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IExpc3RSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9saXN0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2xpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIExpc3RSb3V0aW5nTW9kdWxlLFxuICAgICAgICBDcmVhdGVVcGRhdGVFbnRpdHlNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRJY29uTW9kdWxlLFxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRFeHBhbnNpb25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RNb2R1bGUgeyB9XG4iXX0=