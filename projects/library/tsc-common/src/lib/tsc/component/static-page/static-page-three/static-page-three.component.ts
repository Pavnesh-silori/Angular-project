import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaticPageOne } from '../../../model/static-page-one.model'; 

@Component({
    selector: 'lib-static-page-three',
    templateUrl: './static-page-three.component.html',
    styleUrls: []
})

export class StaticPageThreeComponent implements OnInit {
    data = new StaticPageOne();

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }

}
