import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/core";
export class SearchBarTwoComponent {
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
SearchBarTwoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchBarTwoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarTwoComponent, selector: "lib-search-bar-two", inputs: { type: "type", searchBy: "searchBy", clear: "clear" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\" (keyup)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SearchBarTwoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-search-bar-two',
                    templateUrl: './search-bar-two.component.html',
                    styleUrls: ['./search-bar-two.component.scss']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci10d28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLWJhci10d28vc2VhcmNoLWJhci10d28uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLWJhci10d28vc2VhcmNoLWJhci10d28uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBUXRFLE1BQU0sT0FBTyxxQkFBcUI7SUFxQjlCO1FBbkJBLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDbEIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVwQixhQUFRLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzVDLFNBQUksR0FBVyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBR3ZCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXhDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFFUixDQUFDO0lBRWpCLFFBQVEsS0FBVyxDQUFDO0lBRXBCLFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakU7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzttSEF6RFEscUJBQXFCO3VHQUFyQixxQkFBcUIsc0xDWmxDLGdxQkFZTTs0RkRBTyxxQkFBcUI7a0JBTmpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQ2pEOzBFQVVHLElBQUk7c0JBREgsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLFVBQVU7c0JBRFQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZhU2VhcmNoLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaWItc2VhcmNoLWJhci10d28nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtYmFyLXR3by5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJhci10d28uY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhclR3b0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmYVRpbWVzID0gZmFUaW1lcztcbiAgICBmYVNlYXJjaCA9IGZhU2VhcmNoO1xuXG4gICAgc2VhcmNoRkM6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcblxuICAgIEBJbnB1dCgpXG4gICAgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xuXG4gICAgQElucHV0KClcbiAgICBzZWFyY2hCeTogc3RyaW5nID0gJyc7XG5cbiAgICBASW5wdXQoKVxuICAgIGNsZWFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KClcbiAgICBlbWl0U2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxTdHJpbmc+KCk7XG5cbiAgICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGVhcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hGQy5yZXNldCgnJywgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaEZuKCkge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hGQy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVtaXRTZWFyY2guZW1pdCh0aGlzLnNlYXJjaEZDLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZDLnZhbHVlLmxlbmd0aCA9PSAwICYmIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5lbWl0U2VhcmNoLmVtaXQoJycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoRkMucmVzZXQoJycpO1xuICAgICAgICB0aGlzLnNlYXJjaEZuKCk7XG4gICAgfVxuXG4gICAgc2VhcmNoQ2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoRkMucmVzZXQoJycpO1xuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInNlYXJjaEJsb2NrXCI+XG4gICAgPGlucHV0IGNsYXNzPVwic2VhcmNoSW5wdXRcIiBbdHlwZV09XCJ0eXBlXCIgW3BsYWNlaG9sZGVyXT1cIidTZWFyY2ggYnkgJyArIHNlYXJjaEJ5IFwiIFtmb3JtQ29udHJvbF09XCJzZWFyY2hGQ1wiXG4gICAgICAgIChrZXlkb3duLmVudGVyKT1cInNlYXJjaEZuKClcIiAoa2V5dXApPVwic2VhcmNoRm4oKVwiPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaFJlc2V0QnRuXCIgW25nQ2xhc3NdPVwieydzZWFyY2hDbG9zZUJ0bkhpZGUnOiAhc2VhcmNoRkMudmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIChjbGljayk9XCJzZWFyY2hSZXNldCgpXCIgI3NlYXJjaFJlc2V0QnRuPlxuICAgICAgICA8ZmEtaWNvbiBbbmdDbGFzc109XCJ7J3NlYXJjaFhJY29uSGlkZSc6ICFzZWFyY2hGQy52YWx1ZX1cIiBbaWNvbl09XCJmYVRpbWVzXCI+PC9mYS1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaEJ0biB0ZXh0LXNlY29uZGFyeVwiIG1hdFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNlYXJjaEZuKClcIiAjc2VhcmNoQnRuPlxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNlYXJjaFwiPjwvZmEtaWNvbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PiJdfQ==