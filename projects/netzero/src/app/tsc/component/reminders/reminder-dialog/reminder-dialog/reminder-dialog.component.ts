import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@library/user-service';

import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ProfileImg } from '@library/user-service';

@Component({
    selector: 'app-reminder-dialog',
    templateUrl: './reminder-dialog.component.html',
    styleUrls: []
})
export class ReminderDialogComponent implements OnInit {
    ProfileImg = ProfileImg;

    tasks: any;
    date: any;

    constructor(
        public dialogRef: MatDialogRef<ReminderDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private router: Router,
        public userService: UserService
    ) {
        this.dialogRef.disableClose = false;
        this.tasks = data['reminderData'];
        this.date = data['date'];
    }

    ngOnInit(): void {
        console.log("this.tasks", this.tasks)
    }

    closeDialog() {
        this.dialogRef.close();
    }

    redirectLink(path) {
        this.router.navigateByUrl(path)
            .then(() => {
                window.location.reload();
            });
    }

}