import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { isEqual } from 'lodash';
import { CARBON_CONSTANT } from '@carbon/constant/carbon.constant';
import { MobileCombustionDataInputTypeEnum, DataInputMethodKeyIDEnum } from '@carbon/enum/data-input-method.enum';
import { ActivityService } from '@carbon/service/activity.service';
import { DataInputMethodService } from '@carbon/service/data-input-method.service';
//tsc-library
import { StorageService } from '@library/storage-service';
import { UnitService, UnitTypeKeyID } from '@library/unit-service';
import { CreateUpdateComponent as VechileCreate } from "@library/netzero";
import { VehicleService, VehicleTypeM } from "library/netzero";
import {
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    FormAction,
    VIEW_TYPE_ENUM,
    DialogEnum,
    FormErrorEnum
} from '@library/tsc-common';
// /tsc-library/
@Component({
    selector: 'app-config-create',
    templateUrl: './config-create.component.html',
    styleUrls: ['./config-create.component.scss']
})
export class ConfigCreateComponent {

    FormAction = FormAction;
    FormErrorEnum = FormErrorEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;
    currentOrgID: any;

    MobileCombustionDataInputTypeEnum = MobileCombustionDataInputTypeEnum;
    DataInputMethodKeyIDEnum = DataInputMethodKeyIDEnum;

    activityID: number;
    activityKeyID: any;

    activityConfigFG: FormGroup
    formGroup: FormGroup;

    origin: any;
    sourceID: any;
    action: any;
    vehicles: any[] = [];
    vehicleType: VehicleTypeM[];
    onRoadID: number;
    onRoad: any[] = [];
    nonRoadID: number;
    nonRoad: any[] = [];
    distanceID: any;
    distanceUnit: any = []
    dataInputMethodList: any = [];
    fuelInputList: any = [];
    distanceInputList: any = [];

    configuration: any;
    initialObject: any;
    vechileTypeFlag: boolean = false;
    sourceSearchUtil: MatSelectSearchService = new MatSelectSearchService(['vehicleName']);

