import { Injectable } from "@angular/core";

import { State, StateM} from "../model/state.model";

import { StateController } from "../controller/state.controller";

@Injectable({
    providedIn: 'root'
})

export class StateService {

    constructor(
        private stateController: StateController,
    ) { }

    async getState(countryCode): Promise<StateM[]> {
        let stateM: StateM[];
        let state = [new State()];

        try {
            stateM = await this.stateController.getState(countryCode).toPromise();

            if (stateM) {
                return stateM;
            } else {
                return state;
            }
        } catch (error) {
            console.error('Error -', error);
            return state;
        }
      }
      

}