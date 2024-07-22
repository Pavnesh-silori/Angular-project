import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { fromEvent, merge } from 'rxjs';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { AuditTrailComponent } from '../audit-trail/audit-trail.component';
import { ReminderComponent } from './reminder/reminder.component';
import { SchedulerWorkflowComponent } from '../scheduler-workflow/scheduler-workflow.component';
import { MatchingMetricComponent } from './matching-metric/matching-metric.component';

import { AssignmentController } from '@report-framework/controller/assignment.controller';

import { ActivePagePillService } from '@report-framework/service/active-page-pill.service';

// tsc-library
import { ButtonLabelEnum, DialogEnum, DialogOneComponent, DialogOneEnum, DialogResponseEnum, FormAction, FunnelFilterComponent, ResponseM, TABLE_CONSTANT } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
import { ProfileImg, UserService } from '@library/user-service';
import { ReportingFrameworkDataController } from '@report-framework/controller/reporting-framework-data.controller';
// /tsc-library

@Component({
	selector: 'app-report-data',
	templateUrl: './report-data.component.html',
	styleUrls: ['./report-data.component.scss',]
})
export class ReportDataComponent implements OnInit {

	ButtonLabelEnum = ButtonLabelEnum;
	TABLE_CONSTANT = TABLE_CONSTANT;
	FormAction = FormAction;

	currentOrgID: any;
	configID: number;
	configIntervalID: number;
	reportingFrameworkID: number = null;
	configIntervalName: string = null;
	configName: string = null;

	faEllipsisV = faEllipsisV;

	sectionGroupDataList: any[] = [];
	activeAccodianGroup: string;

	selectUnselectAllFC = new FormControl(false);

	allSection: any[] = [];
	allGroup: any[] = [];
	selectedSection: any[] = [];
	selectedGroup: any[] = [];

	isReadOnly: boolean = false;
	pageType: string = 'report-fill';

	bulkBtnFlag: boolean = false;
	assignMetricList: any[] = [];
	assignUnassignMetricList: any = [];

	searchFC: FormControl = new FormControl('');
	searchValue: string = null;
	searchFlag: boolean = false;
	refreshFlag: boolean = false;

	userList: any[] = [];

	prev: any;

	filter: string = '';
	filterArr: any[];

	// assignee
	assigneeFlag: boolean = false;
	assigneeFC: FormControl = new FormControl([]);
	all_assignee_id: any[] = [];
	totalAssignee: any;
	assigneeFilterApplied: boolean = false;
	selected_assignee: any[] = [];

	// approver
	approverFlag: boolean = false;
	approverFC: FormControl = new FormControl([]);
	all_approver_id: any[] = [];
	totalApprover: any;
	approverFilterApplied: boolean = false;
	selected_approver: any[] = [];

	assigneeApproverList: any[] = [];

	matchingMetricFlag: boolean = false;
    referenceGroupList: any[] = [];
	refresh: boolean = true;

    activeSectionID: any;
    activeGroupID: any;

    searchBy: string[] = ['firstName'];

    resetFlag: boolean = false;
	
	@ViewChild('assigneeSelect') assigneeSelect: FunnelFilterComponent;
	@ViewChild('approverSelect') approverSelect: FunnelFilterComponent;

	@ViewChild('childMenu', { static: true }) public childMenu: any;

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild('searchBtn', { static: true }) searchBtn: ElementRef;
	@ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
	@ViewChild('assigneeBtn') assigneeBtn: ElementRef;
	@ViewChild('approverBtn') approverBtn: ElementRef;

	constructor(
		private dialog: MatDialog,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private assignmentController: AssignmentController,
		private reportingFrameworkDataController: ReportingFrameworkDataController,
		private activePagePillService: ActivePagePillService,
		private toastrService: ToastrService,
		private storageService: StorageService,
		private userService: UserService,

	) { }

	ngOnInit(): void {
		this.currentOrgID = parseInt(this.storageService.getStorage('currentOrgID'));

		this.activatedRoute.queryParams.subscribe((queryParam) => {
			this.reportingFrameworkID = queryParam['reportingFrameworkID'];
		});

		this.activatedRoute.params.subscribe((param) => {
			this.configID = param['configID'];
			this.configIntervalID = param['configIntervalID'];
			this.configIntervalName = param['configIntervalName'];

			const url = this.router.url;

			if (param['configName']) {
				this.configName = param['configName'];
				const parts = url.split('/'); parts.splice(-2);
				const finalUrl = parts.join('/');

				let folder = {
					name: decodeURIComponent(param['configName']),
					route: `${decodeURI(finalUrl)}`
				}
				setTimeout(() => {
					this.activePagePillService.setOngoingReportBSubject = folder;
				});
			}
			if (param['configIntervalName']) {
				let folder = {
					name: param['configIntervalName'],
					route: `${decodeURI(this.router.url)}`
				}
				setTimeout(() => {
					this.activePagePillService.setOngoingReportBSubject = folder;
				});
			}
		});

		this.getSectionAndGroupList();
		this.getAllUserList();
	}

