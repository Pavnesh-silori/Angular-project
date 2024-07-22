import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from '@rootProject/theme-options';

@Component({
    selector: 'app-right',
    templateUrl: './right.component.html',
    styleUrls: ['./right.component.scss']
})

export class RightComponent implements OnInit {

    constructor(
        public globals: ThemeOptions,
    ) { }

    ngOnInit(): void {
    }

    toggleOrgDrawer() {
        this.globals.toggleOrgDrawer = !this.globals.toggleOrgDrawer;
    }

    toggleSettingDrawer() {
        this.globals.toggleSettingDrawer = !this.globals.toggleSettingDrawer;
    }

}
