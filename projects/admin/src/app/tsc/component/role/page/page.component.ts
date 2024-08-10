import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PermissionViewComponent } from '../permission-view/permission-view.component';
import { RoleController } from '@Admin/controller/role.controller';

import { StorageService } from '@library/storage-service';

@Component({
	selector: 'app-page',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
	rootOrgID: any;

	applicationsRoles: any[];
	displayedColumns: string[] = ['Products', 'Roles', 'Users'];

	constructor(
		private dialog: MatDialog,
		private roleController: RoleController,
		private storageService: StorageService,
	) { }

	ngOnInit(): void {
		this.rootOrgID = this.storageService.getStorage(['rootOrgID']);
		this.getRole();
	}

	getRole() {
		this.roleController.getRoleList(this.rootOrgID).subscribe((Response: any[]) => {
			this.applicationsRoles = Response['application'];
		});

	}

	getPermission(roleID) {
		const dialog = this.dialog.open(PermissionViewComponent,
			{
				data: {
					roleID: roleID,
					rootOrgID: this.rootOrgID,
				},
				minWidth: '60vw',
				maxWidth: '60vw',
				height: '100%',
				position: { right: '-2px', top: '0px' },
			});
	}

}
