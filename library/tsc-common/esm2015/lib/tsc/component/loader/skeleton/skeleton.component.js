import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-skeleton-loader";
export class SkeletonComponent {
}
SkeletonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SkeletonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SkeletonComponent, selector: "lib-skeleton-loader", inputs: { count: "count", appearance: "appearance", theme: "theme" }, ngImport: i0, template: "<ngx-skeleton-loader [count]=\"count\" [appearance]=\"appearance\" [theme]=\"theme\" animation=\"progress\">\n</ngx-skeleton-loader>", components: [{ type: i1.NgxSkeletonLoaderComponent, selector: "ngx-skeleton-loader", inputs: ["count", "loadingText", "appearance", "animation", "ariaLabel", "theme"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-skeleton-loader',
                    templateUrl: './skeleton.component.html',
                    styleUrls: []
                }]
        }], propDecorators: { count: [{
                type: Input
            }], appearance: [{
                type: Input
            }], theme: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sb2FkZXIvc2tlbGV0b24vc2tlbGV0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sb2FkZXIvc2tlbGV0b24vc2tlbGV0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9qRCxNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO21HQUFqQixpQkFBaUIsaUlDUDlCLHNJQUNzQjs0RkRNVCxpQkFBaUI7a0JBTDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsV0FBVyxFQUFFLDJCQUEyQjtvQkFDeEMsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCOzhCQUdZLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItc2tlbGV0b24tbG9hZGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2tlbGV0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2tlbGV0b25Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgY291bnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBhcHBlYXJhbmNlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGhlbWU6IGFueTtcblxufVxuIiwiPG5neC1za2VsZXRvbi1sb2FkZXIgW2NvdW50XT1cImNvdW50XCIgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiIFt0aGVtZV09XCJ0aGVtZVwiIGFuaW1hdGlvbj1cInByb2dyZXNzXCI+XG48L25neC1za2VsZXRvbi1sb2FkZXI+Il19