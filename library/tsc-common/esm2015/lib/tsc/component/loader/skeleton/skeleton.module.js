import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import * as i0 from "@angular/core";
import * as i1 from "ngx-skeleton-loader";
export class SkeletonModule {
}
SkeletonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SkeletonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, declarations: [SkeletonComponent], imports: [i1.NgxSkeletonLoaderModule, CommonModule], exports: [SkeletonComponent] });
SkeletonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, imports: [[
            NgxSkeletonLoaderModule.forRoot(),
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SkeletonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SkeletonComponent],
                    imports: [
                        NgxSkeletonLoaderModule.forRoot(),
                        CommonModule
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    exports: [SkeletonComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL2NvbXBvbmVudC9sb2FkZXIvc2tlbGV0b24vc2tlbGV0b24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFZOUQsTUFBTSxPQUFPLGNBQWM7OzRHQUFkLGNBQWM7NkdBQWQsY0FBYyxpQkFUUixpQkFBaUIseUNBRzVCLFlBQVksYUFHTixpQkFBaUI7NkdBR2xCLGNBQWMsWUFSZDtZQUNMLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtZQUNqQyxZQUFZO1NBQ2Y7NEZBS1EsY0FBYztrQkFWMUIsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFO3dCQUNMLHVCQUF1QixDQUFDLE9BQU8sRUFBRTt3QkFDakMsWUFBWTtxQkFDZjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnLi9za2VsZXRvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOZ3hTa2VsZXRvbkxvYWRlck1vZHVsZSB9IGZyb20gJ25neC1za2VsZXRvbi1sb2FkZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1NrZWxldG9uQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5neFNrZWxldG9uTG9hZGVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gICAgZXhwb3J0czogW1NrZWxldG9uQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFNrZWxldG9uTW9kdWxlIHsgfSJdfQ==