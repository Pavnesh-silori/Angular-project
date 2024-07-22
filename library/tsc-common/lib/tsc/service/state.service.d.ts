import { StateM } from "../model/state.model";
import { StateController } from "../controller/state.controller";
import * as i0 from "@angular/core";
export declare class StateService {
    private stateController;
    constructor(stateController: StateController);
    getState(countryCode: any): Promise<StateM[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateService>;
}
