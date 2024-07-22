import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { fromEvent, merge } from 'rxjs';

import { SchedulerWorkflowComponent } from '@report-framework/component/assignment/scheduler-workflow/scheduler-workflow.component';

import { WorkflowExists } from '@report-framework/model/workflow.model';

import { AssignmentController } from '@report-framework/controller/assignment.controller';

// tsc-library
import { ButtonLabelEnum, DialogEnum, DialogOneComponent, DialogOneEnum, FormAction, MatSelectSearchService, ResponseM } from '@library/tsc-common';
import { MessageAlertTypeEnum } from '@library/tsc-common';
import { MessageAlertIconEnum } from '@library/tsc-common';
import { ProfileImg, UserService } from '@library/user-service';
import { StorageService } from '@library/storage-service';
import { ToastrService } from '@library/toastr-service';
// /tsc-library

@Component({
	selector: 'app-assignment',
	templateUrl: './assignment.component.html',
	styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

	@Input() type: string = null;
	@Input() reportingFrameworkID: any = null;
	@Input() configID: any = null;
	@Input() assignmentTempActive: boolean = false;

	ButtonLabelEnum = ButtonLabelEnum;
	messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;
    DialogEnum = DialogEnum;
    FormAction = FormAction;

	currentOrgID: any;
	configIntervalID: number;

	sectionGroupDataList: any[] = [];
	activeAccodianGroup: string;

	selectUnselectAllFC = new FormControl(false);

	allSection: any[] = [];
	allGroup: any[] = [];
	selectedSection: any[] = [];
	selectedGroup: any[] = [];

	assignBtnFlag: boolean = false;
	assignMetricList: any[] = [];
	unAssignMetricList: any = [];

	searchFC: FormControl = new FormControl('');
	searchValue: string = '';
	searchFlag: boolean = false;
	refreshFlag: boolean = false;

	assigneeApproverList: any[] = [];
	createBtnFlag: boolean = false;
	workflowExists = new WorkflowExists();

	assigneeUserList: any[] = [];
	approverUserList: any[] = [];

	assigneeFC: FormControl = new FormControl();
	approverFC: FormControl = new FormControl();

	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

	assigneeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
	approverSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private assignmentController: AssignmentController,
		private dialog: MatDialog,
		private userService: UserService,
		private storageService: StorageService,
		private toastrService: ToastrService,

	) { }

	ngOnInit(): void {
		this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));

		this.activatedRoute.queryParams.subscribe((queryParam) => {
			this.configIntervalID = queryParam['configIntervalID'];

			if (this.reportingFrameworkID == null) {
				this.reportingFrameworkID = queryParam['reportingFrameworkID'];
				this.configID = queryParam['configID'];
			}
			this.workflowExist();
			this.getSectionAndGroupList();
			this.getAllUserList();
		});
	}

	ngAfterViewInit() {
		merge(fromEvent(this.refreshBtn.nativeElement, 'click')).subscribe(() => {
			if (this.reportingFrameworkID != null) {
				this.getSectionAndGroupList();
			}
		});
	}

	getSectionAndGroupList() {
		if (this.searchFlag) {
			var searchValue = ('name:' + this.searchValue);
		}

		this.assignmentController.getSectionAndGroupList(this.currentOrgID, this.reportingFrameworkID, this.searchFlag, searchValue, this.configID, this.configIntervalID).subscribe((res: any[]) => {
			this.sectionGroupDataList = res

			this.sectionGroupDataList.forEach(section => {
				this.allSection.push(section.id);
				section.group.forEach(group => {
					this.allGroup.push(group.id);
				});
			});
		}, error => {
			console.log('Error in getSectionAndGroupList', error);
		});
	}

	onSectionPanelOpen(groupName: string) {
		this.activeAccodianGroup = groupName;
	}

	selectUnselectAll(event: any) {
		this.selectedSection = [];
		this.selectedGroup = [];
		this.assignMetricList = [];
		if (event.checked) {
			this.sectionGroupDataList.forEach(section => {
				this.selectedSection.push(section.id);
				let groupIDs = [];
				section.group.forEach(group => {
					this.selectedGroup.push(group.id);
					groupIDs.push(group.id);
				});
				this.createSelectedAssignMetricJson(section.id, groupIDs, 'section');
			});
		}

		this.setAssigBtnValue();
	}

	isSectionChecked(id): boolean {
		return this.selectedSection.includes(id);
	}

	isGroupChecked(groupID): boolean {
		return this.selectedGroup.includes(groupID);
	}

	selectUnselectSection(event: any, id: any, group: any[]) {
		if (event.checked) {
			if (!this.selectedSection.includes(id)) {
				this.selectedSection.push(id);
				let groupIDs = [];
				group.forEach(group => {
					if (!this.selectedGroup.includes(group.id)) {
						this.selectedGroup.push(group.id);
						groupIDs.push(group.id);
					}
				});

				this.createSelectedAssignMetricJson(id, groupIDs, 'section');
				this.checkAllSectionAndGroupParsent();
			}
		} else {
			this.selectUnselectAllFC.patchValue(false);
			const index = this.selectedSection.indexOf(id);
			if (index !== -1) {
				this.selectedSection.splice(index, 1);
			}
			group.forEach(group => {
				const i = this.selectedGroup.indexOf(group.id);
				if (i !== -1) {
					this.selectedGroup.splice(i, 1);
				}
			});
			this.removeSelectedAssignMetric(id, null, 'section');
		}
		this.setAssigBtnValue();
	}

	selectUnselectGroup(event: any, id: number, groupID: number, group: any[]) {
		if (event.checked) {
			let groupIDs;
			if (!this.selectedGroup.includes(groupID)) {
				this.selectedGroup.push(groupID);
				groupIDs = groupID;
			}

			this.createSelectedAssignMetricJson(id, groupIDs, 'group');
			this.checkAllSectionAndGroupParsent();

		} else {
			this.selectUnselectAllFC.patchValue(false);
			const i = this.selectedGroup.indexOf(groupID);
			if (i !== -1) {
				this.selectedGroup.splice(i, 1);
			}
			this.removeSelectedAssignMetric(id, groupID, 'group');
		}
		this.checkSectionAllGroupParsent(id, group);
		this.setAssigBtnValue();

	}

	checkAllGroupCheckedInSection(group: any[]): boolean {
		let groupIDs = [];
		group.forEach(g => {
			groupIDs.push(g.id);
		})
		return groupIDs.every(group => this.selectedGroup.includes(group));
	}


	setAssigBtnValue() {
		if (this.assignMetricList.length != 0 || this.assignMetricList.length != 0) {
			this.assignBtnFlag = true;
		} else {
			this.assignBtnFlag = false;
		}
	}

	createSelectedAssignMetricJson(id, groupIDs, level) {
		const sectionIndex = this.assignMetricList.findIndex(s => s.sectionID == id);
		if (sectionIndex !== -1) {
			this.assignMetricList[sectionIndex].groupID.push(groupIDs);
		} else {
			if (level == 'section') {
				let metric = {
					sectionID: id,
					groupID: groupIDs
				};
				this.assignMetricList.push(metric);
			}else {
				let metric = {
					sectionID: id,
					groupID: [groupIDs]
				};
				this.assignMetricList.push(metric);
			}
		}
	}

	removeSelectedAssignMetric(id, groupIDs, level) {
		const sectionIndex = this.assignMetricList.findIndex(s => s.sectionID == id);

		if (level == 'section') {
			if (sectionIndex !== -1) {
				this.assignMetricList.splice(sectionIndex, 1);
			}
		} else {
			// for remove section
			if (this.assignMetricList[sectionIndex].groupID.length == 0) {
				this.assignMetricList.splice(sectionIndex, 1);
			}
		}
		const groupIndex = this.assignMetricList[sectionIndex].groupID.findIndex(g => g == groupIDs);

		// for remove group
		if (groupIndex !== -1) {
			this.assignMetricList[sectionIndex].groupID.splice(groupIndex, 1);

            if (this.assignMetricList[sectionIndex].groupID.length == 0) {
                this.assignMetricList.splice(sectionIndex,1);
            }
		}
	}

	// check all section and group include in list
	checkAllSectionAndGroupParsent() {
		if (this.allSection.every(s => this.selectedSection.includes(s))) {
			if (this.allGroup.every(g => this.selectedGroup.includes(g))) {
				this.selectUnselectAllFC.patchValue(true);
			}
		} else {
			this.selectUnselectAllFC.patchValue(false);
		}
	}

	// check section all group include in list for checked and unchecked section
	checkSectionAllGroupParsent(sectionID, group) {
		if (group.every(g => this.selectedGroup.includes(g.id))) {
			if (!this.selectedSection.includes(sectionID)) {
				this.selectedSection.push(sectionID);
			}
		} else {
			const index = this.selectedSection.indexOf(sectionID);
			if (index !== -1) {
				this.selectedSection.splice(index, 1);
			}
		}
	}

	searchFn($event) {
		this.searchValue = $event;
		if (this.searchValue.length > 0) {
			this.searchFlag = true;
		} else {
			this.searchFlag = false;
		}
		this.refreshBtn.nativeElement.click();
	}

	assigneeDisplayCount(assignee: any[]): string {
		if (assignee.length > 3) {
			const assigneeCount = assignee.length - 3;
			return `+${assigneeCount}`;
		}
	}

	// showAssigneeApprover(assigneeApprover, index) {
	// 	if (index <= 2) {
	// 		return assigneeApprover['profileImgUrl'] || this.userService.defaultImage(
	// 			(assigneeApprover.firstName ? assigneeApprover.firstName + ' ' : '') + (assigneeApprover.lastName ? assigneeApprover.lastName : ''),
	// 			ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);
	// 	} else {
	// 		console.log('else --',);
	// 		return '';
	// 	}
	// }

    showAssigneeApprover(assigneeApprover, index) {
        if (index <= 2) {
            return assigneeApprover['profileImgUrl'] || '../assets/images/default-profile-img.jpg';
        }else {
            return '';
        }
    }

	showAllAssigneeApprooverDropdown(assigneeApproverList) {
		this.assigneeApproverList = [];
		assigneeApproverList.forEach(assApp => {
			let metric = {
				profileImg: assApp.profileImgUrl || this.userService.defaultImage(
					(assApp.firstName ? assApp.firstName + ' ' : '') + (assApp.lastName ? assApp.lastName : ''),
					ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW),
				name: (assApp.firstName ? assApp.firstName + ' ' + (assApp.lastName != null ? assApp.lastName : '') : ''),
			};
			this.assigneeApproverList.push(metric);
		});
	}

	// for send list to assign btn
	sendSectionGroupListToAssign(operation) {
        console.log('this.assignMetricList --',this.assignMetricList);
		let dialogRef;
		if (operation == FormAction.CREATE) {
			dialogRef = this.dialog.open(SchedulerWorkflowComponent, {
				data: {
					action: operation,
					assignMetric: this.assignMetricList,
					configID: this.configID,
					configIntervalID: this.configIntervalID
				},
                height: '100vh',
				width: '800px',
				position: { right: '-2px', top: '0px' },
				disableClose: true,
				panelClass: 'matDialogContainerOverride',
			});
		}
		// i removed these case if i confirm all functionality
		else {
			dialogRef = this.dialog.open(SchedulerWorkflowComponent, {
				data: {
					action: operation,
					assignMetric: this.assignMetricList,
					configID: this.configID,
					configIntervalID: this.configIntervalID
				},
                height: '100vh',
				width: '800px',
				position: { right: '-2px', top: '0px' },
				disableClose: true,
				panelClass: 'matDialogContainerOverride',
			});
		}

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result == DialogEnum.SUCCESS_DR) {
					this.getSectionAndGroupList();
					this.assignMetricList = [];
					this.selectedGroup = [];
					this.selectedSection = [];
                    this.selectUnselectAllFC.reset(false);
                    this.assignBtnFlag = false;
				}
			});
	}

	// for unassignedSectionOrGroup
	unAssignedMetric(id, group, level) {
		this.unAssignMetricList = [];
		let groupIDs = [];

		if (level == 'section') {
			group.forEach(g => {
				groupIDs.push(g.id)
			});
		} else {
			groupIDs.push(group);
		}
		let metric = {
			sectionID: id,
			groupID: groupIDs
		};

		this.unAssignMetricList.push(metric);

		this.confirmationDialog();
	}

	confirmationDialog() {
		const dialogRef = this.dialog.open(DialogOneComponent, {
			minWidth: '450px',
			maxWidth: '700px',
			data: {
				type: DialogOneEnum.DELETE,
				icon: 'dangerous',
				header: 'Unassign section or group',
				body: 'These changes will be applied for section or group.\n Are you sure to unassign?',
				buttonOne: 'Cancel',
				buttonTwo: 'Unassign'
			}
		});
		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result) {
					this.unassignedFun();
				}
			});
	}

	unassignedFun() {
		this.assignmentController.unassingedSectionOrgGroup(this.currentOrgID, this.configID, null, this.unAssignMetricList).subscribe((response: ResponseM) => {
			this.getSectionAndGroupList();
		}, error => {
			console.log('error in updateReportingPreference() -', error);
		});
	}

	workflowExist() {
		this.assignmentController.workflowExist(this.currentOrgID, this.configID).subscribe((res) => {
			this.workflowExists = res;
			if (this.workflowExists.workflowExists) {
				this.createBtnFlag = false;
			} else if (this.workflowExists.workFlowExistsForPreviousConfig) {
				this.createBtnFlag = true;
			}

		}, error => {
			console.log('error in workflowExist', error);
		});
	}

	saveBtn() {
		this.assignmentController.saveWorkflow(this.currentOrgID, this.configID, this.workflowExists.previousConfigIntervalID).subscribe((res: ResponseM) => {
			this.router.navigate(['/reporting-framework/tracking/page']);
		},error => {
			console.log('error in save workflow', error);
		});
	}

	getAllUserList() {
		this.userService.getCurrentOrgUserAccess(this.currentOrgID)
			.then((allUser: any[]) => {
				allUser.forEach(user => {
					let metric = {
						id: user.id,
						profileImg: user.profileImgUrl || this.userService.defaultImage(
							(user.firstName ? user.firstName + ' ' : '') + (user.lastName ? user.lastName : ''),
							ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW),
						name: (user.firstName ? user.firstName + ' ' + (user.lastName != null ? user.lastName : '') : ''),
					};
					this.assigneeUserList.push(metric);
					this.approverUserList.push(metric);
				});
				let unassigne = {
					profileImg: "../assets/images/default-profile-img.jpg",
					name: "unassigned"
				}

				this.assigneeUserList.push(unassigne);

				this.assigneeSearchUtil.entityArr = this.assigneeUserList;
				this.assigneeSearchUtil.createSubscription();

				let autoApproved = {
					profileImg: "../assets/images/default-profile-img.jpg",
					name: "Auto Approved"
				}
				this.approverUserList.push(autoApproved);

				this.approverSearchUtil.entityArr = this.approverUserList;
				this.approverSearchUtil.createSubscription();

			}).catch(error => {
				console.error('Error fetching user access:', error);
			});
	}

}

