import { Injectable, Inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PreferenceController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getOrgPreference(orgID) {
        return this.http.get(`${this.environment.CARBON_ACCOUNTING_API_URL}organizations/${orgID}/preference`);
    }
}
PreferenceController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PreferenceController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
PreferenceController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PreferenceController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PreferenceController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZmVyZW5jZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS9uZXR6ZXJvL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvcHJlZmVyZW5jZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFPbkQsTUFBTSxPQUFPLG9CQUFvQjtJQUU3QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxnQkFBZ0IsQ0FBQyxLQUFLO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixpQkFBaUIsS0FBSyxhQUFhLENBQUMsQ0FBQztJQUMzRyxDQUFDOztrSEFUUSxvQkFBb0IsNENBSWpCLGFBQWE7c0hBSmhCLG9CQUFvQixjQUhqQixNQUFNOzRGQUdULG9CQUFvQjtrQkFKaEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIFByZWZlcmVuY2VDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldE9yZ1ByZWZlcmVuY2Uob3JnSUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5lbnZpcm9ubWVudC5DQVJCT05fQUNDT1VOVElOR19BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vcHJlZmVyZW5jZWApO1xuICAgIH1cbn1cbiJdfQ==