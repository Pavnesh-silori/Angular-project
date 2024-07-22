import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonTooltipEnum, MATERIAL_CONSTANT } from '@library/tsc-common';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    ButtonTooltipEnum = ButtonTooltipEnum;
    
    refresh: boolean = true;
    productionRouteID: number;

    constructor(
        private router: Router,
        activatedRoute: ActivatedRoute,
    ) { 
        this.productionRouteID = activatedRoute.snapshot.params.productionRouteID;
    }

    ngOnInit(): void { }

    routeToUpdateProductionRoute = () => {
        this.router.navigate(['/source/production-route', this.productionRouteID, 'update'])
    }

}