    @Output() formDataEvent = new EventEmitter<any>();
    isEqual: EventEmitter<boolean> = new EventEmitter();
    validity: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private formBuilder: FormBuilder,
        private storageService: StorageService,
        private activatedRoute: ActivatedRoute,
        private vehicleService: VehicleService,
        private unitService: UnitService,
        private dialog: MatDialog,
        private dataInputMethodService: DataInputMethodService,
        private activityService: ActivityService
    ) { }

    ngOnInit() {
        this.currentOrgID = this.storageService.getStorage('currentOrgID');
        this.activatedRoute.data.subscribe((routeData) => {
            this.action = routeData['action'];
            if (routeData['origin']) {
                this.origin = routeData['origin'];
            }
        });
        this.activityKeyID = this.activatedRoute.snapshot.data['activityKeyID'];
        this.getActivityID(this.activityKeyID)
        this.getVehicleType();
        this.getUnit();
        this.activityConfigInit();
    }

    async getActivityID(activityKeyID) {
        let allActivity = await <any>this.activityService.getAllActivityNew()
        allActivity.forEach(activity => {
            if (activity.keyID == activityKeyID) {
                this.activityID = activity.id;
                this.getAllDataInputMethodList();
            }
        });
    }

    activityConfigInit() {
        this.activityConfigFG = this.formBuilder.group({
            activityConfig: this.formBuilder.group({
                activityID: [this.activityID],
                activityKeyID: [this.activityKeyID],
                configName: [, Validators.required],
            }),
            activityConfigData: this.formBuilder.group({
                vehicleTypeID: [, Validators.required],
                fuelDataInputMethodID: [, Validators.required],
                distanceDataInputMethodID: [, Validators.required],
                meterRollOver: [],
                meterUnitID: [],
            }),
            activityConfigSource: this.formBuilder.group({
                sourceID: [, Validators.required],
                sourceTypeID: [],
            }),
        });
        if (this.origin == 'ad-hoc') { this.configNameAC.disable(); }
    }

    setSourceTypeID(data) {
        this.activityConfigFG.get('activityConfigSource').get('sourceTypeID').patchValue(data.sourceTypeID, { emitEvent: false });
    }

    readOnlyForm() {
        this.activityConfigFG.disable();
    }

    patchConfiguration(configuration: any) {
        const { activityConfig, activityConfigData, activityConfigSource } = configuration;

        this.activityConfigFG.valueChanges.subscribe(() => {
            this.isEqual.next(isEqual(this.initialObject, this.activityConfigFG.getRawValue()));
        });


        if (activityConfig) {
            this.activityConfigAC.patchValue({ configName: activityConfig.configName });
        } else {
            this.readOnlyForm();
        }

        if (activityConfigData.vehicleTypeID) {
            const type = this.vehicleType.find(res => res.id == activityConfigData.vehicleTypeID).keyID;
            this.chooseVehicleType(type);
        }

        this.activityConfigDataAC.patchValue({
            vehicleTypeID: activityConfigData.vehicleTypeID,
            fuelDataInputMethodID: activityConfigData.fuelDataInputMethodID,
            distanceDataInputMethodID: activityConfigData.distanceDataInputMethodID,
            meterRollOver: activityConfigData.meterRollOver,
            meterUnitID: activityConfigData.meterUnitID,
        });

        this.activityConfigSourceAC.patchValue({
            sourceID: activityConfigSource.sourceID,
            sourceName: activityConfigSource.sourceName,
            sourceTypeID: activityConfigSource.sourceTypeID,
        });
        this.OpenOdometerIP(activityConfigData.distanceDataInputMethodID)

        this.isEqual.next(true);
        this.initialObject = this.activityConfigFG.value;
    }
   
    OpenOdometerIP(value){
        console.log(this.dataInputMethodList)
       let distanceMethod = this.dataInputMethodList.find(res =>res.id == value).keyID;
       this.getDistance(distanceMethod);
    }


    async getVehicleType() {
        this.vehicleType = <VehicleTypeM[]>await this.vehicleService.getVehicleType()
        this.vehicleType.forEach(res => {
            if (res.keyID == CARBON_CONSTANT.VEHICLE_TYPE_ON_ROAD) { this.onRoadID = res.id }
            else if (res.keyID == CARBON_CONSTANT.VEHICLE_TYPE_NON_ROAD) { this.nonRoadID = res.id }
        });
        this.getAllVehicle()
    }

    async getAllVehicle() {
        this.vehicles = await this.vehicleService.getAllVehicle(this.currentOrgID);
        this.vehicles.forEach(vehicle => {
            if (vehicle.vehicleTypeID == this.onRoadID) {
                this.onRoad.push(vehicle);
            } else if (vehicle.vehicleTypeID == this.nonRoadID) {
                this.nonRoad.push(vehicle);
            }
        });
    }

    async getVehicleByTypeID() {
        this.onRoad = await this.vehicleService.getVehicleByTypeID(this.currentOrgID, this.onRoadID);
        this.nonRoad = await this.vehicleService.getVehicleByTypeID(this.currentOrgID, this.nonRoadID);
    }

    chooseVehicleType(value) {
        const inputFieldControl = this.activityConfigFG.get('activityConfigSource.sourceID') as FormControl;
        inputFieldControl.reset('');
        this.sourceSearchUtil.entityArr = [];
        if (value == CARBON_CONSTANT.VEHICLE_TYPE_ON_ROAD && this.onRoad.length > 0) {
            this.sourceSearchUtil.entityArr = this.onRoad;
            this.sourceSearchUtil.createSubscription();
            this.vechileTypeFlag = false;
        }
        else if (value == CARBON_CONSTANT.VEHICLE_TYPE_NON_ROAD && this.nonRoad.length > 0) {
            this.sourceSearchUtil.entityArr = this.nonRoad;
            this.sourceSearchUtil.createSubscription();
            this.vechileTypeFlag = false;
        }
        else {
            console.log('no vehicle found');
            this.vechileTypeFlag = true;
        }
    }

    getDistance(value) {
        this.distanceID = value;
        const activityConfigDataGroup = this.activityConfigFG.get('activityConfigData') as FormGroup;
        if (value == DataInputMethodKeyIDEnum.ODOMETER_READING) {
            activityConfigDataGroup.get('meterRollOver').setValidators([Validators.required, Validators.min(0)]);
            activityConfigDataGroup.get('meterUnitID').setValidators(Validators.required);
        } else {
            activityConfigDataGroup.get('meterRollOver').clearValidators();
            activityConfigDataGroup.get('meterUnitID').clearValidators();
        }
        activityConfigDataGroup.get('meterRollOver').updateValueAndValidity();
        activityConfigDataGroup.get('meterUnitID').updateValueAndValidity();
        return this.distanceID;
    }

    errorHandling = (control: string, error: string): boolean => {
        return this.activityConfigFG.get(control).hasError(error);
    }

    emitFormData() {
        if (this.formGroup.valid) {
            this.formDataEvent.emit(this.formGroup.value);
        } else {
            this.formGroup.markAllAsTouched();
        }
    }

    isValid = () => { return !this.activityConfigFG.invalid; }

    async getAllDataInputMethodList() {
        this.dataInputMethodList = await this.dataInputMethodService.getAllDataInputMethodList();
        this.dataInputMethodList.forEach(res => {
            if (res.activityID == this.activityID && res.type == MobileCombustionDataInputTypeEnum.FUEL) {
                this.fuelInputList.push(res);
            } else if (res.activityID == this.activityID && res.type == MobileCombustionDataInputTypeEnum.DISTANCE) {
                this.distanceInputList.push(res);
            }
        })
    }

    get getConfigJson() {
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.value));
        this.configuration.activityConfigSource.sourceID = this.configuration.activityConfigSource.sourceID;
        return this.configuration;
    }

    isValidForm(): boolean {
        if (this.activityConfigFG.invalid) {
            this.activityConfigFG.markAllAsTouched();
            return false;
        }
        this.configuration = {};
        this.configuration = JSON.parse(JSON.stringify(this.activityConfigFG.getRawValue()));
        this.configuration.activityConfigSource.sourceID = this.configuration.activityConfigSource.sourceID;
        return true;
    }

    activityConfigValidity() {
        this.activityConfigFG.valueChanges.subscribe(() => this.validity.emit(!this.activityConfigFG.invalid));
    }

    async getUnit() {
        this.distanceUnit = await this.unitService.getUnitUsingPublicUrl([`type:${UnitTypeKeyID.LENGTH}`]);
    }

    get activityConfigAC() {
        return this.activityConfigFG.get('activityConfig') as AbstractControl;
    }

    get activityConfigSourceAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigSource') as AbstractControl;
    }

    get configNameAC() {
        return this.activityConfigAC.get('configName') as AbstractControl;
    }
    get activityConfigDataAC(): AbstractControl {
        return this.activityConfigFG.get('activityConfigData') as AbstractControl;
    }

    createVehicle(operation) {
        let action: string = operation;
        let dialogRef;
        let data: any;

        if (action == FormAction.CREATE) {
            data = {
                action: FormAction.CREATE,
                source: VIEW_TYPE_ENUM.DIALOG
            }
        }

        dialogRef = this.dialog.open(VechileCreate, {
            data: data,
            minWidth: '600px',
            maxWidth: '600px',
            height: '100%',
            position: { right: '-2px', top: '0px' },
            panelClass: 'matDialogContainerOverride'
        });

        dialogRef.afterClosed()
            .subscribe((result) => {
                if (result.status == DialogEnum.SUCCESS_DR) {
                    this.getAllVehicle();
                }
            });
    }
}
