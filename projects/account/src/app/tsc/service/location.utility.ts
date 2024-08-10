import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocationUtility {

    constructor(
        private http: HttpClient,
    ) { }

    async getUserInfo() {
        try {
            const data = await this.http.get(`https://jsonip.com/`).toPromise();
            return data['country'];
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    }
}
