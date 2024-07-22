import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TrendComponent } from './trend.component';
// tsc-library
import { BasicAreaLineBarModule } from '@library/echart';
import * as i0 from "@angular/core";
// /tsc-library/
export class TrendModule {
}
TrendModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TrendModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, declarations: [TrendComponent], imports: [CommonModule,
        BasicAreaLineBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTooltipModule] });
TrendModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, imports: [[
            CommonModule,
            BasicAreaLineBarModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatButtonModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatTooltipModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TrendComponent
                    ],
                    imports: [
                        CommonModule,
                        BasicAreaLineBarModule,
                        ReactiveFormsModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatInputModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatTooltipModule,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsY0FBYztBQUNkLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUN6RCxnQkFBZ0I7QUFrQmhCLE1BQU0sT0FBTyxXQUFXOzt5R0FBWCxXQUFXOzBHQUFYLFdBQVcsaUJBZGhCLGNBQWMsYUFHZCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjswR0FHWCxXQUFXLFlBWlg7WUFDTCxZQUFZO1lBQ1osc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZUFBZTtZQUNmLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGdCQUFnQjtTQUNuQjs0RkFFUSxXQUFXO2tCQWhCdkIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsY0FBYztxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7cUJBQ25CO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBUcmVuZENvbXBvbmVudCB9IGZyb20gJy4vdHJlbmQuY29tcG9uZW50JztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IEJhc2ljQXJlYUxpbmVCYXJNb2R1bGUgfSBmcm9tICdAbGlicmFyeS9lY2hhcnQnO1xuLy8gL3RzYy1saWJyYXJ5L1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUcmVuZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJhc2ljQXJlYUxpbmVCYXJNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZE1vZHVsZSB7IH1cbiJdfQ==