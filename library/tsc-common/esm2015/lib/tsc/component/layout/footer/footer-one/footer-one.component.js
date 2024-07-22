import { Component, } from '@angular/core';
import { COMMON_CONSTANT } from '../../../../constant/common.constant';
import * as i0 from "@angular/core";
export class FooterOneComponent {
    constructor() {
        this.COMMON_CONSTANT = COMMON_CONSTANT;
    }
    ngOnInit() {
    }
}
FooterOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FooterOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: FooterOneComponent, selector: "app-footer-one", ngImport: i0, template: "<div class=\"container-fluid d-flex align-items-center justify-content-between footerOneWrapper\">\n    <div class=\"container\">\n        <footer>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div class=\"float-start\">\n                        <a class=\"btn btn-link\" [href]=\"COMMON_CONSTANT.PRIVACY\" target=\"_blank\">Privacy</a>\n                        <a class=\"btn btn-link\" [href]=\"COMMON_CONSTANT.TERMS\" target=\"_blank\">Terms</a>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <div class=\"float-end text-light pt-2\">\n                        Copyright \u00A9 LogicLadder\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n", styles: [".footerOneWrapper{background-color:#1a202c;height:60px;position:absolute;bottom:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FooterOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-footer-one',
                    templateUrl: './footer-one.component.html',
                    styleUrls: ['./footer-one.component.scss']
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L3RzYy1jb21tb24vc3JjL2xpYi90c2MvY29tcG9uZW50L2xheW91dC9mb290ZXIvZm9vdGVyLW9uZS9mb290ZXItb25lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9jb21wb25lbnQvbGF5b3V0L2Zvb3Rlci9mb290ZXItb25lL2Zvb3Rlci1vbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsR0FFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBUXZFLE1BQU0sT0FBTyxrQkFBa0I7SUFHM0I7UUFGQSxvQkFBZSxHQUFHLGVBQWUsQ0FBQztJQUdsQyxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O2dIQVBRLGtCQUFrQjtvR0FBbEIsa0JBQWtCLHNEQ2IvQiwyekJBb0JBOzRGRFBhLGtCQUFrQjtrQkFOOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsNkJBQTZCO29CQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDT01NT05fQ09OU1RBTlQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9jb21tb24uY29uc3RhbnQnOyBcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZm9vdGVyLW9uZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci1vbmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Zvb3Rlci1vbmUuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZvb3Rlck9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQ09NTU9OX0NPTlNUQU5UID0gQ09NTU9OX0NPTlNUQU5UO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gZm9vdGVyT25lV3JhcHBlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGlua1wiIFtocmVmXT1cIkNPTU1PTl9DT05TVEFOVC5QUklWQUNZXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UHJpdmFjeTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgW2hyZWZdPVwiQ09NTU9OX0NPTlNUQU5ULlRFUk1TXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGVybXM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1lbmQgdGV4dC1saWdodCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgwqkgTG9naWNMYWRkZXJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==