import { Injectable } from "@angular/core";
import {TimeZoneController} from "../controller/time-zone.controller";
import {TimeZoneM, TimeZone} from '../model/time-zone.model'

@Injectable({
    providedIn: 'root'
})

export class TimeZoneService {

    constructor(
        private timeZoneController:TimeZoneController
    ) { }

   async getTimeZone():Promise<TimeZoneM[]>{
        let timeZoneM:TimeZoneM[]
        try {
            timeZoneM = await this.timeZoneController.getTimeZone().toPromise();
            return timeZoneM;
        } catch (error) {
            console.error('Error -', error);
        }
    }
   
}