import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ParameterEntity } from '../../../model/entity.model';

import { CreateUpdateEntityComponent } from '../_dialog/create-update/entity/entity.component';

import { EntityController } from '../../../controller/entity.controller';

// tsc-library
import { StorageService } from '@library/storage-service';
import { ButtonLabelEnum, DialogEnum, DialogOneComponent, DialogOneEnum, ResponseM } from '@library/tsc-common';
// /tsc-library/

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styles: [
    ]
})
export class ListComponent implements OnInit {

    orgID: any;
    layoutID: any;

    entities = [new ParameterEntity()];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private storageService: StorageService,
        private entityController: EntityController,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.orgID = this.storageService.getStorage('currentOrgID');

        this.activatedRoute.parent.parent.paramMap.subscribe((params) => {
            this.layoutID = params.get('layoutID');

            this.getEntitiesByLayoutID();
        });
    }

    getEntitiesByLayoutID() {
        this.entityController.getEntitiesByLayoutID(this.orgID, this.layoutID)
            .subscribe((entityTreeRes: any) => {
                this.entities = entityTreeRes;
            },
                error => {
                    console.log('error in getEntitiesByLayoutID() -', error);
                });
    }

    hasContent(entity: any): boolean {
        return entity && entity.children && entity.children.length > 0;
    }

    mapDevice(entityID) {
        this.router.navigate([`layout/${this.layoutID}/entity/${entityID}/map-device/add`]);
    }

    viewMappedDevice(entityID) {
        this.router.navigate([`layout/${this.layoutID}/entity/${entityID}/map-device/view`]);
    }

    openEntityDialog(entityID, action) {
        const dialog = this.dialog.open(CreateUpdateEntityComponent,
            {
                data: {
                    action: action,
                    entityID: entityID,
                    layoutID: this.layoutID,
                },
                minWidth: '500px',
                maxWidth: '500px',
            });
        dialog.afterClosed()
            .subscribe((result) => {
                if (result == DialogEnum.SUCCESS_DR) {
                    this.getEntitiesByLayoutID();
                }
            })
    }

    openDeleteDialog(entityID, entityName) {
        const dialog = this.dialog.open(DialogOneComponent, {
            minWidth: '450px',
            maxWidth: '450px',
            data: {
                type: DialogOneEnum.DELETE,
                icon: 'dangerous',
                header: 'Delete entity?',
                body: 'This will delete the entity <b>' + entityName + '</b> and all its children entities.</br></br>Are you sure you want to continue?',
                buttonOne: ButtonLabelEnum.CANCEL_BTN_LABEL,
                buttonTwo: ButtonLabelEnum.DELETE_BTN_LABEL
            }
        });
        dialog.afterClosed().subscribe(res => {
            if (res) {
                this.deleteEntity(entityID);
            }
        })
    }

    deleteEntity(entityID) {
        this.entityController.deleteEntity(this.orgID, this.layoutID, entityID).subscribe((deleteRes: ResponseM) => {
            this.getEntitiesByLayoutID();
        });
    }

}
