import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaticPageOne } from '../../../model/static-page-one.model'; 

@Component({
    selector: 'lib-static-page-one',
    templateUrl: './static-page-one.component.html',
    styleUrls: []
})

export class StaticPageOneComponent implements OnInit {
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
