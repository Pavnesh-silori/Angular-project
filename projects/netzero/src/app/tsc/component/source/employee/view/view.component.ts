import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeController } from '@netzero/controller/employee.controller';

// tsc-library
import { COMMON_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
// /tsc-library

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styles: []
})

export class ViewComponent implements OnInit {

	COMMON_CONSTANT = COMMON_CONSTANT;

	currentOrgID: any;

	employeeID: any;
	employee: any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private employeeController: EmployeeController,
		private stroageService: StorageService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.stroageService.getStorage('currentOrgID');
		this.activatedRoute.parent.parent.params.subscribe((params) => {
			this.employeeID = params.employeeID;
		});
		this.getEmployeeByID();
	}

	getEmployeeByID(){
		this.employeeController.getEmployeeByID(this.currentOrgID, this.employeeID).subscribe((res: any) => {
			console.log(res);
			
			this.employee = res;
		});
	}
}
