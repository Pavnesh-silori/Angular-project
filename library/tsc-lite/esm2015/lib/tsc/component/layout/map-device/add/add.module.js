import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { PopoverModule } from "ngx-smart-popover";
import { SourceLoadModule } from '../../_dialog/create-update/source-load/source-load.module';
import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
// tsc-library
import { SearchBarOneModule } from '@library/tsc-common';
import { EllipsisPipeModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class AddModule {
}
AddModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AddModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, declarations: [AddComponent], imports: [CommonModule,
        AddRoutingModule,
        SourceLoadModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule,
        MatTooltipModule,
        MatCheckboxModule,
        SearchBarOneModule,
        EllipsisPipeModule,
        ClipboardModule,
        PopoverModule] });
AddModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, imports: [[
            CommonModule,
            AddRoutingModule,
            SourceLoadModule,
            FormsModule,
            ReactiveFormsModule,
            MatCardModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule,
            MatTableModule,
            MatSortModule,
            MatPaginatorModule,
            MatDialogModule,
            MatTooltipModule,
            MatCheckboxModule,
            SearchBarOneModule,
            EllipsisPipeModule,
            ClipboardModule,
            PopoverModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AddModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AddComponent
                    ],
                    imports: [
                        CommonModule,
                        AddRoutingModule,
                        SourceLoadModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule,
                        MatTableModule,
                        MatSortModule,
                        MatPaginatorModule,
                        MatDialogModule,
                        MatTooltipModule,
                        MatCheckboxModule,
                        SearchBarOneModule,
                        EllipsisPipeModule,
                        ClipboardModule,
                        PopoverModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9tYXAtZGV2aWNlL2FkZC9hZGQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUU5RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsY0FBYztBQUNkLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RCxnQkFBZ0I7QUE0QmhCLE1BQU0sT0FBTyxTQUFTOzt1R0FBVCxTQUFTO3dHQUFULFNBQVMsaUJBeEJkLFlBQVksYUFHWixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixhQUFhO1FBQ2IsZUFBZTtRQUNmLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixhQUFhO3dHQUdSLFNBQVMsWUF0QlQ7WUFDTCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixhQUFhO1lBQ2IsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixhQUFhO1NBQ2hCOzRGQUVRLFNBQVM7a0JBMUJyQixRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDVixZQUFZO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixhQUFhO3FCQUNoQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7IENsaXBib2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jbGlwYm9hcmQnO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gXCJuZ3gtc21hcnQtcG9wb3ZlclwiO1xuXG5pbXBvcnQgeyBTb3VyY2VMb2FkTW9kdWxlIH0gZnJvbSAnLi4vLi4vX2RpYWxvZy9jcmVhdGUtdXBkYXRlL3NvdXJjZS1sb2FkL3NvdXJjZS1sb2FkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFkZFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FkZC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tICcuL2FkZC5jb21wb25lbnQnO1xuXG4vLyB0c2MtbGlicmFyeVxuaW1wb3J0IHsgU2VhcmNoQmFyT25lTW9kdWxlIH0gZnJvbSAnQGxpYnJhcnkvdHNjLWNvbW1vbic7XG5pbXBvcnQgeyBFbGxpcHNpc1BpcGVNb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWRkQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgQWRkUm91dGluZ01vZHVsZSxcbiAgICAgICAgU291cmNlTG9hZE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0U29ydE1vZHVsZSxcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgICAgICBTZWFyY2hCYXJPbmVNb2R1bGUsXG4gICAgICAgIEVsbGlwc2lzUGlwZU1vZHVsZSxcbiAgICAgICAgQ2xpcGJvYXJkTW9kdWxlLFxuICAgICAgICBQb3BvdmVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRNb2R1bGUgeyB9XG4iXX0=