import { CommonModule } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class EllipsisPipeService {
    transform(value, limit) {
        if (value == null)
            return null;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}
EllipsisPipeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeService, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
EllipsisPipeService.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeService, name: "dotdotdot" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeService, decorators: [{
            type: Pipe,
            args: [{
                    name: 'dotdotdot'
                }]
        }] });
export class EllipsisPipeModule {
}
EllipsisPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EllipsisPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, declarations: [EllipsisPipeService], imports: [CommonModule], exports: [EllipsisPipeService] });
EllipsisPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: EllipsisPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [EllipsisPipeService],
                    exports: [EllipsisPipeService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMtcGlwZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbGlicmFyeS90c2MtY29tbW9uL3NyYy9saWIvdHNjL3NlcnZpY2UvZWxsaXBzaXMtcGlwZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSzlELE1BQU0sT0FBTyxtQkFBbUI7SUFFNUIsU0FBUyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ2xDLElBQUksS0FBSyxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQztRQUMvQixPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RSxDQUFDOztpSEFMUSxtQkFBbUI7K0dBQW5CLG1CQUFtQjs0RkFBbkIsbUJBQW1CO2tCQUgvQixJQUFJO21CQUFDO29CQUNGLElBQUksRUFBRSxXQUFXO2lCQUNwQjs7QUFjRCxNQUFNLE9BQU8sa0JBQWtCOztnSEFBbEIsa0JBQWtCO2lIQUFsQixrQkFBa0IsaUJBYmxCLG1CQUFtQixhQVNsQixZQUFZLGFBVGIsbUJBQW1CO2lIQWFuQixrQkFBa0IsWUFKbEIsQ0FBQyxZQUFZLENBQUM7NEZBSWQsa0JBQWtCO2tCQUw5QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ2RvdGRvdGRvdCdcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNQaXBlU2VydmljZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiBsaW1pdCA/IHZhbHVlLnN1YnN0cmluZygwLCBsaW1pdCkgKyAnLi4uJyA6IHZhbHVlO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtFbGxpcHNpc1BpcGVTZXJ2aWNlXSxcbiAgICBleHBvcnRzOiBbRWxsaXBzaXNQaXBlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNQaXBlTW9kdWxlIHsgfSJdfQ==