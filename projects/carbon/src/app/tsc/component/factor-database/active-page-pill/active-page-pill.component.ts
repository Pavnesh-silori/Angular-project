import { Component, HostListener, Input, OnInit } from '@angular/core';

import { ActivePagePillService } from '@carbon/component/factor-database/active-page-pill/active-page-pill.service';

@Component({
    selector: 'app-active-page-pill',
    templateUrl: './active-page-pill.component.html',
    styles: [
    ]
})
export class ActivePagePillComponent implements OnInit {

    @Input() type: string;
    @Input() initFolderName: string;
    @Input() initFolderRoute: string;

    activePill: any[] = [];

    constructor(
        private activePagePillService: ActivePagePillService,
    ) { }

    ngOnInit(): void {
        if (this.type == 'standard-emission-factor') {
            this.activePagePillService.data$.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0);
            });
        }
        // else if (this.type == 'standard-estimation-factor') {
        //     this.activePagePillService.data$.subscribe((folder) => {
        //         setTimeout(() => {
        //             this.createFolderPill(folder);
        //         }, 0);
        //     });
        // } 
        else if (this.type == 'custom-emission-factor') {
            this.activePagePillService.custEF.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0);
            });
        } else if (this.type == 'custom-estimation-factor') {
            this.activePagePillService.custEstimationFactor.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0);
            });
        } else if (this.type == 'equipment-capacity') {
            this.activePagePillService.equipmentCapacityData.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0)
            });
        } else if (this.type == 'equipment-emission') {
            this.activePagePillService.equipmentEmissionData.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0)
            });
        } else if (this.type == 'fugitive-release') {
            this.activePagePillService.fugitiveReleaseData.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0)
            });
        } else if (this.type == 'fugitive-emission') {
            this.activePagePillService.fugitiveEmissionData.subscribe((folder) => {
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0)
            });
        }  else if (this.type == 'ongoing-report') {
            this.activePagePillService.ongoingReports.subscribe((folder) => {
                console.log('ongoin report - ', folder);
                
                setTimeout(() => {
                    this.createFolderPill(folder);
                }, 0)
            });
        }
    }

    createFolderPill(folder) {
        if (this.activePill.length == 0) {
            this.activePill.push({ name: this.initFolderName, route: this.initFolderRoute });
        }
        if (folder != null) {
            if (this.activePill.filter(f => f['name'] == folder['name']).length == 0)
                this.activePill.push(folder);
        } else {
            this.activePill = [];
            this.activePill.push({ name: this.initFolderName, route: this.initFolderRoute });
        }
    }

    @HostListener('window:popstate', ['$event'])
    onPopState() {
        if (this.activePill.length > 1) { this.activePill.pop(); }
    }

    removeFolder(index) {
        this.activePill = this.activePill.slice(0, ++index);
    }

    ngOnDestroy() {
        this.activePagePillService.clearData();
    }
}

