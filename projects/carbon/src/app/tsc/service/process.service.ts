import { Injectable } from "@angular/core";

import { ProcessController } from "@carbon/controller/process.controller";

@Injectable({
    providedIn: 'root'
})

export class ProcessService {

    constructor(
        private processController: ProcessController
    ) { }

    async getProcessList(orgID: number): Promise<any[]> {
        let processM;
        let process;
        try {
            processM = await this.processController.getProcessList(orgID).toPromise();

            if (processM) {
                return processM;
            } else {
                return process;
            }
        } catch (error) {
            console.error('Error -', error);
            return process;
        }
    }

    async getIpccProcess(): Promise<any> {
        let ipccProcess: any;

        try {
            ipccProcess = await this.processController.getIpccProcess().toPromise();

            if (ipccProcess) {
                return ipccProcess;
                // return new IpccProcess();
            } else {
                // return new IpccProcess();
            }
        } catch (error) {
            console.error('error in getIpccProcess -', error);
            // return new IpccProcess();
        }
    }

    async getProcessParamTech(ippcProcessID: number): Promise<any> {
        let ipccProcess: any;

        try {
            ipccProcess = await this.processController.getProcessParamTech(ippcProcessID).toPromise();

            if (ipccProcess) {
                return ipccProcess;
                // return new IpccProcess();
            } else {
                // return new IpccProcess();
            }
        } catch (error) {
            console.error('error in getProcessParamTech -', error);
            // return new IpccProcess();
        }
    }

    async getProcessByID(ordID: number, processID: number, isLatest: boolean = null) {
        let process;

        try {
            process = await this.processController.getProcessByID(ordID, processID, isLatest).toPromise();

            if (process) {
                return process;
            } else {
                return null;
            }
        } catch (error) {
            console.error('error in getProcessByID -', error);
            return null;
        }
    }

    async getProcessInputs() {
        let processInput;

        try {
            processInput = await this.processController.getProcessInputs().toPromise();

            if (processInput) {
                return processInput;
            } else {
                return null;
            }
        } catch (error) {
            console.error('error in getProcessInputs -', error);
            return null;
        }
    }

}
