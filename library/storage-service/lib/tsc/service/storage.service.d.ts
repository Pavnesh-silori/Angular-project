import * as i0 from "@angular/core";
export declare class StorageService {
    constructor();
    setStorage(key: any, value: any): void;
    getStorage(key: any): string;
    deleteStorage(key: any): void;
    clearStorage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageService>;
}
