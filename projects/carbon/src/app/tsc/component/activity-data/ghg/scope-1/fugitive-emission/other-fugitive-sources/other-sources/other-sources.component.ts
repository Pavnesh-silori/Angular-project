import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

import { FugitiveReleasesCreateUpdateDailog } from '../_shared/fugitive-release-create-update/fugitive-releases-create-update.component';

// tsc-libarary
import { StorageService } from '@library/storage-service';
import { FormAction } from '@library/tsc-common';

@Component({
  selector: 'app-other-sources',
  templateUrl: './other-sources.component.html',
  styleUrls: []
})
export class OtherSourcesComponent implements OnInit {

    currentOrgID: any;

    faPlus = faPlus;
    faSearch = faSearch;

    otherSourceType: any;

    viewFugitiveReleaseCapacity: boolean = true;

    @ViewChild('tabGroup', { read: MatTabGroup }) tabGroup: MatTabGroup;

    activeTabIndex: number = 0;
    activeLink = '/fugitive-emission-other-sources/other-fugitive-sources/fugitive-release/fugitive-release-list';

    tab: any = [
        {
            label: 'Fugitive releases',
            title: 'Records of fugitive gases released from other processes.',
            tabType: 'fugitive-release',
            routerLink: '/fugitive-release-list',
        },
       
    ];


  constructor(
        private dialog: MatDialog,
        private storageService: StorageService,
        private router: Router,
  ) { }

  ngOnInit(): void {

    this.currentOrgID = this.storageService.getStorage('currentOrgID');
  }

  createEquipmentGroup(operation) {
    let dialogRef;
    if (operation == FormAction.CREATE) {
        dialogRef = this.dialog.open(FugitiveReleasesCreateUpdateDailog, {
            data: {
                action: operation,
                currentOrgID: this.currentOrgID,
            },
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });
    }
    dialogRef.afterClosed()
        .subscribe((result) => {
            if (result === 'opSuccess') {
               const parentUrl = '/fugitive-emission-other-sources/other-fugitive-sources';
                    const currentUrl = '/fugitive-emission-other-sources/other-fugitive-sources/fugitive-release/fugitive-release-list';
                    this.router.navigateByUrl(parentUrl, {skipLocationChange: true}).then(() => {
                        this.router.navigate([currentUrl]);
                    });
            }
        })
}

}
