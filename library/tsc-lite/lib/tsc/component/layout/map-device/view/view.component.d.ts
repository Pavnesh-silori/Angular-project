import { ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Entity } from '../../../../model/entity.model';
import { DeviceController } from '../../../../controller/device.controller';
import { EntityService } from '../../../../service/entity.service';
import { StorageService } from '@library/storage-service';
import { SearchBarOneComponent } from '@library/tsc-common';
import * as i0 from "@angular/core";
export declare class ViewComponent implements OnInit {
    private activatedRoute;
    private storageService;
    private deviceController;
    private entityService;
    private dialog;
    TABLE_CONSTANT: {
        TABLE_NO_DATA: string;
        DEFAULT_PAGE_SIZE: number;
        PAGE_SIZE_OPTION: number[];
    };
    orgID: any;
    layoutID: any;
    entityID: any;
    filter: string;
    searchValue: string;
    searchArr: any[];
    dataSource: any[];
    searchFlag: boolean;
    resultLength: number;
    displayedColumn: string[];
    allDeviceIDs: any;
    selection: SelectionModel<any>;
    entityM: Entity;
    paginator: MatPaginator;
    refreshBtn: ElementRef;
    searchBar: SearchBarOneComponent;
    constructor(activatedRoute: ActivatedRoute, storageService: StorageService, deviceController: DeviceController, entityService: EntityService, dialog: MatDialog);
    ngOnInit(): void;
    getEntityByID(): Promise<void>;
    ngAfterViewInit(): void;
    searchFn(value: string): void;
    resetSearch(): void;
    selectAll(): void;
    isAllSelected(): boolean;
    openSourceLoadDialog(device: any): void;
    openDeleteDialog(actionType: any, id?: number, name?: string): void;
    deleteDeviceMapping(deviceID: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewComponent, "app-view", never, {}, {}, never, never>;
}
