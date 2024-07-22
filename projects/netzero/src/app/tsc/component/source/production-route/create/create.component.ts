import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { forkJoin } from 'rxjs';
import { cloneDeep } from 'lodash-es';

import { MatDialog } from '@angular/material/dialog';
import { ProcessController } from '@carbon/controller/process.controller';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@library/storage-service';
import {
    ButtonLabelEnum,
    FormErrorEnum,
    InvalidForm,
    MatSelectSearchService,
    MaterialFormFieldAppearance,
    TSCCommonService
} from '@library/tsc-common';

import { ActivatedRoute, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ProductAndServiceService } from '@netzero/service/product-and-service.service';
import { PreviewComponent as PreviewDialog } from '../preview/preview.component';

import { ToastrColor, ToastrService } from '@library/toastr-service';

import { ViewComponent as ProcessViewComponent } from '@netzero/component/source/process/view/view.component';
import { ProductionRouteController } from '@netzero/controller/production-route.controller';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    FormErrorEnum = FormErrorEnum;
    ButtonLabelEnum = ButtonLabelEnum;
    MaterialFormFieldAppearance = MaterialFormFieldAppearance;

    faPlus = faPlus;

    currentOrgID: any;

    products: any[];
    groupName: any[];

    productionRouteID: any = null;
    productionRoute: any;

    productionRouteFG: FormGroup;

    isUpdate: boolean = false;
    patchInit: boolean = true;
    searchEnabled: boolean = false;
    haveStandardName: boolean = true;

    standardProductionRouteList: any[];

    todo = [];
    done = [];
    
    beforeSearch: any[] = this.todo;
    todoFiltered: any[] = this.todo;

    productSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);
    productionRouteSearchUtil: MatSelectSearchService = new MatSelectSearchService(['name']);

    constructor(
        activatedRoute: ActivatedRoute,
        storageService: StorageService,
        private router: Router,
        private dialog: MatDialog,
        private builder: FormBuilder,
        private tostrService: ToastrService,
        public tscCommonService: TSCCommonService,
        private productService: ProductAndServiceService,
        private processController: ProcessController,
        private productionRouteController: ProductionRouteController,
    ) {
        this.currentOrgID = storageService.getStorage('currentOrgID');

        if (activatedRoute.snapshot.data['action'] == 'UPDATE') {
            this.isUpdate = true;
            this.productionRouteID = activatedRoute.snapshot.params.productionRouteID;
        }
    }

    ngOnInit(): void {
        this.formInit();

        forkJoin([this.processController.getProcessList(this.currentOrgID), this.productService.getProductList(this.currentOrgID)])
            .subscribe(([processList, products]) => {
                this.setProcessesData(processList)
                this.setProductList(products);
            }).add(() => {
                if (this.productionRouteID != null) {
                    this.getProductionRouteByID();
                }
            });
    }

    getProductionRouteByID() {
        this.productionRouteController.getProductionRouteByID(this.currentOrgID, this.productionRouteID)
            .subscribe((route) => {
                this.productionRoute = route;
                this.patchProductionRoute();
            });
    }

    patchProductionRoute() {
        this.productionRouteFG.patchValue(this.productionRoute);

        let current_route = this.productionRoute.process;
        let current_route_p_ids = current_route.map(process => process.processID);
        current_route_p_ids.forEach(process_id => {
            let process = this.todo.find(process => process.id == process_id);
            this.done.push(process);
        });
        let process_list_not_in_pr = this.todo.filter(process => !current_route_p_ids.includes(process.id));
        this.todo = process_list_not_in_pr;
        this.setProcessesData(this.todo);
    }

    formInit() {
        this.productionRouteFG = this.builder.group({
            name: [, Validators.required],
            productID: [, Validators.required],
            standardPRID: [],
            process: []
        });

        this.productIDAC.valueChanges.subscribe((productID) => {
            let product = this.products.find(p => p.id == productID);
            this.standardPRIDAC.reset(null, { emitEvent: false });

            if (product.standardProductionRouteList != null) {
                this.haveStandardName = true;
                this.productionRouteSearchUtil.filterUnsubscribe.next();

                this.standardProductionRouteList = product.standardProductionRouteList;
                this.productionRouteSearchUtil.entityArr = this.standardProductionRouteList;
                this.productionRouteSearchUtil.createSubscription();
            } else {
                this.haveStandardName = false;
                this.productionRouteSearchUtil.entityArr = null;
                this.productionRouteSearchUtil.filterUnsubscribe.next();

                if (!(this.isUpdate && this.patchInit)) this.nameAC.reset();
                this.nameAC.enable();
            }
        });

        this.standardPRIDAC.valueChanges.subscribe((id) => {
            const pr = this.standardProductionRouteList.find(pr => pr.id == id);
            if (pr ?? false) {
                this.nameAC.patchValue(pr.name);
            }
        })
    }

    get productIDAC(): AbstractControl {
        return this.productionRouteFG.get('productID') as AbstractControl;
    }

    get standardPRIDAC(): AbstractControl {
        return this.productionRouteFG.get('standardPRID') as AbstractControl;
    }

    get nameAC(): AbstractControl {
        return this.productionRouteFG.get('name') as AbstractControl;
    }

    setProductList(productList) {
        this.products = productList.filter(p => p.isCbamCompliant);
        let cbam_products = this.products;
        this.productSearchUtil.entityArr = cbam_products;
        this.productSearchUtil.createSubscription();
    }

    setProcessesData(processList) {
        /* filter only cbam_processes */
        let cbam_processes = processList.filter(process => process.isCBAMProcess);

        this.todo = cbam_processes;
        this.todoFiltered = this.todo;
        this.beforeSearch = cloneDeep(this.todo);
    }

    findCommonElements(arr1: any[], arr2: any[]): any {
        const set1: Set<any> = new Set(arr1.map(p => p.id));
        let common_elements: any[] = [];
        for (let element of arr2) {
            if (set1.has(element.id)) { common_elements.push(element.id); }
        }
        return common_elements;
    }

    movedElement(arr1: any[], arr2: any[]): any {
        const set1: Set<any> = new Set(arr1.map(e => e.id));
        let common_elements: any[] = [];
        for (let element of arr2) {
            if (!set1.has(element.id)) { common_elements.push(element.id); }
        }
        return common_elements;
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

            if (event.previousContainer.id == "cdk-drop-list-0") {
                let moved_elements: any[] = this.movedElement(this.beforeSearch, this.todoFiltered);
                moved_elements.forEach(p_id => {
                    let moved_process = this.todo.find(p => p.id == p_id);
                    if (moved_process != undefined) {
                        this.beforeSearch.unshift(moved_process);
                    }
                });
            } else {
                this.cleanArrays();
            }
        }
    }

    cleanArrays() {
        let common_elements: any[] = this.findCommonElements(this.beforeSearch, this.done);

        if (common_elements.length != 0) {
            for (let p_id of common_elements) {
                let data_index = this.beforeSearch.findIndex((f) => f.id == p_id);
                this.beforeSearch.splice(data_index, 1);
            }
        }
    }

    SearchProcess(processName) {
        this.searchEnabled = true;
        if (processName.length == 0) {
            this.todoFiltered = this.beforeSearch;
            this.searchEnabled = false;
            return;
        }

        let pName = processName.toLowerCase();
        this.todoFiltered = this.beforeSearch.filter(p => {
            let lc = p.name.toLowerCase();

            if (lc.includes(pName)) {
                return lc;
            }
        });
    }

    showPreview() {
        this.dialog.open(PreviewDialog,
            {
                data: {
                    productionRoute: this.done
                },
                minWidth: 'calc(100vw - 20%)',
                minHeight: '650px',
            });
    }

    saveProductionRoute() {
        if (this.productionRouteFG.invalid) {
            this.productionRouteFG.markAllAsTouched();
            console.log('invalid form - ', this.productionRouteFG);
            this.tostrService.openToast(InvalidForm.INVALID_FORM_TITLE, InvalidForm.INVALID_FORM_MESSAGE, ToastrColor.ERROR);
            return;
        }

        if (this.done.length == 0) {
            console.log('No process added to production route');
            this.tostrService.error('Add atleast one process to production route');
            return;
        }

        let route = this.done.map(({ id, recordID }) => ({ id, recordID }));
        this.productionRouteFG.get('process').patchValue(route);

        if (this.isUpdate) {
            this.updateProductionRoute()
        } else {
            this.createProductionRoute()
        }
    }

    createProductionRoute() {
        this.productionRouteController.createProductionRoute(this.currentOrgID, this.productionRouteFG.getRawValue())
            .subscribe((res) => {
                this.router.navigate(['/source/production-route/page']);
            },
                error => {
                    console.log('error in updateProductionRoute() - ', error);
                });
    }

    updateProductionRoute() {
        this.productionRouteController.updateProductionRoute(this.currentOrgID, this.productionRouteID, this.productionRouteFG.getRawValue())
            .subscribe((res) => {
                this.router.navigate(['/source/production-route/page']);
            },
                error => {
                    console.log('error in updateProductionRoute() - ', error);
                });
    }

    viewProcess(processID) {
        let config = {
            disableClose: true,
            minWidth: '40vw',
            maxWidth: '40vw',
            height: '100%',
            position: { right: '-2px', top: '0px' },
        };
        config['minWidth'] = '800px';
        config['data'] = { processID: processID };

        this.dialog.open(ProcessViewComponent, config);
    }

    public errorHandling = (control: string, error: string) => {
        return this.productionRouteFG.get(control).hasError(error);
    }
}
