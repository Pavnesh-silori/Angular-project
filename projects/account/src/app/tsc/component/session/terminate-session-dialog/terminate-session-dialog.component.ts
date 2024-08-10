import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-terminate-session',
    templateUrl: './terminate-session-dialog.component.html',
})
export class TerminateSessionComponent implements OnInit {

    session: any;

    constructor(
        private dialogRef: MatDialogRef<TerminateSessionComponent>,
    ) {
        this.dialogRef.disableClose = true;
    }

    terminateSession(sessionId: number) {
        console.log("Session Terminated");
    }

    ngOnInit(): void {
    }

}
