import { Component, HostBinding, OnInit } from '@angular/core';

import { select } from '@angular-redux/store';
import { ThemeOptions } from '@rootProject/theme-options';

import { Observable } from 'rxjs';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';

@Component({
    selector: 'app-app-header',
    templateUrl: './app-header.component.html',
    styles: [
    ]
})
export class AppHeaderComponent implements OnInit {

    faEllipsisV = faEllipsisV;
    faArrowAltCircleLeft = faArrowAltCircleLeft;

    constructor(
        public globals: ThemeOptions
    ) { }

    @HostBinding('class.isActive')
    get isActiveAsGetter() {
        return this.isActive;
    }

    isActive: boolean;

    @select('config') public config$: Observable<any>;

    toggleSidebarMobile() {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    }

    toggleHeaderMobile() {
        this.globals.toggleHeaderMobile = !this.globals.toggleHeaderMobile;
    }

    ngOnInit(): void {
    }

}
