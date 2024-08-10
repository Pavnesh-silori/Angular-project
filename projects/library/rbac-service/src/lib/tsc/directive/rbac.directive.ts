import { Directive, Input, NgModule, TemplateRef, ViewContainerRef } from '@angular/core';

import { IsResourcePermission } from '../service/rbac.service';

@Directive({
    selector: '[isRenderRBAC]'
})

export class RBACDirective2 {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private isResourcePermission: IsResourcePermission
    ) { }

    @Input() set isRenderRBAC(resourcePermission: Array<Array<string>>) {
        let renderRBAC = false;
        renderRBAC = resourcePermission ? this.isResourcePermission.isResourcePermission(resourcePermission) : true;

        if (renderRBAC) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}

@NgModule({
    declarations: [RBACDirective2],
    exports: [RBACDirective2]
})

export class RBACDirectiveModule2 { }
