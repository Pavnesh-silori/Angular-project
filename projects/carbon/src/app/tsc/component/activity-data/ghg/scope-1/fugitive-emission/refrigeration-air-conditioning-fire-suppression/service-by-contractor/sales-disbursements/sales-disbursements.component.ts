import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import { FormControl } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment';

import { fromEvent, merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { ContractorPurchaseSalesDialog } from '../../_shared/contractor-purchase-sales-dialog/contractor-purchase-sales-dialog.component';
import { NoteDialog } from '../../_shared/note-dialog/note-dialog.component';
import { UploadDocumentDialog } from '@carbon/component/activity-data/_shared/upload-document-dialog/upload-document-dialog.component';

import { EquipmentTabEnum } from '@carbon/enum/equiment.enum';
import { ActiveFugitiveApproachM } from '@carbon/model/fugitive.model';
import { FUGITIVE_EMISSION } from '@carbon/constant/fugitive-emission.constant'; 

import { FugitiveServiceByContractorController } from '@carbon/controller/fugitive-service-by-contractor.controller';
import { GasService } from '@carbon/service/gas.service';
import { FugitiveConfiguratorService } from '@carbon/service/fugitive.configurator.service';


// tsc-library
import { ButtonLabelEnum, COMMON_CONSTANT, DialogEnum, DialogOneComponent, FunnelFilterComponent, MATERIAL_CONSTANT, MessageAlertIconEnum, MessageAlertTypeEnum, TABLE_CONSTANT } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { DateFilterComponent, DateService } from '@library/date';
// / tsc-library

@Component({
	selector: 'app-sales-disbursements',
	templateUrl: './sales-disbursements.component.html',
	styleUrls: ['../purchase-acquisition/purchase-acquisition.component.scss']
})
export class SalesDisbursementsComponent implements OnInit {

    MATERIAL_CONSTANT = MATERIAL_CONSTANT;
    COMMON_CONSTANT = COMMON_CONSTANT;
    TABLE_CONSTANT = TABLE_CONSTANT;
    ButtonLabelEnum = ButtonLabelEnum;
    messageAlertTypeEnum = MessageAlertTypeEnum;
	messageAlertIconEnum = MessageAlertIconEnum;

	faPlus = faPlus;
	faEllipsisV = faEllipsisV;

	currentOrgID: any;

	dataSource: any;
	resultLength: number;

	displayedColumns: string[] = [
		'recordID',
		'date',
		'gasName',
		'gasQuantity',
		'totalEquipmentCapacity',
		'doc',
		'note',
		'actions'
	];

	gasList: any[] = [];
	gasFlag: boolean = false;
	gasNameFC: FormControl = new FormControl('all');

	filterArr: Array<string> = [];
	chips: any[] = [];

	titleName: string = 'sales and disbursement record';
	activityType: string = EquipmentTabEnum.SALES;

	showAddRecordButton: boolean = true;
	responseM: ActiveFugitiveApproachM;

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild('gasSelect') gasSelect: FunnelFilterComponent;
	@ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;

	@ViewChild('filterChild') filterChild: DateFilterComponent;

	constructor(
		private dialog: MatDialog,
		private storageService: StorageService,
		private fugitiveServiceByContractorController: FugitiveServiceByContractorController,
		private gasService: GasService,
		private fugitiveConfiguratorService: FugitiveConfiguratorService,
        private dateService: DateService
	) { }

	ngOnInit(): void {
		this.currentOrgID = this.storageService.getStorage('currentOrgID');
		this.getGas();

		this.getActivityConfiguration();
	}

	ngAfterViewInit() {
		this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

		merge(
			this.paginator.page,
			this.sort.sortChange,
			this.gasSelect.mono,
			this.filterChild.emitFilter,
			fromEvent(this.refreshBtn.nativeElement, 'click')
		)
			.pipe(
				startWith({}),
				switchMap(() => {
					this.filterArr = [];
					if (this.gasFlag) {
						this.filterArr.push('gasID:' + this.gasNameFC.value);
					}

					return this.fugitiveServiceByContractorController.getEquipmentCapacityRecord(
						this.paginator.pageIndex,
						this.paginator.pageSize,
						this.sort.active,
						this.sort.direction,
						this.filterArr,
						this.currentOrgID,
						this.activityType,
                        this.dateService.convertUtcToTimeZone(this.filterChild.startDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
                        this.dateService.convertUtcToTimeZone(this.filterChild.endDateFC.value, COMMON_CONSTANT.ASIAN_KOLKATA, 'YYYY-MM-DD'),
					).pipe(catchError(() => observableOf(null)));
				}),
				map(dataSource => {
					if (dataSource == null) {
						return [];
					}
					console.log("dataSource", dataSource)
					this.resultLength = dataSource.totalCount;
					return dataSource.record;
				})
			).subscribe(dataSource => (this.dataSource = dataSource));
	}

	uploadFile(action, id) {
		const dialogRef = this.dialog.open(UploadDocumentDialog, {
			data: {
				action: action,
				typeID: id,
				currentOrgID: this.currentOrgID,
				type: FUGITIVE_EMISSION.ACTIVITY_DATA_EQUIPMENT_CAPACITY,
			},
			minWidth: '600px',
			maxWidth: '600px'
		});
		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result == DialogEnum.SUCCESS_DR) {
					this.refreshBtn.nativeElement.click();
				}
			})
	}

	createSalesDisbursementsRecord(operation) {
		let dialogRef;
		if (operation == 'CREATE') {
			dialogRef = this.dialog.open(ContractorPurchaseSalesDialog, {
				data: {
					action: operation,
					currentOrgID: this.currentOrgID,
					type: this.activityType,
					titleName: this.titleName,
				},
				minWidth: '600px',
				maxWidth: '600px',
				height: '100%',
				position: { right: '-2px', top: '0px' },
			});
		}
		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result == DialogEnum.SUCCESS_DR) {
					this.refreshBtn.nativeElement.click();
				}
			})
	}

	updateSalesDisbursementsRecord(operation, equipmentCapacity) {
		let dialogRef;
		if (operation == 'UPDATE') {
			dialogRef = this.dialog.open(ContractorPurchaseSalesDialog, {
				data: {
					action: operation,
					currentOrgID: this.currentOrgID,
					equipmentCapacityID: equipmentCapacity['id'],
					type: this.activityType,
					titleName: this.titleName,
					recordDate: equipmentCapacity['recordDate']
				},
				minWidth: '600px',
				maxWidth: '600px',
				height: '100%',
				position: { right: '-2px', top: '0px' },
			});
		}
		dialogRef.afterClosed()
			.subscribe((result) => {
				if (result == DialogEnum.SUCCESS_DR) {
					this.refreshBtn.nativeElement.click();
				}
			})
	}

	confirmDelete(equipmentCapacity) {
		let recalculationDate = moment(equipmentCapacity['recordDate']).startOf('month').format('DD-MMM-YYYY');
		const dialog = this.dialog.open(DialogOneComponent,
			{
                data: {
                    type: 'delete',
                    icon: 'dangerous',
                    header: 'Delete sales disbursements record?',
                    body: `This will cause re-calculation from ` + recalculationDate + `. Fugitive emissions from refrigeration, air conditioning and fire suppression after the above date will be re-calculated.
                    Are you sure you want to continue?`,
                    buttonOne: 'Close',
                    buttonTwo: 'Delete'
                },

				maxWidth: '600px'
			});

		dialog.afterClosed().subscribe(res => {
			if (res) {
				this.deleteSalesDisbursementRecord(equipmentCapacity['id']);
			}
		});
	}

	deleteSalesDisbursementRecord(equipmentCapacityID) {
		this.fugitiveServiceByContractorController.deleteEquipmentCapacityRecord(this.currentOrgID, equipmentCapacityID).subscribe((deleteRes) => {
			this.refreshBtn.nativeElement.click();
		},
			error => {
				console.log('Error in deleteSalesDisbursementRecord -', error);
			})
	}

	async getGas() {
		this.gasList = <any>await this.gasService.getGas();
	}

	openNoteDialog(record) {
		const dialogRef = this.dialog.open(NoteDialog, {
			data: {
				userName: record.userName,
				note: record.note,
			},
			minWidth: '500px',
			maxWidth: '500px'
		});
		dialogRef.afterClosed()
			.subscribe((result) => {
			})
	}

	clearAllFilters() {
		this.chips = [];
		this.gasFlag = false;
		this.gasNameFC.setValue('all');
		this.refreshBtn.nativeElement.click();
	}

	applyFilter(gas) {
		this.chips = [];
		this.chips.push({ type: gas['keyID'], key: gas['id'], filter: `${gas['name']}` });
	}

	removeChip(): void {
		this.chips = [];
		this.gasFlag = false;
		this.gasNameFC.setValue('all');
		this.refreshBtn.nativeElement.click();
	}

	columnDisplay(value) {
		if (value != null) {
			return (value.length > 18) ? (value.substring(0, 18) + '..') : value;
		} else {
			return ' -- ';
		}
	}

	async getActivityConfiguration() {
		this.responseM = await this.fugitiveConfiguratorService.getActiveActivityConfiguration(this.currentOrgID);
		this.showAddRecordButton = this.responseM['createServiceByContractorApproach'];
	}

}
