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

// import { LoaderService } from '@loginCommon/service/loader.service';

@Component({
    selector: 'app-layout-one',
    templateUrl: './layout-one.component.html',
    styleUrls: ['./layout-one.component.scss'],
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

export class LayoutOneComponent implements OnInit {

    constructor(
        // public loaderService: LoaderService
    ) {
    }

    ngOnInit() {
    }

}
