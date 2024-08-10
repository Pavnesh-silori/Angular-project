import { Injectable } from '@angular/core';

import { Response, ResponseM } from '@library/tsc-common';

import { TokenController } from '@Account/controller/token.controller';

@Injectable({
    providedIn: 'root'
})

export class TokenService {

    constructor(
        private tokenController: TokenController
    ) { }

    async tokenValidate(token, tokenID, skipSuccessStatus = '0'): Promise<ResponseM> {
        try {
            let tokenRes: ResponseM = await this.tokenController.tokenValidate(token, tokenID, skipSuccessStatus).toPromise();
            if (tokenRes) { return tokenRes; }
        } catch (error) {
            console.error('Error -', error);
        }

        return new Response();
    }
}
