import { Component, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-pages-layout',
    templateUrl: './pages-layout.component.html',
    styleUrls: ['./pages-layout.component.scss'],
    animations: [

        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        flexDirection: 'column'
                    }),
                ]),
                query(':enter', [
                    animate('600ms ease', style({ opacity: 1 })),
                ], { optional: true }),

                query(':leave', [
                    animate('600ms ease', style({ opacity: 0 })),
                ], { optional: true })
            ]),
        ])
    ]
})
export class PagesLayoutComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
