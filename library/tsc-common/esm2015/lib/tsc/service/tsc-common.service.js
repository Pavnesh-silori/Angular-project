import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TSCCommonService {
    constructor(location) {
        this.location = location;
    }
    nullToBlank(value) {
        return value ? value : '';
    }
    back() {
        this.location.back();
    }
    formatLargeNumber(value, roundOff, decimalPlace) {
        if (!roundOff) {
            roundOff = true;
        }
        if (!decimalPlace) {
            decimalPlace = 0;
        }
        var preFix = "";
        var postFix = "";
        if (value < 0) {
            value *= -1;
            preFix = "-";
        }
        if (value >= 1000) {
            if (value > 1000000000) {
                value = value / 1000000000;
                postFix = " G";
            }
            else if (value > 1000000) {
                value = value / 1000000;
                postFix = " M";
            }
            else if (value > 1000) {
                value = value / 1000;
                postFix = " K";
            }
            value = (roundOff == "true" ? Math.round(value) : value);
            if (roundOff == "false") {
                value = value.toFixed(decimalPlace);
            }
        }
        var formattedNumber = preFix + value + postFix;
        return formattedNumber;
    }
    removeSelectAllID(arr) {
        return arr.filter(item => item != -1);
    }
    getUniqueObject(objList, key, value) {
        return objList.find(obj => obj[key] == value);
    }
}
TSCCommonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TSCCommonService, deps: [{ token: i1.Location }], target: i0.ɵɵFactoryTarget.Injectable });
TSCCommonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TSCCommonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: TSCCommonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Location }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNjLWNvbW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvdHNjLWNvbW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVEzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRXpCLFlBQ1ksUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMxQixDQUFDO0lBRUwsV0FBVyxDQUFDLEtBQUs7UUFDYixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVk7UUFDM0MsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUNwQjtRQUNELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1osTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUNoQjtRQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRTtnQkFDcEIsS0FBSyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQzNCLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDbEI7aUJBQU0sSUFBSSxLQUFLLEdBQUcsT0FBTyxFQUFFO2dCQUN4QixLQUFLLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNsQjtpQkFBTSxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekQsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUNyQixLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2QztTQUNKO1FBRUQsSUFBSSxlQUFlLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDL0MsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQVU7UUFDeEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFjLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFDbkQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7OzhHQTFEUSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQUhiLE1BQU07NEZBR1QsZ0JBQWdCO2tCQUo1QixVQUFVO21CQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUU0NDb21tb25TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICApIHsgfVxuXG4gICAgbnVsbFRvQmxhbmsodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiAnJztcbiAgICB9XG5cbiAgICBiYWNrKCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG5cbiAgICBmb3JtYXRMYXJnZU51bWJlcih2YWx1ZSwgcm91bmRPZmYsIGRlY2ltYWxQbGFjZSkge1xuICAgICAgICBpZiAoIXJvdW5kT2ZmKSB7XG4gICAgICAgICAgICByb3VuZE9mZiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRlY2ltYWxQbGFjZSkge1xuICAgICAgICAgICAgZGVjaW1hbFBsYWNlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJlRml4ID0gXCJcIjtcbiAgICAgICAgdmFyIHBvc3RGaXggPSBcIlwiO1xuXG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlICo9IC0xO1xuICAgICAgICAgICAgcHJlRml4ID0gXCItXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gMTAwMDAwMDAwMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwMDAwMDAwO1xuICAgICAgICAgICAgICAgIHBvc3RGaXggPSBcIiBHXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gMTAwMDAwMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwMDAwO1xuICAgICAgICAgICAgICAgIHBvc3RGaXggPSBcIiBNXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gMTAwMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyAxMDAwO1xuICAgICAgICAgICAgICAgIHBvc3RGaXggPSBcIiBLXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gKHJvdW5kT2ZmID09IFwidHJ1ZVwiID8gTWF0aC5yb3VuZCh2YWx1ZSkgOiB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAocm91bmRPZmYgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0ZpeGVkKGRlY2ltYWxQbGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gcHJlRml4ICsgdmFsdWUgKyBwb3N0Rml4O1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyO1xuICAgIH1cblxuICAgIHJlbW92ZVNlbGVjdEFsbElEKGFycjogYW55W10pIHtcbiAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoaXRlbSA9PiBpdGVtICE9IC0xKTtcbiAgICB9XG5cbiAgICBnZXRVbmlxdWVPYmplY3Qob2JqTGlzdDogYW55W10sIGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgICAgIHJldHVybiBvYmpMaXN0LmZpbmQob2JqID0+IG9ialtrZXldID09IHZhbHVlKTtcbiAgICB9XG5cbn0iXX0=