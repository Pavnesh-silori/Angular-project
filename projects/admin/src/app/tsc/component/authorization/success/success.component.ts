import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute,
    Router,
} from '@angular/router';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.scss']
})

export class SuccessComponent implements OnInit {
    redirectUrl: string = '/';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(queryParam => {
            if (queryParam.redirectUrl) {
                this.redirectUrl = queryParam.redirectUrl;
            }
        });

        this.router.navigate([this.redirectUrl]);
    }

}
