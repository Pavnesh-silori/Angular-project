import { Component, OnInit } from '@angular/core';
import { ThemeOptions } from '@rootProject/theme-options';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(
        public themeOptions: ThemeOptions,
    ) { }

    ngOnInit(): void {
    }

}
