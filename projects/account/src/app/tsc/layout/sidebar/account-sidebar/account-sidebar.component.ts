import { Component, HostListener, OnInit } from '@angular/core';

import { ThemeOptions } from '@rootProject/theme-options';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// library
import {
    ProfileImg,
    UserService as LibraryUserService,
} from '@library/user-service';
// /library/

@Component({
    selector: 'app-account-sidebar',
    templateUrl: './account-sidebar.component.html',
    styleUrls: ['./account-sidebar.component.scss']
})

export class AccountSidebarComponent implements OnInit {
    ProfileImg = ProfileImg;
    public extraParameter: any;

    user: any = {
        firstName: null,
        lastName: null,
        profileImgUrl: null,
    }

    constructor(
        public globals: ThemeOptions,
        private activatedRoute: ActivatedRoute,
        public libraryUserService: LibraryUserService,
    ) { }

    @select('config') public config$: Observable<any>;

    public config: PerfectScrollbarConfigInterface = {};
    private newInnerWidth: number;
    private innerWidth: number;
    activeId = '';

    toggleSidebar() {
        this.globals.toggleSidebar = !this.globals.toggleSidebar
    }

    ngOnInit() {
        setTimeout(() => {
            this.innerWidth = window.innerWidth;
            if (this.innerWidth < 1200) {
                this.globals.toggleSidebar = true;
            }
        });

        this.extraParameter = this.activatedRoute.snapshot.firstChild.routeConfig.path;
        /* SUBSCRIPTION_TO_USER_UPDATE */
        // this.enterpriseEvent._ActiveUser.subscribe((user) => this.user = user);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.newInnerWidth = event.target.innerWidth;

        if (this.newInnerWidth < 1200) {
            this.globals.toggleSidebar = true;
        } else {
            this.globals.toggleSidebar = false;
        }
    }
}
