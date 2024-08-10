import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SystemController {
    constructor(
        private http: HttpClient
    ) { }

    getSystemInfo(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('skipAuth', '1');
        headers = headers.append('skipSuccessStatus', '1');
        headers = headers.append('skipErrorStatus', '1');

        return this.http.get<any>(`https://ipinfo.io/json`, { headers: headers });
    }
}
