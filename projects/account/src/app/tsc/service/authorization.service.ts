import { Injectable } from '@angular/core';

import { ToastrService } from '@library/toastr-service';

import { NetZeroController } from '@Account/controller/net-zero.controller';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    constructor(
        private toastrService: ToastrService,
        private netZeroController: NetZeroController,
    ) { }

    authenticateToken(): Promise<string> {
        return new Promise(resolve => {
            let isTokenValid: string = 'ERROR';
            this.netZeroController.authenticateToken().subscribe((authenticateTokenRes: any) => {
                isTokenValid = authenticateTokenRes['isTokenValid'];
            },
                error => {
                    console.log('error in authenticateToken -', error);
                    this.toastrService.openToast('Error', 'Error in authenticating token.', 'error');
                    isTokenValid = 'ERROR';
                }).add(() => {
                    resolve(isTokenValid);
                });
        });
    }
}
