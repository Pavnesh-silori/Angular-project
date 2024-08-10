import { Injectable } from '@angular/core';
import { FormControl } from "@angular/forms";

import { ReplaySubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class MatSelectSearchService {

    entityArr: any[] = [];
    filterFC: FormControl = new FormControl();
    filterUnsubscribe: Subject<void> = new Subject<void>();
    filteredEntities: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    searchBy: string[];

    constructor(searchBy: string[]) {
        this.searchBy = searchBy;
    }

    createSubscription() {
        this.filteredEntities.next(this.entityArr);

        this.filterFC.valueChanges
            .pipe(takeUntil(this.filterUnsubscribe))
            .subscribe(async () => {
                this.filteredEntities = await this.filterMultipleValue(
                    this.entityArr,
                    this.filterFC.value,
                    this.searchBy
                );
            });
    }

    filterMultipleValue(data: any[], filterValue: string, filterBy: string[]): Promise<any> {
        return new Promise(resolve => {
            let filtered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
            if (!data) {
                resolve('');
            }
            let search = filterValue;
            if (!search) {
                filtered.next(data.slice());
            } else {
                search = search.toLowerCase();
                filtered.next(
                    data.filter((filterData) =>
                        filterBy.some(field =>
                            filterData[field].toLowerCase().indexOf(search) > -1
                        )
                    )
                );
            }
            resolve(filtered);
        });
    }

}
