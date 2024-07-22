import { ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { IsFeatureAvailable } from '../service/feature.service';
import * as i0 from "@angular/core";
export declare class FeatureDirective {
    private _er;
    private renderer;
    private isFeatureAvailable;
    constructor(_er: ElementRef, renderer: Renderer2, isFeatureAvailable: IsFeatureAvailable);
    set isDisableFeature(featureKeyID: Array<Array<string>>);
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FeatureDirective, "[isDisableFeature]", never, { "isDisableFeature": "isDisableFeature"; }, {}, never>;
}
export declare class FeatureDirectiveModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDirectiveModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FeatureDirectiveModule, [typeof FeatureDirective], never, [typeof FeatureDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FeatureDirectiveModule>;
}
export declare class FeatureDirective2 {
    private templateRef;
    private viewContainer;
    private isFeatureAvailable;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, isFeatureAvailable: IsFeatureAvailable);
    set isRenderFeature(featureKeyID: Array<Array<string>>);
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDirective2, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FeatureDirective2, "[isRenderFeature]", never, { "isRenderFeature": "isRenderFeature"; }, {}, never>;
}
export declare class FeatureDirectiveModule2 {
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureDirectiveModule2, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FeatureDirectiveModule2, [typeof FeatureDirective2], never, [typeof FeatureDirective2]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FeatureDirectiveModule2>;
}
