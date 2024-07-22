import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { DialogOneComponent } from './dialog-one.component';
import * as i0 from "@angular/core";
export class DialogOneModule {
}
DialogOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DialogOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, declarations: [DialogOneComponent], imports: [CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule], exports: [DialogOneComponent] });
DialogOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, imports: [[
            CommonModule,
            MatDialogModule,
            MatIconModule,
            MatButtonModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DialogOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DialogOneComponent],
                    imports: [
                        CommonModule,
                        MatDialogModule,
                        MatIconModule,
                        MatButtonModule,
                        MatRippleModule
                    ],
                    exports: [DialogOneComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW9uZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2RpYWxvZy9kaWFsb2ctb25lL2RpYWxvZy1vbmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFlNUQsTUFBTSxPQUFPLGVBQWU7OzZHQUFmLGVBQWU7OEdBQWYsZUFBZSxpQkFaWCxrQkFBa0IsYUFFL0IsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2IsZUFBZTtRQUNmLGVBQWUsYUFFUCxrQkFBa0I7OEdBSWpCLGVBQWUsWUFYakI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYixlQUFlO1lBQ2YsZUFBZTtTQUNoQjs0RkFLVSxlQUFlO2tCQWIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUNsQyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFFOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ09uZUNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLW9uZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEaWFsb2dPbmVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RpYWxvZ09uZUNvbXBvbmVudF1cblxufSlcblxuZXhwb3J0IGNsYXNzIERpYWxvZ09uZU1vZHVsZSB7IH1cbiJdfQ==