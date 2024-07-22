import { Component, Input } from '@angular/core';
import { MessageAlertTypeEnum } from '../../enum/message-alert.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class MessageAlertComponent {
    constructor() {
        this.messageAlertTypeEnum = MessageAlertTypeEnum;
        this.label = '';
        this.showCloseBtn = false;
        this.showInfo = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.labelInp && this.labelInp) {
            this.label = this.labelInp;
        }
        if (changes.showCloseBtnInp && this.showCloseBtnInp) {
            this.showCloseBtn = this.showCloseBtnInp;
        }
    }
}
MessageAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MessageAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MessageAlertComponent, selector: "lib-message-alert", inputs: { messageAlertTypeInp: "messageAlertTypeInp", messageAlertIconInp: "messageAlertIconInp", labelInp: "labelInp", contentInp: "contentInp", showCloseBtnInp: "showCloseBtnInp" }, usesOnChanges: true, ngImport: i0, template: "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n    <symbol id=\"check-circle-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\" />\n    </symbol>\n    <symbol id=\"info-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\" />\n    </symbol>\n    <symbol id=\"exclamation-triangle-fill\" fill=\"currentColor\" viewBox=\"0 0 16 16\">\n        <path\n            d=\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\" />\n    </symbol>\n</svg>\n\n<div class=\"pt-2\" *ngIf=\"showInfo\">\n    <div class=\"alert m-0 centerAlignVertical roundedBorder\" [ngClass]=\"{\n        'alert-primary': messageAlertTypeInp == messageAlertTypeEnum.INFO,\n        'alert-success': messageAlertTypeInp == messageAlertTypeEnum.SUCCESS,\n        'alert-warning': messageAlertTypeInp == messageAlertTypeEnum.WARNING,\n        'alert-danger': messageAlertTypeInp == messageAlertTypeEnum.DANGER\n    }\">\n        <!-- <div class=\"d-flex align-items-center\"> -->\n        <div class=\"centerAlignVertical\">\n            <svg class=\"bi flex-shrink-0 me-3 cardIcon\">\n                <use [attr.xlink:href]=\"messageAlertIconInp\" />\n            </svg>\n            <div class=\"endAlignVertical\">\n                <div *ngIf=\"labelInp\"><strong>{{ label }}</strong></div>\n                <div [class.mt-1]=\"labelInp\" [innerHTML]=\"contentInp\">\n                    <!-- {{ contentInp }} -->\n                </div>\n            </div>\n            <button *ngIf=\"showCloseBtn\" type=\"button\" class=\"btn btn-sm pe-0\" (click)=\"showInfo = false;\">\n                <span class=\"material-symbols-outlined fw-bold\">\n                    close\n                </span>\n            </button>\n        </div>\n    </div>\n</div>", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MessageAlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-message-alert',
                    templateUrl: './message-alert.component.html',
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { messageAlertTypeInp: [{
                type: Input
            }], messageAlertIconInp: [{
                type: Input
            }], labelInp: [{
                type: Input
            }], contentInp: [{
                type: Input
            }], showCloseBtnInp: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L21lc3NhZ2UtYWxlcnQvbWVzc2FnZS1hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L21lc3NhZ2UtYWxlcnQvbWVzc2FnZS1hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUF3QixvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFTM0YsTUFBTSxPQUFPLHFCQUFxQjtJQXFCOUI7UUFMQSx5QkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBRyxJQUFJLENBQUM7SUFFQSxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM1QztJQUNMLENBQUM7O21IQWxDUSxxQkFBcUI7dUdBQXJCLHFCQUFxQixzUUNYbEMsaTZFQXdDTTs0RkQ3Qk8scUJBQXFCO2tCQVBqQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLE1BQU0sRUFBRSxFQUNQO2lCQUNKOzBFQUlHLG1CQUFtQjtzQkFEbEIsS0FBSztnQkFJTixtQkFBbUI7c0JBRGxCLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixlQUFlO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVzc2FnZUFsZXJ0SWNvbkVudW0sIE1lc3NhZ2VBbGVydFR5cGVFbnVtIH0gZnJvbSAnLi4vLi4vZW51bS9tZXNzYWdlLWFsZXJ0LmVudW0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1tZXNzYWdlLWFsZXJ0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZS1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KClcbiAgICBtZXNzYWdlQWxlcnRUeXBlSW5wOiBNZXNzYWdlQWxlcnRUeXBlRW51bTtcblxuICAgIEBJbnB1dCgpXG4gICAgbWVzc2FnZUFsZXJ0SWNvbklucDogTWVzc2FnZUFsZXJ0SWNvbkVudW07XG5cbiAgICBASW5wdXQoKVxuICAgIGxhYmVsSW5wOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIGNvbnRlbnRJbnA6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgc2hvd0Nsb3NlQnRuSW5wOiBib29sZWFuO1xuXG4gICAgbWVzc2FnZUFsZXJ0VHlwZUVudW0gPSBNZXNzYWdlQWxlcnRUeXBlRW51bTtcbiAgICBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgc2hvd0Nsb3NlQnRuOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2hvd0luZm8gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNoYW5nZXMubGFiZWxJbnAgJiYgdGhpcy5sYWJlbElucCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubGFiZWxJbnA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5zaG93Q2xvc2VCdG5JbnAgJiYgdGhpcy5zaG93Q2xvc2VCdG5JbnApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Nsb3NlQnRuID0gdGhpcy5zaG93Q2xvc2VCdG5JbnA7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCI8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgPHN5bWJvbCBpZD1cImNoZWNrLWNpcmNsZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwem0tMy45Ny0zLjAzYS43NS43NSAwIDAgMC0xLjA4LjAyMkw3LjQ3NyA5LjQxNyA1LjM4NCA3LjMyM2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2TDYuOTcgMTEuMDNhLjc1Ljc1IDAgMCAwIDEuMDc5LS4wMmwzLjk5Mi00Ljk5YS43NS43NSAwIDAgMC0uMDEtMS4wNXpcIiAvPlxuICAgIDwvc3ltYm9sPlxuICAgIDxzeW1ib2wgaWQ9XCJpbmZvLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk04IDE2QTggOCAwIDEgMCA4IDBhOCA4IDAgMCAwIDAgMTZ6bS45My05LjQxMi0xIDQuNzA1Yy0uMDcuMzQuMDI5LjUzMy4zMDQuNTMzLjE5NCAwIC40ODctLjA3LjY4Ni0uMjQ2bC0uMDg4LjQxNmMtLjI4Ny4zNDYtLjkyLjU5OC0xLjQ2NS41OTgtLjcwMyAwLTEuMDAyLS40MjItLjgwOC0xLjMxOWwuNzM4LTMuNDY4Yy4wNjQtLjI5My4wMDYtLjM5OS0uMjg3LS40N2wtLjQ1MS0uMDgxLjA4Mi0uMzgxIDIuMjktLjI4N3pNOCA1LjVhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyelwiIC8+XG4gICAgPC9zeW1ib2w+XG4gICAgPHN5bWJvbCBpZD1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk04Ljk4MiAxLjU2NmExLjEzIDEuMTMgMCAwIDAtMS45NiAwTC4xNjUgMTMuMjMzYy0uNDU3Ljc3OC4wOTEgMS43NjcuOTggMS43NjdoMTMuNzEzYy44ODkgMCAxLjQzOC0uOTkuOTgtMS43NjdMOC45ODIgMS41NjZ6TTggNWMuNTM1IDAgLjk1NC40NjIuOS45OTVsLS4zNSAzLjUwN2EuNTUyLjU1MiAwIDAgMS0xLjEgMEw3LjEgNS45OTVBLjkwNS45MDUgMCAwIDEgOCA1em0uMDAyIDZhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yelwiIC8+XG4gICAgPC9zeW1ib2w+XG48L3N2Zz5cblxuPGRpdiBjbGFzcz1cInB0LTJcIiAqbmdJZj1cInNob3dJbmZvXCI+XG4gICAgPGRpdiBjbGFzcz1cImFsZXJ0IG0tMCBjZW50ZXJBbGlnblZlcnRpY2FsIHJvdW5kZWRCb3JkZXJcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICdhbGVydC1wcmltYXJ5JzogbWVzc2FnZUFsZXJ0VHlwZUlucCA9PSBtZXNzYWdlQWxlcnRUeXBlRW51bS5JTkZPLFxuICAgICAgICAnYWxlcnQtc3VjY2Vzcyc6IG1lc3NhZ2VBbGVydFR5cGVJbnAgPT0gbWVzc2FnZUFsZXJ0VHlwZUVudW0uU1VDQ0VTUyxcbiAgICAgICAgJ2FsZXJ0LXdhcm5pbmcnOiBtZXNzYWdlQWxlcnRUeXBlSW5wID09IG1lc3NhZ2VBbGVydFR5cGVFbnVtLldBUk5JTkcsXG4gICAgICAgICdhbGVydC1kYW5nZXInOiBtZXNzYWdlQWxlcnRUeXBlSW5wID09IG1lc3NhZ2VBbGVydFR5cGVFbnVtLkRBTkdFUlxuICAgIH1cIj5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlckFsaWduVmVydGljYWxcIj5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJiaSBmbGV4LXNocmluay0wIG1lLTMgY2FyZEljb25cIj5cbiAgICAgICAgICAgICAgICA8dXNlIFthdHRyLnhsaW5rOmhyZWZdPVwibWVzc2FnZUFsZXJ0SWNvbklucFwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbmRBbGlnblZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxhYmVsSW5wXCI+PHN0cm9uZz57eyBsYWJlbCB9fTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzLm10LTFdPVwibGFiZWxJbnBcIiBbaW5uZXJIVE1MXT1cImNvbnRlbnRJbnBcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSB7eyBjb250ZW50SW5wIH19IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0Nsb3NlQnRuXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBwZS0wXCIgKGNsaWNrKT1cInNob3dJbmZvID0gZmFsc2U7XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGZ3LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgY2xvc2VcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=