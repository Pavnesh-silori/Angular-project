import { TemplateRef, ViewContainerRef } from '@angular/core';
import { IsResourcePermission } from '../service/rbac.service';
import * as i0 from "@angular/core";
export declare class RBACDirective2 {
    private templateRef;
    private viewContainer;
    private isResourcePermission;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, isResourcePermission: IsResourcePermission);
    set isRenderRBAC(resourcePermission: Array<Array<string>>);
    static ɵfac: i0.ɵɵFactoryDeclaration<RBACDirective2, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RBACDirective2, "[isRenderRBAC]", never, { "isRenderRBAC": "isRenderRBAC"; }, {}, never>;
}
export declare class RBACDirectiveModule2 {
    static ɵfac: i0.ɵɵFactoryDeclaration<RBACDirectiveModule2, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RBACDirectiveModule2, [typeof RBACDirective2], never, [typeof RBACDirective2]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RBACDirectiveModule2>;
}
