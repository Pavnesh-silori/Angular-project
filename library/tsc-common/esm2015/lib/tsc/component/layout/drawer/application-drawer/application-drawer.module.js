import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationDrawerComponent } from './application-drawer.component';
import * as i0 from "@angular/core";
export class ApplicationDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: ApplicationDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
ApplicationDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ApplicationDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, declarations: [ApplicationDrawerComponent], imports: [CommonModule,
        MatCardModule,
        MatTooltipModule,
        NgbModule], exports: [ApplicationDrawerComponent] });
ApplicationDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, imports: [[
            CommonModule,
            MatCardModule,
            MatTooltipModule,
            NgbModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ApplicationDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ApplicationDrawerComponent
                    ],
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatTooltipModule,
                        NgbModule
                    ],
                    exports: [
                        ApplicationDrawerComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tZHJhd2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L2RyYXdlci9hcHBsaWNhdGlvbi1kcmF3ZXIvYXBwbGljYXRpb24tZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFpQjVFLE1BQU0sT0FBTyx1QkFBdUI7SUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFnQjtRQUMzQixPQUFPO1lBQ0gsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUU7YUFDcEQ7U0FDSixDQUFDO0lBQ04sQ0FBQzs7cUhBUlEsdUJBQXVCO3NIQUF2Qix1QkFBdUIsaUJBYjVCLDBCQUEwQixhQUcxQixZQUFZO1FBQ1osYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixTQUFTLGFBR1QsMEJBQTBCO3NIQUlyQix1QkFBdUIsWUFYdkI7WUFDTCxZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixTQUFTO1NBQ1o7NEZBTVEsdUJBQXVCO2tCQWZuQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRTt3QkFDViwwQkFBMEI7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixTQUFTO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDTCwwQkFBMEI7cUJBQzdCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkRyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vYXBwbGljYXRpb24tZHJhd2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcGxpY2F0aW9uRHJhd2VyQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICAgICAgTmdiTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFwcGxpY2F0aW9uRHJhd2VyQ29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uRHJhd2VyTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChlbnZpcm9ubWVudDogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxBcHBsaWNhdGlvbkRyYXdlck1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFwcGxpY2F0aW9uRHJhd2VyTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnZW52aXJvbm1lbnQnLCB1c2VWYWx1ZTogZW52aXJvbm1lbnQgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59Il19