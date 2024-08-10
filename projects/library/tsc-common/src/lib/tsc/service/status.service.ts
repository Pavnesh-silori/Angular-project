import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StatusService {
    constructor(
    ) { }

    getStatusClass(status: string) {
        let className: string;

        switch (status) {
            case 'ACTIVE':
            case 'ONLINE':
                className = 'text-success';
                break;
            case 'INACTIVE':
            case 'OFFLINE':
                className = 'text-danger';
                break;
            case 'PENDING':
                className = 'text-warning';
                break;
            case 'DELETED':
                className = 'text-danger';
                break;
            default:
                className = '';
                break;
        }

        return className;
    }

    getStatusValue(status: string) {
        let value: string;

        switch (status) {
            case 'ACTIVE':
                value = 'Active';
                break;
            case 'INACTIVE':
                value = 'Inactive';
                break;
            case 'PENDING':
                value = 'Pending';
                break;
            case 'DELETED':
                value = 'Deleted';
                break;
            case 'ONLINE':
                value = 'Online';
                break;
            case 'OFFLINE':
                value = 'Offline';
                break;
            case 'DELAYED':
                value = 'Delayed';
                break;
            case 'PARTIAL_LIVE':
                value = 'Partial Live';
                break;
            default:
                value = status;
                break;
        }

        return value;
    }

    getYesByBoolean(value: boolean) {
        let label: string;

        switch (value) {
            case true:
                label = 'Yes';
                break;
            case false:
                label = 'No';
                break;
            default:
                label = value;
                break;
        }

        return label;
    }

    getActiveByBoolean(value: boolean) {
        let label: string;

        switch (value) {
            case true:
                label = 'Active';
                break;
            case false:
                label = 'Inactive';
                break;
            default:
                label = value;
                break;
        }

        return label;
    }

    getEnableByBoolean(value: boolean) {
        let label: string;

        switch (value) {
            case true:
                label = 'Enabled';
                break;
            case false:
                label = 'Disabled';
                break;
            default:
                label = value;
                break;
        }

        return label;
    }

    getYesActiveClassByBoolean(value: boolean) {
        let className: string;

        switch (value) {
            case true:
                className = 'text-success';
                break;
            case false:
                className = 'text-danger';
                break;
            default:
                className = '';
                break;
        }

        return className;
    }
}
