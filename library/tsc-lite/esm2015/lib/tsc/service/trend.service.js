import { Injectable } from '@angular/core';
import { TrendComponent } from '../component/_shared/dialog/trend/trend.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class TrendService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(trendData) {
        let dialogRef;
        dialogRef = this.dialog.open(TrendComponent, {
            data: {
                trendData: trendData
            },
            minWidth: '620px',
            maxWidth: '620px'
        });
    }
}
TrendService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
TrendService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TrendService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS90cmVuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFNbkYsTUFBTSxPQUFPLFlBQVk7SUFFckIsWUFDWSxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQ3pCLENBQUM7SUFFTCxVQUFVLENBQUMsU0FBUztRQUNoQixJQUFJLFNBQVMsQ0FBQztRQUNkLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekMsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MEdBZlEsWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IFRyZW5kQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L19zaGFyZWQvZGlhbG9nL3RyZW5kL3RyZW5kLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUcmVuZFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgKSB7IH1cblxuICAgIG9wZW5EaWFsb2codHJlbmREYXRhKSB7XG4gICAgICAgIGxldCBkaWFsb2dSZWY7XG4gICAgICAgIGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVHJlbmRDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0cmVuZERhdGE6IHRyZW5kRGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pbldpZHRoOiAnNjIwcHgnLFxuICAgICAgICAgICAgbWF4V2lkdGg6ICc2MjBweCdcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19