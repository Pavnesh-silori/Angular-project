import {
    Component,
    OnInit,
} from '@angular/core';

import {
    animate,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'app-layout-two',
    templateUrl: './layout-two.component.html',
    styleUrls: [],
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
                    animate('100ms ease', style({ opacity: 1, transform: 'translateY(0)'  })),
                ], { optional: true }),

                query(':leave', [
                    animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)'  })),
                ], { optional: true })
            ]),
        ])
    ]
})

export class LayoutTwoComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
