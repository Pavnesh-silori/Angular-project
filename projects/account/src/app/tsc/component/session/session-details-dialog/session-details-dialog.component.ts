import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { TerminateSessionComponent } from '../terminate-session-dialog/terminate-session-dialog.component';

import { DateService } from '@Account/service/date.service';

@Component({
	selector: 'app-session-details',
	templateUrl: './session-details-dialog.component.html',
	styleUrls: ['./session-details-dialog.component.scss']
})
export class SessionDetailsComponent implements OnInit {

	session: any;
	device: string;
	operatingSystem: string;
	browser: string;

	constructor(
		@Inject(MAT_DIALOG_DATA) private data,
		private dateService: DateService,
		private dialog: MatDialog,
	) {
		this.session = this.data;
	}

	ngOnInit(): void {
	}

	openDialog(session: any) {
		this.dialog.open(TerminateSessionComponent, {
			minWidth: '600px',
			maxWidth: '600px',
			minHeight: '20',
			maxHeight: '50%',
		})
	}

	getTime(usedDate: string) {
		return this.dateService.getTimeAgo(usedDate);
	}

	checkLocation(usedLocation: string) {
		return (usedLocation == null || usedLocation == "") ? 'Unknown location' : usedLocation;
	}

	checkDeviceName(usedDevice: string) {
		return (usedDevice == null || usedDevice == "") ? 'Unknown Device' : usedDevice;
	}

	checkBrowserName(usedBrowser: string) {
		return (usedBrowser == null || usedBrowser == "") ? 'Unknown Browser' : usedBrowser;
	}

	checkOperatingSystemName(usedOperatingSystem: string) {
		return (usedOperatingSystem == null || usedOperatingSystem == "") ? 'Unknown Operating System' : usedOperatingSystem;
	}

	checkIpAddress(usedIpAddress: string) {
		return (usedIpAddress == null || usedIpAddress == "") ? '--' : usedIpAddress;
	}

	checkMacAddress(usedMacAddress: string) {
		return (usedMacAddress == null || usedMacAddress == "") ? '--' : usedMacAddress;
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
