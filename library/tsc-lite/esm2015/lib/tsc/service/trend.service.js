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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWxpdGUvc3JjL2xpYi90c2Mvc2VydmljZS90cmVuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7QUFNbkYsTUFBTSxPQUFPLFlBQVk7SUFFckIsWUFDWSxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQ3pCLENBQUM7SUFFTCxVQUFVLENBQUMsU0FBUztRQUNoQixJQUFJLFNBQVMsQ0FBQztRQUNkLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekMsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxTQUFTO2FBQ3ZCO1lBQ0QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MEdBZlEsWUFBWTs4R0FBWixZQUFZLGNBSFQsTUFBTTs0RkFHVCxZQUFZO2tCQUp4QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuaW1wb3J0IHsgVHJlbmRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvX3NoYXJlZC9kaWFsb2cvdHJlbmQvdHJlbmQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFRyZW5kU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICApIHsgfVxuXG4gICAgb3BlbkRpYWxvZyh0cmVuZERhdGEpIHtcbiAgICAgICAgbGV0IGRpYWxvZ1JlZjtcbiAgICAgICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihUcmVuZENvbXBvbmVudCwge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRyZW5kRGF0YTogdHJlbmREYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluV2lkdGg6ICc2MjBweCcsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzYyMHB4J1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=