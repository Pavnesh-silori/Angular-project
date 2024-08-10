import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserController {
    constructor(private http: HttpClient) { }

    updateUserByID(userID, userDetail) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}users/${userID}`, userDetail);
    }

    validatePassword(userID, password) {
        return this.http.post(`${environment.ORGANIZATION_API_URL}users/${userID}/password/validate`, password);
    }

    setUserProfileImage(userID, profileImg) {
        return this.http.post(`${environment.ORGANIZATION_API_URL}users/${userID}/profile`, profileImg);
    }

    updateUserProfileImage(imageID, profileImg) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}files/${imageID}`, profileImg);
    }

    deleteUserProfileImage(userID, fileID) {
        return this.http.delete(`${environment.ORGANIZATION_API_URL}users/${userID}/files/${fileID}`);
    }

    changePassword(userID, body) {
        return this.http.patch(`${environment.ORGANIZATION_API_URL}users/${userID}/password/update`, body);
    }

}
