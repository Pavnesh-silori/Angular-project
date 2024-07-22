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
        this.emitValueOnChange = false;
        this.emitSearch = new EventEmitter();
        this.active = false;
    }
    ngOnInit() {
        if (this.emitValueOnChange) {
            this.searchFC.valueChanges.subscribe((value) => {
                if (value.length == 0) {
                    this.emitSearch.emit('');
                }
                else {
                    this.emitSearch.emit(value);
                }
            });
        }
    }
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
SearchBarOneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: SearchBarOneComponent, selector: "lib-search-bar-one", inputs: { type: "type", searchBy: "searchBy", clear: "clear", emitValueOnChange: "emitValueOnChange" }, outputs: { emitSearch: "emitSearch" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"searchBlock\">\n    <input class=\"searchInput\" [type]=\"type\" [placeholder]=\"'Search by ' + searchBy \" [formControl]=\"searchFC\"\n        (keydown.enter)=\"searchFn()\">\n\n    <button class=\"searchResetBtn\" [ngClass]=\"{'searchCloseBtnHide': !searchFC.value}\" type=\"button\"\n        (click)=\"searchReset()\" #searchResetBtn>\n        <fa-icon [ngClass]=\"{'searchXIconHide': !searchFC.value}\" [icon]=\"faTimes\"></fa-icon>\n    </button>\n\n    <button class=\"searchBtn text-secondary\" matRipple type=\"button\" (click)=\"searchFn()\" #searchBtn>\n        <fa-icon [icon]=\"faSearch\"></fa-icon>\n    </button>\n</div>", styles: [".searchBlock{display:flex;align-items:center}.searchBlock input[type=search]::-webkit-search-decoration,.searchBlock input[type=search]::-webkit-search-cancel-button,.searchBlock input[type=search]::-webkit-search-results-button,.searchBlock input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.searchBlock .searchInput{border:none;outline-offset:none;background-color:#eee;border-radius:16px 0 0 16px;padding:5px 0 5px 10px;width:155px;font-size:12px;min-height:31px}.searchBlock .searchInput:focus{outline:none}.searchBlock .searchCloseBtnHide{pointer-events:none}.searchBlock .searchXIconHide{opacity:0}.searchBlock .searchResetBtn{border:none!important;background-color:#eee;color:#a6a6a6;padding:5px 8px;font-size:12px;min-height:31px}.searchBlock .searchResetBtn:hover{color:#404040}.searchBlock .searchBtn{border:none!important;border-radius:0 16px 16px 0;background-color:#eee;padding:5px 8px;font-size:12px;min-height:31px}.searchBtn{border:none}\n"], components: [{ type: i1.FaIconComponent, selector: "fa-icon", inputs: ["classes", "icon", "title", "spin", "pulse", "mask", "styles", "flip", "size", "pull", "border", "inverse", "symbol", "rotate", "fixedWidth", "transform", "a11yRole"] }], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleRadius", "matRippleDisabled", "matRippleTrigger", "matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleAnimation"], exportAs: ["matRipple"] }] });
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
            }], emitValueOnChange: [{
                type: Input
            }], emitSearch: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJhci1vbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLWJhci1vbmUvc2VhcmNoLWJhci1vbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLWJhci1vbmUvc2VhcmNoLWJhci1vbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBT3RFLE1BQU0sT0FBTyxxQkFBcUI7SUF3QjlCO1FBdEJBLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDbEIsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUVwQixhQUFRLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRzVDLFNBQUksR0FBVyxNQUFNLENBQUM7UUFHdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBR3ZCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUduQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUV4QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBRVIsQ0FBQztJQUVqQixRQUFRO1FBRUosSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0I7WUFDTCxDQUFDLENBQUMsQ0FBQTtTQUNMO0lBRUwsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDakU7SUFFTCxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsT0FBTztTQUNWO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzttSEF6RVEscUJBQXFCO3VHQUFyQixxQkFBcUIsOE5DWGxDLHlvQkFZTTs0RkRETyxxQkFBcUI7a0JBTGpDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQ2pEOzBFQVNHLElBQUk7c0JBREgsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sS0FBSztzQkFESixLQUFLO2dCQUlOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFJTixVQUFVO3NCQURULE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBmYVNlYXJjaCwgZmFUaW1lcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLXNlYXJjaC1iYXItb25lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJhci1vbmUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1iYXItb25lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFyT25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZhVGltZXMgPSBmYVRpbWVzO1xuICAgIGZhU2VhcmNoID0gZmFTZWFyY2g7XG5cbiAgICBzZWFyY2hGQzogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuXG4gICAgQElucHV0KClcbiAgICB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNlYXJjaEJ5OiBzdHJpbmcgPSAnJztcblxuICAgIEBJbnB1dCgpXG4gICAgY2xlYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpXG4gICAgZW1pdFZhbHVlT25DaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGVtaXRTZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPFN0cmluZz4oKTtcblxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmVtaXRWYWx1ZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaEZDLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFNlYXJjaC5lbWl0KCcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRTZWFyY2guZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGVhcikge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hGQy5yZXNldCgnJywgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2VhcmNoRm4oKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZDLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdFNlYXJjaC5lbWl0KHRoaXMuc2VhcmNoRkMudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoRkMudmFsdWUubGVuZ3RoID09IDAgJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVtaXRTZWFyY2guZW1pdCgnJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2hSZXNldCgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hGQy5yZXNldCgnJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoRm4oKTtcbiAgICB9XG5cbiAgICBzZWFyY2hDbGVhcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWFyY2hGQy5yZXNldCgnJyk7XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwic2VhcmNoQmxvY2tcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2hJbnB1dFwiIFt0eXBlXT1cInR5cGVcIiBbcGxhY2Vob2xkZXJdPVwiJ1NlYXJjaCBieSAnICsgc2VhcmNoQnkgXCIgW2Zvcm1Db250cm9sXT1cInNlYXJjaEZDXCJcbiAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VhcmNoRm4oKVwiPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaFJlc2V0QnRuXCIgW25nQ2xhc3NdPVwieydzZWFyY2hDbG9zZUJ0bkhpZGUnOiAhc2VhcmNoRkMudmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIChjbGljayk9XCJzZWFyY2hSZXNldCgpXCIgI3NlYXJjaFJlc2V0QnRuPlxuICAgICAgICA8ZmEtaWNvbiBbbmdDbGFzc109XCJ7J3NlYXJjaFhJY29uSGlkZSc6ICFzZWFyY2hGQy52YWx1ZX1cIiBbaWNvbl09XCJmYVRpbWVzXCI+PC9mYS1pY29uPlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlYXJjaEJ0biB0ZXh0LXNlY29uZGFyeVwiIG1hdFJpcHBsZSB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNlYXJjaEZuKClcIiAjc2VhcmNoQnRuPlxuICAgICAgICA8ZmEtaWNvbiBbaWNvbl09XCJmYVNlYXJjaFwiPjwvZmEtaWNvbj5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PiJdfQ==