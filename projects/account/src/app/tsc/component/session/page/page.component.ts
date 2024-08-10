import { Component, OnInit } from '@angular/core';

import { DateService } from '@Account/service/date.service';

import { MatDialog } from '@angular/material/dialog';

import { SessionDetailsComponent } from '../session-details-dialog/session-details-dialog.component';

import {
    catchError,
} from "rxjs/operators";

import { Session } from '@Account/model/Session.model';
import { StorageService } from '@library/storage-service';
import { TABLE_CONSTANT } from '@library/tsc-common';

import { SessionDataController } from '@Account/controller/session-data.controller';

@Component({
    selector: 'app-session',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class SessionComponent implements OnInit {

    TABLE_CONSTANT = TABLE_CONSTANT;

    displayedColumn: string[] = ['name', 'location', 'sessions'];
    resultLength: number = 0;

    sessionM: any = new Session();

    dataSource: Session[] = [];

    sessionData: any;
    userID: any;
    device: string;
    operatingSystem: string;
    browser: string;

    constructor(
        private sessionDataController: SessionDataController,
        private storageService: StorageService,
        private dateService: DateService,
        private dialog: MatDialog,
    ) { }


    ngOnInit(): void {
        this.userID = this.storageService.getStorage('userID');
    }

    ngAfterViewInit() {
        this.sessionDataController.getSessionData(this.userID)
            .pipe(catchError(() => []))
            .subscribe((dataSource: Session[]) => {
                this.dataSource = dataSource;
            });
    }

    openDialog(row) {
        this.dialog.open(SessionDetailsComponent, {
            data: row,
            minWidth: '800px',
            maxWidth: '1000px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        })
    }

    getTime(usedDate: string) {
        return this.dateService.getTimeAgo(usedDate);
    }

    checkDevice(usedDevice: string) {

        usedDevice = usedDevice.toLowerCase();

        if (usedDevice.includes('mobile') || usedDevice.includes('phone'))
            this.device = 'assets/images/smartphone.png';
        else if (usedDevice.includes('computer') || usedDevice.includes('laptop') || usedDevice.includes('pc'))
            this.device = 'assets/images/laptop.png';
        else
            this.device = 'assets/images/default-device.png';

        return this.device;
    }

    checkOperatingSystem(usedOperatingSystem: string) {

        usedOperatingSystem = usedOperatingSystem.toLowerCase();

        if (usedOperatingSystem.includes('windows'))
            this.operatingSystem = 'assets/images/windows.png';
        else if (usedOperatingSystem.includes('linux'))
            this.operatingSystem = 'assets/images/ubuntu.png';
        else if (usedOperatingSystem.includes('mac'))
            this.operatingSystem = 'assets/images/apple.png';
        else if (usedOperatingSystem.includes('ios'))
            this.operatingSystem = 'assets/images/ios.png';
        else if (usedOperatingSystem.includes('android'))
            this.operatingSystem = 'assets/images/android.png';
        else
            this.operatingSystem = 'assets/images/default-OS.png';

        return this.operatingSystem;
    }

    checkBrowser(usedBrowser: string) {

        usedBrowser = usedBrowser.toLowerCase();

        if (usedBrowser.includes('google') || usedBrowser.includes('chrome'))
            this.browser = 'assets/images/chrome.png';
        else if (usedBrowser.includes('microsoft') || usedBrowser.includes('edge'))
            this.browser = 'assets/images/edge.png';
        else if (usedBrowser.includes('brave'))
            this.browser = 'assets/images/brave.png';
        else if (usedBrowser.includes('safari'))
            this.browser = 'assets/images/safari.png';
        else if (usedBrowser.includes('safari'))
            this.browser = 'assets/images/safari.png';
        else if (usedBrowser.includes('opera'))
            this.browser = 'assets/images/opera.png';
        else if (usedBrowser.includes('mozilla') || usedBrowser.includes('firefox'))
            this.browser = 'assets/images/firefox.png';
        else
            this.browser = 'assets/images/default-browser.png';

        return this.browser;
    }

}
