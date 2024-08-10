import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityRoutingModule } from './facility-routing.module';
import { FacilityComponent } from './facility.component';
import { TrendModule } from '../../_shared/dialog/trend/trend.module';
import { TrendService } from '../../../service/trend.service';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
// tsc-library
import { MessageAlertModule, SkeletonModule } from '@library/tsc-common';
import * as i0 from "@angular/core";
// /tsc-library/
export class FacilityModule {
}
FacilityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FacilityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, declarations: [FacilityComponent], imports: [CommonModule,
        FacilityRoutingModule,
        TrendModule,
        SkeletonModule,
        MessageAlertModule,
        MatCardModule,
        MatTooltipModule] });
FacilityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, providers: [TrendService], imports: [[
            CommonModule,
            FacilityRoutingModule,
            TrendModule,
            SkeletonModule,
            MessageAlertModule,
            MatCardModule,
            MatTooltipModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FacilityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FacilityComponent
                    ],
                    imports: [
                        CommonModule,
                        FacilityRoutingModule,
                        TrendModule,
                        SkeletonModule,
                        MessageAlertModule,
                        MatCardModule,
                        MatTooltipModule
                    ],
                    providers: [TrendService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjaWxpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtbGl0ZS9zcmMvbGliL3RzYy9jb21wb25lbnQvZGFzaGJvYXJkL2ZhY2lsaXR5L2ZhY2lsaXR5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU3RCxjQUFjO0FBQ2QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUN6RSxnQkFBZ0I7QUFpQmhCLE1BQU0sT0FBTyxjQUFjOzs0R0FBZCxjQUFjOzZHQUFkLGNBQWMsaUJBYm5CLGlCQUFpQixhQUdqQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixnQkFBZ0I7NkdBSVgsY0FBYyxhQUZaLENBQUMsWUFBWSxDQUFDLFlBVGhCO1lBQ0wsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixXQUFXO1lBQ1gsY0FBYztZQUNkLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsZ0JBQWdCO1NBQ25COzRGQUdRLGNBQWM7a0JBZjFCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGlCQUFpQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixXQUFXO3dCQUNYLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGdCQUFnQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWNpbGl0eVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2ZhY2lsaXR5LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEZhY2lsaXR5Q29tcG9uZW50IH0gZnJvbSAnLi9mYWNpbGl0eS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUcmVuZE1vZHVsZSB9IGZyb20gJy4uLy4uL19zaGFyZWQvZGlhbG9nL3RyZW5kL3RyZW5kLm1vZHVsZSc7XG5cbmltcG9ydCB7IFRyZW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvdHJlbmQuc2VydmljZSc7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuLy8gdHNjLWxpYnJhcnlcbmltcG9ydCB7IE1lc3NhZ2VBbGVydE1vZHVsZSwgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAbGlicmFyeS90c2MtY29tbW9uJztcbi8vIC90c2MtbGlicmFyeS9cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmFjaWxpdHlDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGYWNpbGl0eVJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFRyZW5kTW9kdWxlLFxuICAgICAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICAgICAgTWVzc2FnZUFsZXJ0TW9kdWxlLFxuICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtUcmVuZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEZhY2lsaXR5TW9kdWxlIHsgfVxuIl19