import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDrawerComponent } from './user-drawer.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
export class UserDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: UserDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
UserDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UserDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, declarations: [UserDrawerComponent], imports: [CommonModule,
        NgbModule,
        MatTooltipModule,
        MatButtonToggleModule], exports: [UserDrawerComponent] });
UserDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, imports: [[
            CommonModule,
            NgbModule,
            MatTooltipModule,
            MatButtonToggleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UserDrawerComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgbModule,
                        MatTooltipModule,
                        MatButtonToggleModule
                    ],
                    exports: [
                        UserDrawerComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kcmF3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sYXlvdXQvZHJhd2VyL3VzZXItZHJhd2VyL3VzZXItZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQWlCeEUsTUFBTSxPQUFPLGdCQUFnQjtJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzNCLE9BQU87WUFDSCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOzs4R0FSUSxnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFickIsbUJBQW1CLGFBR25CLFlBQVk7UUFDWixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLHFCQUFxQixhQUdyQixtQkFBbUI7K0dBSWQsZ0JBQWdCLFlBWGhCO1lBQ0wsWUFBWTtZQUNaLFNBQVM7WUFDVCxnQkFBZ0I7WUFDaEIscUJBQXFCO1NBQ3hCOzRGQU1RLGdCQUFnQjtrQkFmNUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsbUJBQW1CO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixTQUFTO3dCQUNULGdCQUFnQjt3QkFDaEIscUJBQXFCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsbUJBQW1CO3FCQUN0QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBVc2VyRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWRyYXdlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVc2VyRHJhd2VyQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIE5nYk1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFVzZXJEcmF3ZXJDb21wb25lbnQsXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJEcmF3ZXJNb2R1bGUge1xuICAgIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVzZXJEcmF3ZXJNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBVc2VyRHJhd2VyTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnZW52aXJvbm1lbnQnLCB1c2VWYWx1ZTogZW52aXJvbm1lbnQgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59Il19