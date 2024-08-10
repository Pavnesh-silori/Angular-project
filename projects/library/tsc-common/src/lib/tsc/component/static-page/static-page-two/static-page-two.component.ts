import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaticPageTwo } from '../../../model/static-page-two.model'; 

@Component({
    selector: 'app-static-page-two',
    templateUrl: './static-page-two.component.html',
    styles: [
    ]
})

export class StaticPageTwoComponent implements OnInit {
    data = new StaticPageTwo();

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.data = data.data;
        });
    }

}
