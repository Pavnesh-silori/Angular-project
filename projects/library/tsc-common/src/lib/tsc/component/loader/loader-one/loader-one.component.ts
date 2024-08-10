import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-loader-one',
    templateUrl: './loader-one.component.html',
    styleUrls: ['./loader-one.component.scss'],
})

export class LoaderOneComponent {
    isLoading: BehaviorSubject<boolean> = this.loaderOneService.isLoading;

    constructor(
        public loaderOneService: LoaderOneService
    ) { }
}

@Injectable({
    providedIn: 'root',
})

export class LoaderOneService {
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {}

    show() {
        // console.log('in show loader');
        this.isLoading.next(true);
    }

    hide() {
        // console.log('in hide loader');
        this.isLoading.next(false);
    }
}
