import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CommonEvent {

    layoutChange = new BehaviorSubject<string>('YES');

    constructor() { }
}