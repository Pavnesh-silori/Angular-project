import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RoleController } from '@Admin/controller/role.controller';
@Component({
	selector: 'app-permission-view',
	templateUrl: './permission-view.component.html',
	styleUrls: ['./permission-view.component.scss']
})
export class PermissionViewComponent implements OnInit {

	rootOrgID: any;
	roleID: any;
	roleName: any;
	resPermission: any;
	isViewOnly: boolean = true;

	displayedColumns: string[] = ['resource', 'fullAccess', 'create', 'view', 'edit', 'delete', 'additionalPermissions'];

	constructor(
		private activatedRoute: ActivatedRoute,
		private roleController: RoleController,
		public dialogRef: MatDialogRef<PermissionViewComponent>,
		@Inject(MAT_DIALOG_DATA) public data
	) {

		this.dialogRef.disableClose = true;
		this.roleID = data['roleID'];
		this.rootOrgID = data['rootOrgID'];
	}

	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
			this.getPermission(this.rootOrgID, this.roleID);
		});
	}

	getPermission(rootOrgID, roleID) {
		this.roleController.getPermissionByRoleID(rootOrgID, roleID)
			.subscribe((resPermissionRes) => {
				this.resPermission = resPermissionRes['resourcePermissions'];
				this.roleName = resPermissionRes['roleName']
			});
	}

}
