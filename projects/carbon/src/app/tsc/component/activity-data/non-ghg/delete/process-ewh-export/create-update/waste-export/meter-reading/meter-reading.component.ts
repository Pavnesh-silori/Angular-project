import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { forkJoin } from 'rxjs';

import { FuelService } from '@carbon/service/fuel.service';

import { InvalidForm, MatSelectSearchService, MaterialFormFieldAppearance } from '@library/tsc-common';
import { StorageService } from '@library/storage-service';
import { ToastrService, ToastrColor, ToastrTitle } from '@library/toastr-service';
import { UnitM, UnitService, UnitTypeKeyID } from '@library/unit-service';

@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {

  MaterialFormFieldAppearance = MaterialFormFieldAppearance;
  activityDataFG: FormGroup;
  action: any;

  billFile: File = null;
  billFileName: string;
  noBillFileAvailable: boolean = true;

  fuelUnitList: UnitM[] = [];
  energyUnitList: UnitM[] = [];
  unitM: UnitM[] = [];

  fuelUnitTypeSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
  energyUnitListSearch: MatSelectSearchService = new MatSelectSearchService(['name']);
  @ViewChild('fileInput') fileInput: ElementRef;
  @Output() docUploadChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelService,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private unitService: UnitService,
  ) { }

  ngOnInit(): void {
    this.getUnitList();
    this.FormDataInit();
  }

  FormDataInit() {
    this.activityDataFG = this.formBuilder.group({
      activityDataID: [],
      recordID: [],
      activityKeyID: [],
      startDate: [],
      endDate: [],
      dateRange: [],
      openingMeterReading: [],
      closingMeterReading: [],
      meterUnitID: [],
      docID: [],
      docType: [],
      docName: [],
      docPath: [],
    });

    if (this.action == 'create') {
    }

    if (this.action == 'update') {
    }
  }

 async getUnitList() {
		this.unitM = await this.unitService.getUnit([]);
    console.log(this.unitM);
    this.fuelUnitList = this.unitM.filter(unit => unit.type == UnitTypeKeyID.VOLUME)
    this.fuelUnitTypeSearchUtil.entityArr =   this.fuelUnitList;
    this.fuelUnitTypeSearchUtil.createSubscription();
    this.energyUnitList = this.unitM.filter(unit => unit.type == UnitTypeKeyID.ENERGY)
    this.energyUnitListSearch.entityArr = this.energyUnitList;
    this.energyUnitListSearch.createSubscription();
  }

  fileUpload(event) {
    let file = event.target.files[0];
    if (file) {

        if (file.type !== 'application/pdf') {
            this.toastrService.openToast('Error', file, 'error');
            return;
        }

        if (file.size > 10485760) {
            this.toastrService.openToast(ToastrTitle.ERROR, 'fileSizeError', ToastrColor.ERROR);
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e: any) => { };

        this.billFile = file;
        this.noBillFileAvailable = false;
        this.billFileName = file['name'];
        this.fileInput.nativeElement.value = null;
        this.docUploadChange.emit(this.billFile);

    }
}

removeFile() {
    this.billFile = null;
    this.billFileName = '';
    this.noBillFileAvailable = true;
    this.fileInput.nativeElement.value = null;
    this.docUploadChange.emit(this.billFile);
}

uploadDoc() {
    this.fileInput.nativeElement.click();
}

  errorHandling = (control: string, error: string): boolean => {
    return this.activityDataFG.get(control).hasError(error);
  }

}