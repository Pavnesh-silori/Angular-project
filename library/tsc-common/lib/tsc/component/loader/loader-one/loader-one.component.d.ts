import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderOneComponent {
    loaderOneService: LoaderOneService;
    isLoading: BehaviorSubject<boolean>;
    constructor(loaderOneService: LoaderOneService);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderOneComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoaderOneComponent, "app-loader-one", never, {}, {}, never, never>;
}
export declare class LoaderOneService {
    isLoading: BehaviorSubject<boolean>;
    constructor();
    show(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderOneService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderOneService>;
}
