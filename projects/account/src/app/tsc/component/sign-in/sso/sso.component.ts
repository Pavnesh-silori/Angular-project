import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    Router,
} from '@angular/router';
import { combineLatest } from 'rxjs';

import { AuthenticateM } from '@Account/model/authenticate.model';
import { LoginController } from '@Account/controller/login.controller';
import { ToastrService } from '@library/toastr-service';
import { LoginService } from '@Account/service/login.service';

@Component({
    selector: 'app-sso',
    templateUrl: './sso.component.html',
    styles: [
    ]
})
export class SsoComponent implements OnInit {
    ssoAD: string = '';
    code: string = '';
    authenticateM: AuthenticateM;
    imgSrc: string = '';

    stateString: string;
    stateObject: Object;
    redirectUrl: string;
    pageUrl: string;
    orgID: any = null;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private toastrService: ToastrService,
        private loginService: LoginService,
        private loginController: LoginController,
    ) { }

    ngOnInit(): void {
        combineLatest([this.activatedRoute.queryParams, this.activatedRoute.params]).subscribe(([queryParam, pathParam]) => {
            this.ssoAD = pathParam.ssoAD;

            if ((this.ssoAD == 'google' || this.ssoAD == 'azure') && queryParam['code']) {
                if (this.ssoAD == 'google') {
                    this.imgSrc = '/assets/images/google.gif';
                } else if (this.ssoAD == 'azure') {
                    this.imgSrc = '/assets/images/azure.png';
                } else {
                    this.imgSrc = '';
                }

                this.code = queryParam['code'];

                if (queryParam['state']) {
                    this.stateString = queryParam['state'];
                    this.stateObject = JSON.parse(this.stateString);

                    this.redirectUrl = this.stateObject['redirectUrl'];
                    this.pageUrl = this.stateObject['pageUrl'];
                    this.orgID = this.stateObject['orgID'];
                }

                this.loginController.ssoLogin(this.ssoAD, this.code).subscribe((loginRes: AuthenticateM) => {
                    this.authenticateM = loginRes;
                    this.loginService.loginResController(this.authenticateM, this.redirectUrl, this.pageUrl, this.orgID);
                },
                    error => {
                        console.log('error in login() -', error);
                        if (error.error && error.error.errorCode) {
                            this.toastrService.openToast(error.error.title, error.error.message, error.error.result);
                        } else {
                            this.toastrService.openToast('Error', 'Something went wrong! Please try again.', 'error');
                        }
                        this.router.navigate(['/login']);
                    });
            } else {
                this.router.navigate(['/login']);
            }
        });
    }
}
