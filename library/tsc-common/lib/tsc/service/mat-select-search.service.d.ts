import { FormControl } from "@angular/forms";
import { ReplaySubject, Subject } from "rxjs";
import * as i0 from "@angular/core";
export declare class MatSelectSearchService {
    entityArr: any[];
    filterFC: FormControl;
    filterUnsubscribe: Subject<void>;
    filteredEntities: ReplaySubject<any[]>;
    searchBy: string[];
    constructor(searchBy: string[]);
    createSubscription(): void;
    filterMultipleValue(data: any[], filterValue: string, filterBy: string[]): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatSelectSearchService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatSelectSearchService>;
}
