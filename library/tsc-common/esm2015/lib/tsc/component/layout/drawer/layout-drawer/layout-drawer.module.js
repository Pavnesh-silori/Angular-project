import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutDrawerComponent } from './layout-drawer.component';
import { EllipsisPipeModule } from '../../../../service/ellipsis-pipe.service';
import * as i0 from "@angular/core";
export class LayoutDrawerModule {
    static forRoot(environment) {
        return {
            ngModule: LayoutDrawerModule,
            providers: [
                { provide: 'environment', useValue: environment },
            ]
        };
    }
}
LayoutDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, declarations: [LayoutDrawerComponent], imports: [CommonModule,
        NgbModule,
        MatTooltipModule,
        EllipsisPipeModule], exports: [LayoutDrawerComponent] });
LayoutDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, imports: [[
            CommonModule,
            NgbModule,
            MatTooltipModule,
            EllipsisPipeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutDrawerComponent,
                    ],
                    imports: [
                        CommonModule,
                        NgbModule,
                        MatTooltipModule,
                        EllipsisPipeModule
                    ],
                    exports: [
                        LayoutDrawerComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9kcmF3ZXIvbGF5b3V0LWRyYXdlci9sYXlvdXQtZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOztBQWlCL0UsTUFBTSxPQUFPLGtCQUFrQjtJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzNCLE9BQU87WUFDSCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTthQUNwRDtTQUNKLENBQUM7SUFDTixDQUFDOztnSEFSUSxrQkFBa0I7aUhBQWxCLGtCQUFrQixpQkFidkIscUJBQXFCLGFBR3JCLFlBQVk7UUFDWixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLGtCQUFrQixhQUdsQixxQkFBcUI7aUhBSWhCLGtCQUFrQixZQVhsQjtZQUNMLFlBQVk7WUFDWixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtTQUNyQjs0RkFNUSxrQkFBa0I7a0JBZjlCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHFCQUFxQjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLHFCQUFxQjtxQkFDeEI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSBcIkBuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbmltcG9ydCB7IExheW91dERyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWRyYXdlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBFbGxpcHNpc1BpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlL2VsbGlwc2lzLXBpcGUuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExheW91dERyYXdlckNvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ2JNb2R1bGUsXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgICAgIEVsbGlwc2lzUGlwZU1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBMYXlvdXREcmF3ZXJDb21wb25lbnQsXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIExheW91dERyYXdlck1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TGF5b3V0RHJhd2VyTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTGF5b3V0RHJhd2VyTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnZW52aXJvbm1lbnQnLCB1c2VWYWx1ZTogZW52aXJvbm1lbnQgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59Il19