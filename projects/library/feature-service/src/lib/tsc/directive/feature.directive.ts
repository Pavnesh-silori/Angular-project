import { Directive, ElementRef, Input, NgModule, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

import { IsFeatureAvailable } from '../service/feature.service'; 

@Directive({
    selector: '[isDisableFeature]'
})

export class FeatureDirective {

    constructor(
        private _er: ElementRef,
        private renderer: Renderer2,
        private isFeatureAvailable: IsFeatureAvailable
    ) { }

    @Input() set isDisableFeature(featureKeyID: Array<Array<string>>) {
        if (!this.isFeatureAvailable.isFeatureAvailable(featureKeyID)) {
            // this.renderer.setAttribute(this._er.nativeElement, 'disabled', 'true');

            this.renderer.setProperty(this._er.nativeElement, 'disabled', true);
            // this._er.nativeElement.disabled = true;
        } 
        // else {
        //     this.renderer.setProperty(this._er.nativeElement, 'disabled', false);
        // }
    }
}

@NgModule({
    declarations: [FeatureDirective],
    exports: [FeatureDirective]
})

export class FeatureDirectiveModule { }




@Directive({
    selector: '[isRenderFeature]'
})

export class FeatureDirective2 {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private isFeatureAvailable: IsFeatureAvailable
    ) { }

    @Input() set isRenderFeature(featureKeyID: Array<Array<string>>) {
        let renderFeature = false;
        renderFeature = featureKeyID ? this.isFeatureAvailable.isFeatureAvailable(featureKeyID) : true;

        if (renderFeature) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}

@NgModule({
    declarations: [FeatureDirective2],
    exports: [FeatureDirective2]
})

export class FeatureDirectiveModule2 { }
