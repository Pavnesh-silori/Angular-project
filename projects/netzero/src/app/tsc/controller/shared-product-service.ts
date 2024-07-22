// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
// import { catchError, finalize, shareReplay, tap } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';

// @Injectable({
//     providedIn: 'root'
// })
// export class SharedProductService {
//     // private data$: Observable<any>;
//     // productID:any;
//     // private loading = false;

//     // constructor(private http: HttpClient) { }

//     // fetchData(productID: string, orgID: string, source): Observable<any> {
//     //     if (this.productID != productID) {
//     //         this.productID = productID;
//     //         const url = `${environment.COMMON_API_URL}organizations/${orgID}/${source}/${productID}`;
//     //         console.log('Making HTTP call to:', url);

//     //         // Create a ReplaySubject to cache the response and share it among subscribers
//     //         const dataSubject = new ReplaySubject<any>(1);
//     //         this.data$ = dataSubject.asObservable();

//     //         // Make the HTTP request
//     //         this.http.get<any>(url).pipe(
//     //             tap(response => {
//     //                 console.log('Received data:', response);
//     //                 dataSubject.next(response);
//     //             }),
//     //             catchError(this.handleError<any>('fetchData', [])),
//     //             finalize(() => {
//     //                 this.loading = false;
//     //                 console.log('HTTP request completed');
//     //             }),
//     //             shareReplay(1) // Share the response among multiple subscribers
//     //         ).subscribe();
//     //     }
//     //     return this.data$;
//     // }

//     // private handleError<T>(operation = 'operation', result?: T) {
//     //     return (error: any): Observable<T> => {
//     //         console.error(`${operation} failed: ${error.message}`);
//     //         return of(result as T);
//     //     };
//     // }

//     private dataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
//     public data$: Observable<any> = this.dataSubject.asObservable();

//     constructor(private http: HttpClient) { }

//     fetchData(productID: string, orgID: string, source): void {
//         let apiUrl = `${environment.COMMON_API_URL}organizations/${orgID}/${source}/${productID}`; // Replace with your actual API endpoint
//         this.http.get<any>(apiUrl).pipe(
//             tap(data => this.dataSubject.next(data))
//         ).subscribe();
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedProductService {
  private dataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public data$: Observable<any> = this.dataSubject.asObservable();
  private loading = false;

  constructor(private http: HttpClient) {}

  fetchData(productID: string, orgID: string, source: string): void {
    const apiUrl = `${environment.COMMON_API_URL}organizations/${orgID}/${source}/${productID}`;
    this.loading = true;

    this.http.get<any>(apiUrl).pipe(
      tap(data => {
        this.dataSubject.next(data);
      }),
      catchError(this.handleError<any>('fetchData', [])),
      finalize(() => {
        this.loading = false;
      })
    ).subscribe();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}

