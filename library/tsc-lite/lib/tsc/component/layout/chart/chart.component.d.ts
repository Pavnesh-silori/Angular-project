import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartsOption } from 'echarts';
import { ParameterEntity } from '../../../model/entity.model';
import { EntityService } from '../../../service/entity.service';
import { StorageService } from '@library/storage-service';
import * as i0 from "@angular/core";
export declare class ChartComponent implements OnInit {
    private activatedRoute;
    private storageService;
    private entityService;
    orgID: any;
    layoutID: any;
    entityDeviceM: ParameterEntity;
    allowUpdateEntityTree: boolean;
    chartDataOption: EChartsOption;
    constructor(activatedRoute: ActivatedRoute, storageService: StorageService, entityService: EntityService);
    ngOnInit(): void;
    getEntitiesWithDevicesByLayoutID(): Promise<void>;
    drawChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChartComponent, "app-chart", never, {}, {}, never, never>;
}
