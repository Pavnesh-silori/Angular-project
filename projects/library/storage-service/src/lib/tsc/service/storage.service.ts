import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class StorageService {

    constructor() { }

    setStorage(key, value) {
        return localStorage.setItem(key, value);
    }

    getStorage(key) {
        return localStorage.getItem(key);
    }

    deleteStorage(key) {
        localStorage.removeItem(key);
    }

    clearStorage() {
        localStorage.clear();
        sessionStorage.clear();
    }
}
