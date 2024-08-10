import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CertificationDialogComponent } from '../certification-dialog/certification-dialog.component';

@Component({
    selector: 'app-certification',
    templateUrl: './certification.component.html',
    styleUrls: ['./certification.component.scss']
})

export class CertificationComponent implements OnInit {

    certification = [
        {
            "name": "SOC 2",
            "definition": "Logicladder Technologies is SOC 2 Type II compliant. SOC 2 is an evaluation of the design and operating effectiveness of controls that meet the AICPA's Trust Services Principles criteria."
        },
        {
            "name": "ISO 9001:2015",
            "definition": "ISO 9001 is defined as the international standard that specifies requirements for a Quality Management System (QMS). Organizations use the standard to demonstrate the ability to consistently provide quality products and services that meet customer and regulatory requirements."
        },
        {
            "name": "ISO/IEC 27017",
            "definition": "ISO/IEC 27017 gives guidelines for information security controls applicable to the provision and use of cloud services by providing additional implementation guidance for relevant controls specified in ISO/IEC 27002 and additional controls with implementation guidance that specifically relate to cloud services."
        }
    ];

    showCertificationDetailsFlag = false;
    selectedCertification: any;

    currentDialogRef: MatDialogRef<CertificationDialogComponent>;

    constructor(
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
    }

    showCertificationDetails(data) {
        this.selectedCertification = data;

        // Check if the dialog is already open
        if (this.currentDialogRef && this.currentDialogRef.componentInstance) {
            this.currentDialogRef.componentInstance.updateData(this.selectedCertification);
        } else {
            this.showCertificationDetailsFlag = true;
            this.currentDialogRef = this.dialog.open(CertificationDialogComponent, {
                data: {
                    selectedCertification: this.selectedCertification,
                },
                minWidth: '600px',
                maxWidth: '600px',
                minHeight: `calc(100vh - 168px)`,
                position: { right: '-2px', top: '85px', bottom: '75px' },
                backdropClass: 'transparent',
                hasBackdrop: false,
            });
            this.currentDialogRef.afterClosed().subscribe(response => {
                this.showCertificationDetailsFlag = false;
            });
        }
    }

}
