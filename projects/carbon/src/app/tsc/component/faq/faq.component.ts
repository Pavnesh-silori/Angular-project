import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styles: []
})
export class FaqComponent implements OnInit {

    defaultOpen = "default";

    constructor(
        private acitvatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void { }

    ngAfterViewInit() {
        this.acitvatedRoute.fragment
            .subscribe((fragment: string) => {
                if (fragment != null) {
                    this.goToFAQ(fragment);
                }
            })
    }

    goToFAQ(open) {
        const id = document.getElementById(open);
        setTimeout(() => {
            this.defaultOpen = open;
            id.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }, 1 * 1000);
    }
}
