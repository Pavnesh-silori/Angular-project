import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
export class SearchBarOneComponent {
    constructor() {
        this.faTimes = faTimes;
        this.faSearch = faSearch;
        this.searchFC = new FormControl('');
        this.type = 'text';
        this.searchBy = '';
        this.clear = false;
        this.emitSearch = new EventEmitter();
        this.active = false;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (!this.clear) {
            this.searchFC.reset('', { onlySelf: true, emitEvent: false });
        }
    }
    searchFn() {
        if (this.searchFC.value.length > 0) {
            this.active = true;
            this.emitSearch.emit(this.searchFC.value);
            return;
        }
        if (!this.active) {
            return;
        }
        if (this.searchFC.value.length == 0 && this.active) {
            this.active = false;
            this.emitSearch.emit('');
            return;
        }
    }
    searchReset() {
        this.searchFC.reset('');
        this.searchFn();
    }
    searchClear() {
        this.active = false;
        this.searchFC.reset('');
    }
}
SearchBarOneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchBarOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarOneComponent, selector: "lib-search-bar-one", inputs: { type: "type", searchBy: "searchBy", clear: "clear" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarOneComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-search-bar-one',
                    templateUrl: './search-bar-one.component.html',
                    styleUrls: ['./search-bar-one.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], searchBy: [{
                type: Input
            }], clear: [{
                type: Input
            }], emitSearch: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLWJhci1vbmUvc2VhcmNoLWJhci1vbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLWJhci1vbmUvc2VhcmNoLWJhci1vbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBT3RFLE1BQU0sT0FBTyxxQkFBcUI7SUFxQjlCO1FBbkJBLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDbEIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVwQixhQUFRLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzVDLFNBQUksR0FBVyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBR3ZCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFFUixDQUFDO0lBRWpCLFFBQVEsS0FBVyxDQUFDO0lBRXBCLFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzttSEF6RFEscUJBQXFCO3VHQUFyQixxQkFBcUIsc0xDWGxDLHlvQkFZTTs0RkRETyxxQkFBcUI7a0JBTGpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQ2pEOzBFQVNHLElBQUk7c0JBREgsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFVBQVU7c0JBRFQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZhU2VhcmNoLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItc2VhcmNoLWJhci1vbmUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYmFyLW9uZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJhci1vbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXJPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZmFUaW1lcyA9IGZhVGltZXM7XG4gICAgZmFTZWFyY2ggPSBmYVNlYXJjaDtcblxuICAgIHNlYXJjaEZDOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgICBASW5wdXQoKVxuICAgIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcblxuICAgIEBJbnB1dCgpXG4gICAgc2VhcmNoQnk6IHN0cmluZyA9ICcnO1xuXG4gICAgQElucHV0KClcbiAgICBjbGVhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZW1pdFNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8U3RyaW5nPigpO1xuXG4gICAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRkMucmVzZXQoJycsIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hGbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoRkMudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0U2VhcmNoLmVtaXQodGhpcy5zZWFyY2hGQy52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZWFyY2hGQy52YWx1ZS5sZW5ndGggPT0gMCAmJiB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFNlYXJjaC5lbWl0KCcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaFJlc2V0KCkge1xuICAgICAgICB0aGlzLnNlYXJjaEZDLnJlc2V0KCcnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hGbigpO1xuICAgIH1cblxuICAgIHNlYXJjaENsZWFyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlYXJjaEZDLnJlc2V0KCcnKTtcbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJzZWFyY2hCbG9ja1wiPlxuICAgIDxpbnB1dCBjbGFzcz1cInNlYXJjaElucHV0XCIgW3R5cGVdPVwidHlwZVwiIFtwbGFjZWhvbGRlcl09XCInU2VhcmNoIGJ5ICcgKyBzZWFyY2hCeSBcIiBbZm9ybUNvbnRyb2xdPVwic2VhcmNoRkNcIlxuICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJzZWFyY2hGbigpXCI+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2VhcmNoUmVzZXRCdG5cIiBbbmdDbGFzc109XCJ7J3NlYXJjaENsb3NlQnRuSGlkZSc6ICFzZWFyY2hGQy52YWx1ZX1cIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgKGNsaWNrKT1cInNlYXJjaFJlc2V0KClcIiAjc2VhcmNoUmVzZXRCdG4+XG4gICAgICAgIDxmYS1pY29uIFtuZ0NsYXNzXT1cInsnc2VhcmNoWEljb25IaWRlJzogIXNlYXJjaEZDLnZhbHVlfVwiIFtpY29uXT1cImZhVGltZXNcIj48L2ZhLWljb24+XG4gICAgPC9idXR0b24+XG5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2VhcmNoQnRuIHRleHQtc2Vjb25kYXJ5XCIgbWF0UmlwcGxlIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2VhcmNoRm4oKVwiICNzZWFyY2hCdG4+XG4gICAgICAgIDxmYS1pY29uIFtpY29uXT1cImZhU2VhcmNoXCI+PC9mYS1pY29uPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+Il19