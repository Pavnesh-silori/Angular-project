import { Injectable } from '@angular/core';

import { UserM, User } from '../model/user.model';
import { UserController } from '@library/user-service';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(
        private userController: UserController
    ) { }

    async getUserByID(userID): Promise<UserM> {
        try {
            let userM: UserM = await this.userController.getUserByID(userID).toPromise();
            if (userM) { return userM; } 

        } catch (error) {
            console.error('Error -', error);
        }
        return new User();
    }
}