	ngAfterViewInit() {
		merge(this.sort.sortChange,
            this.assigneeSelect.multi,
            this.approverSelect.multi,
			fromEvent(this.refreshBtn.nativeElement, 'click'),
		).subscribe(() => {
			this.getSectionAndGroupList();
		});
	}

	getSectionAndGroupList() {
		this.filterArr = [];

		if (this.searchFlag) {
			var searchValue = 'name:' + this.searchValue;
		}

		// if (this.approverFlag) {
		// 	let selected_approver = this.approverFC.value.length - 1;
		// 	if (selected_approver == this.totalApprover) {
		// 		this.approverFilterApplied = false;
		// 	}
		// 	else {
		// 		this.filterArr.push('approver:' + this.approverFC.value);
		// 	}
		// }

		// if (this.assigneeFlag) {
		// 	let selected_assignee = this.assigneeFC.value.length - 1;
		// 	if (selected_assignee == this.totalAssignee) {
		// 		this.assigneeFlag = false;
		// 	}
		// 	else {
		// 		this.filterArr.push('assignee:' + this.assigneeFC.value);
		// 	}
		// }

        if (this.approverFlag) {
            let formControl = this.approverFC.value;
            if (formControl.includes('all')) {
                let index = formControl.indexOf('all');
                if (index !== -1){
                    formControl = formControl;
                    formControl.splice(index, 1);
                }
            }
            this.filterArr.push('approver:' + formControl);
        }

        if (this.assigneeFlag) {
            let formControl = this.assigneeFC.value;
            if (formControl.includes('all')) {
                let index = formControl.indexOf('all');
                if (index !== -1){
                    formControl = formControl;
                    formControl.splice(index, 1);
                }
            }
            this.filterArr.push('assignee:' + formControl);
        }

		this.assignmentController.getSectionAndGroupForDataList(
			this.currentOrgID,
			this.configIntervalID,
			this.sort.active,
			this.sort.direction,
			searchValue,
			this.filterArr).subscribe((res: any[]) => {
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

	onGroupPanelOpen(group) {
        this.activeGroupID = group['id'];
		if (this.activeAccodianGroup != group) {
			this.activeAccodianGroup = group;
			this.matchingMetricExist(group['id']);
		}
	}

    onSectionPanelOpen(section) {
        this.activeSectionID = section.id;
        this.activeAccodianGroup = null;
    }

    closeAllOpenPanel() {
        this.activeSectionID = null;
        this.activeGroupID = null;
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

	setAssigBtnValue() {
		if (this.assignMetricList.length != 0 || this.assignMetricList.length != 0) {
			this.bulkBtnFlag = true;
		} else {
			this.bulkBtnFlag = false;
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

	searchFn($event) {
		this.searchValue = $event;
		if (this.searchValue.length > 0) {
			this.searchFlag = true;
		}
		else {
			this.searchFlag = false;
		}
		this.refreshBtn.nativeElement.click();
	}

	getAllUserList() {
		this.userService.getCurrentOrgUserAccess(this.currentOrgID)
			.then(allUser => {
				this.totalAssignee = allUser.length;
				this.totalApprover = allUser.length;

                let userList = [];

				allUser.map((user) => {
					this.all_assignee_id.push(user['id']);
					this.all_approver_id.push(user['id']);

                    let metric = {
                        id : user.id,
                        name: (user.firstName ? user.firstName + ' ' + (user.lastName != null ? user.lastName : '') : ''),
                    };
                    userList.push(metric);
				});
                this.userList = userList;

				this.all_assignee_id.unshift('all');
				this.all_approver_id.unshift('all');
			})
			.catch(error => {
				console.error('Error fetching user access:', error);
			});
	}

	selectAssignee(assignee) {
		const index = this.selected_assignee.indexOf(assignee);
		if (index >= 0) {
			this.selected_assignee.splice(index, 1);
		} else {
			this.selected_assignee.push(assignee);
		}

		const k = this.assigneeFC.value.indexOf('all');
		if (k > -1) {
			if (this.assigneeFC.value.length > this.totalAssignee) {
				this.assigneeFC.patchValue([]);
			} else if (this.assigneeFC.value.length == this.totalAssignee) {
				this.assigneeFC.value.splice(k, 1);
				this.assigneeFC.patchValue(this.assigneeFC.value);
			} else {
				this.assigneeFC.patchValue(this.all_assignee_id);
			}
		} else {
			if (this.assigneeFC.value.length == this.totalAssignee) {
				this.assigneeFC.patchValue(this.all_assignee_id);
			}
		}
	}

	applyAssigneeFilter() {
		if (this.assigneeFC.value.length == 0) { return; }

		this.assigneeFilterApplied = true;
		if (this.assigneeFC.value.includes('all')) {
			this.assigneeFlag = false;
			return;
		}
	}

    refreshFilter() {
		this.assigneeFlag = false;
		this.approverFlag = false;
		this.refreshBtn.nativeElement.click();
	}

	resetOnNoAssigneeChange(event) {
		if (event) {
			this.prev = this.assigneeFC.value;
			this.assigneeFilterApplied = false;
		} else {
			if (this.prev != this.assigneeFC.value && !this.assigneeFilterApplied) {
				this.assigneeFC.patchValue(this.prev, { onlySelf: true });
			}
		}
	}

	selectAllAssignee() {
		if (!this.assigneeFC.value.includes('all') && this.assigneeFC.value.length > 0) {
			this.assigneeFC.reset([]);
			this.selected_assignee = [];
			return;
		}
		this.assigneeFC.patchValue(this.all_assignee_id);
	}

	selectApprover(approver) {
		const index = this.selected_approver.indexOf(approver);
		if (index >= 0) {
			this.selected_approver.splice(index, 1);
		} else {
			this.selected_approver.push(approver);
		}

		const k = this.approverFC.value.indexOf('all');
		if (k > -1) {
			if (this.approverFC.value.length > this.totalApprover) {
				this.approverFC.patchValue([]);
			} else if (this.approverFC.value.length == this.totalApprover) {
				this.approverFC.value.splice(k, 1);
				this.approverFC.patchValue(this.approverFC.value);
			} else {
				this.approverFC.patchValue(this.all_approver_id);
			}
		} else {
			if (this.approverFC.value.length == this.totalApprover) {
				this.approverFC.patchValue(this.all_approver_id);
			}
		}
	}

	applyApproverFilter() {
		if (this.approverFC.value.length == 0) { return; }

		this.approverFilterApplied = true;
		if (this.approverFC.value.includes('all')) {
			this.approverFlag = false;
			return;
		}
	}

	resetOnNoApproverChange(event) {
		if (event) {
			this.prev = this.approverFC.value;
			this.approverFilterApplied = false;
		} else {
			if (this.prev != this.approverFC.value && !this.approverFilterApplied) {
				this.approverFC.patchValue(this.prev, { onlySelf: true });
			}
		}
	}

	selectAllApprover() {
		if (!this.approverFC.value.includes('all') && this.approverFC.value.length > 0) {
			this.approverFC.reset([]);
			this.selected_approver = [];
			return;
		}
		this.approverFC.patchValue(this.all_approver_id);
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
					(assApp.firstName ? assApp.firstName + ' ' : '') + (assApp.lastName != null ? assApp.lastName : ''),
					ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW),
				name: (assApp.firstName ? assApp.firstName + ' ' + (assApp.lastName != null ? assApp.lastName : '') : ''),
			};
			this.assigneeApproverList.push(metric);
		});
	}

	textColor(metric, totalMetric) {
		let value = (metric * 100) / totalMetric;
		if (value < 33) {
			return 'valueLess33';
		} else if (value > 33 && value < 66) {
			return 'valueLess66';
		} else {
			return 'valueGreater66';
		}
	}

	// send remainder for assignee and approver
	sendRemainderToAssigneeOrApprover(assigneeApproverList, type, level, sectionID, group, groupID) {
		let sectionGroupMetricList = [];
		if (level == 'bulk') {
			sectionGroupMetricList = this.assignMetricList;

		} else if (level == 'section') {
			let metric = this.sectionGroupMetric(sectionID, group, null);
			sectionGroupMetricList.push(metric);

		} else if (level == 'group') {
			let metric = this.sectionGroupMetric(sectionID, null, groupID);
			sectionGroupMetricList.push(metric);

		} else {
			console.log(level);
		}
		const dialogRef = this.dialog.open(ReminderComponent, {
			data: {
				assigneeApproverList: assigneeApproverList,
				type: type,
				sectionGroupMetricList: sectionGroupMetricList,
                configIntervalID: this.configIntervalID
			},
			maxWidth: '600px'
		});

        dialogRef.afterClosed()
			.subscribe((result) => {
				if (result === DialogResponseEnum.SUCCESS) {
					this.refresh = !this.refresh;
					this.refreshBtn.nativeElement.click();
					this.assignMetricList = [];
                    this.selectedGroup = [];
					this.selectedSection = [];
                    sectionGroupMetricList = []
                    this.selectUnselectAllFC.reset(false);
                    this.bulkBtnFlag = false;
				}
			});
	}

	sectionGroupMetric(sectionID, group, groupID) {
		let groupIDs = [];

		if (groupID == null) {
			group.forEach(group => {
				if (!this.selectedGroup.includes(group.id)) {
					this.selectedGroup.push(group.id);
					groupIDs.push(group.id);
				}
			});
			let metric = {
				sectionID: sectionID,
				groupID: groupIDs
			};
			return metric;
		} else {
			groupIDs.push(groupID);
			let metric = {
				sectionID: sectionID,
				groupID: groupIDs
			};
			return metric;
		}

	}

	// for send list to assign btn
	sendSectionGroupListToAssign(operation, metricList) {
		let dialogRef;
		let metric;

		if (metricList != null) {
			metric = metricList;
		} else {
			metric = this.assignMetricList;
		}

		if (operation == FormAction.CREATE) {
			dialogRef = this.dialog.open(SchedulerWorkflowComponent, {
				data: {
					action: operation,
					assignMetric: metric,
					configIntervalID: this.configIntervalID
				},
                height: '100vh',
				width: '800px',
				position: { right: '-2px', top: '0px' },
				disableClose: true,
				panelClass: 'matDialogContainerOverride',
			});
		}
		else {
			dialogRef = this.dialog.open(SchedulerWorkflowComponent, {
				data: {
					action: operation,
					assignMetric: metric
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
				if (result === DialogEnum.SUCCESS_DR) {
					this.refresh = !this.refresh;
					this.refreshBtn.nativeElement.click();
					this.selectedGroup = [];
					this.selectedSection = [];
                    this.assignMetricList = [];
                    this.selectUnselectAllFC.reset(false);
                    this.bulkBtnFlag = false;
				}
			});
	}

	// for unassignedSectionOrGroup
	unassignedAssigneMetric(id, group, level, assigneUnassignType) {
		this.assignUnassignMetricList = [];
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

		this.assignUnassignMetricList.push(metric);

		if (assigneUnassignType == 'assign') {
			this.sendSectionGroupListToAssign(FormAction.CREATE, this.assignUnassignMetricList);
		} else {
			this.confirmationDialog();

		}
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
		this.assignmentController.unassingedSectionOrgGroup(this.currentOrgID, null, this.configIntervalID, this.assignUnassignMetricList).subscribe((response: ResponseM) => {
			this.refreshBtn.nativeElement.click();
			this.refresh = !this.refresh;

		}, error => {
			console.log('error in updateReportingPreference() -', error);
		});
	}

	// dialog for audit trail
	auditTrail(sectionID, groupID) {
		const dialogRef = this.dialog.open(AuditTrailComponent, {
			data: {
				sectionID: sectionID,
				groupID: groupID,
				configIntervalID: this.configIntervalID
			},
			minWidth: '600px',
			maxWidth: '600px',
			height: '100%',
			position: { right: '-2px', top: '0px' },
			panelClass: 'matDialogContainerOverride'
		});
	}

	matchingMetricExist(groupID) {
		this.reportingFrameworkDataController.matchingMetricExists(this.currentOrgID, this.reportingFrameworkID, groupID, this.configIntervalID).subscribe(res => {
			this.matchingMetricFlag = res['referenceGroup'].length > 0;
            this.referenceGroupList = res['referenceGroup'];
		}, error => {
			console.log('error in matchingMetricExist', error);
		})
	}

	// matching metric
	getMatchingMetric(groupID) {
		let dialogRef;
		dialogRef = this.dialog.open(MatchingMetricComponent, {
			data: {
				groupID: groupID,
				configIntervalID: this.configIntervalID,
				reportingFrameworkID: this.reportingFrameworkID,
                referenceGroupList: this.referenceGroupList
			},
			minWidth: '1100px',
			maxWidth: '1100px',
			height: '100%',
			position: { right: '-2px', top: '0px' },
			panelClass: 'matDialogContainerOverride'
		});

		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result === DialogEnum.SUCCESS_DR) {
				}
			});
	}

	emitter(event,sectionID, groupID) {
		if (event == DialogEnum.SUCCESS_DR) {
			this.refresh = !this.refresh;
            this.activeSectionID = sectionID;
            this.activeGroupID = groupID;
            this.getSectionAndGroupList();
		}
	}

}