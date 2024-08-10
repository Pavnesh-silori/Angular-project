import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { GenerateOtpComponent } from './generate-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import * as i0 from "@angular/core";
export class GenerateOtpModule {
}
GenerateOtpModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GenerateOtpModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, declarations: [GenerateOtpComponent], imports: [CommonModule,
        MatRippleModule,
        NgOtpInputModule], exports: [GenerateOtpComponent] });
GenerateOtpModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, imports: [[
            CommonModule,
            MatRippleModule,
            NgOtpInputModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: GenerateOtpModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GenerateOtpComponent
                    ],
                    imports: [
                        CommonModule,
                        MatRippleModule,
                        NgOtpInputModule
                    ],
                    exports: [
                        GenerateOtpComponent,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUtb3RwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvZ2VuZXJhdGUtb3RwL3NyYy9saWIvZ2VuZXJhdGUtb3RwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQWlCaEQsTUFBTSxPQUFPLGlCQUFpQjs7K0dBQWpCLGlCQUFpQjtnSEFBakIsaUJBQWlCLGlCQWJ0QixvQkFBb0IsYUFHcEIsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0IsYUFJaEIsb0JBQW9CO2dIQUlmLGlCQUFpQixZQVhqQjtZQUNMLFlBQVk7WUFDWixlQUFlO1lBQ2YsZ0JBQWdCO1NBRW5COzRGQU1RLGlCQUFpQjtrQkFmN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjtxQkFFbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjtxQkFFdkI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbmltcG9ydCB7IEdlbmVyYXRlT3RwQ29tcG9uZW50IH0gZnJvbSAnLi9nZW5lcmF0ZS1vdHAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTmdPdHBJbnB1dE1vZHVsZSB9IGZyb20gJ25nLW90cC1pbnB1dCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEdlbmVyYXRlT3RwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgICAgICBOZ090cElucHV0TW9kdWxlXG5cbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgR2VuZXJhdGVPdHBDb21wb25lbnQsXG5cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlT3RwTW9kdWxlIHsgfVxuIl19