import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ParameterEntity } from '../../../model/entity.model';
import { EntityController } from '../../../controller/entity.controller';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class ListComponent implements OnInit {
    private router;
    private activatedRoute;
    private storageService;
    private entityController;
    private dialog;
    orgID: any;
    layoutID: any;
    entities: ParameterEntity[];
    constructor(router: Router, activatedRoute: ActivatedRoute, storageService: StorageService, entityController: EntityController, dialog: MatDialog);
    ngOnInit(): void;
    getEntitiesByLayoutID(): void;
    hasContent(entity: any): boolean;
    mapDevice(entityID: any): void;
    viewMappedDevice(entityID: any): void;
    openEntityDialog(entityID: any, action: any): void;
    openDeleteDialog(entityID: any, entityName: any): void;
    deleteEntity(entityID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListComponent, "app-list", never, {}, {}, never, never>;
}
