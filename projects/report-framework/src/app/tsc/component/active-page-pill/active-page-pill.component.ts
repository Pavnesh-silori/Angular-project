import { Component, HostListener, Input, OnInit } from '@angular/core';

import { ActivePagePillService } from '@report-framework/service/active-page-pill.service';

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
		private activePagePillService: ActivePagePillService
	) { }

	ngOnInit(): void {

		switch (this.type) {
			case 'ongoing-report':
				if (this.type == 'ongoing-report') {
					this.activePagePillService.ongoingReports.subscribe((folder) => {
						this.createFolderPill(folder);
					});
				}
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
		this.activePagePillService.clearOngoing();
	}

}
