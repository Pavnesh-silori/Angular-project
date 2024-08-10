import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LayoutOneComponent } from './layout-one.component';
import { HeaderOneModule } from '../../header/header-one/header-one.module';
import { FooterOneModule } from '../../footer/footer-one/footer-one.module';
import { LoaderOneModule } from '../../../loader/loader-one/loader-one.module';
import * as i0 from "@angular/core";
export class LayoutOneModule {
}
LayoutOneModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutOneModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, declarations: [LayoutOneComponent], imports: [RouterModule,
        LoadingBarRouterModule,
        HeaderOneModule,
        FooterOneModule,
        LoaderOneModule], exports: [LayoutOneComponent] });
LayoutOneModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, imports: [[
            RouterModule,
            LoadingBarRouterModule,
            HeaderOneModule,
            FooterOneModule,
            LoaderOneModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutOneModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LayoutOneComponent,
                    ],
                    imports: [
                        RouterModule,
                        LoadingBarRouterModule,
                        HeaderOneModule,
                        FooterOneModule,
                        LoaderOneModule
                    ],
                    exports: [
                        LayoutOneComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW9uZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9sYXlvdXQvbGF5b3V0LW9uZS9sYXlvdXQtb25lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7QUFrQi9FLE1BQU0sT0FBTyxlQUFlOzs2R0FBZixlQUFlOzhHQUFmLGVBQWUsaUJBZHBCLGtCQUFrQixhQUdsQixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixlQUFlO1FBQ2YsZUFBZSxhQUdmLGtCQUFrQjs4R0FJYixlQUFlLFlBWmY7WUFDTCxZQUFZO1lBQ1osc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtTQUNsQjs0RkFNUSxlQUFlO2tCQWhCM0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysa0JBQWtCO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2YsZUFBZTt3QkFDZixlQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3FCQUNyQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMb2FkaW5nQmFyUm91dGVyTW9kdWxlIH0gZnJvbSAnQG5neC1sb2FkaW5nLWJhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMYXlvdXRPbmVDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1vbmUuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlck9uZU1vZHVsZSB9IGZyb20gJy4uLy4uL2hlYWRlci9oZWFkZXItb25lL2hlYWRlci1vbmUubW9kdWxlJztcbmltcG9ydCB7IEZvb3Rlck9uZU1vZHVsZSB9IGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXItb25lL2Zvb3Rlci1vbmUubW9kdWxlJztcbmltcG9ydCB7IExvYWRlck9uZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2xvYWRlci9sb2FkZXItb25lL2xvYWRlci1vbmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTGF5b3V0T25lQ29tcG9uZW50LFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIExvYWRpbmdCYXJSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEhlYWRlck9uZU1vZHVsZSxcbiAgICAgICAgRm9vdGVyT25lTW9kdWxlLFxuICAgICAgICBMb2FkZXJPbmVNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTGF5b3V0T25lQ29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIExheW91dE9uZU1vZHVsZSB7IH1cbiJdfQ==