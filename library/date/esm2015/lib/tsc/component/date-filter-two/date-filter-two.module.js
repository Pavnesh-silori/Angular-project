import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DateFilterTwoComponent } from './date-filter-two.component';
import { DateMonthYearFormatModule } from '../../directive/date-month-year-format.directive';
import { DateInputModule } from '../date-input/date-input.module';
import * as i0 from "@angular/core";
import * as i1 from "ngx-daterangepicker-material";
export class DateFilterTwoModule {
}
DateFilterTwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateFilterTwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, declarations: [DateFilterTwoComponent], imports: [CommonModule,
        DateInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule, i1.NgxDaterangepickerMd, DateMonthYearFormatModule], exports: [DateFilterTwoComponent] });
DateFilterTwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, imports: [[
            CommonModule,
            DateInputModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonToggleModule,
            MatInputModule,
            MatNativeDateModule,
            MatDatepickerModule,
            NgxDaterangepickerMd.forRoot(),
            DateMonthYearFormatModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterTwoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateFilterTwoComponent
                    ],
                    imports: [
                        CommonModule,
                        DateInputModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatButtonToggleModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        NgxDaterangepickerMd.forRoot(),
                        DateMonthYearFormatModule
                    ],
                    exports: [
                        DateFilterTwoComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWx0ZXItdHdvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZGF0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGF0ZS1maWx0ZXItdHdvL2RhdGUtZmlsdGVyLXR3by5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUU3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQXNCbEUsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQWxCeEIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixxQkFBcUI7UUFDckIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixtQkFBbUIsMkJBRW5CLHlCQUF5QixhQUd6QixzQkFBc0I7a0hBR2pCLG1CQUFtQixZQWhCbkI7WUFDTCxZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtZQUM5Qix5QkFBeUI7U0FDNUI7NEZBS1EsbUJBQW1CO2tCQXBCL0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysc0JBQXNCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLG9CQUFvQixDQUFDLE9BQU8sRUFBRTt3QkFDOUIseUJBQXlCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsc0JBQXNCO3FCQUN6QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTmd4RGF0ZXJhbmdlcGlja2VyTWQgfSBmcm9tICduZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsJztcblxuaW1wb3J0IHsgRGF0ZUZpbHRlclR3b0NvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1maWx0ZXItdHdvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlTW9udGhZZWFyRm9ybWF0TW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlL2RhdGUtbW9udGgteWVhci1mb3JtYXQuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgRGF0ZUlucHV0TW9kdWxlIH0gZnJvbSAnLi4vZGF0ZS1pbnB1dC9kYXRlLWlucHV0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERhdGVGaWx0ZXJUd29Db21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBEYXRlSW5wdXRNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgICAgIE5neERhdGVyYW5nZXBpY2tlck1kLmZvclJvb3QoKSxcbiAgICAgICAgRGF0ZU1vbnRoWWVhckZvcm1hdE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBEYXRlRmlsdGVyVHdvQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRmlsdGVyVHdvTW9kdWxlIHsgfSJdfQ==