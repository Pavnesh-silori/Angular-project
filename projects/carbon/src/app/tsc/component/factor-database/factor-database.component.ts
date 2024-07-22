import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-factor-database',
    templateUrl: './factor-database.component.html',
    styles: [
    ]
})
export class FactorDatabaseComponent implements OnInit {

    activeLink: any;
    factorDatabaseType: any;

    database: any = [
        {
            routerLink: '/carbon-setting/factor-database/standard-emission-factor/standard/emission/database',
            databaseType: 'standard-emission-factor',
            label: 'Standard Emission Factors',
            title: 'View standard emission factor databases, their versions and values with auditable source.',
            pill: {
                type: 'standard-emission-factor',
                initFolderName: 'Databases',
                initFolderRoute: 'standard/emission/database'
            }
        },
        {
            routerLink: '/carbon-setting/factor-database/custom-emission-factor/custom/emission/database',
            databaseType: 'custom-emission-factor',
            label: 'Custom Emission Factors',
            title: 'View Custom emission factor databases, their versions and values with auditable source.',
            pill: {
                type: 'custom-emission-factor',
                initFolderName: 'Databases',
                initFolderRoute: 'custom/emission/database'
            }
        },
        {
            routerLink: '/carbon-setting/factor-database/custom-estimation-factor/custom/estimation/database',
            databaseType: 'custom-estimation-factor',
            label: 'Custom Estimation Factors',
            title: 'View Custom estimation factor databases, their versions and values with auditable source.',
            pill: {
                type: 'custom-estimation-factor',
                initFolderName: 'Databases',
                initFolderRoute: 'custom/estimation/database'
            }
        }
    ];

    pill = (index) => this.database[index]['pill'];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void { }

    activeTabIndex: number = 0;
    ngAfterViewInit() {
        this.activatedRoute.params
            .subscribe((params) => {
                this.factorDatabaseType = params['factorDatabaseType'];

                let index;
                switch (this.factorDatabaseType) {
                    case 'standard-emission-factor':
                        index = 0;
                        this.activeLink = this.database[0]['routerLink']
                        break;
                    case 'custom-emission-factor':
                        index = 1;
                        this.activeLink = this.database[1]['routerLink']
                        break;
                    case 'custom-estimation-factor':
                        index = 2;
                        this.activeLink = this.database[2]['routerLink']
                        break;
                    default:
                        index = 0;
                        this.activeLink = this.database[0]['routerLink']
                        break;
                }
            });
    }
}
