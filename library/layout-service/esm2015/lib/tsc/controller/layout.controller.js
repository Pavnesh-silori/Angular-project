import { Inject, Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LayoutController {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
    }
    getLayoutByPage(pageNo, pageSize, sortBy, orderBy, search, orgID) {
        let params = new HttpParams();
        params = params.append('pageNo', pageNo);
        params = params.append('pageSize', pageSize);
        params = params.append('sortBy', sortBy);
        params = params.append('orderBy', orderBy);
        search.forEach(search => params = params.append('search', search));
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/page`, { params: params });
    }
    getLayoutByOrgID(orgID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts`);
    }
    getLayoutByID(orgID, layoutID) {
        return this.http.get(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}`);
    }
    createLayout(orgID, layout) {
        return this.http.post(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts`, layout);
    }
    updateLayout(orgID, layoutID, layout) {
        return this.http.patch(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}`, layout);
    }
    deleteLayout(orgID, layoutID) {
        return this.http.delete(`${this.environment.TSC_COMMON_API_URL}organizations/${orgID}/layouts/${layoutID}`);
    }
}
LayoutController.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutController.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LayoutController, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9saWJyYXJ5L2xheW91dC1zZXJ2aWNlL3NyYy9saWIvdHNjL2NvbnRyb2xsZXIvbGF5b3V0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFVOUQsTUFBTSxPQUFPLGdCQUFnQjtJQUV6QixZQUNZLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO0lBQy9DLENBQUM7SUFFTCxlQUFlLENBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBRSxNQUFhLEVBQUUsS0FBYTtRQUMzRyxJQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRTlCLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbkUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxSSxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBSztRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssVUFBVSxDQUFDLENBQUM7SUFDNUcsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLLEVBQUUsUUFBUTtRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLGlCQUFpQixLQUFLLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTTtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsaUJBQWlCLEtBQUssWUFBWSxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixpQkFBaUIsS0FBSyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDL0csQ0FBQzs7OEdBdENRLGdCQUFnQiw0Q0FJYixhQUFhO2tIQUpoQixnQkFBZ0IsY0FIYixNQUFNOzRGQUdULGdCQUFnQjtrQkFKNUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQU1RLE1BQU07MkJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMYXlvdXRNLCBQYWdlTSB9IGZyb20gJy4uL21vZGVsL2xheW91dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMYXlvdXRDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudDogYW55XG4gICAgKSB7IH1cblxuICAgIGdldExheW91dEJ5UGFnZShwYWdlTm86IG51bWJlciwgcGFnZVNpemU6IG51bWJlciwgc29ydEJ5OiBzdHJpbmcsIG9yZGVyQnk6IHN0cmluZywgc2VhcmNoOiBhbnlbXSwgb3JnSUQ6IG51bWJlcik6IE9ic2VydmFibGU8UGFnZU08TGF5b3V0TT4+e1xuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcblxuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYWdlTm8nLCBwYWdlTm8pO1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdwYWdlU2l6ZScsIHBhZ2VTaXplKTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnc29ydEJ5Jywgc29ydEJ5KTtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZCgnb3JkZXJCeScsIG9yZGVyQnkpO1xuXG4gICAgICAgIHNlYXJjaC5mb3JFYWNoKHNlYXJjaCA9PiBwYXJhbXMgPSBwYXJhbXMuYXBwZW5kKCdzZWFyY2gnLCBzZWFyY2gpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhZ2VNPExheW91dE0+PihgJHt0aGlzLmVudmlyb25tZW50LlRTQ19DT01NT05fQVBJX1VSTH1vcmdhbml6YXRpb25zLyR7b3JnSUR9L2xheW91dHMvcGFnZWAsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG4gICAgfVxuXG4gICAgZ2V0TGF5b3V0QnlPcmdJRChvcmdJRCk6IE9ic2VydmFibGU8TGF5b3V0TVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PExheW91dE1bXT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzYCk7XG4gICAgfVxuXG4gICAgZ2V0TGF5b3V0QnlJRChvcmdJRCwgbGF5b3V0SUQpOiBPYnNlcnZhYmxlPExheW91dE0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8TGF5b3V0TT4oYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzLyR7bGF5b3V0SUR9YCk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGF5b3V0KG9yZ0lELCBsYXlvdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0c2AsIGxheW91dCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGF5b3V0KG9yZ0lELCBsYXlvdXRJRCwgbGF5b3V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy5lbnZpcm9ubWVudC5UU0NfQ09NTU9OX0FQSV9VUkx9b3JnYW5pemF0aW9ucy8ke29yZ0lEfS9sYXlvdXRzLyR7bGF5b3V0SUR9YCwgbGF5b3V0KTtcbiAgICB9XG5cbiAgICBkZWxldGVMYXlvdXQob3JnSUQsIGxheW91dElEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuZW52aXJvbm1lbnQuVFNDX0NPTU1PTl9BUElfVVJMfW9yZ2FuaXphdGlvbnMvJHtvcmdJRH0vbGF5b3V0cy8ke2xheW91dElEfWApXG4gICAgfVxufVxuIl19