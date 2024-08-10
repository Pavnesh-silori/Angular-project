import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { DateFilterComponent } from './date-filter.component';
import { DateMonthYearFormatModule } from '../../directive/date-month-year-format.directive';
import * as i0 from "@angular/core";
import * as i1 from "ngx-daterangepicker-material";
export class DateFilterModule {
}
DateFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DateFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, declarations: [DateFilterComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonToggleModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        DateMonthYearFormatModule, i1.NgxDaterangepickerMd], exports: [DateFilterComponent] });
DateFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonToggleModule,
            MatInputModule,
            MatNativeDateModule,
            MatDatepickerModule,
            DateMonthYearFormatModule,
            NgxDaterangepickerMd.forRoot(),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DateFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        DateFilterComponent,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatCardModule,
                        MatButtonToggleModule,
                        MatInputModule,
                        MatNativeDateModule,
                        MatDatepickerModule,
                        DateMonthYearFormatModule,
                        NgxDaterangepickerMd.forRoot(),
                    ],
                    exports: [
                        DateFilterComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1maWx0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9kYXRlLWZpbHRlci9kYXRlLWZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7O0FBcUI3RixNQUFNLE9BQU8sZ0JBQWdCOzs4R0FBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0IsaUJBakJyQixtQkFBbUIsYUFHbkIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHlCQUF5QixzQ0FJekIsbUJBQW1COytHQUdkLGdCQUFnQixZQWZoQjtZQUNMLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsb0JBQW9CLENBQUMsT0FBTyxFQUFFO1NBQ2pDOzRGQUtRLGdCQUFnQjtrQkFuQjVCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLHFCQUFxQjt3QkFDckIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7cUJBQ2pDO29CQUNELE9BQU8sRUFBRTt3QkFDTCxtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTmd4RGF0ZXJhbmdlcGlja2VyTWQgfSBmcm9tICduZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsJztcblxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5pbXBvcnQgeyBEYXRlRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZU1vbnRoWWVhckZvcm1hdE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZS9kYXRlLW1vbnRoLXllYXItZm9ybWF0LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERhdGVGaWx0ZXJDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgICAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgRGF0ZU1vbnRoWWVhckZvcm1hdE1vZHVsZSxcbiAgICAgICAgTmd4RGF0ZXJhbmdlcGlja2VyTWQuZm9yUm9vdCgpLFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBEYXRlRmlsdGVyQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlRmlsdGVyTW9kdWxlIHt9XG4iXX0=