import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ReplaySubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import * as i0 from "@angular/core";
export class MatSelectSearchService {
    constructor(searchBy) {
        this.entityArr = [];
        this.filterFC = new FormControl();
        this.filterUnsubscribe = new Subject();
        this.filteredEntities = new ReplaySubject(1);
        this.searchBy = searchBy;
    }
    createSubscription() {
        this.filteredEntities.next(this.entityArr);
        this.filterFC.valueChanges
            .pipe(takeUntil(this.filterUnsubscribe))
            .subscribe(() => __awaiter(this, void 0, void 0, function* () {
            this.filteredEntities = yield this.filterMultipleValue(this.entityArr, this.filterFC.value, this.searchBy);
        }));
    }
    filterMultipleValue(data, filterValue, filterBy) {
        return new Promise(resolve => {
            let filtered = new ReplaySubject(1);
            if (!data) {
                resolve('');
            }
            let search = filterValue;
            if (!search) {
                filtered.next(data.slice());
            }
            else {
                search = search.toLowerCase();
                filtered.next(data.filter((filterData) => filterBy.some(field => filterData[field].toLowerCase().indexOf(search) > -1)));
            }
            resolve(filtered);
        });
    }
}
MatSelectSearchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MatSelectSearchService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable });
MatSelectSearchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MatSelectSearchService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MatSelectSearchService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYnJhcnkvdHNjLWNvbW1vbi9zcmMvbGliL3RzYy9zZXJ2aWNlL21hdC1zZWxlY3Qtc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLHNCQUFzQjtJQVMvQixZQUFZLFFBQWtCO1FBUDlCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzFDLHNCQUFpQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZELHFCQUFnQixHQUF5QixJQUFJLGFBQWEsQ0FBUSxDQUFDLENBQUMsQ0FBQztRQUtqRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO2FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDdkMsU0FBUyxDQUFDLEdBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQ2xELElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQ25CLElBQUksQ0FBQyxRQUFRLENBQ2hCLENBQUM7UUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVcsRUFBRSxXQUFtQixFQUFFLFFBQWtCO1FBQ3BFLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsSUFBSSxRQUFRLEdBQXlCLElBQUksYUFBYSxDQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2Y7WUFDRCxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNO2dCQUNILE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDbEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDdkQsQ0FDSixDQUNKLENBQUM7YUFDTDtZQUNELE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7O29IQWhEUSxzQkFBc0I7d0hBQXRCLHNCQUFzQixjQUhuQixNQUFNOzRGQUdULHNCQUFzQjtrQkFKbEMsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0U2VhcmNoU2VydmljZSB7XG5cbiAgICBlbnRpdHlBcnI6IGFueVtdID0gW107XG4gICAgZmlsdGVyRkM6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgZmlsdGVyVW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAgIGZpbHRlcmVkRW50aXRpZXM6IFJlcGxheVN1YmplY3Q8YW55W10+ID0gbmV3IFJlcGxheVN1YmplY3Q8YW55W10+KDEpO1xuXG4gICAgc2VhcmNoQnk6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3Ioc2VhcmNoQnk6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoQnkgPSBzZWFyY2hCeTtcbiAgICB9XG5cbiAgICBjcmVhdGVTdWJzY3JpcHRpb24oKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRFbnRpdGllcy5uZXh0KHRoaXMuZW50aXR5QXJyKTtcblxuICAgICAgICB0aGlzLmZpbHRlckZDLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZmlsdGVyVW5zdWJzY3JpYmUpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEVudGl0aWVzID0gYXdhaXQgdGhpcy5maWx0ZXJNdWx0aXBsZVZhbHVlKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGl0eUFycixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJGQy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCeVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaWx0ZXJNdWx0aXBsZVZhbHVlKGRhdGE6IGFueVtdLCBmaWx0ZXJWYWx1ZTogc3RyaW5nLCBmaWx0ZXJCeTogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWQ6IFJlcGxheVN1YmplY3Q8YW55W10+ID0gbmV3IFJlcGxheVN1YmplY3Q8YW55W10+KDEpO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2VhcmNoID0gZmlsdGVyVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkLm5leHQoZGF0YS5zbGljZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWQubmV4dChcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoKGZpbHRlckRhdGEpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeS5zb21lKGZpZWxkID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRGF0YVtmaWVsZF0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==