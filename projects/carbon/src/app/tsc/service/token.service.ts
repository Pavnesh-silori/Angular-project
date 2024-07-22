import { Injectable } from '@angular/core';
import { TokenController } from '@carbon/controller/token.controller';

import { Response, ResponseM } from '@library/tsc-common';

@Injectable({
    providedIn: 'root'
})

export class TokenService {

    constructor(
        private tokenController: TokenController
    ) { }

    async tokenValidate(token, tokenID): Promise<ResponseM> {
        let tokenRes: ResponseM;

        try {
            tokenRes = await this.tokenController.tokenValidate(token, tokenID).toPromise();

            if (tokenRes) {
                return tokenRes;
            } else {
                return new Response();
            }
        } catch (error) {
            console.error('Error -', error);
            return new Response();
        }
    }
}
