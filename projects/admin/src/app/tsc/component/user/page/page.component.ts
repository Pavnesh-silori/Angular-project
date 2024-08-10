import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { merge, fromEvent, of as observableOf } from 'rxjs';
import { map, startWith, switchMap, catchError, } from "rxjs/operators";


import { PageM } from '@Admin/model/page.model';
import { UserPageM } from '@Admin/model/user-page.model';
import { UserController } from '@Admin/controller/user.controller';

import { InviteUserComponent } from '../invite-user/invite-user.component';
import { AccessComponent } from '@Admin/component/access/access.component';
//tsc-library
import { UserService, UserStatus, ProfileImg } from '@library/user-service';
import { COMMON_CONSTANT, DialogEnum, TABLE_CONSTANT, DialogOneComponent, DialogOneEnum } from '@library/tsc-common';
import { ToastrService } from '@library/toastr-service';
import { StorageService } from '@library/storage-service';
// /tsc-library/

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    faEllipsisV = faEllipsisV;
    UserStatus = UserStatus;
    ProfileImg = ProfileImg;

    TABLE_CONSTANT = TABLE_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;

    rootOrgID: any;
    currentUserID: any;

    allIDs: any[] = [];
    dataSource: any[] = [];
    resultLength: number = 0;
    displayedColumns: string[] = ['user', 'apps', 'status', 'actions'];
    // displayedColumns: string[] = ['select', 'user', 'apps', 'status', 'actions', 'selected'];

    searchFlag: boolean = false;

    searchValue: string;
    searchArr: any[] = [];

    selection = new SelectionModel(true, []);

    @ViewChild('sort') sort: MatSort;
    @ViewChild('paginator') paginator: MatPaginator;
    @ViewChild('refreshBtn') refreshBtn: ElementRef;

    constructor(
        public toastrService: ToastrService,
        private dialog: MatDialog,
        private userController: UserController,
        private userService: UserService,
        private storageService: StorageService,
    ) { }

    ngOnInit(): void {
        this.rootOrgID = this.storageService.getStorage('rootOrgID');
        this.currentUserID = this.storageService.getStorage('userID');
    }

    ngAfterViewInit() {
        merge(
            this.paginator.page,
            this.sort.sortChange,
            fromEvent(this.refreshBtn.nativeElement, 'click')
        ).pipe(
            startWith({}),
            switchMap((): any => {
                this.searchArr = [];

                if (this.searchFlag) {
                    this.searchArr.push('firstName:' + this.searchValue)
                }

                return this.userController.getUserByPage(
                    this.rootOrgID,
                    this.paginator.pageIndex,
                    this.paginator.pageSize,
                    this.sort.active,
                    this.sort.direction,
                    this.searchArr
                ).pipe(catchError(() => observableOf(null)));
            }),
            map((dataSource: PageM<UserPageM>): any => {
                if (dataSource === null) {
                    this.resultLength = 0;
                    return [];
                }
                this.resultLength = dataSource["totalCount"];
                return dataSource["records"];
            })
        ).subscribe((dataSource) => {
            this.dataSource = dataSource;
            this.dataSource.map(data => this.allIDs.push(data['id']))
        });
    }

    searchFn($event) {
        this.searchFlag = true;
        this.searchValue = $event;

        if ($event.length == 0) {
            this.resetSearch();
        } else {
            this.paginator.pageIndex = 0;
        }
        this.refreshBtn.nativeElement.click();
    }

    resetSearch() {
        this.searchFlag = false;
        this.refreshBtn.nativeElement.click();
    }

    selectAllInPage() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.allIDs);
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.length;
        return numSelected === numRows;
    }

    updateUserStatusByID(user) {
        let newStatus = (user?.['status'] == 'ACTIVE' ? 'INACTIVE' : 'ACTIVE');
        let statusJson = { status: newStatus };

        this.userController.updateUserStatusByID(this.rootOrgID, user['id'], statusJson)
            .subscribe(response => {
                this.refreshBtn.nativeElement.click();
                let toast = this.toastrService.getToastStatus(response['status']);
                this.toastrService.openToast(toast['title'], response['message'], toast['color']);
            });
    }

    manageAccess(user) {
        const dialog = this.dialog.open(AccessComponent, {
            data: { userID: user['id'] },
            width: '50vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        });

        dialog.afterClosed().subscribe((res) => {
            if (res == DialogEnum['SUCCESS_DR'])
                this.refreshBtn.nativeElement.click();
        });
    }

    InviteUser() {
        const dialog = this.dialog.open(InviteUserComponent,
            {
                width: '50vw',
                height: '100%',
                position: { right: '-2px', top: '0px' },
            });

        dialog.afterClosed().subscribe((res) => {
            if (res == DialogEnum.SUCCESS_DR)
                this.refreshBtn.nativeElement.click();
        });
    }

    confirmDelete(user) {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            minWidth: '400px',
            maxWidth: '500px',
            data: {
                type: DialogOneEnum['DELETE'],// type of dialog
                icon: 'warning',// material icon
                header: 'Delete account?',//heading of dialog
                body: 'This account will be deleted permanently and will lose access to your organization and products.',// body of dialog
                buttonOne: 'Cancel',// button label on reject action
                buttonTwo: 'Delete'// button label on Success action
            }
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result) {
                    this.deleteUserFromOrgByID(user);
                }
            })
    }

    // confirmDelete(user) {
    //     const dialog = this.dialog.open(DeleteDialog,
    //         {
    //             data: {
    //                 title: `Delete account?`,
    //                 message: `This account will be deleted permanently and will lose access to your organization and products.`
    //             },
    //             minWidth: '400px',
    //             maxWidth: '500px'
    //         });

    //     dialog.afterClosed().subscribe(res => {
    //         if (res == DialogEnum.DELETE_DR) {
    //             this.deleteUserFromOrgByID(user);
    //         }
    //     });
    // }

    deleteUserFromOrgByID(user) {
        this.userController.deleteUserFromOrgByID(this.rootOrgID, user['id'])
            .subscribe(res => {
                let toast = this.toastrService.getToastStatus(res['status']);
                this.toastrService.openToast(toast['title'], res['message'], toast['color']);

                this.refreshBtn.nativeElement.click();
            });
    }

    getImage(user) {
        if (user?.profileImgUrl) {
            return user?.profileImgUrl;
        }
        let userName;
        if (user?.lastName) {
            userName = user?.firstName + ' ' + user?.lastName;
        } else {
            userName = user?.firstName;
        }
        return this.userService.defaultImage(userName, ProfileImg.PROFILE_IMAGE_DROPDOWN_NAME_VIEW);

    }
}
