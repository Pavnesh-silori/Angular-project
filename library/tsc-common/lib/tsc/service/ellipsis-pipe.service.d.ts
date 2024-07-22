import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export declare class EllipsisPipeService implements PipeTransform {
    transform(value: string, limit: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisPipeService, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<EllipsisPipeService, "dotdotdot">;
}
export declare class EllipsisPipeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<EllipsisPipeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<EllipsisPipeModule, [typeof EllipsisPipeService], [typeof i1.CommonModule], [typeof EllipsisPipeService]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<EllipsisPipeModule>;
}
