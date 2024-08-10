import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class EnterpriseEvent {

    orgTagChange = new BehaviorSubject<string>('YES');
    headerOrgChange = new BehaviorSubject<string>('YES');
    
    user: any = {
        firstName: '',
        lastName: '',
        profileImg: ''
    }
    /* CURRENT_ACTIVE_USER */
    _ActiveUser: BehaviorSubject<any> = new BehaviorSubject<any>(this.user); // init with dummy obj to handle error on binding

    constructor() { }
}
