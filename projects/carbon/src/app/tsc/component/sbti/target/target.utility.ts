import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TargetUtility {

    readonly CREATED = 'CREATED';
    readonly UPDATED = 'UPDATED';

    constructor() { }

    private target: BehaviorSubject<any> = new BehaviorSubject(null);
    $target = this.target.asObservable();

    created = () => { this.target.next(this.CREATED); }

    updated = () => { this.target.next(this.UPDATED); }

}
